import React from "react";

import config from "../config/index.json";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useRef } from "react";
const MainHeroImage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useViewportScroll();

  // Map scroll progress to rotation degrees
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]); // rotate from 0 to 360 degrees

  const { mainHero } = config;
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center">
      {/* Layered background squares */}
      <div className="relative w-120 h-120 flex items-center justify-center">
        {/* Back square */}
        <motion.div className="absolute w-122 h-122 bg-[#111828] rounded-lg shadow-lg transform rotate-3" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 1, ease: "easeOut" }}></motion.div>

        {/* Front square */}
        <motion.div className="absolute w-120 h-120 bg-[#28A7A4] rounded-lg shadow-xl transform -rotate-2" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.8 }} transition={{ duration: 1, ease: "easeOut" }}></motion.div>

        {/* Image on top */}
        <motion.img
          ref={ref}
          src={mainHero.img}
          alt="coding workspace"
          className="w-104 h-104 object-cover rounded-xl shadow-2xl absolute"
          style={{ rotate }} // Keep scroll-linked rotation
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default MainHeroImage;
