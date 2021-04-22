import React from "react";
import Navbar from "../../Navbar/navbar";
import Landing_page from "../Landing-Page/Landing_page";
import "./Home_screen.css";

const Home_screen = () => {
  return (
    <div className="Main-container">
      <Navbar />
      <Landing_page />
    </div>
  );
};

export default Home_screen;
