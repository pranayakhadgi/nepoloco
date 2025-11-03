import React from 'react';
import { useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { motion } from 'framer-motion';
import WelcomeSection from './components/WelcomeSection';
import DashainTiharSection from './components/DashainTiharSection';
import ScheduleSection from './components/ScheduleSection';
import MenuSection from './components/MenuSection';
import FooterSection from './components/FooterSection';
import './styles/fonts.css';
import './styles/base.css';
import './styles/parallax.css';
import './styles/frames.css';
import './styles/schedule.css';
import './styles/menu.css';
import './styles/footer.css';
import './App.css';

function App() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // parallax setup - different layers move at different speeds to create depth
  // galaxy background stays still, other layers move slowly
  
  // deep background layer moves slowest
  const deepBackgroundY = useTransform(
    scrollY,
    [0, 1000],
    shouldReduceMotion ? [0, 0] : [0, 150]
  );

  // middle layer moves a bit faster
  const midgroundY = useTransform(
    scrollY,
    [0, 1000],
    shouldReduceMotion ? [0, 0] : [0, 400]
  );

  // floating elements move even faster
  const floatingY = useTransform(
    scrollY,
    [0, 1000],
    shouldReduceMotion ? [0, 0] : [0, 600]
  );

  return (
    <div className="App relative">
      {/* deep background parallax layer */}
      <motion.div
        className="fixed inset-0 z-0 parallax-deep-background"
        style={{ y: deepBackgroundY }}
      >
      </motion.div>

      {/* galaxy background - stays completely still */}
      <div
        className="fixed inset-0 z-5"
      >
        {/* main galaxy image */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(/galaxy-background.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>

      {/* middle parallax layer */}
      <motion.div
        className="fixed inset-0 z-6 parallax-midground pointer-events-none"
        style={{ y: midgroundY }}
      >
        {/* decorative gradient circles */}
        <div className="absolute top-20 left-10 w-64 h-64 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-amber-500/30 to-purple-500/30 rounded-full" />
        </div>
        <div className="absolute bottom-40 right-10 w-96 h-96 opacity-15">
          <div className="w-full h-full bg-gradient-to-br from-amber-600/20 to-pink-600/20 rounded-full" />
        </div>
      </motion.div>

      {/* floating decorative elements */}
      <motion.div
        className="fixed inset-0 z-7 parallax-floating pointer-events-none"
        style={{ y: floatingY }}
      >
        {/* small gradient orbs */}
        <div className="absolute top-1/4 right-1/3 w-32 h-32 opacity-15">
          <div className="w-full h-full bg-amber-500/20 rounded-full" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 opacity-10">
          <div className="w-full h-full bg-purple-500/20 rounded-full" />
        </div>
      </motion.div>

      {/* main content sections */}
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
