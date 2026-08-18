import React from 'react';
import { FadeIn } from './FadeIn';
import { ServiceItem } from '../types';

const servicesData: ServiceItem[] = [
  {
    number: '01',
    title: '3D Modeling',
    price: 'Starts at ₹15,000',
    description:
      'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    number: '02',
    title: 'Rendering',
    price: 'Starts at ₹10,000',
    description:
      'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    number: '03',
    title: 'Motion Design',
    price: 'Starts at ₹25,000',
    description:
      'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    number: '04',
    title: 'Branding',
    price: 'Starts at ₹30,000',
    description:
      'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
  },
  {
    number: '05',
    title: 'Web Design',
    price: '₹40,000 - ₹50,000',
    description:
      'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-0"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#0C0C0C]/5 border border-[#0C0C0C]/10 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#0C0C0C]/70 mb-4">
            Pricing Starts From ₹10,000 to ₹50,000
          </div>
          <h2
            className="font-black uppercase text-[#0C0C0C] text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Vertical List of Services */}
        <div className="flex flex-col w-full divide-y divide-[#0C0C0C]/15 border-t border-b border-[#0C0C0C]/15">
          {servicesData.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.1}
              y={30}
              className="py-8 sm:py-10 md:py-12 group transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 w-full">
                {/* Left: Huge Number */}
                <div
                  className="font-black text-[#0C0C0C] leading-none tracking-tighter shrink-0 select-none transition-transform duration-300 group-hover:scale-105"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.number}
                </div>

                {/* Right: Title + Price + Description */}
                <div className="flex flex-col gap-2 md:gap-3 flex-grow">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3
                      className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                      style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.1rem)' }}
                    >
                      {service.title}
                    </h3>
                    {service.price && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#0C0C0C] text-white font-medium text-xs sm:text-sm tracking-wider uppercase">
                        {service.price}
                      </span>
                    )}
                  </div>
                  <p
                    className="font-light text-[#0C0C0C] opacity-60 leading-relaxed max-w-2xl"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
