"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

function SkillDataProvider({ src, width, height, index }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const animationDelay = 0.3;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <Image width={width} src={src} height={height} alt="skill image" />
    </motion.div>
  );
}

export default SkillDataProvider;
