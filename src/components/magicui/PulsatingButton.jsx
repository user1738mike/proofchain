/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const PulsatingButton = ({
  children,
  className,
  onClick,
  ...props
}) => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0.25, scale: 1 }}
        animate={{ opacity: [0.25, 0, 0], scale: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-lg bg-indigo-600"
      />
      <motion.div
        initial={{ opacity: 0.25, scale: 1 }}
        animate={{ opacity: [0.25, 0, 0], scale: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        className="absolute inset-0 rounded-lg bg-indigo-600"
      />
      <button
        className={cn(
          "relative rounded-lg bg-indigo-600 px-6 py-3 text-white transition-colors hover:bg-indigo-500",
          className
        )}
        onClick={onClick}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </button>
    </div>
  );
};

export default PulsatingButton;