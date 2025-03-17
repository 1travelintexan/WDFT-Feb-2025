import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const EditPetPage = (props) => {
  const [petName, setPetName] = useState("");
  const [petAge, setPetAge] = useState(1);
  const [petOwner, setPetOwner] = useState("");
  const [picture, setPicture] = useState("");
  const [petType, setPetType] = useState("");
  const [isGood, setIsGood] = useState(false);
  //first I need the id of the pet that I want to update
  const { editPetId } = useParams();
  //take the whole array of pets and find the one with the matching id
  const nav = useNavigate();
  //after we find the pet, then set all of the states to match the data
  useEffect(() => {
    const theFoundPet = props.petsState.find((onePet) => {
      if (onePet.id === editPetId) {
        return true;
      }
    });
    console.log(theFoundPet, theFoundPet.isGood);
    setPetName(theFoundPet.name);
    setPetAge(theFoundPet.age);
    setPetOwner(theFoundPet.owner);
    setPicture(theFoundPet.picture);
    setPetType(theFoundPet.type);
    setIsGood(theFoundPet.isGood);
  }, []);
  //ability to navigate in js

  //functions
  function handleChange(e) {
    // console.log("something was typed", e.target.value);
    setPetName(e.target.value);
  }
  function handleUpdatePet(event) {
    //always with a form, prevent the page from reloading first
    event.preventDefault();

    const updatedPet = {
      id: editPetId,
      name: petName,
      age: petAge,
      owner: petOwner,
      picture,
      type: petType,
      isGood,
    };
    const updatedArrayOfPets = props.petsState.map((onePet) => {
      if (onePet.id === editPetId) {
        return updatedPet;
      } else {
        return onePet;
      }
    });
    console.log("in the update pet function", updatedArrayOfPets);
    props.setPetsState(updatedArrayOfPets);
    //after we successfully set the new array of pets
    nav("/");
  }
  return (
    <form onSubmit={handleUpdatePet}>
      <h3>Edit Pet</h3>
      <label>
        Pet Name:
        <input
          type="text"
          placeholder="Name"
          value={petName}
          onChange={handleChange}
        />
      </label>
      <label>
        Pet age:
        <input
          type="number"
          placeholder="Age"
          min={1}
          value={petAge}
          onChange={(event) => {
            setPetAge(event.target.value);
          }}
        />
      </label>
      <label>
        Pet Owner:
        <input
          type="text"
          placeholder="Owners Name"
          value={petOwner}
          onChange={(event) => {
            setPetOwner(event.target.value);
          }}
        />
      </label>
      <label>
        Pet Picture:
        <input
          type="text"
          placeholder="Pic"
          value={picture}
          onChange={(event) => {
            setPicture(event.target.value);
          }}
        />
      </label>
      <label>
        Pet Type:
        <select
          onChange={(e) => {
            setPetType(e.target.value);
          }}
        >
          <option value="Dog">Doggo</option>
          <option value="Cat">Meow Meow</option>
          <option value="Bird">Tweet Tweet</option>
        </select>
      </label>
      <label>
        Is a good Pet:
        <input
          type="checkbox"
          value={isGood}
          onChange={(event) => {
            setIsGood(event.target.checked);
          }}
        />
      </label>
      <button>Update</button>
    </form>
  );
};
