import { FaHtml5 } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaTabletAlt } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./Products.scss";
import { useEffect, useRef } from "react";

export const Products = () => {
  //   const ref = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const productAnimation = useAnimation();

  const aboutContent = [
    {
      id: 1,
      icon: FaHtml5,
      title: "HTML5 & CSS3",
      description:
        "Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico",
    },
    {
      id: 2,
      icon: FaBolt,
      title: "Easy to Use",
      description:
        "Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi",
    },
    {
      id: 3,
      icon: FaTabletAlt,
      title: "Fully Responsive",
      description:
        "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum",
    },
    {
      id: 4,
      icon: FaRocket,
      title: "Parallax Effect",
      description:
        "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum",
    },
  ];

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
      {aboutContent.map((item) => (
        <div key={item.id} className="product-content">
          <item.icon className="product-icon" />
          <h1 className="product-title">{item.title}</h1>
          <p className="product-description">{item.description}</p>
        </div>
      ))}
    </motion.div>
  );
};
