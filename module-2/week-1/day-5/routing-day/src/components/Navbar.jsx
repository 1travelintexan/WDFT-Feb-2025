import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/create-a-pet">Create Pet</NavLink>
    </nav>
  );
};
