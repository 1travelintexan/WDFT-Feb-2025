import { Link } from "react-router-dom";

export const HomePage = ({ petsArray }) => {
  return (
    <div>
      <h2>Pets:</h2>
      {petsArray.map((onePet) => {
        return (
          <div className="pet-card" key={onePet.id}>
            <img src={onePet.picture} alt="pet image" />
            <h4>Name: {onePet.name}</h4>
            <p>{onePet.id}</p>
            <Link to={`/details/${onePet.id}`}>
              <button>Details</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
