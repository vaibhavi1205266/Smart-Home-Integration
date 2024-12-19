import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const ProfilePage = () => {
  const { firstName, email, secondName, userName, setUserName, setFirstName, setSecondName,  setEmail } = useUser();  
  const navigate = useNavigate();

  
  useEffect(() => {
    if (!firstName) {
      navigate("/signin");
    }
  }, [firstName, navigate]);

  const handleLogout = () => {
    setFirstName("");
    setEmail("");
    setUserName("");
    
    localStorage.removeItem("userName");
    localStorage.removeItem("email");
    localStorage.removeItem("firstName"); 
    navigate("/");
  };

  function capitalizeFirstLetter(string) {
    if (!string) return ''; // Handle empty or null strings
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-400">
      <div className="bg-green-400 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">User Profile</h2>
        {firstName ? (
          <>
            <p className="text-gray-700 font-medium mb-4">
              <strong>Name:</strong> {capitalizeFirstLetter(firstName)} {capitalizeFirstLetter(secondName)}
            </p>
            <p className="text-gray-700 font-medium mb-4">
              <strong>UserName:</strong> {capitalizeFirstLetter(userName)}
            </p>
            <p className="text-gray-700 font-medium mb-4">
              <strong>Email:</strong> {capitalizeFirstLetter(email)}
            </p>
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
            >
              Logout
            </button>
          </>
        ) : (
          <p className="text-gray-700">Loading user data...</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
