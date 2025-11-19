import { motion } from "motion/react";

export function LoadingIndicator() {
  return (
    <div className="flex gap-1 items-center">
      <motion.div
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: '#2AA85A' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: 0
        }}
      />
      <motion.div
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: '#2AA85A' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: 0.2
        }}
      />
      <motion.div
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: '#2AA85A' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: 0.4
        }}
      />
    </div>
  );
}
