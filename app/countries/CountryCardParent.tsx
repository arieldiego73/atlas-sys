"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import CountryCard from "./CountryCard";
import { Country } from "@/types/Country";

interface CountryCardParentProp {
  country: Country;
  index: number;
}

const CountryCardParent: React.FC<CountryCardParentProp> = ({
  country,
  index,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <CountryCard country={country} />
      </motion.div>
    </div>
  );
};

export default CountryCardParent;
