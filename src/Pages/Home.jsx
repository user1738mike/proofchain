/* eslint-disable no-unused-vars */
// App.jsx
import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShieldCheckIcon,
  CheckBadgeIcon,
  ServerIcon,
  BoltIcon,
  ChartBarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import "tailwindcss";
import Border from "../components/magicui/border-beam";
import AnimatedGrid from "../components/magicui/AnimatedGrid";
import VerificationTicker from "../components/VerificationTicker";
import VisionCards from "../components/VisionCards";
import TextAnimate from "../components/magicui/TextAnimate";
import PulsatingButton from "../components/magicui/PulsatingButton";
import BentoGrid from "../components/magicui/BentoGrid";
import {
  FlyoutLink,
  SolutionsContent,
  UseCasesContent,
} from "../components/magicui/FlyoutMenu";

const navigation = [
  { name: "Solutions", href: "#", content: SolutionsContent },
  { name: "Use Cases", href: "#", content: UseCasesContent },
  { name: "About Us", href: "#" },
  { name: "Contact", href: "#" },
];

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

const bentoItems = [
  {
    title: "Military-Grade Security",
    description:
      "Zero-knowledge proofs and end-to-end encryption secure your credentials with the highest level of protection.",
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    iconClassName: "bg-blue-500/10 text-blue-500",
    className: "md:col-span-2",
  },
  {
    title: "Dynamic NFTs",
    description:
      "Your skills evolve, and so do your NFTs. Watch them level up as you grow.",
    icon: <CheckBadgeIcon className="h-6 w-6" />,
    iconClassName: "bg-purple-500/10 text-purple-500",
    label: "New",
  },
  {
    title: "Lightning Fast",
    description:
      "Instant verification and minting. No more waiting for paperwork.",
    icon: <BoltIcon className="h-6 w-6" />,
    iconClassName: "bg-yellow-500/10 text-yellow-500",
  },
  {
    title: "Enterprise Ready",
    description:
      "Built to scale with enterprise-grade infrastructure and support.",
    icon: <ServerIcon className="h-6 w-6" />,
    iconClassName: "bg-indigo-500/10 text-indigo-500",
  },
  {
    title: "Real-Time Analytics",
    description:
      "Track your skill growth and reputation with detailed analytics.",
    icon: <ChartBarIcon className="h-6 w-6" />,
    iconClassName: "bg-green-500/10 text-green-500",
  },
  {
    title: "Time-Stamped",
    description:
      "Every achievement is permanently recorded with blockchain timestamps.",
    icon: <ClockIcon className="h-6 w-6" />,
    iconClassName: "bg-rose-500/10 text-rose-500",
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#6bd6ff] min-h-screen relative overflow-hidden">
      {/* Animated Grid Background */}
      <AnimatedGrid />

      {/* Gradient corners */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>

      <header className="inset-x-0 top-0 z-40 bg-grey-400 backdrop-blur-md absolute w-full">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a
              href="#"
              className="flex items-center gap-2 text-black font-bold text-lg"
            >
              <ShieldCheckIcon className="h-6 w-6" />
              ProofChain
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center p-2 text-black"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) =>
              item.content ? (
                <FlyoutLink
                  key={item.name}
                  href={item.href}
                  FlyoutContent={item.content}
                >
                  {item.name}
                </FlyoutLink>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-black hover:text-indigo-400 relative"
                >
                  {item.name}
                </a>
              )
            )}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold text-black hover:underline"
            >
              Login →
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[90]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <Dialog.Panel
            as={motion.div}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-[110] w-full max-w-sm bg-white/80 backdrop-blur-xl shadow-2xl"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-black/5">
                <a
                  href="#"
                  className="flex items-center gap-2 text-black font-bold text-lg"
                >
                  <ShieldCheckIcon className="h-6 w-6" />
                  ProofChain
                </a>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-black rounded-full hover:bg-black/5 transition-colors"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              <motion.div
                className="flex-1 overflow-y-auto py-6 px-6"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 },
                  },
                }}
              >
                <nav className="space-y-2">
                  {navigation.map((item) => (
                    <motion.div
                      key={item.name}
                      variants={{
                        open: { x: 0, opacity: 1 },
                        closed: { x: 50, opacity: 0 },
                      }}
                    >
                      <a
                        href={item.href}
                        className="block w-full p-4 text-black font-medium rounded-xl hover:bg-black/5 transition-colors relative overflow-hidden group"
                      >
                        <span className="relative z-10">{item.name}</span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                          initial={false}
                          whileHover={{ scale: 1.05 }}
                        />
                      </a>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>

              <div className="p-6 border-t border-black/5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <a
                    href="#"
                    className="flex items-center justify-center w-full p-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-colors"
                  >
                    Login →
                  </a>
                </motion.div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      {/* Hero Section */}
      <main className="min-h-screen flex flex-col justify-center relative z-20">
        <div className="px-6 text-center max-w-4xl mx-auto">
          <TextAnimate
            text="Your Skills, On-Chain. Forever Yours."
            className="text-5xl font-bold tracking-tight text-black sm:text-6xl md:text-7xl"
          />
          <motion.p
            className="mt-6 text-xl text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            ProofChain empowers you to own and verify your skills, work history,
            and reputation with cryptographic certainty.
          </motion.p>

          <motion.div
            className="mt-8 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <PulsatingButton>Claim Your SkillNFT</PulsatingButton>
            <a
              href="#"
              className="rounded-md px-6 py-3 text-black font-semibold hover:bg-black/5 transition"
            >
              Explore the Protocol
            </a>
          </motion.div>
        </div>
      </main>

      {/* Vision Cards Section */}
      <section className="py-16 relative z-20">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            The Future of Professional Identity
          </motion.h2>
        </div>
        <VisionCards />
      </section>

      {/* Social Proof Ticker */}
      <div className="relative z-20">
        <VerificationTicker />
      </div>

      {/* Features Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-black mb-4">
              Why ProofChain?
            </h2>
            <p className="text-xl text-black/60">
              The next generation of professional identity verification
            </p>
          </motion.div>
          <BentoGrid items={bentoItems} />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-10 text-center text-sm text-black relative z-10">
        © {new Date().getFullYear()} ProofChain Inc. All rights reserved.
      </footer>
    </div>
  );
}
