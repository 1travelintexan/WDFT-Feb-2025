import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
export const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  console.log(
    "here is the name on the profile page from the context",
    currentUser
  );
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/auth/profile/${currentUser._id}`)
      .then((res) => {
        console.log(res.data);
        setCurrentUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentUser._id]);
  return (
    <div className="profile-page">
      <h2>{currentUser.username}'s Profile</h2>
      <section>
        <Link to="/create-a-pizza">
          <button>Create a Pizza</button>
        </Link>
        <Link to="/all-pizzas">
          <button>See all pizzas</button>
        </Link>
      </section>
      <img
        src={currentUser.profileImage}
        alt="profile picture"
        className="profile-img"
      />
    </div>
  );
};
