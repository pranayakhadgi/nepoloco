import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '../data/menu';

const MenuSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % menuItems.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
  };

  const currentItem = menuItems[currentIndex];

  return (
    <section className="min-h-screen py-20 px-4 text-white relative overflow-hidden">
      {/* very light overlay so galaxy background shows */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-transparent" />
      
      {/* little floating star particles to match the galaxy theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400/60 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-amber-300/80 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-300/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-amber-500/70 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* section title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-amber-500 to-purple-400 bg-clip-text text-transparent"
            style={{ fontFamily: "'Bilderberg Italic', serif" }}
          >
            Food & Drinks
          </motion.h2>
          <motion.div
            className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* food slideshow */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -300, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative"
            >
              {/* food card with glass effect */}
              <div className="relative rounded-2xl overflow-hidden menu-card-galaxy">
                {/* glowing border around the card */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-amber-500/20 rounded-2xl blur-xl" />
                
                {/* main card with blur effect */}
                <div className="relative backdrop-blur-md bg-gradient-to-b from-slate-900/40 via-slate-800/30 to-slate-900/40 border border-amber-500/30 rounded-2xl overflow-hidden">
                  {/* food image */}
                  <div className="relative h-80 md:h-96 overflow-hidden">
                    <img
                      src={currentItem.image}
                      alt={currentItem.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    {/* gradient overlays to blend with galaxy */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-purple-500/10" />
                    
                    {/* food name badge */}
                    <motion.div
                      className="absolute bottom-20 left-6 right-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="inline-block bg-gradient-to-r from-amber-500/90 via-amber-400/90 to-purple-500/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-amber-400/30">
                        <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                          {currentItem.name}
                        </h3>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* description text */}
                  <div className="p-8 md:p-10 relative">
                    {/* decorative divider line */}
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
                    
                    <motion.p
                      className="text-slate-100 text-lg md:text-xl leading-relaxed poppins-regular mt-6 relative z-10 break-words"
                      style={{ fontFamily: "'Poppins', sans-serif", wordBreak: 'break-word', overflowWrap: 'break-word' }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {currentItem.description}
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* previous and next buttons */}
          <button
            onClick={prevItem}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-500/90 to-amber-600/90 hover:from-amber-400 hover:to-amber-500 text-white rounded-full p-3 md:p-4 shadow-lg shadow-amber-500/50 z-20 transition-all backdrop-blur-sm border border-amber-400/30 hover:scale-110"
            aria-label="Previous food"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextItem}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-500/90 to-amber-600/90 hover:from-amber-400 hover:to-amber-500 text-white rounded-full p-3 md:p-4 shadow-lg shadow-amber-500/50 z-20 transition-all backdrop-blur-sm border border-amber-400/30 hover:scale-110"
            aria-label="Next food"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* dot indicators for current slide */}
          <div className="flex justify-center gap-3 mt-8">
            {menuItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-amber-500 to-purple-500 w-10 shadow-lg shadow-amber-500/50' 
                    : 'bg-slate-600/60 w-2 hover:bg-slate-500/60'
                }`}
                aria-label={`Go to item ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
