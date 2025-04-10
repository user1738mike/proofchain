/* eslint-disable no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const navigation = [
  { name: "Features", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Documentation", href: "#" },
  { name: "Support", href: "#" },
];

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const steps = [
  {
    id: 1,
    title: "Create your account",
    description:
      "Get started with ProofChain by creating your secure account with multi-factor authentication.",
    icon: CheckCircleIcon,
  },
  {
    id: 2,
    title: "Connect your data sources",
    description:
      "Link your existing systems and data sources to start tracking and securing your verification chain.",
    icon: ArrowPathIcon,
  },
  {
    id: 3,
    title: "Deploy your first proof",
    description:
      "Create your first immutable verification proof and share it with your stakeholders.",
    icon: ShieldCheckIcon,
  },
];

export default function ProofChainOnboarding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  // Auto-advance through steps for demo purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentStep((prev) => (prev < 3 ? prev + 1 : 1));
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentStep]);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">ProofChain</span>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <ShieldCheckIcon className="h-8 w-auto text-indigo-600" />
              </motion.div>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-gray-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <motion.a
              href="#"
              className="text-sm font-semibold text-gray-900"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Sign in <span aria-hidden="true">&rarr;</span>
            </motion.a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">ProofChain</span>
                <ShieldCheckIcon className="h-8 w-auto text-indigo-600" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Sign in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <motion.div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          animate={{
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-indigo-300 to-indigo-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </motion.div>

        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-32">
          <motion.div
            className="hidden sm:mb-8 sm:flex sm:justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Secure, transparent verification for your critical data.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Learn how <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.h1
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              variants={slideUp}
            >
              Welcome to ProofChain
            </motion.h1>
            <motion.p className="mt-6 text-lg text-gray-600" variants={slideUp}>
              The most trusted verification platform for businesses that need
              immutable proof and transparent data chains.
            </motion.p>
          </motion.div>

          {/* Onboarding Steps */}
          <motion.div
            className="mt-16 sm:mt-24"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <div className="flex justify-center mb-12">
              <div className="flex space-x-2">
                {[1, 2, 3].map((step) => (
                  <motion.button
                    key={step}
                    className={`w-3 h-3 rounded-full ${
                      currentStep === step ? "bg-indigo-600" : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentStep(step)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <motion.div
                  key={step.id}
                  className={`rounded-xl p-6 ${
                    currentStep === step.id
                      ? "bg-indigo-50 ring-1 ring-indigo-200"
                      : "bg-white"
                  }`}
                  animate={
                    currentStep === step.id
                      ? { scale: 1.03, y: -5 }
                      : { scale: 1, y: 0 }
                  }
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <motion.div
                    className="flex justify-center mb-4"
                    animate={currentStep === step.id ? { rotate: 360 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <step.icon
                      className={`h-10 w-10 ${
                        currentStep === step.id
                          ? "text-indigo-600"
                          : "text-gray-400"
                      }`}
                    />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-16 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="#"
              className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Now
            </motion.a>
            <motion.a
              href="#"
              className="text-sm font-semibold text-gray-900"
              whileHover={{ x: 5 }}
            >
              Schedule a demo <span aria-hidden="true">→</span>
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          animate={{
            rotate: [0, -5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-indigo-200 to-indigo-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </motion.div>
      </div>
    </div>
  );
}
