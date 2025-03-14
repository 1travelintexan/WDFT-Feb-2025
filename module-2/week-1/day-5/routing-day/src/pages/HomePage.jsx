import { Link } from "react-router-dom";

export const HomePage = (props) => {
  return (
    <div>
      <h2>Pets:</h2>
      {props.petsState.map((onePet) => {
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
