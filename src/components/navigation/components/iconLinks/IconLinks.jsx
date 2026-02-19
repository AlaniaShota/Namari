import { uiText } from "../../../../mockData/uiText";

import "./IconLinks.scss";

export const IconLinks = () => {
  return (
    <div className="icons-section">
      {uiText.iconLink.map((item) => (
        <div key={item.id}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <item.png className="icons" />
          </a>
        </div>
      ))}
    </div>
  );
};
