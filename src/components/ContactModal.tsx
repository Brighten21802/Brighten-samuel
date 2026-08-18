import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Mail, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '3D Modeling & Rendering',
    budget: '₹10,000 - ₹25,000',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Allow user to see confirmation
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      service: '3D Modeling & Rendering',
      budget: '₹10,000 - ₹25,000',
      message: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-xl bg-[#121316] border-2 border-[#D7E2EA]/30 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 shadow-2xl text-[#D7E2EA] z-10 my-8"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full text-[#D7E2EA]/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-[#B600A8]" />
                  <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light">
                    Start a collaboration
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-2">
                  Let&apos;s Create Together
                </h3>
                <p className="text-sm text-[#D7E2EA]/70 mb-6 font-light">
                  Have a 3D vision, brand identity, or motion project in mind? Let&apos;s discuss the details.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/80 font-medium mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className="w-full bg-[#1c1e24] border border-[#D7E2EA]/20 rounded-2xl px-4 py-3 text-sm text-white placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/80 font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full bg-[#1c1e24] border border-[#D7E2EA]/20 rounded-2xl px-4 py-3 text-sm text-white placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/80 font-medium mb-1">
                        Service Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#1c1e24] border border-[#D7E2EA]/20 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B600A8] transition-colors"
                      >
                        <option value="3D Modeling & Rendering">3D Modeling & Rendering</option>
                        <option value="Motion Design & Animation">Motion Design & Animation</option>
                        <option value="Brand Identity System">Brand Identity System</option>
                        <option value="Interactive Web 3D">Interactive Web 3D</option>
                        <option value="Custom Creative Direction">Custom Creative Direction</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/80 font-medium mb-1">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#1c1e24] border border-[#D7E2EA]/20 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B600A8] transition-colors"
                      >
                        <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
                        <option value="₹20,000 - ₹35,000">₹20,000 - ₹35,000</option>
                        <option value="₹35,000 - ₹50,000">₹35,000 - ₹50,000</option>
                        <option value="₹50,000+">₹50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/80 font-medium mb-1">
                      Project Details
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your objectives, deliverables, and timeline..."
                      className="w-full bg-[#1c1e24] border border-[#D7E2EA]/20 rounded-2xl px-4 py-3 text-sm text-white placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#B600A8] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full text-white font-medium uppercase tracking-widest text-sm flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]"
                      style={{
                        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                        outline: '2px solid white',
                        outlineOffset: '-3px',
                      }}
                    >
                      <Send className="w-4 h-4" />
                      Send Inquiry
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 15 }}
                  className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40"
                >
                  <CheckCircle2 className="w-10 h-10" />
                </motion.div>
                <h4 className="text-2xl font-black uppercase tracking-tight text-white mb-2">
                  Inquiry Dispatched!
                </h4>
                <p className="text-sm text-[#D7E2EA]/80 max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. Brighten will review your project requirements and respond within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full sm:w-auto px-8 py-3 rounded-full border border-[#D7E2EA]/40 text-[#D7E2EA] font-medium uppercase tracking-wider text-xs hover:bg-white/10 transition-colors"
                  >
                    Close
                  </button>
                  <a
                    href={`mailto:brightensamuel21802@gmail.com?subject=Project%20Inquiry%20from%20${encodeURIComponent(
                      formData.name
                    )}&body=${encodeURIComponent(formData.message)}`}
                    className="w-full sm:w-auto px-8 py-3 rounded-full bg-white/10 text-white font-medium uppercase tracking-wider text-xs flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Open in Email Client
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
