/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const AuroraText = ({ children, className }) => {
  return (
    <span className={cn("relative", className)}>
      <motion.span
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 blur-2xl bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 opacity-50 mix-blend-overlay"
        aria-hidden="true"
      />
      <span className="relative bg-gradient-to-br from-indigo-600 to-pink-800 bg-clip-text text-transparent">
        {children}
      </span>
    </span>
  );
};

export default AuroraText;
