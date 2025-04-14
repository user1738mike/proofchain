/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const verifications = [
  {
    id: 1,
    name: "Amira",
    action: "verified her AI/ML certification",
    time: "2m ago",
  },
  {
    id: 2,
    name: "Daniel",
    action: "published his Smart Contract project",
    time: "5m ago",
  },
  {
    id: 3,
    name: "Sarah",
    action: "earned a Web3 Development badge",
    time: "12m ago",
  },
  {
    id: 4,
    name: "Michael",
    action: "completed Blockchain Architecture course",
    time: "15m ago",
  },
  {
    id: 5,
    name: "Elena",
    action: "verified her DeFi Trading certification",
    time: "25m ago",
  },
];

const VerificationTicker = () => {
  return (
    <div className="w-full bg-white/10 backdrop-blur-sm py-3 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -2000],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...verifications, ...verifications].map((verification, index) => (
          <motion.div
            key={`${verification.id}-${index}`}
            className="inline-flex items-center mx-8 text-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: index * 0.1,
              }}
            >
              <CheckCircleIcon className="w-5 h-5 mr-2 text-green-500" />
            </motion.div>
            <span className="font-medium">{verification.name}</span>
            <span className="mx-1">{verification.action}</span>
            <span className="text-black/50 text-sm">{verification.time}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default VerificationTicker;
