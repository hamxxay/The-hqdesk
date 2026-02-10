import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import config from "../config/index.json";

const MainHeroImage = () => {
  const ref = useRef(null);

  // Scroll progress based on image position
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Full rotation (unchanged)
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const { mainHero } = config;

  return (
    <div className="w-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center px-4 py-12 lg:py-0">
      {/* Layered background squares */}
      <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[420px] lg:w-[480px] lg:h-[480px] flex items-center justify-center aspect-square lg:aspect-auto">

        {/* Back square */}
        <motion.div
          className="absolute w-[calc(100%+0.5rem)] h-[calc(100%+0.5rem)]
                     sm:w-[calc(100%+1rem)] sm:h-[calc(100%+1rem)]
                     lg:w-[488px] lg:h-[488px]
                     bg-[#111828] rounded-lg shadow-lg rotate-3"
          style={{ rotate }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Front square */}
        <motion.div
          className="absolute w-full h-full
                     lg:w-[480px] lg:h-[480px]
                     bg-[#28A7A4] rounded-lg shadow-xl -rotate-2"
          style={{ rotate }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Image (SMALLER SIZE – OPTION 1) */}
        <motion.img
          ref={ref}
          src={mainHero.img}
          alt="coding workspace"
          className="
            absolute
            w-[80%] h-[80%]
            sm:w-[78%] sm:h-[78%]
            lg:w-[360px] lg:h-[360px]
            object-cover rounded-xl shadow-2xl
          "
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
