import { Link } from "react-router-dom";
import logo from "../assets/meandragnar.png";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
export const Navbar = () => {
  const { isLoggedIn, handleLogout } = useContext(AuthContext);
  return (
    <nav>
      <Link to="/profile">
        <img src={logo} alt="me and ragnar logo" className="logo" />
      </Link>
      <h1>Our Frontend</h1>

      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <Link to="/">
            <button>Sign Up</button>
          </Link>
          <Link to="/login">
            <button>login</button>
          </Link>
        </>
      )}
    </nav>
  );
};
