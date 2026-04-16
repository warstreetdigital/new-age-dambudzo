import React, { useState, useEffect } from 'react';
import { Share2, ChevronLeft, Bell, AlertTriangle, ShieldCheck, Activity, Info, MapPin, Clock } from 'lucide-react';
import { motion, AnimatePresence } from "motion/react";
import QRShareModal from './QRShareModal';

interface EmergencyFeedProps {
  onBack: () => void;
}

type AlertStatus = 'critical' | 'warning' | 'safe';

interface AlertItem {
  id: string;
  status: AlertStatus;
  title: string;
  description: string;
  timestamp: string;
  location?: string;
}

const INITIAL_ALERTS: AlertItem[] = [
  {
    id: '1',
    status: 'critical',
    title: 'Health Alert: Regional Update',
    description: 'Updated safety protocols for public gatherings in the Harare Metropolitan area. Please follow the latest ministry guidelines regarding community health safety.',
    timestamp: '10:42 AM',
    location: 'Harare'
  },
  {
    id: '2',
    status: 'warning',
    title: 'Severe Weather Warning',
    description: 'Heavy precipitation forecast for the Eastern Highlands. Citizen advisory for potential flash flooding in low-lying areas.',
    timestamp: '09:10 AM',
    location: 'Eastern Highlands'
  },
  {
    id: '3',
    status: 'safe',
    title: 'System Maintenance Complete',
    description: 'National digital infrastructure maintenance successfully concluded. All civic digital portals are now operating at full capacity.',
    timestamp: '08:00 AM',
    location: 'National'
  }
];

export default function EmergencyFeed({ onBack }: EmergencyFeedProps) {
  const [alerts, setAlerts] = useState<AlertItem[]>(INITIAL_ALERTS);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setIsRefreshing(true);
      setTimeout(() => {
        const newAlert: AlertItem = {
          id: Date.now().toString(),
          status: Math.random() > 0.7 ? 'warning' : 'safe',
          title: `Automated System Check: ${new Date().toLocaleTimeString()}`,
          description: 'Recurring automated integrity check of regional nodes. No manual intervention required. Performance metrics within nominal range.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          location: 'Auto-Node'
        };
        setAlerts(prev => [newAlert, ...prev].slice(0, 10)); // Keep last 10
        setIsRefreshing(false);
      }, 1000);
    }, 15000); // Every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] font-sans text-white overflow-hidden flex flex-col">
      <QRShareModal 
        isOpen={isQRModalOpen} 
        onClose={() => setIsQRModalOpen(false)} 
        title="Emergency Update Feed"
      />
      {/* Background Atmosphere */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 10% 10%, rgba(200, 16, 46, 0.1) 0%, transparent 40%)`
          }}
        />
      </div>

      {/* HEADER */}
      <header className="relative z-20 bg-black/60 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Portal
          </button>
          <div className="flex items-center gap-3">
             {isRefreshing && (
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="flex items-center gap-2 text-[10px] text-green-500 font-bold uppercase tracking-widest"
               >
                 <Activity className="w-3 h-3 animate-pulse" />
                 Syncing
               </motion.div>
             )}
             <div className="h-4 w-[1px] bg-white/10 mx-2" />
             <button 
               onClick={() => setIsQRModalOpen(true)}
               className="p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
             >
               <Share2 className="w-3.5 h-3.5 text-white/40" />
             </button>
             <div className="h-4 w-[1px] bg-white/10 mx-2" />
             <div className="text-xs font-black tracking-widest uppercase text-white/60">Emergency Center</div>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1 max-w-4xl mx-auto w-full p-6 md:py-12">
        <div className="flex items-center justify-between mb-10">
           <div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-2">Live Status Feed</h1>
              <p className="text-white/40 text-sm font-medium tracking-wide uppercase">Real-time National Critical Updates</p>
           </div>
           <div className="w-12 h-12 rounded-2xl bg-[#C8102E]/10 border border-[#C8102E]/20 flex items-center justify-center text-[#C8102E]">
             <Bell className="w-6 h-6 animate-ring" />
           </div>
        </div>

        {/* FEED */}
        <div className="space-y-4">
          <AnimatePresence initial={false}>
            {alerts.map((alert) => (
              <motion.div
                key={alert.id}
                layout
                initial={{ opacity: 0, x: -20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative bg-white/[0.02] border border-white/5 rounded-2xl p-6 transition-all hover:bg-white/[0.04] hover:border-white/10 group overflow-hidden"
              >
                {/* Visual Accent */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                  alert.status === 'critical' ? 'bg-[#C8102E]' : 
                  alert.status === 'warning' ? 'bg-[#FFD700]' : 'bg-[#006400]'
                }`} />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <StatusIndicator status={alert.status} />
                      <h3 className="text-lg font-bold tracking-tight">{alert.title}</h3>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed mb-4">
                      {alert.description}
                    </p>
                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/20">
                       <span className="flex items-center gap-1.5">
                         <MapPin className="w-3 h-3" />
                         {alert.location}
                       </span>
                       <span className="flex items-center gap-1.5">
                         <ShieldCheck className="w-3 h-3 text-[#006400]/40" />
                         Verified
                       </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-white/30 whitespace-nowrap bg-white/5 px-2 py-1 rounded">
                    <Clock className="w-3 h-3" />
                    {alert.timestamp}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 p-10 border-t border-white/5 bg-black/40 text-center">
         <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold">
           Authorized Live Feed System • Updated via National Alert Protocol
         </p>
      </footer>

      <style>{`
        @keyframes ring {
          0%, 100% { transform: rotate(0); }
          5%, 15% { transform: rotate(10deg); }
          10%, 20% { transform: rotate(-10deg); }
          25% { transform: rotate(0); }
        }
        .animate-ring {
          animation: ring 4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}

function StatusIndicator({ status }: { status: AlertStatus }) {
  const configs = {
    critical: { label: 'CRITICAL', color: 'text-[#C8102E]', icon: <AlertTriangle className="w-3 h-3" />, dot: 'bg-[#C8102E]' },
    warning: { label: 'WARNING', color: 'text-[#FFD700]', icon: <Info className="w-3 h-3" />, dot: 'bg-[#FFD700]' },
    safe: { label: 'SAFE', color: 'text-[#006400]', icon: <ShieldCheck className="w-3 h-3" />, dot: 'bg-[#006400]' }
  };

  const config = configs[status];

  return (
    <div className={`flex items-center gap-2 text-[9px] font-black tracking-[0.2em] uppercase shrink-0 ${config.color} bg-white/5 px-2 py-0.5 rounded border border-white/5`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot} shadow-[0_0_8px_rgba(255,255,255,0.2)]`} />
      {config.icon}
      {config.label}
    </div>
  );
}
