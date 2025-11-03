import React from 'react';
import { motion } from 'framer-motion';

const FooterSection = () => {
  // floating star particles animation
  const particleVariants = {
    float: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      opacity: [0.4, 0.8, 0.4],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.08, 
      y: -4,
      boxShadow: "0 20px 40px rgba(251, 191, 36, 0.4)"
    },
    tap: { scale: 0.95 }
  };

  const iconVariants = {
    hover: { 
      rotate: [0, -15, 15, -15, 0],
      scale: 1.1
    }
  };

  return (
    <footer className="min-h-screen py-20 px-4 text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* barely any overlay so galaxy shows clearly */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-transparent" />
      
      {/* floating star particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* little animated stars */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? 'rgba(251, 191, 36, 0.8)' : 'rgba(168, 85, 247, 0.6)'
            }}
            variants={particleVariants}
            animate="float"
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* connecting star lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ pointerEvents: 'none' }}>
          <line x1="10%" y1="20%" x2="25%" y2="35%" stroke="rgba(251, 191, 36, 0.3)" strokeWidth="1" />
          <line x1="70%" y1="15%" x2="85%" y2="30%" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1" />
          <line x1="30%" y1="70%" x2="50%" y2="85%" stroke="rgba(251, 191, 36, 0.3)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        <motion.div
          className="space-y-16 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* feedback section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* glow effect behind text */}
            <div className="relative">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-amber-500/20 rounded-full blur-3xl" />
              <motion.h3
                className="relative text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-300 via-amber-400 via-purple-300 to-amber-300 bg-clip-text text-transparent"
                style={{ fontFamily: "'Bilderberg Italic', serif" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Let us know how the event goes
              </motion.h3>
            </div>
            
            {/* feedback button with glass effect */}
            <motion.div className="relative">
              {/* glow behind button */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/40 via-purple-500/40 to-amber-500/40 rounded-2xl blur-2xl scale-110" />
              
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLScd4m37593bMenIFFWHULBKyZA21i8ahu6-E0-DELcrB9l2pw/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-4 px-10 py-6 bg-gradient-to-r from-slate-900/60 via-slate-800/50 to-slate-900/60 backdrop-blur-xl rounded-2xl font-bold text-white text-xl md:text-2xl shadow-2xl border-2 border-amber-400/40 hover:border-amber-300/60 transition-all overflow-hidden group footer-feedback-button"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {/* hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* shimmer animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '200%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "linear"
                  }}
                />
                
                <motion.svg
                  className="relative z-10 w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </motion.svg>
                <span className="relative z-10">Share Your Feedback</span>
                
                {/* corner accent dots */}
                <div className="absolute top-2 left-2 w-2 h-2 bg-amber-400 rounded-full opacity-60" />
                <div className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full opacity-60" />
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-purple-400 rounded-full opacity-60" />
                <div className="absolute bottom-2 right-2 w-2 h-2 bg-amber-400 rounded-full opacity-60" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* social media links */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-r from-purple-500/15 to-amber-500/15 rounded-full blur-2xl" />
              <motion.h2
                className="relative text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-400 via-purple-400 to-amber-400 bg-clip-text text-transparent"
                style={{ fontFamily: "'Bilderberg Italic', serif" }}
              >
                Stay Connected
              </motion.h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* instagram button */}
              <motion.div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-xl blur-xl scale-110" />
                <motion.a
                  href="https://www.instagram.com/_namaste.truman_?igsh=MWdrczR6b2s5bXYzYg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-slate-900/50 via-purple-900/40 to-slate-900/50 backdrop-blur-lg rounded-xl font-semibold text-white shadow-xl border border-purple-400/30 hover:border-purple-300/50 transition-all group overflow-hidden footer-social-button"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <motion.svg
                    className="relative z-10 w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.79 0-1.418-.628-1.418-1.417 0-.79.628-1.418 1.418-1.418.79 0 1.419.628 1.419 1.418 0 .789-.629 1.417-1.419 1.417z"/>
                  </motion.svg>
                  <span className="relative z-10">Follow Us</span>
                </motion.a>
              </motion.div>

              {/* discord button */}
              <motion.div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-blue-600/30 rounded-xl blur-xl scale-110" />
                <motion.a
                  href="https://discord.gg/nvYnDD2m7n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-slate-900/50 via-indigo-900/40 to-slate-900/50 backdrop-blur-lg rounded-xl font-semibold text-white shadow-xl border border-indigo-400/30 hover:border-indigo-300/50 transition-all group overflow-hidden footer-social-button"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <motion.svg
                    className="relative z-10 w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2518-.1913.3718-.2893a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.097.246.1943.3728.2893a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                  </motion.svg>
                  <span className="relative z-10">Join Discord</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* thank you message */}
        <motion.div
          className="mt-16 pt-12 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* divider line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
          
          <div className="relative">
            {/* glow behind text */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-72 h-72 bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-amber-500/10 rounded-full blur-3xl" />
            
            <motion.p
              className="relative text-2xl md:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-amber-300 via-purple-300 to-amber-300 bg-clip-text text-transparent"
              style={{ fontFamily: "'Bilderberg Italic', serif" }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Thank You for Celebrating With Us!
            </motion.p>
            
            <motion.p
              className="relative text-slate-300 text-base md:text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              We hope you enjoyed the Dashain and Tihar Night 2025
            </motion.p>
          </div>
        </motion.div>

        {/* credits section with profile */}
        <motion.div
          className="mt-20 pt-12 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          {/* divider line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
          
          <div className="relative flex flex-col items-center gap-6">
            {/* glow behind credits */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-56 h-56 bg-gradient-to-r from-amber-500/8 via-purple-500/8 to-amber-500/8 rounded-full blur-2xl" />
            
            {/* made by text */}
            <motion.p
              className="relative text-lg md:text-xl text-slate-400 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              Made by
            </motion.p>

            {/* profile picture and github link */}
            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
              {/* profile picture in classic frame */}
              <motion.div
                className="picture-frame-classic"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="frame-content-classic">
                  <img
                    src="/pranaya.jpg"
                    alt="Pranaya Khadgi Shahi"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>

              {/* name and github link */}
              <motion.div
                className="flex flex-col items-center sm:items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                <h4 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-300 via-purple-300 to-amber-300 bg-clip-text text-transparent">
                  Pranaya Khadgi Shahi
                </h4>
                
                {/* github profile link */}
                <motion.a
                  href="https://github.com/pranayakhadgi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </motion.svg>
                  <span className="text-base md:text-lg font-medium group-hover:text-amber-400 transition-colors">
                    GitHub Profile
                  </span>
                  <motion.svg
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </motion.svg>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
