/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const PulsatingButton = ({ children, className }) => {
  return (
    <motion.button
      className={`relative rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-500 transition ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      <motion.span
        className="absolute inset-0 -z-10 rounded-md bg-indigo-600/50"
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.button>
  );
};

export default PulsatingButton;
