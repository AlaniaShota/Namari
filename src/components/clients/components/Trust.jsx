import { uiText } from "../../../mockData/uiText";
import "./Trust.scss";

export const Trust = () => {
  return (
    <div className="clients-about-section">
      <h3 className="clients-about-second-title">{uiText.trust.title}</h3>
      <h1 className="clients-about-title">{uiText.trust.secondTitle}</h1>
      <p className="clients-about-description">{uiText.trust.description}</p>
    </div>
  );
};
