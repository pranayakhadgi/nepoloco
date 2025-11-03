import React from 'react';
import { motion } from 'framer-motion';

const MenuItem = ({ item, index }) => {
  return (
    <motion.div
      className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-2">
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            {item.name}
          </h3>
          <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-semibold rounded-full border border-amber-500/30">
            {item.category}
          </span>
        </div>
      </div>
      
      <motion.p
        className="text-slate-300 text-sm md:text-base leading-relaxed mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
      >
        {item.description}
      </motion.p>
    </motion.div>
  );
};

export default MenuItem;
