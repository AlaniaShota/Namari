// import img from "./assets/image/pngegg.png";

import { useRef } from "react";
import { Navigation } from "./components/navigation/index";
import { useScroll, useTransform, motion } from "framer-motion";
import { Banner } from "./components/banner";
import "./style.scss";
import { About } from "./components/about";
import { Gallery } from "./components/gallery/Gallery";
import { Service } from "./components/service";
import { Testimonials } from "./components/testimonials";
import { Clients } from "./components/clients";
import { Price } from "./components/price";

function App() {
  // const container = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start start", "end start"],
  // });
  // const parallax = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      // style={{ y: parallax }}
      // ref={container}
      className="namari"
      initial={{ opacity: 0 }} // начальное состояние границы (невидима)
      animate={{ opacity: 1 }} // анимация появления границы при загрузке страницы
      transition={{ duration: 1 }} // длительность анимации
    >
      <div>
        <Navigation />
        <Banner />
        <About />
        <Gallery />
        <Service />
        <Testimonials />
        <Clients />
        <Price />
      </div>
    </motion.div>
  );
}

export default App;
