import axios from "axios";
import { createContext, useEffect, useState } from "react";

//first step, create a context
const RecipeContext = createContext();

//second step is to create a Wrapper
const RecipeWrapper = ({ children }) => {
  const [allRecipes, setAllRecipes] = useState([]);
  //useEffect for the recipe context
  useEffect(() => {
    async function getAllRecipes() {
      try {
        const response = await axios.get("https://dummyjson.com/recipes");
        // console.log("response: ", response);
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
        // console.log(res.data);
        const filteredRecipes = allRecipes.filter(
          (oneRecipe) => oneRecipe.id !== id
        );
        setAllRecipes(filteredRecipes);
      })
      .catch((err) => console.log(err));
  }

  return (
    <RecipeContext.Provider value={{ allRecipes, setAllRecipes, handleDelete }}>
      {children}
    </RecipeContext.Provider>
  );
};
export { RecipeContext, RecipeWrapper };
