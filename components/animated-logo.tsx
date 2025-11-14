"use client";

import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect } from "react";
import Image from "next/image";

export const AnimatedLogo = () => {
  const rotation = useMotionValue(0);
  
  useEffect(() => {
    const controls = animate(rotation, 360, {
      duration: 3,
      repeat: Infinity,
      ease: "linear"
    });
    
    return controls.stop;
  }, [rotation]);

  const background = useTransform(
    rotation,
    (r) => `conic-gradient(from ${r}deg, #00000000 92%, hsl(var(--heroui-secondary-400)))`
  );

  return (
    <motion.div 
      className="relative"
      initial="rest"
      whileHover="hover"
    >
      <motion.div 
        className="absolute inset-0 rounded-[3.25rem] blur-2xl bg-secondary-400"
        variants={{
          rest: { opacity: 0, scale: 1, transition: { duration: 0.3 } },
          hover: { 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }
        }}
      />
      <motion.div 
        className="relative flex justify-center rounded-[3.25rem] p-0.5"
        style={{ background }}
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.05 }
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="relative rounded-[3rem] bg-secondary-50 w-[200px] h-[200px] flex items-center justify-center overflow-hidden">
            <Image
              src="/logo-icon.svg"
              alt="Stiches Logo"
              width={100}
              height={100}
              priority
              className="relative z-10"
            />
            <div className="absolute bg-background/65 w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  );
};
