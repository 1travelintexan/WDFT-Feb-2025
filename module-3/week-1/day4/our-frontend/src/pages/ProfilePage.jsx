import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navbar } from "../components/Navbar";

export const ProfilePage = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <Navbar />
      <h3>{currentUser && currentUser.username}'s ProfilePage</h3>
    </div>
  );
};
