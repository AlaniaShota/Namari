import { uiText } from "../../../mockData/uiText";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./Products.scss";
import { useEffect } from "react";

export const Products = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const productAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      productAnimation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: 0.2 },
      });
    }
  }, [inView, productAnimation]);

  const productVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      variants={productVariants}
      initial={{ opacity: 0, y: 70 }}
      animate={productAnimation}
      className="about-section-product"
    >
      {uiText.aboutContent.map((item) => (
        <div key={item.id} className="product-content">
          <item.icon className="product-icon" />
          <h1 className="product-title">{item.title}</h1>
          <p className="product-description">{item.description}</p>
        </div>
      ))}
    </motion.div>
  );
};
