import React from "react";
import { IoMdTime } from "react-icons/io";
import { AiTwotoneFire } from "react-icons/ai";

const SingleCard = ({ recipe, handleCooking }) => {
  const {
    recipe_id,
    recipe_name,
    image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div className="mx-4">
      <div className="card bg-white md:w-96 shadow-xl border-2 border-gray-200 h-[685px] text-black">
        <img className=" rounded-xl p-5 w-full h-52 " src={image} alt="Shoes" />
        <div className="card-body p-5">
          <div className=" border-b-2 border-gray-200 py-3 ">
            <h2 className="card-title">{recipe_name}</h2>
            <p className="text-[#878787]">{short_description}</p>
          </div>
          <div className="border-b-2 border-gray-200 pb-4">
            <h1 className="text-xl font-bold">Ingredient</h1>
            {ingredients.map((ingredient) => (
              <div>
                <li className="text-[#878787] ">{ingredient}</li>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex gap-2">
              <IoMdTime />
              <span className=" text-[#878787]">{preparing_time}</span>
            </div>
            <div className="flex gap-3">
              <AiTwotoneFire />
              <span className=" text-[#878787]">{calories}</span>
            </div>
          </div>
        </div>
        <div className="m-4  ">
          <button
            onClick={() => handleCooking(recipe)}
            className="btn text-black border-none rounded-3xl bg-[#0BE58A] "
          >
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
