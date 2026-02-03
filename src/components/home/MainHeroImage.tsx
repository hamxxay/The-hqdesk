import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import config from "../config/index.json";

const MainHeroImage = () => {
  const ref = useRef(null);
  
  // Use useScroll instead of deprecated useViewportScroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to rotation degrees
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const { mainHero } = config;

  return (
    <div className="w-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center px-4 py-12 lg:py-0">
      {/* Layered background squares - responsive sizing */}
      <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[420px] lg:w-[480px] lg:h-[480px] flex items-center justify-center aspect-square lg:aspect-auto">
        
        {/* Back square */}
        <motion.div 
          className="absolute w-[calc(100%+0.5rem)] h-[calc(100%+0.5rem)] sm:w-[calc(100%+1rem)] sm:h-[calc(100%+1rem)] lg:w-[488px] lg:h-[488px] bg-[#111828] rounded-lg shadow-lg transform rotate-3" 
                    style={{ rotate }}
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.8 }} 
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Front square */}
        <motion.div 
          className="absolute w-full h-full lg:w-[480px] lg:h-[480px] bg-[#28A7A4] rounded-lg shadow-xl transform -rotate-2" 
                  style={{ rotate }}
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false, amount: 0.8 }} 
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Image on top */}
        <motion.img
          ref={ref}
          src={mainHero.img}
          alt="coding workspace"
          className="w-[88%] h-[88%] sm:w-[85%] sm:h-[85%] lg:w-[416px] lg:h-[416px] object-cover rounded-xl shadow-2xl absolute"
          style={{ rotate }}
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