import React, { useRef } from "react";

import "./Locations.css";

import backArrow from "../assets/back-arrow.png";
import nextArrow from "../assets/next-arrow.png";
import asia from "../assets/asia.jpg";
import africa from "../assets/africa.jpg";
import america from "../assets/america.jpg";
import uk from "../assets/uk.jpg";

const Locations = () => {
    //Link to ul tag to select & access it
    const slider = useRef();

    //Move the elements, giving it the sliding motion. In css, it would be transform: translateX(-%value);
    let translatedX = 0;

    const slideForward = () => {
        if (translatedX > -50){
            translatedX -= 25;
        }
        slider.current.style.transform = `translateX(${translatedX}%)`;
    }

    const slideBackward = () => {
        if (translatedX < 0){
            translatedX += 25;
        }
        slider.current.style.transform = `translateX(${translatedX}%)`;
    }

  return (
    <div className="locations">
      {/* Toggle */}
      <img src={backArrow} alt="Back arrow" className="back-btn" onClick={slideBackward}/>
      <img src={nextArrow} alt="Next arrow" className="next-btn" onClick={slideForward}/>

      {/* Slider */}
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="projects-card slides">
              <img src={asia} alt="asia IMG" className="projects-images" />
              <div className="caption">
                <h2>Places in need in Asia</h2>
              </div>
            </div>
          </li>

          <li>
            <div className="projects-card slides">
              <img src={africa} alt="africa IMG" className="projects-images" />
              <div className="caption">
                <h2>Places in need in Africa</h2>
              </div>
            </div>
          </li>

          <li>
            <div className="projects-card slides">
              <img
                src={america}
                alt="america IMG"
                className="projects-images"
              />
              <div className="caption">
                <h2>Places in need in America</h2>
              </div>
            </div>
          </li>

          <li>
            <div className="projects-card slides">
              <img src={uk} alt="uk IMG" className="projects-images" />
              <div className="caption">
                <h2>Places in need in the UK</h2>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Locations;
