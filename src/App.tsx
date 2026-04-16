import { useState } from 'react';
import { AnimatePresence, motion } from "motion/react";
import ExperienceGate from './components/ExperienceGate';
import Portal from './components/Portal';
import PresidentialMessages from './components/PresidentialMessages';
import EmergencyFeed from './components/EmergencyFeed';
import ServiceDirectory from './components/ServiceDirectory';

type ViewState = 'gate' | 'portal' | 'presidential' | 'emergency' | 'directory';

export default function App() {
  const [view, setView] = useState<ViewState>('gate');

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {view === 'gate' && (
          <motion.div
            key="gate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="w-full"
          >
            <ExperienceGate onEnter={() => setView('portal')} />
          </motion.div>
        )}

        {view === 'portal' && (
          <motion.div
            key="portal"
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full"
          >
            <Portal onNavigate={(target) => setView(target as ViewState)} />
          </motion.div>
        )}

        {view === 'presidential' && (
          <motion.div
            key="presidential"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <PresidentialMessages onBack={() => setView('portal')} />
          </motion.div>
        )}

        {view === 'emergency' && (
          <motion.div
            key="emergency"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full"
          >
            <EmergencyFeed onBack={() => setView('portal')} />
          </motion.div>
        )}

        {view === 'directory' && (
          <motion.div
            key="directory"
            initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full"
          >
            <ServiceDirectory onBack={() => setView('portal')} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

