import { uiText } from "../../../../mockData/uiText";
import { IconLinks } from "../iconLinks/IconLinks";
import "./Links.scss";

export const Links = ({ setIsOpen }) => {
  return (
    <div className="links-section">
      {uiText.links.map((item) => (
        <div key={item.id} onClick={() => setIsOpen(false)}>
          <a href={item.link}>
            <span className="links-text">{item.name}</span>
          </a>
        </div>
      ))}
      <IconLinks />
    </div>
  );
};
