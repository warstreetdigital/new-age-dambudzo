import React, { useState } from 'react';
import { ChevronLeft, ShieldCheck, Share2, FileText, Play, Clock } from 'lucide-react';
import { motion, AnimatePresence } from "motion/react";
import QRShareModal from './QRShareModal';

interface PresidentialMessagesProps {
  onBack: () => void;
}

export default function PresidentialMessages({ onBack }: PresidentialMessagesProps) {
  const [showTranscript, setShowTranscript] = useState(false);
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050505] font-sans text-white overflow-hidden flex flex-col">
      <QRShareModal 
        isOpen={isQRModalOpen} 
        onClose={() => setIsQRModalOpen(false)} 
        title="Presidential Address"
      />
      {/* Background Subtle Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% -10%, rgba(255, 215, 0, 0.05) 0%, transparent 50%)`
          }}
        />
      </div>

      {/* HEADER / NAVIGATION */}
      <header className="relative z-20 px-6 py-6 flex items-center justify-between max-w-5xl mx-auto w-full">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portal
        </button>
        <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
          <ShieldCheck className="w-3.5 h-3.5 text-[#006400]" />
          <span className="text-[10px] font-black tracking-widest text-white/60 uppercase">System Verified</span>
        </div>
      </header>

      <main className="relative z-10 flex-1 flex flex-col max-w-5xl mx-auto w-full px-6 pb-20">
        {/* VIDEO SECTION */}
        <section className="relative w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/5 group mb-8">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            poster="https://picsum.photos/seed/zimbabwe/1200/675"
            className="w-full h-full object-cover opacity-80"
          >
             <source src="https://assets.mixkit.co/videos/preview/mixkit-flag-of-zimbabwe-waving-in-the-wind-32757-large.mp4" type="video/mp4" />
          </video>
          
          {/* Video Overlay Controls (Mock) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-4">
                  <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </button>
                  <div className="text-xs font-mono tracking-wider text-white/80">00:00 / 12:45</div>
               </div>
               <div className="h-1 w-1/2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-[#FFD700]" />
               </div>
            </div>
          </div>
        </section>

        {/* INFO SECTION */}
        <section className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2 opacity-40">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Broadcasted April 16, 2026 • 09:00 CAT</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none mb-4">
                Presidential Address <span className="text-white/20 font-light">|</span> <span className="text-[#FFD700]">National Digital Economy</span>
              </h1>
              <p className="text-white/40 text-sm md:text-base max-w-2xl font-medium leading-relaxed">
                A formal national message detailing the next phase of the Zimbabwean digital civic infrastructure and economic modernization protocols.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowTranscript(!showTranscript)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl border text-xs font-bold uppercase tracking-widest transition-all ${showTranscript ? 'bg-white text-black' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
              >
                <FileText className="w-4 h-4" />
                Read Transcript
              </button>
              <button 
                onClick={() => setIsQRModalOpen(true)}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-bold uppercase tracking-widest transition-all"
              >
                <Share2 className="w-4 h-4" />
                Share QR
              </button>
            </div>
          </div>
        </section>

        {/* TRANSCRIPT AREA */}
        <AnimatePresence>
          {showTranscript && (
            <motion.section 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-white/5 border border-white/5 rounded-3xl p-8 md:p-12 mb-12">
                <div className="flex items-center gap-3 mb-8 opacity-40">
                  <FileText className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Official Transcript • Verbatim Record</span>
                </div>
                <div className="max-h-[500px] overflow-y-auto pr-6 space-y-6 text-sm md:text-base text-white/70 leading-[1.8] font-medium custom-scrollbar">
                  <p>
                    <span className="text-[#FFD700]">[00:00:01]</span> Fellow citizens, brothers and sisters, residents of this great nation. We stand today at the threshold of a new digital era.
                  </p>
                  <p>
                    The National Civic QR System is not merely an identification tool; it is a gateway to inclusivity, transparency, and efficient public service. As we modernize our economy, we ensure that no Zimbabwean is left behind in the global digital landscape.
                  </p>
                  <p>
                    Infrastructure development continues in every province. Our focus remains on the "New Age" protocols—where data integrity meets civic responsibility. Every scan represents a secure handshake between the state and its people.
                  </p>
                  <p>
                    We are investing heavily in broadband projects, local server farms, and encrypted mobile access points. This address marks the activation of twelve new verified civic channels designed to bring government closer to you.
                  </p>
                  <p>
                    Stay vigilant, stay informed through this verified portal, and together we build the Zimbabwe of tomorrow. God bless you all, and God bless Zimbabwe.
                  </p>
                  <p className="opacity-40 italic"> [End of Official Recording] </p>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* FOOTER RAILS */}
      <footer className="mt-auto px-6 py-8 border-t border-white/5 bg-black/40 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] text-white/20 uppercase tracking-[0.4em] font-bold">
          <div className="flex items-center gap-4">
             <div className="w-2 h-2 rounded-full bg-[#006400]" />
             OFFICIAL BROADCAST SYSTEM
          </div>
          <div className="text-center md:text-right">
             AUTHOIRIZED BY THE NATIONAL MEDIA PROTOCOL • CHANNEL 01-A
          </div>
        </div>
      </footer>

      {/* Styling for custom scrollbar */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </div>
  );
}
