"use client";
import { motion } from "framer-motion";

const SlideAnimation = ({
  children,
  direction = "left",
  delay = 0,
  className = "",
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === "left" ? -100 : 100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideAnimation;
