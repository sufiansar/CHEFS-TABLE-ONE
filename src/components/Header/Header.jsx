// import { CgProfile } from "react-icons/cg";
import navimage from "../Images/Frame 5.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="navbar ">
        <div className="navbar-start mr-8">
          <a className="btn btn-ghost font-bold md:text-xl  text-black ">
            Recipe<span>Calories</span>
          </a>
        </div>
        <div className="navbar-center   lg:flex text-black mr-2">
          <div className="">
            <ul className="flex space-x-2 md:space-x-4">
              <li className="bg-gray-200 rounded-xl p-2">
                <a href="#">Home</a>
              </li>
              <li className=" bg-gray-200 rounded-xl p-2">
                <a href="#">Recipes</a>
              </li>
              <li className=" bg-gray-200 rounded-xl p-2">
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-end gap-4">
          <label className="w-20 h-8 md:w-48 input input-bordered bg-gray-600 rounded-xl flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
          </label>
          <button className="btn btn-ghost btn-circle w-8 h-8">
            <img src={navimage} alt="g" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
