// import { CgProfile } from "react-icons/cg";
import navimage from "../Images/Frame 5.png";

const Header = () => {
  return (
    <div className="md:flex justify-between items-center">
      <div className="navbar bg-white text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold ">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end  ">
          <div className="navbar-end flex md:gap-4 items-center">
            <label className="w-14 h-6 md:w-48 input input-bordered bg-white rounded-xl flex items-center gap-2">
              <input
                type="text"
                className="grow text-xs md:text-xl  "
                placeholder="Search"
              />
            </label>
            <button className="btn btn-ghost btn-circle w-6 h-6 md:w-8 md:h-8">
              <img src={navimage} alt="g" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
