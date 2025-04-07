import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SiginupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  async function handleSignUp(e) {
    //remember to always stop the form from reloading the page first
    e.preventDefault();
    //construct a new user
    const newUser = {
      username,
      email,
      password,
    };
    //after you make the new user from the states, we send that user to the server to be created in the DB
    try {
      const userCreatedInDB = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/signup`,
        newUser
      );
      console.log("user added to the DB, step one done :)", userCreatedInDB);
      nav("/login");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h3>Signup with us!</h3>
      <form onSubmit={handleSignUp}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            placeholder="here is your username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            required
          />
        </label>
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
        <button>Sign Up</button>
      </form>
      <p>Already a member? </p>
      <Link to="/login">Login with us</Link>
    </div>
  );
};
