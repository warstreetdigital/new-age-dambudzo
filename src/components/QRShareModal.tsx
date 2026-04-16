import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { X, Download, Share2, ClipboardCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface QRShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function QRShareModal({ isOpen, onClose, title = "System Access Node" }: QRShareModalProps) {
  const [copied, setCopied] = React.useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const downloadQR = () => {
    const canvas = document.getElementById('qr-gen') as HTMLCanvasElement;
    if (canvas) {
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `QR_${title.replace(/\s+/g, '_')}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 pointer-events-none">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-sm bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)] pointer-events-auto overflow-hidden"
            >
              {/* Subtle Ambient Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FFD700]/10 blur-[80px]" />

              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 transition-colors group"
              >
                <X className="w-5 h-5 text-white/40 group-hover:text-white" />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 mb-4 mx-auto w-fit">
                    <Share2 className="w-3 h-3 text-[#FFD700]" />
                    <span className="text-[9px] font-black tracking-widest text-[#FFD700] uppercase">Share Access Point</span>
                  </div>
                  <h2 className="text-xl font-black tracking-tight text-white mb-2">{title}</h2>
                  <p className="text-xs text-white/40 font-medium">Scan this QR to access this digital node instantly.</p>
                </div>

                {/* QR Code Container */}
                <div className="relative p-6 bg-white rounded-3xl mb-8 group overflow-hidden">
                  <QRCodeCanvas 
                    id="qr-gen"
                    value={currentUrl} 
                    size={200}
                    level={"H"}
                    includeMargin={false}
                    imageSettings={{
                      src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg",
                      x: undefined,
                      y: undefined,
                      height: 40,
                      width: 40,
                      excavate: true,
                    }}
                  />
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 w-full">
                  <button 
                    onClick={downloadQR}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all"
                  >
                    <Download className="w-4 h-4" />
                    Save
                  </button>
                  <button 
                    onClick={copyToClipboard}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all"
                  >
                    {copied ? <ClipboardCheck className="w-4 h-4 text-green-500" /> : <Share2 className="w-4 h-4" />}
                    {copied ? 'Copied' : 'Link'}
                  </button>
                </div>
              </div>

              {/* Integrity Marker */}
              <div className="mt-8 pt-6 border-t border-white/5 text-center">
                <p className="text-[8px] text-white/20 font-bold uppercase tracking-[0.3em]">
                  Encrypted Digital Gateway • Verified Node
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
