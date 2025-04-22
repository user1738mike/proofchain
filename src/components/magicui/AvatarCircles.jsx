/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const users = [
  {
    name: "Alex Thompson",
    image: "https://api.dicebear.com/7.x/lorelei/svg?seed=Alex&backgroundColor=b6e3f4",
  },
  {
    name: "Maria Rodriguez",
    image: "https://api.dicebear.com/7.x/lorelei/svg?seed=Maria&backgroundColor=ffdfbf",
  },
  {
    name: "John Chen",
    image: "https://api.dicebear.com/7.x/lorelei/svg?seed=John&backgroundColor=c1f0c1",
  },
  {
    name: "Sarah Kumar",
    image: "https://api.dicebear.com/7.x/lorelei/svg?seed=Sarah&backgroundColor=ffd5dc",
  },
];

const AvatarCircles = () => {
  return (
    <div className="mt-8 flex justify-center items-center space-x-2">
      <div className="flex -space-x-4">
        {users.map((user, i) => (
          <motion.div
            key={user.name}
            className="relative"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <img
              className="h-10 w-10 rounded-full border-2 border-white"
              src={user.image}
              alt={user.name}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-white mix-blend-screen"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1, delay: i * 0.2 }}
            />
          </motion.div>
        ))}
      </div>
      <div className="flex items-center text-sm">
        <span className="text-black font-medium">+2.5k others</span>
      </div>
    </div>
  );
};

export default AvatarCircles;