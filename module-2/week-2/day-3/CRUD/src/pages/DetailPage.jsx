import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const DetailPage = () => {
  const [recipe, setRecipe] = useState({});
  const { recipeId } = useParams();
  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${recipeId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("here is the one recipe: ", data);
        setRecipe(data);
      })
      .catch((err) => console.log(err));
  }, [recipeId]);
  return (
    <div className="one-recipe-page">
      <h2>{recipe.name}'s Page!</h2>
      <img src={recipe.image} alt={recipe.name} />
    </div>
  );
};
