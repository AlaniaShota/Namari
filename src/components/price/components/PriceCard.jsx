import { Button } from "../../button";
import { uiText } from "../../../mockData/uiText";

import { useEffect } from "react";
import "./PriceCard.scss";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export const PriceCard = () => {
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
  // const ;

  return (
    <motion.div
      className="section-price"
      ref={ref}
      variants={productVariants}
      initial={{ opacity: 0, y: 70 }}
      animate={productAnimation}
    >
      {uiText.priceCard.map((item) => (
        <div key={item.id} className="section-card-price">
          <div className="card-header">
            <h1 className="card-header-secondary-title">{item.name}</h1>
            <span className="card-header-status">{item.status}</span>
          </div>
          <div
            className={`card-main-price ${
              item.price === 29 ? "student-card" : ""
            }`}
          >
            <div className="pricing">
              {item.price}

              <span className="dollor">$</span>
            </div>

            <p
              className={`card-main-description ${
                item.price === 29 ? "student-card" : ""
              }`}
            >
              {item.description}
            </p>
          </div>
          <div className="about">
            <ul className="card-section-content">
              <li className="card-section-about">{item.download}</li>
              <li className="card-section-about">{item.extensions}</li>
              <li className="card-section-about">{item.video}</li>
              <li className="card-section-about">{item.support}</li>
              <li className="card-section-about">{item.free}</li>
            </ul>
            <Button>
              <span>{uiText.productButton}</span>
            </Button>
          </div>
        </div>
      ))}
    </motion.div>
  );
};
