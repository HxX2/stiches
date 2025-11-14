"use client";

import { motion } from "motion/react";
import { HiBolt, HiHeart, HiRocketLaunch } from 'react-icons/hi2';

const iconAnimation = {
  whileHover: { scale: 1.2 },
  whileTap: { scale: 0.9 },
  transition: { type: "spring" as const, stiffness: 400, damping: 17 }
};

const icons = [
  { Icon: HiRocketLaunch, className: "text-primary" },
  { Icon: HiBolt, className: "text-warning" },
  { Icon: HiHeart, className: "text-danger" }
];

export const AnimatedIcons = () => {
  return (
    <div className="flex gap-6 items-center text-2xl">
      {icons.map(({ Icon, className }, index) => (
        <motion.div
          key={index}
          {...iconAnimation}
        >
          <Icon className={`${className} cursor-pointer`} />
        </motion.div>
      ))}
    </div>
  );
};
