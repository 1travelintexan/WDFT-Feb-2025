import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const nav = useNavigate();
  const { verifyToken, storeToken } = useContext(AuthContext);
  async function handleLogin(e) {
    //remember to always stop the form from reloading the page first
    e.preventDefault();
    //construct a new user
    const userToLogin = {
      email,
      password,
    };
    //after you make the new user from the states, we send that user to the server to be created in the DB
    try {
      const loggedInUser = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        userToLogin
      );
      console.log("user logged in with a token, step two :)", loggedInUser);
      //after successful login, store the token in the local storage for safe keeping
      storeToken(loggedInUser.data.authToken);
      //after you set the token in local storage, call the verifyToken function to set the currentUser state
      await verifyToken();
      nav("/profile");
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.errorMessage);
    }
  }
  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            required
          />
        </label>
        <button>Login</button>
      </form>
      {errorMessage ? <p className="error-message">{errorMessage}</p> : null}
      <p>New Here?</p>
      <Link to="/">Sign Up</Link>
    </div>
  );
};
