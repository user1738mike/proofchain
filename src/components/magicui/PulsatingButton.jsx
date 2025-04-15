/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const PulsatingButton = ({ children, className, variant = "primary" }) => {
  const getButtonStyles = () => {
    switch (variant) {
      case "secondary":
        return "bg-white text-indigo-600 hover:bg-indigo-50";
      case "outline":
        return "bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50";
      default:
        return "bg-indigo-600 text-white hover:bg-indigo-500";
    }
  };

  return (
    <motion.button
      className={`relative rounded-md px-6 py-3 font-semibold transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] ${getButtonStyles()} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};

export default PulsatingButton;
