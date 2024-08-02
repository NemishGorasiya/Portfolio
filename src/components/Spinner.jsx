import React from "react";
import { motion } from "framer-motion";

const Spinner = ({ position, isMovable = false }) => {
  const { x, y } = position || {};
  return (
    <motion.div
      style={isMovable ? { x, y } : {}}
      className={`fixed h-[170px] w-[170px] ${
        isMovable ? "" : "bottom-0 right-0"
      }`}
      animate={{ rotate: 360 }}
      transition={{ ease: "linear", duration: 6, repeat: Infinity }}
    >
      <svg
        width="170"
        height="170"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 100,50 A 50,50 0 1,1 100,150 A 50,50 0 1,1 100,50"
          fill="none"
          id="circle"
          //   stroke="black"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          // fontSize="14"
        >
          <textPath href="#circle">
            Nemish Nemish Nemish Nemish Nemish Nemish Nemish Nemish Nemish
            Nemish
          </textPath>
        </text>
      </svg>
    </motion.div>
  );
};

export default Spinner;
