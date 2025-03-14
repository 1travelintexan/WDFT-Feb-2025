import { useParams } from "react-router-dom";

export const PetDetailPage = ({ petsState }) => {
  //this useParams 'grabs' the parameters from the URL (basically anything after :)
  const { petId } = useParams();
  console.log("here in the details page", petId);
  const theActualPet = petsState.find((onePet) => onePet.id === petId);
  console.log("voila...", theActualPet);

  return (
    <div>
      <h2>{theActualPet.name}'s Page :)</h2>
      <img
        src={theActualPet.picture}
        alt="detail page pic"
        style={{ height: "300px" }}
      />
      <h3>
        Pet Type:{" "}
        {theActualPet.type === "Dog"
          ? "🦮"
          : theActualPet.type === "Cat"
          ? "😼"
          : "🐦"}
      </h3>
      <h3>Is a Good pet: {theActualPet.isGood ? "💗" : "👹"}</h3>
    </div>
  );
};
