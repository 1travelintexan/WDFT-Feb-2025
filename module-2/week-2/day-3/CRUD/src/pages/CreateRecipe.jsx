import axios from "axios";
import { useState } from "react";

export const CreateRecipe = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [difficulty, setDifficulty] = useState("");
  function handleImageChange(event) {
    setImage(event.target.value);
  }
  function handleCreateRecipe(event) {
    //first thing you must always do when submitting a form is stop the page from reloading
    event.preventDefault();
    const theNewRecipe = {
      name: name,
      image: image,
      difficulty,
    };

    //***********axios example ***********/
    // axios
    //   .post("https://dummyjson.com/recipes/add", theNewRecipe)
    //   .then((res) => {
    //     console.log("yippie! We created a recipe :)", res.data);
    //   })
    //   .catch((err) => console.log(err))
    //   .finally(() => {
    //     setName("");
    //     setImage("");
    //     setDifficulty("");
    //   });

    //****************fetch POST example ********/
    fetch("https://dummyjson.com/recipes/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(theNewRecipe),
    })
      .then((res) => res.json())
      .then((parsed) => {
        console.log("We did it with Fetch!!! Nice work: ", parsed);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setName("");
        setImage("");
        setDifficulty("");
      });
  }
  return (
    <div>
      <h2>Create your Recipe</h2>
      <form onSubmit={handleCreateRecipe}>
        <label>
          Recipe Name:
          <input
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
        <label>
          Recipe Image:
          <input type="text" value={image} onChange={handleImageChange} />
        </label>
        <label>
          Recipe Difficulty:
          <input
            type="text"
            value={difficulty}
            onChange={(event) => {
              setDifficulty(event.target.value);
            }}
          />
        </label>
        <button>Create</button>
      </form>
    </div>
  );
};
