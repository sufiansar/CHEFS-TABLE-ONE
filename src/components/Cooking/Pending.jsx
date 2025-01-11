import ReadyCook from "../ReadyCook/ReadyCook";

const Pending = ({
  cookingNow,
  readyCook,
  handleReadyCooking,
  totalTime,
  totalCaloris,
}) => {
  return (
    <div className=" ">
      {cookingNow.map((recipe) => {
        const { recipe_name, preparing_time, calories } = recipe;
        // <ReadyCook recipe={recipe}></ReadyCook>;
        return (
          <div className="  bg-gray-300  p-2 mb-2 rounded-3xl flex justify-between  text-black">
            <h1>1</h1>
            <div>
              <h1>{recipe_name}</h1>
            </div>
            <div>
              <h2>{preparing_time}</h2>
            </div>
            <div>
              <h3>{calories}</h3>
            </div>
            <div>
              <button
                onClick={() => handleReadyCooking(recipe)}
                className="btn text-black border-none rounded-3xl bg-[#0BE58A]"
              >
                Pending
              </button>
            </div>
          </div>
        );
      })}
      <ReadyCook
        totalCaloris={totalCaloris}
        totalTime={totalTime}
        readyCook={readyCook}
      ></ReadyCook>
    </div>
  );
};

export default Pending;
