import "./Hero.css";
import profile_img from "../../assets/profile.png";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>Hallo, ik ben Sulaiman</span>
      </h1>
      <p>
        Ik ben een front-end developer en designer met een passie voor het
        creëren van moderne, gebruiksvriendelijke webapplicaties met React.
      </p>
      <div className="hero-action">
        <a href="#contact" className="hero-connect">
          Connect with me
        </a>
      </div>
    </div>
  );
};
export default Hero;
