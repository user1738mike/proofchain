/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden bg-[#6bd6ff] [perspective:800px]">
      <div
        aria-hidden="true"
        className="absolute h-full w-full"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          maskImage: `linear-gradient(to bottom, 
            transparent, 
            10% black,
            90% black,
            transparent
          )`,
        }}
      >
        <motion.div
          initial={{ rotateX: "0deg" }}
          animate={{
            rotateX: ["0deg", "-35deg", "0deg"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedGrid;
