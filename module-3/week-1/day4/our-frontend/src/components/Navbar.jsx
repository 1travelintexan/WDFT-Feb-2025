import { useContext } from "react";
import logo from "../assets/ironhack-white.png.png";
import { AuthContext } from "../contexts/AuthContext";
export const Navbar = () => {
  const { handleLogout } = useContext(AuthContext);
  return (
    <nav>
      <img src={logo} alt="iron logo" />
      Our Full Stack App
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};
