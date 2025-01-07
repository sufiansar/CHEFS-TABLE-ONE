import { useState } from "react";
import { useEffect } from "react";
import SingleCard from "../SingleCard/SingleCard";
const Card = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("Recipe.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data.recipes));
  }, []);

  return (
    <div className="my-20">
      <div className="text-center text-black ">
        <h1 className="text-3xl font-bold my-4">Our Recipes</h1>
        <p>
          "Discover a world of flavors with our curated recipes! <br /> From
          traditional favorites to modern creations, <br /> we bring you dishes
          that are easy to make and delicious to taste. Let’s get cooking and
          make every meal special!"
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2  w-2/3">
        {recipes.map((recipe) => (
          <SingleCard key={recipe.id} recipe={recipe}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Card;
