/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-black hover:text-indigo-600 transition-colors">
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
            className="absolute left-1/2 top-12 bg-white/90 backdrop-blur-sm shadow-xl rounded-xl border border-black/5"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white/90" />
            <FlyoutContent />
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
        <h3 className="font-semibold">For Individuals</h3>
        <a href="#" className="block text-sm text-black/70 hover:text-indigo-600">
          Skill Verification
        </a>
        <a href="#" className="block text-sm text-black/70 hover:text-indigo-600">
          Portfolio Builder
        </a>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold">For Companies</h3>
        <a href="#" className="block text-sm text-black/70 hover:text-indigo-600">
          Talent Verification
        </a>
        <a href="#" className="block text-sm text-black/70 hover:text-indigo-600">
          Enterprise Solutions
        </a>
        <a href="#" className="block text-sm text-black/70 hover:text-indigo-600">
          API Access
        </a>
      </div>
      <button className="w-full rounded-lg border-2 border-indigo-600 px-4 py-2 font-semibold transition-colors hover:bg-indigo-600 hover:text-white">
        Contact sales
      </button>
    </div>
  );
};

export const UseCasesContent = () => {
  return (
    <div className="w-64 p-6">
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold">Popular Use Cases</h3>
        <a href="#" className="block text-sm text-black/70 hover:text-indigo-600">
          Developer Credentials
        </a>
        <a href="#" className="block text-sm text-black/70 hover:text-indigo-600">
          Academic Verification
        </a>
        <a href="#" className="block text-sm text-black/70 hover:text-indigo-600">
          Professional Certifications
        </a>
        <a href="#" className="block text-sm text-black/70 hover:text-indigo-600">
          Background Checks
        </a>
      </div>
      <button className="w-full rounded-lg border-2 border-indigo-600 px-4 py-2 font-semibold transition-colors hover:bg-indigo-600 hover:text-white">
        View all use cases
      </button>
    </div>
  );
};