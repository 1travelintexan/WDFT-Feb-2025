import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthContextWrapper({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const nav = useNavigate();
  async function verifyToken() {
    const theTokenFromLocalStorage = localStorage.getItem("authToken");
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/auth/verify`,
        {
          headers: {
            authorization: `Bearer ${theTokenFromLocalStorage}`,
          },
        }
      );
      console.log("verify route", response);
      setIsLoading(false);
      setCurrentUser(response.data.payload);
      setLoggedIn(true);
    } catch (error) {
      console.log("error validating user", error);
      setIsLoading(false);
      setCurrentUser(null);
      setLoggedIn(false);
      nav("/login");
    }
  }
  async function handleLogout() {
    localStorage.removeItem("authToken");
    await verifyToken();
  }
  function storeToken(theToken) {
    localStorage.setItem("authToken", theToken);
  }
  useEffect(() => {
    setTimeout(() => {
      verifyToken();
    }, 3000);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        verifyToken,
        currentUser,
        isLoading,
        loggedIn,
        handleLogout,
        storeToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextWrapper };
