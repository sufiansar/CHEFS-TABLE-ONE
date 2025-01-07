import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Banner></Banner>
        <Card></Card>
      </div>
    </>
  );
}

export default App;
