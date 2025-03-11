import { PetData } from "./PetData";

export const PetCard = (props) => {
  console.log("here are the props", props);
  const { onePet } = props;
  return (
    <div className="pet-card">
      <img src={onePet.picture} alt="pet image" />
      <PetData testPet={onePet} pizza={props.pizza} />
    </div>
  );
};

// function add(a,b){
//     return a + b
// }
// add(2,3)
