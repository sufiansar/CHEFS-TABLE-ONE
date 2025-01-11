import { useState } from "react";
import { useEffect } from "react";
import SingleCard from "../SingleCard/SingleCard";
const Card = ({ handleCooking }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("Recipe.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 items-center  md:w-2/3">
      {recipes.map((recipe) => (
        <SingleCard
          key={recipe.id}
          recipe={recipe}
          handleCooking={handleCooking}
        ></SingleCard>
      ))}
    </div>
  );
};

export default Card;
