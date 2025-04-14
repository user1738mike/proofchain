/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import {
  KeyIcon,
  LinkIcon,
  GlobeAltIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

const visionCards = [
  {
    icon: KeyIcon,
    title: "Self-sovereign identity",
    description:
      "Own your credentials. Control your data. Your identity, your rules.",
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    icon: LinkIcon,
    title: "Immutable Proofs",
    description:
      "Cryptographically secured verifications that can't be tampered with.",
    color: "from-purple-500/20 to-purple-600/20",
  },
  {
    icon: GlobeAltIcon,
    title: "Global Interoperability",
    description:
      "Your skills and credentials, recognized anywhere in the world.",
    color: "from-indigo-500/20 to-indigo-600/20",
  },
  {
    icon: CodeBracketIcon,
    title: "Open Protocol",
    description: "Built on open standards. Extensible. Community-driven.",
    color: "from-cyan-500/20 to-cyan-600/20",
  },
];

const VisionCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-6">
      {visionCards.map((card, index) => (
        <motion.div
          key={card.title}
          className={`relative overflow-hidden rounded-xl backdrop-blur-sm border border-white/10 p-6 ${card.color} bg-gradient-to-br`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div className="relative z-10">
            <motion.div
              className="inline-block"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <card.icon className="w-8 h-8 text-black mb-4" />
            </motion.div>
            <h3 className="text-xl font-semibold text-black mb-2">
              {card.title}
            </h3>
            <p className="text-black/70">{card.description}</p>
          </div>

          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default VisionCards;
