import "./About.scss";
import { Products } from "./components";

export const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="about-section-header">
        <span className="about-secondary-title">SUCCESS</span>
        <h1 className="about-header-title">
          How We Help You To Sell Your Product
        </h1>
        <p className="about-header-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam!
        </p>
      </div>
      <div className="products">
        <Products />
      </div>
    </div>
  );
};
