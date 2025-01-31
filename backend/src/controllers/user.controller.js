import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import {ApiResponse} from "../utils/ApiResponse.js"


const generateAccessAndRefreshTokens = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})
        return {accessToken, refreshToken}

    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating refresh and access token");
    }
}

const registerUser = asyncHandler(async (req, res) => {
    const { fullName, email, mobileNumber, password, confirmPassword } = req.body;

    // Check if required fields are provided
    if ([fullName, email, password, confirmPassword].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }

    // Check if the user already exists by email or mobileNumber
    const existedUser = await User.findOne({
        $or: [{ mobileNumber }, { email }]
    });

    if (existedUser) {
        throw new ApiError(409, "User with this email or mobile number already exists");
    }

    if (confirmPassword !== password) {
        throw new ApiError(400, "Password and Confirm Password must match");
    }
    const user = await User.create({
        fullName,
        email,
        mobileNumber,
        password, 
    });

    // Find the created user and exclude sensitive fields
    const createdUser = await User.findById(user._id).select("-password -refreshToken");

    // Handle any error if the user is not created
    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user");
    }

    // Return the successful response with status 201
    return res.status(201).json(
        new ApiResponse(201, createdUser, "User registered successfully")
    );
});

const loginUser = asyncHandler( async (req, res) => {
    const {email, mobileNumber, password} = req.body;
    if(!(email || mobileNumber)){
        throw new ApiError(400, "username or email is required");
    }
    const user =  await User.findOne({
        $or: [{ mobileNumber }, { email }]
    })
    if(!user){
        throw new ApiError(404, "User does not exist");
    }
    const isPasswordValid = await user.isPasswordCorrect(password);
    if(!isPasswordValid){
        throw new ApiError(401, "Invalid user credientials");
    }

    const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id)

    const loggedInUser = await User.findById(user._id).
    select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }
    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200,
            {
                user : loggedInUser , accessToken, refreshToken
            },
            "User logged In Successfully"
        )
    )
})


export {
    registerUser,
    loginUser,
}
