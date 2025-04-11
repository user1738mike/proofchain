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
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  {
    name: "Solutions",
    href: "#",
    flyout: SolutionsFlyout,
  },
  {
    name: "Use Cases",
    href: "#",
    flyout: UseCasesFlyout,
  },
  {
    name: "About Us",
    href: "#",
    flyout: AboutUsFlyout,
  },
  {
    name: "Contact",
    href: "#",
    flyout: ContactFlyout,
  },
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

function FlyoutLink({ item }) {
  const [open, setOpen] = useState(false);
  const showFlyout = item.flyout && open;
  const FlyoutContent = item.flyout;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative"
    >
      <a
        key={item.name}
        href={item.href}
        className="text-sm font-medium text-black hover:text-indigo-400 relative"
      >
        {item.name}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-400 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black rounded-lg shadow-xl z-[1000]"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white z-[999]" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SolutionsFlyout() {
  return (
    <div className="w-64 bg-white p-6 shadow-xl backdrop-blur-md bg-opacity-90">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">Enterprise</h3>
        <a href="#" className="block text-sm hover:text-indigo-500">
          Identity Management
        </a>
        <a href="#" className="block text-sm hover:text-indigo-500">
          Credential Verification
        </a>
        <a href="#" className="block text-sm hover:text-indigo-500">
          Blockchain Integration
        </a>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold">Individual</h3>
        <a href="#" className="block text-sm hover:text-indigo-500">
          Skill NFTs
        </a>
        <a href="#" className="block text-sm hover:text-indigo-500">
          Portfolio Builder
        </a>
      </div>
      <button className="w-full rounded-md bg-indigo-600 px-4 py-2 text-black font-semibold hover:bg-indigo-500 transition-colors">
        View All Solutions
      </button>
    </div>
  );
}

function UseCasesFlyout() {
  return (
    <div className="w-64 bg-white p-6 shadow-xl backdrop-blur-md bg-opacity-90">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">Industries</h3>
        <a href="#" className="block text-sm hover:text-indigo-500">
          Education
        </a>
        <a href="#" className="block text-sm hover:text-indigo-500">
          Healthcare
        </a>
        <a href="#" className="block text-sm hover:text-indigo-500">
          Finance
        </a>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold">Case Studies</h3>
        <a href="#" className="block text-sm hover:text-indigo-500">
          Success Stories
        </a>
        <a href="#" className="block text-sm hover:text-indigo-500">
          Implementation Guides
        </a>
      </div>
      <button className="w-full rounded-md bg-indigo-600 px-4 py-2 text-black font-semibold hover:bg-indigo-500 transition-colors">
        Explore Use Cases
      </button>
    </div>
  );
}

function AboutUsFlyout() {
  return (
    <div className="w-64 bg-white p-6 shadow-xl backdrop-blur-md bg-opacity-90">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">Our Company</h3>
        <a href="#" className="block text-sm hover:text-indigo-500">
          Mission & Vision
        </a>
        <a href="#" className="block text-sm hover:text-indigo-500">
          Leadership Team
        </a>
        <a href="#" className="block text-sm hover:text-indigo-500">
          Technology Stack
        </a>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold">Resources</h3>
        <a href="#" className="block text-sm hover:text-indigo-500">
          Blog
        </a>
        <a href="#" className="block text-sm hover:text-indigo-500">
          News & Press
        </a>
      </div>
      <button className="w-full rounded-md bg-indigo-600 px-4 py-2 text-black font-semibold hover:bg-indigo-500 transition-colors">
        Learn About Us
      </button>
    </div>
  );
}

function ContactFlyout() {
  return (
    <div className="w-64 bg-white p-6 shadow-xl backdrop-blur-md bg-opacity-90">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">Get in Touch</h3>
        <a href="#" className="block text-sm hover:text-indigo-500">
          Support Team
        </a>
        <a href="#" className="block text-sm hover:text-indigo-500">
          Sales Inquiries
        </a>
        <a href="#" className="block text-sm hover:text-indigo-500">
          Partnership Opportunities
        </a>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold">Resources</h3>
        <a href="#" className="block text-sm hover:text-indigo-500">
          Help Center
        </a>
        <a href="#" className="block text-sm hover:text-indigo-500">
          Documentation
        </a>
      </div>
      <button className="w-full rounded-md bg-indigo-600 px-4 py-2 text-black font-semibold hover:bg-indigo-500 transition-colors">
        Contact Us
      </button>
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#6bd6ff] min-h-screen relative overflow-hidden">
      {/* Gradient corners */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>

      <header className="inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md">
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
            {navigation.map((item) => (
              <FlyoutLink key={item.name} item={item} />
            ))}
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
      </header>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden z-[110]"
      >
        <div className="fixed inset-0 bg-black/30 z-[100]" aria-hidden="true" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-[110] w-full max-w-sm shadow-lg p-6 bg-white bg-opacity-90 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="flex items-center gap-2 text-black font-bold text-lg"
            >
              <ShieldCheckIcon className="h-6 w-6" />
              ProofChain
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-black"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 space-y-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <a href={item.href} className="block text-black font-medium">
                  {item.name}
                </a>
                {item.flyout && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-indigo-200 pl-4">
                    {item.name === "Solutions" && (
                      <>
                        <h4 className="text-xs font-semibold text-gray-500 mt-2">
                          Enterprise
                        </h4>
                        <a
                          href="#"
                          className="block text-sm text-black hover:text-indigo-500"
                        >
                          Identity Management
                        </a>
                        <a
                          href="#"
                          className="block text-sm text-black hover:text-indigo-500"
                        >
                          Credential Verification
                        </a>
                        <a
                          href="#"
                          className="block text-sm text-black hover:text-indigo-500"
                        >
                          Blockchain Integration
                        </a>

                        <h4 className="text-xs font-semibold text-gray-500 mt-3">
                          Individual
                        </h4>
                        <a
                          href="#"
                          className="block text-sm text-black hover:text-indigo-500"
                        >
                          Skill NFTs
                        </a>
                        <a
                          href="#"
                          className="block text-sm text-black hover:text-indigo-500"
                        >
                          Portfolio Builder
                        </a>
                      </>
                    )}
                    {item.name === "Use Cases" && (
                      <>
                        <h4 className="text-xs font-semibold text-gray-500 mt-2">
                          Industries
                        </h4>
                        <a
                          href="#"
                          className="block text-sm text-black hover:text-indigo-500"
                        >
                          Education
                        </a>
                        <a
                          href="#"
                          className="block text-sm text-black hover:text-indigo-500"
                        >
                          Healthcare
                        </a>
                        <a
                          href="#"
                          className="block text-sm text-black hover:text-indigo-500"
                        >
                          Finance
                        </a>

                        <h4 className="text-xs font-semibold text-gray-500 mt-3">
                          Case Studies
                        </h4>
                        <a
                          href="#"
                          className="block text-sm text-black hover:text-indigo-500"
                        >
                          Success Stories
                        </a>
                        <a
                          href="#"
                          className="block text-sm text-black hover:text-indigo-500"
                        >
                          Implementation Guides
                        </a>
                      </>
                    )}
                    {item.name === "About Us" && (
                      <>
                        <h4 className="text-xs font-semibold text-gray-500 mt-2">
                          Our Company
                        </h4>
                        <a
                          href="#"
                          className="block text-sm text-black hover:text-indigo-500"
                        >
                          Mission & Vision
                        </a>
                        <a
                          href="#"
                          className="block text-sm text-black hover:text-indigo-500"
                        >
                          Leadership Team
                        </a>
                        <a
                          href="#"
                          className="block text-sm text-black hover:text-indigo-500"
                        >
                          Technology Stack
                        </a>

                        <h4 className="text-xs font-semibold text-gray-500 mt-3">
                          Resources
                        </h4>
                        <a
                          href="#"
                          className="block text-sm text-black hover:text-indigo-500"
                        >
                          Blog
                        </a>
                        <a
                          href="#"
                          className="block text-sm text-black hover:text-indigo-500"
                        >
                          News & Press
                        </a>
                      </>
                    )}
                    {item.name === "Contact" && (
                      <>
                        <h4 className="text-xs font-semibold text-gray-500 mt-2">
                          Get in Touch
                        </h4>
                        <a
                          href="#"
                          className="block text-sm text-black hover:text-indigo-500"
                        >
                          Support Team
                        </a>
                        <a
                          href="#"
                          className="block text-sm text-black hover:text-indigo-500"
                        >
                          Sales Inquiries
                        </a>
                        <a
                          href="#"
                          className="block text-sm text-black hover:text-indigo-500"
                        >
                          Partnership Opportunities
                        </a>

                        <h4 className="text-xs font-semibold text-gray-500 mt-3">
                          Resources
                        </h4>
                        <a
                          href="#"
                          className="block text-sm text-black hover:text-indigo-500"
                        >
                          Help Center
                        </a>
                        <a
                          href="#"
                          className="block text-sm text-black hover:text-indigo-500"
                        >
                          Documentation
                        </a>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
            <a href="#" className="block text-black font-semibold mt-4">
              Login
            </a>
          </div>
        </Dialog.Panel>
      </Dialog>

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
            className="rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-500 transition"
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
                <p className="text-sm text-gray-300 mt-2">
                  {benefit.description}
                </p>
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