import yukisPicture from "./assets/yuki.avif";
import ragnarsPicture from "./assets/ragnar.PNG";
import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const pets = [
    {
      id: uuidv4(),
      name: "Feba",
      isGood: true,
      type: "Cat",
      owner: "Sosha",
      age: 9,
      picture:
        "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: uuidv4(),
      name: "Yuki",
      isGood: false,
      type: "Dog",
      owner: "Rojda",
      age: "6m",
      picture: yukisPicture,
    },
    {
      id: uuidv4(),
      name: "Ragnar",
      type: "Dog",
      isGood: true,
      owner: "Joshua",
      age: 4,
      picture: ragnarsPicture,
    },
    {
      id: uuidv4(),
      name: "Kiwi",
      type: "Bird",
      isGood: false,
      owner: "Joshua",
      age: 2,
      picture:
        "https://www.aejames.com/wp-content/uploads/2019/01/Parakeet-Care-1-900x600.jpg",
    },
  ];
  // let counter = 0;
  const [counter, setCounter] = useState(0);
  const [petState, setPetState] = useState(pets);
  //fuctions for the component
  function handleIncrement() {
    if (counter < 5) {
      setCounter((prev) => {
        console.log("counter:", prev + 1);
        return counter + 1;
      });
    }
  }
  function handleDecrement() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  function handleDelete(thePetId) {
    const filteredPets = petState.filter((onePet) => onePet.id !== thePetId);
    console.log("delete one pet with the id of...", thePetId);
    console.log("the new array of pets ", filteredPets);
    setPetState(filteredPets);
  }
  return (
    <>
      <h1>useState Day</h1>
      <h3>Our Counter: {counter}</h3>
      <div>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={handleDecrement}>-</button>
      <h2>Our Pets:</h2>
      {/* this will loop over the array with a .map  */}
      {petState.map((currentPet) => {
        return (
          <div key={currentPet.id} className="pet-card">
            <img src={currentPet.picture} alt="pet picture" />
            <h4>Pet Name: {currentPet.name}</h4>
            <h4>
              Type:{" "}
              {currentPet.type === "Cat"
                ? "😾"
                : currentPet.type === "Dog"
                ? "🐶"
                : "🦚"}
            </h4>
            <h4>Pet Age: {currentPet.age}</h4>
            <p>Pet Id: {currentPet.id} </p>
            <button
              onClick={() => {
                handleDelete(currentPet.id);
              }}
            >
              Delete
            </button>
            <h5>Is Good: {currentPet.isGood && "🏆"}</h5>
          </div>
        );
      })}
    </>
  );
}

export default App;
