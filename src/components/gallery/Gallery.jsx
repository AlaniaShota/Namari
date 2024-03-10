import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Gallery.scss";

import firstImg from "../../assets/image/Aesthetic Wallpaper.jpg";
import secondImg from "../../assets/image/download (1).jpg";
import thirdImg from "../../assets/image/download (2).jpg";
import forthImg from "../../assets/image/download.jpg";
import fifthImg from "../../assets/image/EXR_MUZ.jpg";
import sixthImg from "../../assets/image/got you.jpg";

export const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const galleryData = [
    sixthImg,
    secondImg,
    fifthImg,
    thirdImg,
    forthImg,
    firstImg,
  ];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.4,
      },
    },
  };

  const itemAnimation = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      animate={inView ? "visible" : "hidden"}
      className="gallery-section"
      id="gallery"
    >
      <div className="gallery-content">
        {galleryData.map((item, index) => (
          <div key={index} className="gallery-img-content">
            <motion.figure variants={itemAnimation}>
              <img src={item} alt="" className="img-content" />
            </motion.figure>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
