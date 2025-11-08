import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark overflow-visible"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="flex flex-col items-center justify-center w-full max-w-md px-8 overflow-visible">
        {/* Animated coffee cup (original) */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.svg
            width="80"
            height="100"
            viewBox="0 0 24 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-light overflow-visible"
            style={{ overflow: 'visible' }}
          >
            {/* Coffee cup */}
            <motion.path
              d="M17 10H19C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14H17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <motion.path
              d="M5 10H17V15C17 17.2091 15.2091 19 13 19H9C6.79086 19 5 17.2091 5 15V10Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            
            {/* Steam animations */}
            <motion.path
              d="M8 5C8 4 8.5 3 9 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              animate={{
                opacity: [0.3, 1, 0.3],
                y: [0, -3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.path
              d="M11 5C11 4 11.5 3 12 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              animate={{
                opacity: [0.3, 1, 0.3],
                y: [0, -3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.3,
              }}
            />
            <motion.path
              d="M14 5C14 4 14.5 3 15 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              animate={{
                opacity: [0.3, 1, 0.3],
                y: [0, -3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.6,
              }}
            />
          </motion.svg>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="w-full h-1 bg-light/10 rounded-full overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="h-full bg-light rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
