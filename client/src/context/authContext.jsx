import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const loginSender = async (inputs) => {
    const res = await axios.post("http://localhost:8800/api/sender/login", inputs,
    {withCredentials: true});
    setCurrentUser(res.data);
  };
  const loginTraveller = async (inputs) => {
    const res = await axios.post("http://localhost:8800/api/traveller/login", inputs,
    {withCredentials: true});
    setCurrentUser(res.data);
  };

  const logoutSender = async (inputs) => {
    await axios.post("http://localhost:8800/api/sender/logout");
    setCurrentUser(null);
  };
  const logoutTraveller = async (inputs) => {
    await axios.post("http://localhost:8800/api/traveller/logout");
    setCurrentUser(null);
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, loginSender, loginTraveller, logoutSender, logoutTraveller }}>
      {children}
    </AuthContext.Provider>
  );
};