import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import config from "../config/index.json";

const MainHeroImage = () => {
  const ref = useRef<HTMLImageElement | null>(null);

  // Track scroll progress relative to image
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Smooth rotation for background layers only
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const { mainHero } = config;

  return (
    <div className="w-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center px-4 py-12 lg:py-0">
      <div
        className="
          relative
          w-full
          max-w-[300px]
          sm:max-w-[360px]
          md:max-w-[420px]
          lg:w-[500px]
          lg:h-[500px]
          flex
          items-center
          justify-center
        "
      >
        {/* Back rotating square */}
        <motion.div
          className="
            absolute
            w-full
            h-full
            bg-[#111828]
            rounded-2xl
            shadow-xl
          "
          style={{ rotate }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.7 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Front rotating square */}
        <motion.div
          className="
            absolute
            w-[94%]
            h-[94%]
            bg-[#28A7A4]
            rounded-2xl
            shadow-2xl
          "
          style={{ rotate }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.7 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Hero image (NO rotation, NO crop) */}
        <motion.img
          ref={ref}
          src={mainHero.img}
          alt="Coding workspace"
          className="
            relative
            z-10
            w-[72%]
            h-[72%]
            sm:w-[70%]
            sm:h-[70%]
            lg:w-[360px]
            lg:h-[360px]
            object-contain
            rounded-xl
            shadow-2xl
            bg-white
          "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.7 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default MainHeroImage;
