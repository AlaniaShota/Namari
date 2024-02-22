import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import "./Banner.scss";
import bannerImg from "../../assets/image/pngegg7.png";
import { Button } from "../button/index";

export const Banner = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const parallax = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <motion.div
      //   style={{ y: parallax }}
      //   ref={container}
      className="banner-section"
    >
      <div className="banner-content">
        <h1 className="banner-section-text">A FREE AND SIMPLE LANDING PAGE</h1>
        <p className="banner-section-description">
          Namari is a free landing page template you can use for your projects.
          It is free to use for your personal and commercial projects, enjoy!
        </p>
        <Button>
          <span>START CREATE TODAY</span>
        </Button>
      </div>
      <motion.div
        style={{ y: parallax }}
        ref={container}
        className="banner-img"
      >
        <img src={bannerImg} alt="Namari" />
      </motion.div>
    </motion.div>
  );
};
