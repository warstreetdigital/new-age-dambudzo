import { motion } from "motion/react";

interface ExperienceGateProps {
  onEnter: () => void;
}

export default function ExperienceGate({ onEnter }: ExperienceGateProps) {
  return (
    <div className="relative min-h-screen w-full bg-[#050505] overflow-hidden flex flex-col items-center justify-center text-white p-6 font-sans">
      {/* Immersive Background Atmosphere (Layered Z-Flag System) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Layer 1: Base Depth (Slower, More Blurred) */}
        <motion.div 
          animate={{ 
            x: [-40, 40, -40],
            y: [-20, 20, -20],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 flex opacity-[0.18]"
        >
          <div className="flex-1 h-full bg-[#006400] blur-[120px] -translate-x-20" />
          <div className="flex-1 h-full bg-[#FFD700] blur-[140px]" />
          <div className="flex-1 h-full bg-[#C8102E] blur-[120px] translate-x-20" />
        </motion.div>

        {/* Layer 2: Main Presence (Faster, More Defined) */}
        <motion.div 
          animate={{ 
            x: [30, -30, 30],
            y: [15, -15, 15],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 flex opacity-[0.22]"
        >
          <div className="flex-1 h-full bg-[#006400] blur-[70px] -translate-x-10" />
          <div className="flex-1 h-full bg-[#FFD700] blur-[90px]" />
          <div className="flex-1 h-full bg-[#C8102E] blur-[70px] translate-x-10" />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 text-center max-w-2xl px-10 flex flex-col items-center"
      >
        {/* National Emblem Icon (Official Seal) */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ 
            opacity: [0.7, 1, 0.7],
            y: 0,
            filter: [
              "drop-shadow(0 0 8px rgba(255, 215, 0, 0.2))",
              "drop-shadow(0 0 16px rgba(255, 215, 0, 0.5))",
              "drop-shadow(0 0 8px rgba(255, 215, 0, 0.2))"
            ]
          }}
          transition={{ 
            y: { duration: 1, delay: 0.5 },
            opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            filter: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="mb-4 w-8 h-8 flex items-center justify-center pointer-events-none"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2">
            <path d="M12 2L15 8H21L16 12L18 18L12 14L6 18L8 12L3 8H9L12 2Z" fill="#FFD700" />
          </svg>
        </motion.div>

        <p className="text-[12px] font-medium tracking-[0.4em] text-[#FFD700] uppercase mb-8 opacity-80">
          Republic of Zimbabwe
        </p>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent leading-none">
          NEW AGE DAMBUDZO
        </h1>
        
        <p className="text-xl md:text-2xl font-light text-white/70 mb-12 tracking-wide">
          A National Civic System for All Zimbabweans
        </p>

        <motion.button
          onClick={onEnter}
          animate={{
            scale: [1, 1.03, 1],
            boxShadow: [
              "0 4px 24px rgba(0,0,0,0.5), inset 0 0 10px rgba(255,255,255,0.05)",
              "0 4px 32px rgba(255,215,0,0.15), inset 0 0 15px rgba(255,255,255,0.1)",
              "0 4px 24px rgba(0,0,0,0.5), inset 0 0 10px rgba(255,255,255,0.05)"
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
          whileTap={{ scale: 0.98 }}
          className="relative px-12 py-5 bg-white/[0.03] backdrop-blur-[10px] border border-white/10 rounded-full text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300 overflow-hidden"
        >
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 p-[1px] rounded-full pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-[#006400] via-[#FFD700] to-[#C8102E] opacity-40 rounded-full" style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', WebkitMaskComposite: 'xor' }} />
          </div>
          <span className="relative z-10">Enter Civic Portal</span>
        </motion.button>

        <div className="mt-20 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.3em] text-white/40">
          <span className="text-[#006400]">Verified</span> • Public Access Portal
        </div>
      </motion.div>

      {/* Footer Meta */}
      <div className="absolute bottom-[40px] text-[10px] text-white/20 tracking-[0.1em] pointer-events-none uppercase">
        SECURE GATEWAY v4.0.2 • ENCRYPTED CIVIC ACCESS • © 2024
      </div>
    </div>
  );
}
