import ReadyCook from "../ReadyCook/ReadyCook";
import Pending from "./Pending";

const Cooking = ({
  cookingNow,
  handleReadyCooking,
  readyCook,
  totalTime,
  totalCaloris,
}) => {
  return (
    <div className="border-2 border-gray-200 rounded-2xl md:w-1/3 mx-4 mt-10  ">
      <div className="p-5">
        <h1 className="my-6 text-black text-2xl font-bold text-center border-b-2 border-gray-200 pb-3">
          Want to cook: 01
        </h1>
        <div className="">
          <div className="flex justify-between my-4 text-black">
            <div>
              <h1>Name</h1>
            </div>
            <div>
              <h2>Time</h2>
            </div>
            <div>
              <h3>Calories</h3>
            </div>
          </div>
        </div>
      </div>

      <Pending
        cookingNow={cookingNow}
        readyCook={readyCook}
        handleReadyCooking={handleReadyCooking}
        totalTime={totalTime}
        totalCaloris={totalCaloris}
      ></Pending>
    </div>
  );
};

export default Cooking;
