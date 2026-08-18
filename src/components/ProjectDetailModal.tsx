import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, Layers, CheckCircle } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-4xl bg-[#111215] border-2 border-[#D7E2EA]/30 rounded-[32px] sm:rounded-[48px] p-6 sm:p-8 md:p-10 shadow-2xl text-[#D7E2EA] z-10 my-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full text-[#D7E2EA]/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer z-20"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs uppercase tracking-widest text-[#B600A8] font-bold">
              Project Case {project.number}
            </span>
            <span className="text-[#D7E2EA]/40">•</span>
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/70">
              {project.category} Showcase
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
            {project.title}
          </h3>

          {/* Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#191b21] aspect-[4/3]">
              <img
                src={project.col2Image}
                alt={`${project.title} Main`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
              <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#191b21] h-[180px]">
                <img
                  src={project.col1Image1}
                  alt={`${project.title} Asset 1`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#191b21] h-[180px]">
                <img
                  src={project.col1Image2}
                  alt={`${project.title} Asset 2`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Details & Deliverables */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#D7E2EA]/15 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-semibold mb-2">
                <Sparkles className="w-4 h-4 text-[#B600A8]" />
                Role & Deliverables
              </div>
              <p className="text-sm font-light text-white/90">
                3D Art Direction, High-poly Geometry, Octane Lighting, Dynamic Animation Shaders
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-semibold mb-2">
                <Layers className="w-4 h-4 text-[#7621B0]" />
                Toolchain
              </div>
              <p className="text-sm font-light text-white/90">
                Blender, Cinema 4D, Unreal Engine 5, After Effects, Figma
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-semibold mb-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Outcome
              </div>
              <p className="text-sm font-light text-white/90">
                Featured 3D interactive launch campaign, +240% audience engagement spike.
              </p>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#D7E2EA]/15">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-8 py-3 rounded-full border border-[#D7E2EA]/40 text-[#D7E2EA] font-medium uppercase tracking-wider text-xs hover:bg-white/10 transition-colors"
            >
              Back to Portfolio
            </button>

            <a
              href="https://motionsites.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#D7E2EA] text-[#0C0C0C] font-semibold uppercase tracking-wider text-xs flex items-center justify-center gap-2 hover:bg-white transition-colors"
            >
              <span>Explore Interactive Live Site</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
