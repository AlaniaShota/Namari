import { Links } from "./components/index";
import logo from "../../assets/image/logo.png";
import close from "../../assets/image/pngwing.com (3).png";
import open from "../../assets/image/pngwing.com (4).png";
import "./Navigation.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width: 1440px)");
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("menu-open");
  };

  return (
    <nav className="navbar">
      <div className="namari-logo">
        <img src={logo} alt="Namari" />
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        <div className="hamburger">
          {isOpen ? (
            <img src={close} alt="Close" />
          ) : (
            <img src={open} alt="Open" />
          )}
        </div>
      </button>
      {isMobile && isOpen && (
        <motion.div
          className={`menu ${isOpen ? "menu-open" : ""}`}
          variants={isMobile ? variants : undefined}
          initial={isMobile ? "closed" : false}
          animate={isMobile ? (isOpen ? "open" : "closed") : false}
          onClick={isMobile ? toggleMenu : undefined}
        >
          <Links />
        </motion.div>
      )}
      {!isMobile && (
        <div className="menu">
          <Links isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      )}
    </nav>
  );
};
