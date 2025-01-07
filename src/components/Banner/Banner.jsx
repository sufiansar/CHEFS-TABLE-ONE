import frameImage from "../Images/Rectangle 1.png";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center h-[600px] w-full"
      style={{ backgroundImage: `url(${frameImage})` }}
    >
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-xl md:text-4xl text-white font-bold">
            Discover an exceptional cooking <br />
            class tailored for you!
          </h1>
          <p className="text-white mt-4">
            "Discover a cooking class tailored just for you! Learn new
            techniques, explore global cuisines,
            <br /> and create delicious dishes with expert guidance. Perfect for
            beginners and food enthusiasts alike, <br />
            this hands-on experience will elevate your culinary skills. Unleash
            your inner chef today!"
          </p>
          <div className="">
            <button className="btn bg-[#0BE58A] text-black px-4 py-2 rounded-3xl mt-4 mr-4">
              Explore Now
            </button>
            <button className="btn  text-white px-4 py-2 rounded-3xl mt-4">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
