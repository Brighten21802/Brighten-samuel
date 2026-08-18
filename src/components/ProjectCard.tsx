import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ProjectItem } from '../types';
import { LiveProjectButton } from './LiveProjectButton';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  onViewProject?: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  onViewProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] sm:h-[90vh] md:h-[95vh] flex items-start justify-center sticky top-24 md:top-32"
      style={{
        top: `calc(5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="w-full max-w-6xl mx-auto rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-2xl overflow-hidden"
      >
        {/* Top Row: Number, Category, Project Name, Live Project Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 md:pb-8 border-b border-[#D7E2EA]/20">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none tracking-tighter select-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm font-light">
                {project.category}
              </span>
              <h3
                className="text-[#D7E2EA] uppercase font-medium tracking-wide"
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 2.2rem)' }}
              >
                {project.title}
              </h3>
            </div>
          </div>

          <div className="shrink-0 self-end sm:self-center">
            <LiveProjectButton
              onClick={() => onViewProject && onViewProject(project)}
            />
          </div>
        </div>

        {/* Bottom Row: 2-Column Image Grid */}
        <div className="pt-4 sm:pt-6 md:pt-8 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          {/* Left Column: 40% width (md:col-span-5) with 2 stacked images */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6">
            {/* Top Image */}
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181a1f] border border-white/10"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1Image1}
                alt={`${project.title} Detail 1`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Bottom Image */}
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181a1f] border border-white/10"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1Image2}
                alt={`${project.title} Detail 2`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: 60% width (md:col-span-7) with 1 tall image */}
          <div className="md:col-span-7 h-full flex">
            <div className="w-full min-h-[280px] sm:min-h-[340px] md:min-h-[420px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181a1f] border border-white/10">
              <img
                src={project.col2Image}
                alt={`${project.title} Showcase`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
