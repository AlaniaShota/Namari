// import img from "./assets/image/pngegg.png";

import { useRef } from "react";
import { Navigation } from "./components/navigation/index";
import { useScroll, useTransform, motion } from "framer-motion";
import { Banner } from "./components/banner";
import "./style.scss";
import { About } from "./components/about";
import { Gallery } from "./components/gallery/Gallery";

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
    >
      <div>
        <Navigation />
        <Banner />
        <About />
        <Gallery />
      </div>
    </motion.div>
  );
}

export default App;
