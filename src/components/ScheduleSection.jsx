import React from 'react';
import { motion } from 'framer-motion';
import { schedule } from '../data/schedule';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const timelineLineVariants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      delay: 0.3
    }
  }
};

const ScheduleSection = () => {
  return (
    <section className="min-h-screen py-20 px-4 text-white relative">
      {/* Semi-transparent overlay for readability */}
      <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-amber-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Event Schedule
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-amber-600 to-transparent"
            variants={timelineLineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          <motion.div
            className="relative space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                className="relative pl-20"
              >
                {/* Timeline node */}
                <div className="absolute left-6 top-2 w-4 h-4 bg-amber-500 rounded-full border-4 border-slate-950 shadow-lg shadow-amber-500/50" />

                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-amber-500/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <span className="text-amber-400 font-semibold text-lg md:text-xl">
                      {item.time}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {item.performer}
                    </h3>
                  </div>
                  {item.description && (
                    <p className="text-slate-300 text-sm md:text-base">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
