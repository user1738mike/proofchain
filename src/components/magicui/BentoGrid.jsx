/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const BentoGrid = ({ items, className }) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3",
        className
      )}
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          className={cn(
            "group relative overflow-hidden rounded-xl border border-black/10 bg-white/[0.6] p-6 shadow-lg backdrop-blur-md dark:border-white/10",
            i === 0 ? "md:col-span-2" : "",
            item.className
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <span
                className={cn(
                  "inline-block rounded-lg p-3",
                  item.iconClassName
                )}
              >
                {item.icon}
              </span>
              {item.label && (
                <span className="inline-flex rounded-full border border-black/10 bg-white/40 px-3 py-1 text-xs dark:border-white/10">
                  {item.label}
                </span>
              )}
            </div>
            <div>
              <h3 className="mt-4 font-bold text-xl text-black dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-black/60 dark:text-white/60">
                {item.description}
              </p>
            </div>
          </div>

          {/* Gradient overlay */}
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
            initial={{ backgroundPosition: "0% 100%" }}
            whileHover={{ backgroundPosition: "100% 0%" }}
            style={{
              background:
                "linear-gradient(45deg, transparent 50%, rgba(68, 51, 238, 0.1) 100%)",
              backgroundSize: "200% 200%",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default BentoGrid;
