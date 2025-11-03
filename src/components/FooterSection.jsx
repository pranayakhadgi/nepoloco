import React from 'react';
import { motion } from 'framer-motion';

const FooterSection = () => {
  const buttonVariants = {
    hover: { scale: 1.05, y: -2 },
    tap: { scale: 0.95 }
  };

  const iconVariants = {
    hover: { rotate: [0, -10, 10, -10, 0] }
  };

  return (
    <footer className="min-h-screen py-20 px-4 text-white flex flex-col items-center justify-center relative">
      {/* Semi-transparent overlay for readability */}
      <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-sm" />
      <div className="relative z-10 max-w-2xl mx-auto w-full text-center">
        <motion.div
          className="space-y-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-8">
            Stay Connected
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Instagram Button */}
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-shadow"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                variants={iconVariants}
                whileHover="hover"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.79 0-1.418-.628-1.418-1.417 0-.79.628-1.418 1.418-1.418.79 0 1.419.628 1.419 1.418 0 .789-.629 1.417-1.419 1.417z"/>
              </motion.svg>
              Follow Us
            </motion.a>

            {/* Discord Button */}
            <motion.a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-shadow"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                variants={iconVariants}
                whileHover="hover"
              >
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2518-.1913.3718-.2893a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.097.246.1943.3728.2893a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
              </motion.svg>
              Join Discord
            </motion.a>

            {/* Google Form Button */}
            <motion.a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-amber-600 to-amber-500 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-shadow"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                variants={iconVariants}
                whileHover="hover"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </motion.svg>
              Share Feedback
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 pt-8 border-t border-slate-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-xl md:text-2xl font-semibold text-amber-400 mb-4">
            Thank You for Celebrating With Us!
          </p>
          <p className="text-slate-400 text-sm md:text-base">
            We hope you enjoyed the Dashain and Tihar Night 2025
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
