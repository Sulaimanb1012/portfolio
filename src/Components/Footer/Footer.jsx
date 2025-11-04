import "./Footer.css";
import logo from "../../assets/logo1.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>
            Front-end developer & designer met passie voor gebruiksvriendelijke
            apps.
          </p>
        </div>
        <div className="footer-top-right">
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Sulaiman. Alle rechten voorbehouden.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
