"use client";

import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useState } from 'react';

const icons = [
  { src: '/bun.svg', name: 'Bun', url: 'https://bun.sh/docs', position: 'top-10 left-40', duration: 4, x: [-8, 5, -3, -8], y: [-3, 8, -6, -3], rotation: -14 },
  { src: '/heroui.svg', name: 'HeroUI', url: 'https://www.heroui.com/docs', position: 'top-65 right-16', duration: 4.5, x: [-4, 9, -2, -4], y: [-6, 2, 7, -6], rotation: 7 },
  { src: '/motion.svg', name: 'Motion', url: 'https://motion.dev/docs', position: 'bottom-32 left-30', duration: 5, x: [-6, 3, 8, -6], y: [-4, 9, -2, -4], rotation: 14 },
  { src: '/next.svg', name: 'Next.js', url: 'https://nextjs.org/docs', position: 'top-1/2 left-10', duration: 4.2, x: [-7, 4, -9, -7], y: [-5, 6, 3, -5], rotation:  -7 },
  { src: '/react-icons.svg', name: 'React Icons', url: 'https://react-icons.github.io/react-icons/', position: 'bottom-20 right-32', duration: 4.8, x: [-3, 8, 2, -3], y: [-7, 4, -9, -7], rotation: -14 },
  { src: '/tailwind.svg', name: 'Tailwind CSS', url: 'https://tailwindcss.com/docs', position: 'top-1/4 left-3', duration: 5.3, x: [-5, 7, -8, -5], y: [-8, 3, 6, -8], rotation: 7 },
  { src: '/ts.svg', name: 'TypeScript', url: 'https://www.typescriptlang.org/docs/', position: 'bottom-1/3 right-12', duration: 4.6, x: [-4, 6, 9, -4], y: [-6, 8, -3, -6], rotation: 14 },
  { src: '/google-fonts.svg', name: 'Google Fonts', url: 'https://fonts.google.com/', position: 'top-20 right-40', duration: 4.4, x: [-5, 6, -7, -5], y: [-4, 7, -2, -4], rotation: -7 },
];

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
      {icons.map((icon, index) => (
        <motion.a
          key={index}
          href={icon.url}
          target="_blank"
          rel="noopener noreferrer"
          animate={{
            x: icon.x,
            y: icon.y
          }}
          whileHover={{
            scale: 1.2
          }}
          whileTap={{
            scale: 0.9
          }}
          transition={{
            x: {
              duration: icon.duration,
              repeat: Infinity,
              ease: "easeInOut"
            },
            y: {
              duration: icon.duration,
              repeat: Infinity,
              ease: "easeInOut"
            },
            scale: {
              type: "spring",
              stiffness: 300,
              damping: 20
            }
          }}
          onMouseEnter={() => setHoveredIcon(icon.name)}
          onMouseLeave={() => setHoveredIcon(null)}
          onMouseMove={handleMouseMove}
          className={`absolute ${icon.position} opacity-90 cursor-pointer pointer-events-auto`}
          style={{ rotate: `${icon.rotation}deg` }}
        >
          <Image src={icon.src} alt="" width={70} height={70} />
        </motion.a>
      ))}
      {hoveredIcon && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.15 }}
          style={{
            left: tooltipX,
            top: tooltipY,
          }}
          className="fixed pointer-events-none z-50 px-2.5 py-1 rounded-lg bg-content1 shadow-medium font-mono text-sm text-foreground"
        >
          {hoveredIcon}
        </motion.div>
      )}
    </div>
  );
};
