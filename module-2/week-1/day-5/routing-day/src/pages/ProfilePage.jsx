import { Link } from "react-router-dom";

export const ProfilePage = () => {
  return (
    <div>
      ProfilePage
      <Link to="/about">
        <button>Go to the about page</button>
      </Link>
    </div>
  );
};
