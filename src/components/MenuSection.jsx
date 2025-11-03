import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { menuItems } from '../data/menu';
import MenuItem from './MenuItem';

const MenuSection = () => {
  // Group menu items by category
  const groupedMenu = useMemo(() => {
    const grouped = {};
    menuItems.forEach(item => {
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push(item);
    });
    return grouped;
  }, []);

  const categoryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className="min-h-screen py-20 px-4 text-white relative">
      {/* Semi-transparent overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 to-slate-900/85 backdrop-blur-sm" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-amber-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Food & Drinks
        </motion.h2>

        <div className="space-y-12">
          {Object.entries(groupedMenu).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h3
                className="text-2xl md:text-3xl font-bold mb-6 text-amber-400 border-b border-amber-500/30 pb-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {category}
              </motion.h3>
              
              <div className="space-y-6">
                {items.map((item, itemIndex) => (
                  <MenuItem
                    key={item.name}
                    item={item}
                    index={categoryIndex * 10 + itemIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
