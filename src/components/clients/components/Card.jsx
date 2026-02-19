import { uiText } from "../../../mockData/uiText";

import { useState } from "react";
import "./Card.scss";

export const Card = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="card-section">
      {uiText.cards.map((item) => (
        <div
          key={item.id}
          className="card-content"
          onMouseEnter={() => setHoveredCard(item.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <item.icon className="card-icon" />
          {hoveredCard === item.id && <div className="title">{item.title}</div>}
        </div>
      ))}
    </div>
  );
};
