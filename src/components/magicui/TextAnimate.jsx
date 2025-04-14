/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import AuroraText from "./AuroraText";

const TextAnimate = ({ text, className }) => {
  const words = text.split(" ");

  return (
    <motion.h1
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {words.map((word, index) => (
        <React.Fragment key={index}>
          {word === "Forever" ? <AuroraText>{word}</AuroraText> : word}
          {index < words.length - 1 ? " " : ""}
        </React.Fragment>
      ))}
    </motion.h1>
  );
};

export default TextAnimate;
