import "./Footer.scss";
import { IconLinks } from "../navigation/components";
import { uiText } from "../../mockData/uiText";

export const Footer = () => {
  return (
    <div className="footer-section">
      <span className="footer-span-text">{uiText.footerText}</span>
      <IconLinks />
    </div>
  );
};
