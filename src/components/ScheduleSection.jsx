import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { schedule } from '../data/schedule';

const ScheduleSection = () => {
  const shouldReduceMotion = useReducedMotion();

  // splitting the schedule in half for the two sections
  const { bandEvents, danceEvents } = useMemo(() => {
    const midpoint = Math.ceil(schedule.length / 2);
    return {
      bandEvents: schedule.slice(0, midpoint),
      danceEvents: schedule.slice(midpoint)
    };
  }, []);

  // animation settings for the schedule cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.6,
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen py-20 px-4 text-white relative" aria-label="Event Schedule">
      {/* subtle overlay */}
      <div className="absolute inset-0 bg-slate-950/40" />
      <div className="relative z-10 w-full max-w-6xl mx-auto space-y-16 md:space-y-20">
        
        {/* main title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-amber-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0.1 : 0.6 }}
        >
          Event Schedule
        </motion.h2>

        {/* live performances section with band album */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12">
          {/* band album picture in frame - top on mobile, right on desktop */}
          <motion.div
            className="flex-shrink-0 w-full md:w-auto order-1 md:order-2"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <div className="picture-frame-album mx-auto">
              <div className="frame-content-album">
                <img
                  src="/placeholder_album1.jpeg"
                  alt="Band Album"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* band performances list */}
          <motion.div
            className="flex-1 w-full order-2 md:order-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h3
              className="text-3xl md:text-4xl font-bold mb-6 text-amber-500"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Live Performances
            </motion.h3>

            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {bandEvents.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-slate-800/60 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <span className="text-amber-400 font-semibold text-base md:text-lg">
                      {item.time}
                    </span>
                    <h4 className="text-lg md:text-xl font-bold text-white">
                      {item.performer}
                    </h4>
                  </div>
                  {item.description && (
                    <p className="text-slate-300 text-sm md:text-base">
                      {item.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* dance performances section with dance group album */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12">
          {/* dance group album picture in frame - top on mobile, left on desktop */}
          <motion.div
            className="flex-shrink-0 w-full md:w-auto order-1"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <div className="picture-frame-album mx-auto">
              <div className="frame-content-album">
                <img
                  src="/placeholder_picture2.jpg"
                  alt="Dance Group Album"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* dance performances list */}
          <motion.div
            className="flex-1 w-full order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h3
              className="text-3xl md:text-4xl font-bold mb-6 text-amber-500"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Dance Performances
            </motion.h3>

            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {danceEvents.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-slate-800/60 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <span className="text-amber-400 font-semibold text-base md:text-lg">
                      {item.time}
                    </span>
                    <h4 className="text-lg md:text-xl font-bold text-white">
                      {item.performer}
                    </h4>
                  </div>
                  {item.description && (
                    <p className="text-slate-300 text-sm md:text-base">
                      {item.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ScheduleSection;
