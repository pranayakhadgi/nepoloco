import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const WelcomeSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-8 sm:py-12 md:py-20 text-white relative">
      {/* just a subtle overlay so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-950/30 to-slate-900/40" />
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* mobile shows image on top centered, desktop shows image on left */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-12">
          {/* namaste gif - centered perfectly on mobile */}
          <motion.div
            className="flex-shrink-0 w-full flex justify-center md:justify-start md:w-auto order-1"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="/namasteee.gif"
              alt="Namaste greeting"
              className="max-w-xs w-full h-auto mx-auto md:mx-0"
            />
          </motion.div>

          {/* text content below image on mobile, right side on desktop */}
          <motion.div
            className="flex-1 w-full text-center md:text-left order-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            {/* the devanagari welcome word */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"
              style={{ fontFamily: "'Abhinav Regular', sans-serif" }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              :jfutd
            </motion.h1>

            {/* main welcome header */}
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-200 mb-8"
              style={{ fontFamily: "'Bilderberg Italic', serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Welcome to the Dashain and Tihar Night 2025
            </motion.h2>
          </motion.div>
        </div>

        {/* scroll down indicator at bottom */}
        <motion.div
          className="flex flex-col items-center gap-2 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <p className="text-slate-400 text-sm mb-4">Scroll down to explore</p>
          <motion.div
            animate={shouldReduceMotion ? { y: 0 } : { y: [0, 10, 0] }}
            transition={shouldReduceMotion ? {} : { 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut"
            }}
            className="text-amber-500"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
