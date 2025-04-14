/* eslint-disable no-unused-vars */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import AnimatedGrid from "../components/magicui/AnimatedGrid";

export default function ProfileSetup() {
  const [username, setUsername] = useState("0xJohnDoe");
  const [selectedSkills, setSelectedSkills] = useState([]);

  const skills = [
    "Solidity Development",
    "Smart Contract Auditing",
    "Web3 Marketing",
    "UX/UI Design",
    "Blockchain Consulting",
    "Project Management",
  ];

  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.03 },
    tap: { scale: 0.97 },
  };

  const avatarVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 260, damping: 20, delay: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-[#6bd6ff] relative overflow-hidden">
      {/* Background Elements */}
      <AnimatedGrid />

      {/* Gradient corners */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 py-8">
        {/* Header */}
        <div className="w-full max-w-3xl flex justify-between items-center mb-16">
          <Link to="/" className="flex items-center gap-2 text-black font-bold text-lg">
            <ShieldCheckIcon className="h-6 w-6" />
            ProofChain
          </Link>

          <motion.button
            className="text-blue-600 border border-blue-600 rounded-full py-2 px-6 font-medium"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect Wallet
          </motion.button>
        </div>

        {/* Profile Setup Content */}
        <motion.div
          className="w-full max-w-3xl flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-4xl font-bold mb-4 text-center"
            variants={itemVariants}
          >
            Profile Setup
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 mb-10 text-center"
            variants={itemVariants}
          >
            Create your profile to get started.
          </motion.p>

          {/* Avatar */}
          <motion.div className="mb-10 relative" variants={avatarVariants}>
            <div className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden border-4 border-gray-100">
              <svg
                className="w-full h-full"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="100" cy="80" r="50" fill="#F2C4A2" />
                <path
                  d="M50 180C50 142 70 120 100 120C130 120 150 142 150 180"
                  fill="#3B82F6"
                />
                <path
                  d="M75 75C75 75 85 95 100 95C115 95 125 75 125 75"
                  stroke="#8B5A2B"
                  strokeWidth="6"
                />
                <path
                  d="M70 70C70 70 80 50 100 50C120 50 130 70 130 70"
                  fill="#8B5A2B"
                />
              </svg>
            </div>
          </motion.div>

          {/* Form Container */}
          <motion.div
            className="w-full bg-white rounded-lg border border-gray-200 p-8"
            variants={itemVariants}
          >
            {/* Username */}
            <div className="mb-8">
              <motion.label
                className="block mb-2 text-sm font-medium text-gray-500 uppercase tracking-wide"
                variants={itemVariants}
              >
                USERNAME
              </motion.label>
              <motion.input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                variants={itemVariants}
                whileFocus={{ scale: 1.01 }}
              />
            </div>

            {/* Skills */}
            <motion.div className="mb-8" variants={itemVariants}>
              <motion.h3
                className="text-xl font-bold mb-4"
                variants={itemVariants}
              >
                Select your top skills to mint NFTs
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.button
                    key={skill}
                    className={`p-3 border rounded-lg text-center transition-colors ${
                      selectedSkills.includes(skill)
                        ? "bg-blue-100 border-blue-500 text-blue-800"
                        : "bg-white border-gray-300 text-gray-800"
                    }`}
                    onClick={() => toggleSkill(skill)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {skill}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Confirm Button */}
            <motion.button
              className="w-full py-4 bg-blue-500 text-white rounded-lg font-medium text-lg"
              variants={buttonVariants}
              initial="idle"
              whileHover="hover"
              whileTap="tap"
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Confirm
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
