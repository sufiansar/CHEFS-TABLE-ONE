const Total = ({ totalTime, totalCaloris }) => {
  return (
    <div>
      {/* {readyCook.map((rdy) => {
        const { preparing_time, calories } = rdy; */}
      {/* // const [time, setTime] = useState(0); // const [cal, setCal] =
      useState(0); // setTime(time + parseInt(preparing_time)); // setCal(cal +
      parseInt(calories)); return ( */}
      <div className="flex justify-between mt-2 text-black ">
        <div></div>
        <div className="mt-2">
          <h1>{totalTime}</h1>
        </div>
        <div className="mt-2">
          <h2>{totalCaloris}</h2>
        </div>
      </div>
      {/* ); */}
      {/* })} */}
    </div>
  );
};

export default Total;
