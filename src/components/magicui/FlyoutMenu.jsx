/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a
        href={href}
        className="relative text-black hover:text-indigo-600 transition-colors"
      >
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-0.5 origin-left scale-x-0 rounded-full bg-indigo-600 transition-transform duration-300 ease-out"
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
            className="absolute left-1/2 top-12 bg-white shadow-xl rounded-xl border border-black/5"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <div className="relative rounded-xl bg-white">
              <FlyoutContent />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const SolutionsContent = () => {
  return (
    <div className="w-64 p-6">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold text-black">For Individuals</h3>
        <a
          href="#"
          className="block text-sm text-black/70 hover:text-indigo-600 hover:bg-black/5 rounded-lg px-2 py-1 transition-colors"
        >
          Skill Verification
        </a>
        <a
          href="#"
          className="block text-sm text-black/70 hover:text-indigo-600 hover:bg-black/5 rounded-lg px-2 py-1 transition-colors"
        >
          Portfolio Builder
        </a>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold text-black">For Companies</h3>
        <a
          href="#"
          className="block text-sm text-black/70 hover:text-indigo-600 hover:bg-black/5 rounded-lg px-2 py-1 transition-colors"
        >
          Talent Verification
        </a>
        <a
          href="#"
          className="block text-sm text-black/70 hover:text-indigo-600 hover:bg-black/5 rounded-lg px-2 py-1 transition-colors"
        >
          Enterprise Solutions
        </a>
        <a
          href="#"
          className="block text-sm text-black/70 hover:text-indigo-600 hover:bg-black/5 rounded-lg px-2 py-1 transition-colors"
        >
          API Access
        </a>
      </div>
      <button className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-indigo-500">
        Contact sales
      </button>
    </div>
  );
};

export const UseCasesContent = () => {
  return (
    <div className="w-64 p-6">
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold text-black">Popular Use Cases</h3>
        <a
          href="#"
          className="block text-sm text-black/70 hover:text-indigo-600 hover:bg-black/5 rounded-lg px-2 py-1 transition-colors"
        >
          Developer Credentials
        </a>
        <a
          href="#"
          className="block text-sm text-black/70 hover:text-indigo-600 hover:bg-black/5 rounded-lg px-2 py-1 transition-colors"
        >
          Academic Verification
        </a>
        <a
          href="#"
          className="block text-sm text-black/70 hover:text-indigo-600 hover:bg-black/5 rounded-lg px-2 py-1 transition-colors"
        >
          Professional Certifications
        </a>
        <a
          href="#"
          className="block text-sm text-black/70 hover:text-indigo-600 hover:bg-black/5 rounded-lg px-2 py-1 transition-colors"
        >
          Background Checks
        </a>
      </div>
      <button className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-indigo-500">
        View all use cases
      </button>
    </div>
  );
};
