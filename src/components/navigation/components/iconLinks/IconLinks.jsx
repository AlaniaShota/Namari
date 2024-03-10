import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";

import "./IconLinks.scss";

export const IconLinks = () => {
  const iconLink = [
    {
      id: 1,
      png: FaFacebookF,
      link: "https://www.facebook.com/",
    },
    {
      id: 2,
      png: FaGoogle,
      link: "https://www.google.com/",
    },
    {
      id: 3,
      png: FaTwitter,
      link: "https://www.twitter.com/",
    },
    {
      id: 4,
      png: FaInstagram,
      link: "https://www.instagram.com/",
    },
    {
      id: 5,
      png: FaFigma,
      link: "https://www.figma.com/",
    },
  ];

  return (
    <div className="icons-section">
      {iconLink.map((item) => (
        <div key={item.id}>
          <a href={item.link} target="_blink">
            <item.png className="icons" />
          </a>
        </div>
      ))}
    </div>
  );
};
