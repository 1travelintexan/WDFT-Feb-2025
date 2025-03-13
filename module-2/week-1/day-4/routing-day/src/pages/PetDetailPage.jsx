import { useParams } from "react-router-dom";

export const PetDetailPage = ({ petsArray }) => {
  //this useParams 'grabs' the parameters from the URL (basically anything after :)
  const { petId } = useParams();
  console.log("here in the details page", petId);
  const theActualPet = petsArray.find((onePet) => onePet.id === petId);
  console.log("voila...", theActualPet);

  return (
    <div>
      <h2>{theActualPet.name}'s Page :)</h2>
      <img
        src={theActualPet.picture}
        alt="detail page pic"
        style={{ height: "300px" }}
      />
    </div>
  );
};
