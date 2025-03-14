import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
export const CreatePetPage = (props) => {
  const [petName, setPetName] = useState("");
  const [petAge, setPetAge] = useState(1);
  const [petOwner, setPetOwner] = useState("");
  const [picture, setPicture] = useState("");
  const [petType, setPetType] = useState("");
  const [isGood, setIsGood] = useState(false);
  //ability to navigate in js
  const nav = useNavigate();

  //functions
  function handleChange(e) {
    // console.log("something was typed", e.target.value);
    setPetName(e.target.value);
  }
  function handleCreatePet(event) {
    //always with a form, prevent the page from reloading first
    event.preventDefault();

    const newPetToAdd = {
      id: uuidv4(),
      name: petName,
      age: petAge,
      owner: petOwner,
      picture,
      type: petType,
      isGood,
    };
    console.log("in the submit function", newPetToAdd);
    props.setPetsState([newPetToAdd, ...props.petsState]);
    nav("/");
  }
  return (
    <form onSubmit={handleCreatePet}>
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
      <button>Create</button>
    </form>
  );
};
