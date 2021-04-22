import React from "react";

import "./Landing_page.scss";
import TextComponent from "../../Text_component";
export default function Landing_page() {
  return (
    <div className="Main-Landing-container">
      <div className="Main--section--one">
        <div className="Section--container">
          <div className="Section--container--one">
            <div className="Section--block--one">
              <span className="--block--one--text--title">
                {TextComponent.Title}
              </span>
              <span className="--block--one--text--subtitle ">
                {TextComponent.Sub_Title}
              </span>
            </div>

            <div className="--Section--block--two">
              <div className="block--inside--one">
                <input className="--block--two--input" />
                <div className="--block--two--search">
                  <img src="assets/Vectorsearch.png" className="searchImage" />
                </div>
              </div>
              <div className="block--inside--two">
                <div className="block--inside--two--box">
                  <img src="assets/robo.png" />
                  <span className="TextStyle">No more hassle of searching 100 websites</span>
                </div>
                <div className="block--inside--two--box">
                  <img src="assets/robo.png" />
                  <span className="TextStyle">No more hassle of searching 100 websites</span>
                </div>
              </div>
            </div>
          </div>
          <div className="Section--container--two">
            <img
              src="assets/HomeImage.png"
              className="Section--container--two--image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
