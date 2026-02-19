import { Products } from "./components";

import { uiText } from "../../mockData/uiText";

import "./About.scss";

export const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="about-section-header">
        <span className="about-secondary-title">{uiText.about.title}</span>
        <h1 className="about-header-title">{uiText.about.secondTitle}</h1>
        <p className="about-header-description">{uiText.about.description}</p>
      </div>
      <div className="products">
        <Products />
      </div>
    </div>
  );
};
