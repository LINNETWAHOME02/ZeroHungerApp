import React from "react";
import './About.css'

import foodStampIMG2 from "../assets/food-stamps2.jpg";
import volunteerIMG2 from "../assets/volunteerImg1.jpg";

const About = () => {
  return (
    <div className="about">
      {/* Left column */}
      <div className="about-left">
        <img src={foodStampIMG2} alt="img" className="about-img1"/>
        <img src={volunteerIMG2} alt="img" className="about-img2"/>
      </div>

      {/* Right column */}
      <div className="about-right">
        <h3>About ZeroHunger</h3>
        <h2>Nurturing and providing for future generations</h2>

        <p>
          Providing food stamps is a critical strategy in the fight against
          hunger, particularly in the context of Sustainable Development Goal 2
          (SDG 2), which aims to end all forms of malnutrition and ensure access
          to safe, nutritious food for all. Food stamp programs, like those in
          the U.S., help vulnerable populations by offering financial assistance
          to purchase essential food items. This support not only alleviates
          immediate hunger but also promotes food security, empowering families
          to make healthier dietary choices. By integrating technology, such as
          location APIs, these programs can effectively reach underserved areas,
          ensuring that assistance is timely and accessible to those who need it
          most.
        </p>

        <p>
          Volunteers play a vital role in addressing food insecurity,
          particularly in remote or underserved communities. By leveraging
          location APIs, our app can connect volunteers—such as doctors,
          farmers, and food distributors—with areas in need of assistance. These
          individuals can provide essential services, from health screenings to
          agricultural support, and help distribute food supplies effectively.
          This collaborative approach not only enhances community resilience but
          also fosters a sense of solidarity among volunteers and beneficiaries,
          ultimately contributing to the overarching goal of achieving Zero
          Hunger by 2030.
        </p>
      </div>
    </div>
  );
};

export default About;
