import { Button } from "../button/index";
import bannerImg from "../../assets/image/pngegg7.png";
import { uiText } from "../../mockData/uiText";

import { useRef } from "react";

import "./Banner.scss";

import { useScroll, useTransform, motion } from "framer-motion";

export const Banner = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const parallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <motion.div className="banner-section" id="home">
      <div className="banner-content">
        <h1 className="banner-section-text">{uiText.banner.title}</h1>
        <p className="banner-section-description">
          {uiText.banner.description}
        </p>
        <Button>
          <span>{uiText.banner.span}</span>
        </Button>
      </div>
      <motion.div
        style={{ y: parallax }}
        ref={container}
        className="banner-img"
      >
        <img src={bannerImg} alt={uiText.banner.alt} />
      </motion.div>
    </motion.div>
  );
};
