import React, { useEffect, useRef } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

const ScrollLine = ({ text, direction, variation = 0 }) => {
  const firstText = useRef(null);
  const textWidth = useRef(0);
  const xPosition = useMotionValue(0);
  const dir = direction === "left" ? -1 : 1;
  let xPercent = 0;
  useAnimationFrame(() => {
    if (dir === -1 && Math.abs(xPercent) > textWidth.current) {
      xPosition.set(0);
      xPercent = 0;
      return;
    }
    if (dir === 1 && xPercent > 0) {
      xPosition.set(textWidth.current * -1);
      xPercent = textWidth.current * -1;
      return;
    }
    xPosition.set(xPercent);
    xPercent += 5 * dir;
  });
  useEffect(() => {
    textWidth.current = firstText.current.getBoundingClientRect().width;
    if (dir === 1) {
      xPercent = textWidth.current * -1;
    }
    xPercent += variation * 5 * dir;
  }, []);
  return (
    <div>
      <motion.div className="flex">
        <motion.p
          className="text-9xl font-black inline-block whitespace-nowrap pr-8"
          ref={firstText}
          style={{ x: xPosition }}
        >
          {text}
        </motion.p>
        <motion.p
          className="text-9xl font-black inline-block whitespace-nowrap pr-8"
          style={{ x: xPosition }}
        >
          {text}
        </motion.p>
        <motion.p
          className="text-9xl font-black inline-block whitespace-nowrap pr-8"
          style={{ x: xPosition }}
        >
          {text}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ScrollLine;
