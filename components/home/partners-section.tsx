'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const partners = [
  {
    name: 'Colina',
    logo: '/img/logos/colina-logo.png',
    alt: 'Colina'
  },
  {
    name: 'Galindo',
    logo: '/img/logos/galindo-logo.png',
    alt: 'Galindo'
  },
  {
    name: 'Itraco',
    logo: '/img/logos/itraco-logo.jpg',
    alt: 'Itraco'
  },
  {
    name: 'Link',
    logo: '/img/logos/link-logo.png',
    alt: 'Link'
  },
  {
    name: 'Saxum',
    logo: '/img/logos/saxum-logo.png',
    alt: 'Saxum'
  }
];

export default function PartnersSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId: number;
    let startTime: number;
    const duration = 120000;
    const itemWidth = 200 + 48;
    const totalItems = carousel.children.length / 2;
    const totalWidth = totalItems * itemWidth;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = (elapsed % duration) / duration;
      const translateX = -progress * totalWidth;
      
      carousel.style.transform = `translateX(${translateX}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const renderPartnerLogo = (partner: typeof partners[0], key: string) => (
    <div
      key={key}
      className="flex-shrink-0 flex items-center justify-center p-4 transition-all duration-300 hover:scale-105"
      style={{ width: '200px', height: '120px' }}
    >
      <Image
        src={partner.logo}
        alt={partner.alt}
        width={180}
        height={100}
        className="object-contain"
        style={{
          maxWidth: '180px',
          maxHeight: '100px',
          minWidth: '120px',
          minHeight: '60px'
        }}
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          const parent = e.currentTarget.parentElement;
          if (parent) {
            parent.innerHTML = `<span class="text-red-600 font-bold text-sm text-center">${partner.name}</span>`;
          }
        }}
      />
    </div>
  );

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Partners Inmobiliarios
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trabajamos en conjunto con los mejores partners del sector inmobiliario para ofrecerte las mejores oportunidades
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            ref={carouselRef}
            className="flex items-center will-change-transform"
            style={{ 
              width: `${partners.length * 3 * (200 + 48)}px`,
              gap: '48px'
            }}
          >
            {partners.map((partner, index) => renderPartnerLogo(partner, `first-${index}`))}
            {partners.map((partner, index) => renderPartnerLogo(partner, `second-${index}`))}
            {partners.map((partner, index) => renderPartnerLogo(partner, `third-${index}`))}
          </div>
        </div>
      </div>
    </section>
  );
}
