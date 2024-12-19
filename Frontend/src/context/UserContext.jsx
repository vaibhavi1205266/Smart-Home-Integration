import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    const storedEmail = localStorage.getItem("email");

    if (storedUserName && storedEmail) {
      setUserName(storedUserName);
      setEmail(storedEmail);
    }
  }, []);

  useEffect(() => {
    if (userName && email) {
      localStorage.setItem("userName", userName);
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("userName");
      localStorage.removeItem("email");
    }
  }, [userName, email]);

  useEffect(() => {
    const storedFirstName = localStorage.getItem("firstName");
    if (storedFirstName) {
      setFirstName(storedFirstName);
    }
  }, []);

  useEffect(() => {
    const storedMobileNumber = localStorage.getItem("mobileNumber");
    if (storedMobileNumber) {
      setMobileNumber(storedMobileNumber);
    }
  }, []);

  useEffect(() => {
    if (firstName) {
      localStorage.setItem("firstName", firstName);
    } else {
      localStorage.removeItem("firstName");
    }
  }, [firstName]);

  useEffect(() => {
    if (mobileNumber) {
      localStorage.setItem("mobileNumber", mobileNumber);
    } else {
      localStorage.removeItem("mobileNumber");
    }
  }, [mobileNumber]);

  return (
    <UserContext.Provider
      value={{
        firstName,
        setFirstName,
        mobileNumber,
        setMobileNumber,
        userName,
        setUserName,
        email,
        setEmail,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
