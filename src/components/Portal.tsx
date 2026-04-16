import React, { useState, useEffect } from 'react';
import { Shield, Bell, Info, Landmark, HardHat, Library, MessageSquare, CheckCircle, History, Scale, Activity, Cpu, Wifi } from 'lucide-react';
import { motion, AnimatePresence } from "motion/react";

export default function Portal({ onNavigate }: { onNavigate?: (target: string) => void }) {
  const [timestamp, setTimestamp] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] font-sans text-white overflow-hidden selection:bg-[#FFD700]/30">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 10% 20%, rgba(0, 100, 0, 0.08) 0%, transparent 40%),
              radial-gradient(circle at 90% 80%, rgba(200, 16, 46, 0.08) 0%, transparent 40%),
              radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.03) 0%, transparent 60%)
            `
          }}
        />
      </div>

      {/* HEADER */}
      <header className="relative z-30 bg-black/60 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <motion.div 
              initial={{ rotate: -10, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-[#006400] via-[#FFD700] to-[#C8102E] p-[1px]"
            >
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center font-bold text-lg">
                🇿🇼
              </div>
            </motion.div>
            <div>
              <div className="font-bold text-lg tracking-[0.05em] uppercase">New Age Dambudzo</div>
              <div className="text-[10px] opacity-40 uppercase tracking-[0.2em] font-medium mt-0.5">National Civic Access</div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/5">
              <Activity className="w-3.5 h-3.5 text-[#006400]" />
              <span className="text-[10px] font-bold tracking-widest opacity-60">ENCRYPTED</span>
            </div>
            <div className="text-[11px] font-mono opacity-30 tracking-wider">
              PORTAL ACCESS 701-X
            </div>
          </div>
        </div>
      </header>

      {/* SYSTEM STATUS BAR */}
      <div className="relative z-20 bg-[#0A0A0A] border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex flex-wrap items-center justify-between gap-4 text-[10px] tracking-[0.15em] font-bold uppercase">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-green-500/80">System Status: <span className="text-green-500">LIVE</span></span>
            </div>
            <div className="flex items-center gap-2 text-white/40">
              <Cpu className="w-3 h-3" />
              <span>Verified Channels: <span className="text-white/80">12 Active</span></span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-white/40">
            <Wifi className="w-3 h-3" />
            <span>Last Update: <span className="text-white/80 font-mono tracking-normal">{timestamp}</span></span>
          </div>
        </div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto p-6 md:p-10 lg:p-12">
        {/* HERO ANCHOR */}
        <section className="relative group mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-black rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] border border-white/10"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-[400px] md:h-[500px] object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000 ease-out"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-flag-of-zimbabwe-waving-in-the-wind-32757-large.mp4" type="video/mp4" />
            </video>
            
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[1px] w-8 bg-[#FFD700]/50" />
                  <span className="text-[#FFD700] text-xs font-black tracking-[0.4em] uppercase">Official National Broadcast</span>
                </div>
                <h1 className="text-white text-4xl md:text-7xl font-black mb-6 tracking-tight leading-[0.9]">
                  National Address <br className="hidden md:block"/>& Updates
                </h1>
                <p className="text-white/40 text-sm md:text-xl max-w-2xl font-light leading-relaxed">
                  Verified leadership messages • Strategic announcements • National public information gateway
                </p>
                <motion.button 
                  whileHover={{ x: 10 }}
                  className="mt-8 flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full transition-all"
                >
                  View Archive <Activity className="w-3 h-3 text-[#FFD700]" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* SYSTEM MODULES */}
        <div className="space-y-20">
          {/* SECURE CHANNELS */}
          <ModuleSection 
            title="Secure System Channels" 
            subtitle="Verified government communications and encrypted updates"
            icon={<Shield className="text-[#006400]" />}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ModuleCard 
                badge="LIVE" 
                badgeColor="green"
                title="Presidential Feed" 
                description="Live stream of official addresses, national statements, and leadership policy updates."
                icon={<Shield />}
                onClick={() => onNavigate?.('presidential')}
              />
              <ModuleCard 
                badge="OFFICIAL" 
                badgeColor="yellow"
                title="Gov Announcements" 
                description="Consolidated government notices, ministry programs, and policy implementations."
                icon={<Landmark />}
              />
              <ModuleCard 
                badge="CRITICAL" 
                badgeColor="red"
                title="Emergency Center" 
                description="Priority-one health alerts, disaster management, and national safety instructions."
                icon={<Bell />}
                onClick={() => onNavigate?.('emergency')}
              />
            </div>
          </ModuleSection>

          {/* CITIZEN INTERFACE */}
          <ModuleSection 
            title="Citizen Infrastructure" 
            subtitle="Public service portals and development tracking systems"
            icon={<Info className="text-[#FFD700]" />}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <ModuleCard 
                title="National Projects" 
                description="Real-time infrastructure tracking, development metrics, and community milestones."
                icon={<HardHat />}
              />
              <ModuleCard 
                title="Civic Services" 
                description="Digital access to ministry directories, service portals, and public digital tools."
                icon={<Library />}
                onClick={() => onNavigate?.('directory')}
              />
              <ModuleCard 
                title="National Heritage" 
                description="Digital archive of historical documents, national records, and state memory."
                icon={<History />}
              />
              <ModuleCard 
                title="Digital Feedback" 
                description="Citizen submission portal for community insights and development suggestions."
                icon={<MessageSquare />}
              />
            </div>
          </ModuleSection>

          {/* INTEGRITY LAYER */}
          <ModuleSection 
            title="System Integrity" 
            subtitle="Security protocols, transparency logs, and platform governance"
            icon={<CheckCircle className="text-[#C8102E]" />}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ModuleCard 
                title="Seal Verification" 
                description="Cryptographic authentication of system messages and digital document seals."
                icon={<CheckCircle />}
              />
              <ModuleCard 
                title="Transparency Logs" 
                description="Immutably tracked update history and public accountability records."
                icon={<Info />}
              />
              <ModuleCard 
                title="System Core" 
                description="Architecture documentation, data ethics, and digital sovereign governance."
                icon={<Scale />}
              />
            </div>
          </ModuleSection>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 py-20 px-6 mt-20 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <TrustIndicator 
              title="Verified Source System" 
              description="Authenticity guaranteed through state-level digital signing protocols."
              icon={<Shield className="w-5 h-5" />}
            />
            <TrustIndicator 
              title="Public Access Network" 
              description="Inclusive high-performance civic infrastructure for all citizens."
              icon={<Wifi className="w-5 h-5" />}
            />
            <TrustIndicator 
              title="Transparent Logs" 
              description="Publicly verifiable record-keeping and platform audit trails."
              icon={<History className="w-5 h-5" />}
            />
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/20 uppercase tracking-[0.4em]">
            <div>© 2024 REPUBLIC OF ZIMBABWE • CIVIC TECH</div>
            <div className="flex gap-8">
              <span className="hover:text-white/60 cursor-pointer transition-colors">Privacy Protocol</span>
              <span className="hover:text-white/60 cursor-pointer transition-colors">Ethics Framework</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ModuleSection({ title, subtitle, icon, children }: { title: string, subtitle: string, icon: React.ReactNode, children: React.ReactNode }) {
  return (
    <section>
      <div className="flex flex-col mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-1.5 bg-white/5 rounded-lg border border-white/10 text-white/40">
            {React.cloneElement(icon as React.ReactElement, { className: "w-4 h-4" })}
          </div>
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-white/60 leading-none">{title}</h2>
        </div>
        <p className="text-white/30 text-xs font-medium pl-10 border-l border-white/5">{subtitle}</p>
      </div>
      {children}
    </section>
  );
}

interface ModuleCardProps {
  title: string;
  description: string;
  badge?: string;
  badgeColor?: 'green' | 'red' | 'yellow';
  icon: React.ReactNode;
  onClick?: () => void;
}

function ModuleCard({ title, description, badge, badgeColor, icon, onClick }: ModuleCardProps) {
  const badgeStyles = {
    green: "text-[#006400] bg-[#006400]/10 border-[#006400]/20 shadow-[0_0_15px_-5px_#006400]",
    red: "text-[#C8102E] bg-[#C8102E]/10 border-[#C8102E]/20 shadow-[0_0_15px_-5px_#C8102E]",
    yellow: "text-[#FFD700] bg-[#FFD700]/10 border-[#FFD700]/20 shadow-[0_0_15px_-5px_#FFD700]"
  };

  return (
    <motion.div 
      onClick={onClick}
      whileHover={{ 
        y: -10, 
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderColor: "rgba(255, 255, 255, 0.2)"
      }}
      className="group relative cursor-pointer bg-white/[0.02] backdrop-blur-xl rounded-[1.5rem] p-8 border border-white/5 transition-all duration-500 overflow-hidden"
    >
      {/* Active Glow Effect */}
      <div className="absolute -inset-24 bg-gradient-to-tr from-[#FFD700]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {badge && (
        <span className={`absolute top-6 right-6 px-2.5 py-0.5 rounded-full text-[8px] font-black tracking-[0.2em] border ${badgeStyles[badgeColor || 'green']}`}>
          {badge}
        </span>
      )}

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-white/30 group-hover:text-white">
          {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6" })}
        </div>
        <h3 className="text-[17px] font-bold tracking-tight text-white/90 mb-3 group-hover:text-white transition-colors">{title}</h3>
        <p className="text-[13px] text-white/40 leading-relaxed group-hover:text-white/60 transition-colors font-medium">
          {description}
        </p>
      </div>

      <div className="absolute bottom-6 left-8 opacity-0 group-hover:opacity-40 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
        <Activity className="w-12 h-12 text-[#FFD700]/20 rotate-12" />
      </div>
    </motion.div>
  );
}

function TrustIndicator({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
  return (
    <div className="flex gap-6">
      <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center text-[#FFD700]/60 border border-white/10">
        {icon}
      </div>
      <div>
        <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-2 text-white/80">{title}</h4>
        <p className="text-[12px] text-white/30 leading-relaxed font-medium">{description}</p>
      </div>
    </div>
  );
}

