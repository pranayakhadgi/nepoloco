import React from 'react';
import { motion } from 'framer-motion';

const DashainTiharSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:py-12 md:py-20 text-white relative">
      {/* Semi-transparent overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/80 to-slate-950/85 backdrop-blur-sm" />
      <div className="relative z-10 w-full max-w-6xl mx-auto space-y-16 md:space-y-20">
        
        {/* Dashain Section */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12">
          {/* Durga Image - appears first on mobile (top), right on desktop */}
          <motion.div
            className="flex-shrink-0 w-full md:w-auto order-1 md:order-2"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <div className="picture-frame-round mx-auto">
              <div className="frame-content-round">
                <img
                  src="/durga.gif"
                  alt="Goddess Durga"
                  className="w-full h-full object-cover rounded-full durga-image"
                />
              </div>
            </div>
          </motion.div>

          {/* Dashain Content - appears second on mobile (below image), left on desktop */}
          <motion.div
            className="flex-1 w-full order-2 md:order-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-amber-500"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Dashain
            </motion.h2>

            <motion.p
              className="text-base md:text-lg leading-relaxed text-slate-300 poppins-regular"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <strong className="text-amber-400 poppins-semibold">Dashain</strong> is the longest and most auspicious festival in Nepal, 
              celebrated over 15 days. It honors the victory of goddess Durga over the demon Mahishasura, 
              symbolizing the triumph of good over evil. Families gather, receive blessings from elders, 
              and enjoy traditional foods and festivities.
            </motion.p>
          </motion.div>
        </div>

        {/* Tihar Section */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12">
          {/* Laxmi Image - appears first on mobile (top), left on desktop */}
          <motion.div
            className="flex-shrink-0 w-full md:w-auto order-1"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <div className="picture-frame-round mx-auto">
              <div className="frame-content-round">
                <img
                  src="/laxmi.gif"
                  alt="Goddess Laxmi"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Tihar Content - appears second on mobile (below image), right on desktop */}
          <motion.div
            className="flex-1 w-full order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-amber-500"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Tihar
            </motion.h2>

            <motion.p
              className="text-base md:text-lg leading-relaxed text-slate-300 poppins-regular"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <strong className="text-amber-400 poppins-semibold">Tihar</strong>, also known as Deepawali, is the festival of lights 
              that follows Dashain. It spans five days, each dedicated to different beings: crows, dogs, cows, 
              oxen, and finally, the bond between brothers and sisters. The festival illuminates homes with 
              oil lamps and celebrates the bond of family and community.
            </motion.p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default DashainTiharSection;

