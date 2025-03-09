"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const ZoopInWhenVisible = ({ children }: { children: React.JSX.Element }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }} // Start small, rotated, and invisible
      animate={
        inView
          ? { opacity: 1, scale: 1 } // Teleport in: scale up, rotate back, and fade in
          : { opacity: 0, scale: 0.8 } // Reset to initial state
      }
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        // type: "spring", // Add a spring effect for a more dynamic teleport
        // stiffness: 100, // Adjust stiffness for the spring
        // damping: 10, // Adjust damping for the spring
      }}
      style={{ transformOrigin: "center" }}
    >
      {children}
    </motion.div>
  );
};

export default ZoopInWhenVisible;
