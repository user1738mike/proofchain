/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const GeometricMesh = () => {
  // Generate random points for the mesh
  const points = Array.from({ length: 50 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
  }));

  // Generate random connections between points
  const connections = Array.from({ length: 30 }, () => ({
    start: Math.floor(Math.random() * points.length),
    end: Math.floor(Math.random() * points.length),
  }));

  return (
    <div className="absolute inset-0 z-0 opacity-20 hidden lg:block">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="overflow-visible"
      >
        {/* Animated connections */}
        {connections.map((connection, index) => (
          <motion.line
            key={`connection-${index}`}
            x1={points[connection.start].x}
            y1={points[connection.start].y}
            x2={points[connection.end].x}
            y2={points[connection.end].y}
            stroke="currentColor"
            strokeWidth="0.1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 0.3,
              transition: {
                duration: 2,
                delay: index * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
        ))}

        {/* Animated points */}
        {points.map((point, index) => (
          <motion.circle
            key={`point-${index}`}
            cx={point.x}
            cy={point.y}
            r={point.size}
            fill="currentColor"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
              transition: {
                duration: 3,
                delay: index * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default GeometricMesh;
