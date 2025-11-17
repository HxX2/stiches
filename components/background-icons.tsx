"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useState } from "react";

import { backgroundIcons } from "@/consts/background-icons";

export const BackgroundIcons = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 300 };
  const tooltipX = useSpring(cursorX, springConfig);
  const tooltipY = useSpring(cursorY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    cursorX.set(e.clientX + 15);
    cursorY.set(e.clientY + 15);
  };

  return (
    <div className="absolute inset-0">
      {backgroundIcons.map((icon, index) => (
        <motion.a
          key={index}
          animate={{
            x: icon.x,
            y: icon.y,
          }}
          className={`absolute ${icon.position} opacity-90 cursor-pointer pointer-events-auto`}
          href={icon.url}
          rel="noopener noreferrer"
          style={{ rotate: `${icon.rotation}deg` }}
          target="_blank"
          transition={{
            x: {
              duration: icon.duration,
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: {
              duration: icon.duration,
              repeat: Infinity,
              ease: "easeInOut",
            },
            scale: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onMouseEnter={() => setHoveredIcon(icon.name)}
          onMouseLeave={() => setHoveredIcon(null)}
          onMouseMove={handleMouseMove}
        >
          <Image alt="" height={70} src={icon.src} width={70} />
        </motion.a>
      ))}
      {hoveredIcon && (
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="fixed pointer-events-none z-50 px-2.5 py-1 rounded-lg bg-content1 shadow-medium font-mono text-sm text-foreground"
          exit={{ opacity: 0, scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.95 }}
          style={{
            left: tooltipX,
            top: tooltipY,
          }}
          transition={{ duration: 0.15 }}
        >
          {hoveredIcon}
        </motion.div>
      )}
    </div>
  );
};
