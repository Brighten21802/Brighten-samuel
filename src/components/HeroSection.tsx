import React from 'react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';

interface HeroSectionProps {
  onOpenContact?: () => void;
  onNavigate?: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  onNavigate,
}) => {
  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (id === 'contact') {
      if (onOpenContact) onOpenContact();
      else {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (id === 'price') {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onNavigate) {
      onNavigate(id);
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none"
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="w-full z-30">
        <div className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA]">
          <div className="flex items-center gap-6 sm:gap-10 md:gap-12 text-sm md:text-lg lg:text-[1.35rem] font-medium uppercase tracking-wider">
            <a
              href="#about"
              onClick={(e) => handleNavClick('about', e)}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick('price', e)}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              Price
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick('projects', e)}
              className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              Projects
            </a>
            <button
              type="button"
              onClick={(e) => handleNavClick('contact', e)}
              className="hover:opacity-70 transition-opacity duration-200 uppercase cursor-pointer"
            >
              Contact
            </button>
          </div>
          <div className="text-xs sm:text-sm opacity-50 uppercase tracking-tighter hidden sm:block font-light">
            Brighten Samuel -- 3D Creator
          </div>
        </div>
      </FadeIn>

      {/* Hero Heading */}
      <div className="w-full overflow-hidden text-center z-0 mt-2 sm:mt-0 md:-mt-8 lg:-mt-12 px-2 sm:px-4">
        <FadeIn delay={0.15} y={30}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[10vw] sm:text-[10.5vw] md:text-[11.5vw] lg:text-[12vw] pointer-events-none">
            Hi, i&apos;m Brighten
          </h1>
        </FadeIn>
      </div>

      {/* Centered Hero Portrait with Magnet effect */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto flex items-end justify-center"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-full flex justify-center items-end"
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
            alt="Brighten - 3D Creator"
            className="w-full h-auto object-contain pointer-events-none drop-shadow-2xl filter brightness-105"
            draggable={false}
          />
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        <FadeIn delay={0.35} y={20} className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onOpenContact} />
        </FadeIn>
      </div>
    </section>
  );
};
