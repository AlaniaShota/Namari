import { Navigation } from "./components/navigation/index";
import { Banner } from "./components/banner";
import "./style.scss";
import { About } from "./components/about";
import { Gallery } from "./components/gallery/Gallery";
import { Service } from "./components/service";
import { Testimonials } from "./components/testimonials";
import { Clients } from "./components/clients";
import { Price } from "./components/price";
import { Footer } from "./components/footer";

import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      className="namari"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
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
        <Footer />
      </div>
    </motion.div>
  );
}

export default App;
