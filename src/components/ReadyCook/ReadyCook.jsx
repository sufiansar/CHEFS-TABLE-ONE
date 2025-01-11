import Total from "./Total";

const ReadyCook = ({ readyCook, totalTime, totalCaloris }) => {
  // console.log(readyCook);
  return (
    <div className="     mt-10 text-black  ">
      <h1 className="text-2xl font-bold text-center border-b-2 border-gray-200 pb-3">
        Currently cooking: {readyCook.length}
      </h1>
      <div className="flex justify-between mt-5 text-black">
        <div className="">
          <h1>Name</h1>
        </div>
        <div>
          <h2>Time</h2>
        </div>
        <div>
          <h3>calories</h3>
        </div>
      </div>
      {readyCook.map((rdy) => {
        const { recipe_name, preparing_time, calories } = rdy;
        return (
          <div className=" bg-gray-300  p-2 mb-2 rounded-3xl flex justify-between  text-black mt-6 ">
            <div>
              <h1>{recipe_name}</h1>
            </div>
            <div>
              <h2>{preparing_time}</h2>
            </div>
            <div>
              <h3>{calories}</h3>
            </div>
          </div>
        );
      })}
      <div className="flex justify-between mt-6 text-black border-t-2 border-gray-200 pb-3">
        <div className="mt-4"></div>
        <div className="mt-4">
          Total Time
          <h2></h2>
        </div>
        <div className="mt-4">Total Calories</div>
      </div>
      <Total totalCaloris={totalCaloris} totalTime={totalTime}></Total>
    </div>
  );
};

export default ReadyCook;
