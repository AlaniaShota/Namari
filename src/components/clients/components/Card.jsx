import { useState } from "react";
import "./Card.scss";
import { RiTreeLine } from "react-icons/ri";
import { FaFingerprint } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { SlMustache } from "react-icons/sl";
import { GiGoat } from "react-icons/gi";
import { GiInjustice } from "react-icons/gi";
import { IoBasketballOutline } from "react-icons/io5";
import { PiSnowflakeThin } from "react-icons/pi";
import { CiApple } from "react-icons/ci";

export const Card = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardsItem = [
    { id: 1, title: "TREE", icon: RiTreeLine },
    { id: 2, title: "FINGERPRINT", icon: FaFingerprint },
    { id: 3, title: "THE MAN", icon: IoPersonOutline },
    { id: 4, title: "MUSTACHE", icon: SlMustache },
    { id: 5, title: "GOAT", icon: GiGoat },
    { id: 6, title: "JUSTICE", icon: GiInjustice },
    { id: 7, title: "BALL", icon: IoBasketballOutline },
    { id: 8, title: "COLD", icon: PiSnowflakeThin },
    { id: 9, title: "APPLE", icon: CiApple },
  ];

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="card-section">
      {cardsItem.map((item) => (
        <div
          key={item.id}
          className="card-content"
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          <item.icon className="card-icon" />
          {hoveredCard === item.id && <div className="title">{item.title}</div>}
        </div>
      ))}
    </div>
  );
};
