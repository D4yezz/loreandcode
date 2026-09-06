"use client";
import { motion, Variants } from "framer-motion";

const variants: Variants = {
  initial: { y: "-100%" },
  enter: {
    y: "0%",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: "100%",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-x-hidden bg-white">
      <motion.div
        className="fixed inset-0 z-1000 bg-main pointer-events-none"
        variants={variants}
        initial="initial"
        animate="exit"
        exit="enter"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.4 } }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        {children}
      </motion.div>
    </div>
  );
}
