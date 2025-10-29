import React from "react";
import "./About.css";
import theme from "../../assets/theme.png";
import profile_img from "../../assets/profile.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>Over Mij</h1>
        <img src={theme} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Ik ben Sulaiman, 18 jaar oud en gepassioneerd over technologie en
              design. Ik hou ervan om een wandeling te maken of te rennen om
              mijn hoofd leeg te maken en nieuwe ideeën op te doen.
            </p>
            <p>
              Daarnaast ben ik dol op gamen en besteed ik veel tijd aan het
              verbeteren van mijn skills. Als front-end developer in opleiding
              vind ik het leuk om websites te maken en meer te leren over design
              en gebruiksvriendelijkheid.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React</p>
              <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Figma</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>jaar ervaring</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>Projecten voltooid</p>
          <hr />
          <div className="about-achievement">
            <h1>2+</h1>
            <p>mobiele apps ontworpen in Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
