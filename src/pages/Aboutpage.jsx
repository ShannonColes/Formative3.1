import React from "react";
import IMG from "../img/IMG_9297.jpg";

const Aboutpage = () => {
  return (
    <>
      <div id="solid-element">
        <h3>About</h3>
      </div>
      <div className="about-me">
        <div className="me-image-container">
          <img src={IMG} alt="IMG" />
        </div>
        <div className="about-me-text">
          <h3>Shannon Coles</h3>
          <p>
            As a Web and Graphic Designer with 2 years of experience, I am
            dedicated to creating visually stunning and user-friendly websites,
            logos, and other design projects. I possess expertise in Adobe
            Creative Suite, HTML/CSS/JS, and responsive design. I excel at
            collaborating with clients and team members to ensure projects are
            completed on time and to the highest quality standards. My passion
            for design is evident in my commitment to staying up-to-date with
            the latest trends and technologies. I take pride in my work and am
            always looking for ways to improve my skills and knowledge.
          </p>
          <button className="contact-about-btn">Contact</button>
        </div>
      </div>
    </>
  );
};

export default Aboutpage;
