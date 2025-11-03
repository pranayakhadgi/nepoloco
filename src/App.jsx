import React from 'react';
import { useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { motion } from 'framer-motion';
import WelcomeSection from './components/WelcomeSection';
import DashainTiharSection from './components/DashainTiharSection';
import ScheduleSection from './components/ScheduleSection';
import MenuSection from './components/MenuSection';
import FooterSection from './components/FooterSection';
import backgroundImage from './assets/images/background.jpg';
import './styles/fonts.css';
import './styles/base.css';
import './styles/parallax.css';
import './styles/frames.css';
import './App.css';

function App() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Parallax transforms - different speeds create depth illusion
  // Background layer moves slowest (0.2x speed)
  const backgroundY = useTransform(
    scrollY,
    [0, 1000],
    shouldReduceMotion ? [0, 0] : [0, 200]
  );

  // Midground layer moves at medium speed (0.5x speed)
  const midgroundY = useTransform(
    scrollY,
    [0, 1000],
    shouldReduceMotion ? [0, 0] : [0, 500]
  );

  // Floating decorative elements (0.6x speed)
  const floatingY = useTransform(
    scrollY,
    [0, 1000],
    shouldReduceMotion ? [0, 0] : [0, 600]
  );

  return (
    <div className="App relative">
      {/* Background Layer - Slowest parallax (0.2x speed) */}
      <motion.div
        className="fixed inset-0 z-0 parallax-background"
        style={{ y: backgroundY }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/80 to-slate-950/90" />
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url(${backgroundImage})`
          }}
        />
      </motion.div>

      {/* Midground Layer - Medium parallax (0.5x speed) */}
      <motion.div
        className="fixed inset-0 z-10 parallax-midground pointer-events-none"
        style={{ y: midgroundY }}
      >
        {/* Decorative elements placeholder */}
        <div className="absolute top-20 left-10 w-64 h-64 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-amber-500/30 to-purple-500/30 rounded-full blur-3xl" />
        </div>
        <div className="absolute bottom-40 right-10 w-96 h-96 opacity-15">
          <div className="w-full h-full bg-gradient-to-br from-amber-600/20 to-pink-600/20 rounded-full blur-3xl" />
        </div>
        {/* Decorative images can be added here later if needed */}
        {/* Just using CSS gradient blobs for now */}
      </motion.div>

      {/* Floating Elements Layer - Medium-fast parallax (0.6x speed) */}
      <motion.div
        className="fixed inset-0 z-5 parallax-floating pointer-events-none"
        style={{ y: floatingY }}
      >
        {/* Small floating decorative elements */}
        <div className="absolute top-1/4 right-1/3 w-32 h-32 opacity-15">
          <div className="w-full h-full bg-amber-500/20 rounded-full blur-2xl" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 opacity-10">
          <div className="w-full h-full bg-purple-500/20 rounded-full blur-2xl" />
        </div>
      </motion.div>

      {/* Foreground Content - Normal scroll (1x speed) */}
      <div className="relative z-20">
        <WelcomeSection />
        <DashainTiharSection />
        <ScheduleSection />
        <MenuSection />
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
