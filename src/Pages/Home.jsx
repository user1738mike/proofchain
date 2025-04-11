/* eslint-disable no-unused-vars */
// App.jsx
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShieldCheckIcon,
  CheckBadgeIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import "tailwindcss";
import Border from "../components/magicui/border-beam";


const benefits = [
  {
    title: "Tamper-Proof Records",
    description:
      "Once verified, your credentials are permanently secured on-chain.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Skill-Based NFTs",
    description:
      "Own your skills with dynamic NFTs tied to real-world achievements.",
    icon: CheckBadgeIcon,
  },
  {
    title: "Trusted Infrastructure",
    description:
      "Built with enterprise-grade encryption and decentralized verification.",
    icon: ServerIcon,
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#6bd6ff] min-h-screen relative overflow-hidden">
      {/* Gradient corners */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>

      {/* Using the imported Nav component instead of custom navigation */}
      <header className="inset-x-0 top-0 z-40 bg-grey-400 backdrop-blur-md">
        <Nav
          logo={
            <a
              href="#"
              className="flex items-center gap-2 text-black font-bold text-lg"
            >
              <ShieldCheckIcon className="h-6 w-6" />
              ProofChain
            </a>
          }
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </header>

      {/* Hero Section */}
      <main className="pt-32 pb-24 px-6 text-center max-w-4xl mx-auto relative z-20">
        <motion.h1
          className="text-5xl font-bold tracking-tight text-black sm:text-6xl md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Reclaim Your Reputation on the Blockchain
        </motion.h1>
        <motion.p
          className="mt-6 text-xl text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          ProofChain helps professionals and teams create verifiable skill NFTs
          backed by on-chain data.
        </motion.p>
        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-6 py-3 text-black font-semibold hover:bg-indigo-500 transition"
          >
            Launch App
          </a>
          <a href="#" className="text-black font-semibold hover:underline">
            Learn More →
          </a>
        </motion.div>
      </main>

      {/* Features Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-2xl font-bold text-black mb-12">
            Why ProofChain?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="rounded-lg bg-gray-800 bg-opacity-60 p-6 shadow-lg text-center backdrop-blur-sm border border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <benefit.icon className="mx-auto h-10 w-10 text-indigo-400 mb-4" />
                <h3 className="text-lg font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="text-sm text-black mt-2">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-10 text-center text-sm text-black relative z-10">
        © {new Date().getFullYear()} ProofChain Inc. All rights reserved.
      </footer>
    </div>
  );
}