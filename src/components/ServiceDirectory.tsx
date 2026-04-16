import React, { useState, useMemo } from 'react';
import { Share2, ChevronLeft, Search, MapPin, Phone, ExternalLink, Clock, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from "motion/react";
import QRShareModal from './QRShareModal';

interface ServiceDirectoryProps {
  onBack: () => void;
}

interface CivicService {
  id: string;
  name: string;
  category: string;
  location: string;
  status: 'open' | 'closed';
  distance: string;
  phone: string;
}

const SERVICES_DATA: CivicService[] = [
  { id: '1', name: 'Central Registry Office (Passports)', category: 'Documents', location: 'Harare CBD', status: 'open', distance: '1.2 km', phone: '+263 24 2702222' },
  { id: '2', name: 'Parirenyatwa General Hospital', category: 'Health', location: 'Mazowe St, Harare', status: 'open', distance: '3.5 km', phone: '+263 24 2701555' },
  { id: '3', name: 'Zimbabwe Revenue Authority (ZIMRA)', category: 'Tax', location: 'Kurima House, Harare', status: 'closed', distance: '0.8 km', phone: '+263 24 2758891' },
  { id: '4', name: 'Post Office (ZIMPOST)', category: 'Postal', location: 'Main Post Office, Harare', status: 'open', distance: '1.5 km', phone: '+263 24 2705541' },
  { id: '5', name: 'Vehicle Inspection Department (VID)', category: 'Transport', location: 'Eastlea, Harare', status: 'open', distance: '5.2 km', phone: '+263 24 2746321' },
  { id: '6', name: 'City Council Water Dept', category: 'Utility', location: 'Town House, Harare', status: 'closed', distance: '1.1 km', phone: '+263 24 2753000' },
  { id: '7', name: 'National Library & Archives', category: 'Education', location: 'Borrowdale Rd, Harare', status: 'open', distance: '4.8 km', phone: '+263 24 2792741' },
];

export default function ServiceDirectory({ onBack }: ServiceDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter(service => 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="relative min-h-screen bg-[#050505] font-sans text-white overflow-hidden flex flex-col">
      <QRShareModal 
        isOpen={isQRModalOpen} 
        onClose={() => setIsQRModalOpen(false)} 
        title={selectedService || "Public Service Node"}
      />
      {/* Background Atmosphere */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 90% 10%, rgba(255, 215, 0, 0.05) 0%, transparent 40%)`
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
          <div className="text-xs font-black tracking-widest uppercase text-white/60">Service Directory</div>
        </div>
      </header>

      <main className="relative z-10 flex-1 max-w-4xl mx-auto w-full p-6 md:py-12">
        <div className="mb-10">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white">Public Services</h1>
          <p className="text-white/40 text-sm font-medium tracking-wide uppercase max-w-xl">Find and contact essential civic offices, health centers, and national service points across the network.</p>
        </div>

        {/* SEARCH BAR */}
        <div className="relative mb-12 group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-white/20 group-focus-within:text-[#FFD700] transition-colors" />
          </div>
          <input 
            type="text"
            placeholder="Search services (Passport, Clinic, ID...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-white/20 focus:outline-none focus:border-[#FFD700]/50 focus:bg-white/[0.05] transition-all shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
          />
        </div>

        {/* RESULTS GRID */}
        <div className="grid grid-cols-1 gap-4 overflow-y-auto">
          <AnimatePresence>
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.05] hover:border-white/20 transition-all group shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                       <span className={`w-2 h-2 rounded-full ${service.status === 'open' ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-red-500 shadow-[0_0_8px_#ef4444]'}`} />
                       <h3 className="text-lg font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">{service.name}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3">
                       <div className="flex items-center gap-2 text-xs font-medium text-white/30">
                          <MapPin className="w-3.5 h-3.5" />
                          {service.location}
                       </div>
                       <div className="flex items-center gap-2 text-xs font-medium text-white/30">
                          <Clock className="w-3.5 h-3.5" />
                          <span className={service.status === 'open' ? 'text-green-500/60' : 'text-red-500/60'}>
                             {service.status === 'open' ? 'Open Now' : 'Currently Closed'}
                          </span>
                       </div>
                       <div className="flex items-center gap-2 text-xs font-medium text-white/30">
                          <Building2 className="w-3.5 h-3.5" />
                          {service.distance}
                       </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                     <button 
                       onClick={() => {
                         setSelectedService(service.name);
                         setIsQRModalOpen(true);
                       }}
                       className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                       title="Share QR"
                     >
                        <Share2 className="w-4 h-4 text-white/40" />
                     </button>
                     <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-wider transition-all">
                        <ExternalLink className="w-4 h-4 text-white/40" />
                        Directions
                     </button>
                     <a 
                       href={`tel:${service.phone}`}
                       className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-[#006400]/20 hover:bg-[#006400]/30 border border-[#006400]/30 rounded-xl text-xs font-bold uppercase tracking-wider text-[#006400] transition-all"
                     >
                        <Phone className="w-4 h-4" />
                        Call
                     </a>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center"
              >
                <Search className="w-12 h-12 text-white/10 mx-auto mb-4" />
                <p className="text-white/30 font-bold uppercase tracking-widest">No services matching your search</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 p-10 mt-auto border-t border-white/5 bg-black/40 text-center">
         <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold">
            Civil Digital Infrastructure • Directory Node 14-8
         </p>
      </footer>
    </div>
  );
}
