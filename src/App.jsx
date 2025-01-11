import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import Cooking from "./components/Cooking/Cooking";
import Content from "./components/Card/Content";

function App() {
  const [cookingNow, setcookingNow] = useState([]);
  const handleCooking = (recipe) => {
    if (cookingNow.length >= 1) {
      alert("add only unique recipe");
      return;
    }
    const newCooking = [...cookingNow, recipe];
    setcookingNow(newCooking);

    //
    // if(isStay){
    //   cookingNow.
    // }

    // cookingNow.find((cook) => {
    //   if (cook.recipe_id === recipe.recipe_id) {
    //     alert("Already Added");
    //     setcookingNow(cookingNow);
    //   }
    // });
  };
  const [totalCaloris, setTotalCaloris] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [readyCook, setReadyCook] = useState([]);
  const handleReadyCooking = (ready) => {
    const newReadyCook = [...readyCook, ready];
    setReadyCook(newReadyCook);
    setcookingNow([]);

    const newTime = totalTime + parseInt(ready.preparing_time);
    setTotalTime(newTime);

    const newCaloris = totalCaloris + parseInt(ready.calories);
    setTotalCaloris(newCaloris);

    // remove from cookingNow
  };
  return (
    <>
      <div>
        <Header></Header>
        <Banner></Banner>
        <Content></Content>
        <div className=" md:flex ">
          <Card handleCooking={handleCooking}></Card>
          <Cooking
            handleReadyCooking={handleReadyCooking}
            cookingNow={cookingNow}
            readyCook={readyCook}
            totalTime={totalTime}
            totalCaloris={totalCaloris}
          ></Cooking>
        </div>
      </div>
    </>
  );
}

export default App;
