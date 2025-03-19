import axios, { all } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  useEffect(() => {
    async function getAllRecipes() {
      try {
        const response = await axios.get("https://dummyjson.com/recipes");
        console.log("response: ", response);
        setAllRecipes(response.data.recipes);
      } catch (error) {
        console.log(error);
      }
    }
    getAllRecipes();
  }, []);

  //functions
  function handleDelete(id) {
    console.log("delete clicked with the id of...", id);
    axios
      .delete(`https://dummyjson.com/recipes/${id}`)
      .then((res) => {
        console.log(res.data);
        const filteredRecipes = allRecipes.filter(
          (oneRecipe) => oneRecipe.id !== id
        );
        setAllRecipes(filteredRecipes);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <h1>Recipes:</h1>
      {allRecipes.map((oneRecipe) => {
        return (
          <div key={oneRecipe.id} className="recipe-card">
            <Link to={`/details/${oneRecipe.id}`}>
              <img src={oneRecipe.image} alt={oneRecipe.name} />
            </Link>
            <h3>{oneRecipe.name}</h3>
            <button
              onClick={() => {
                handleDelete(oneRecipe.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
