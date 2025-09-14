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
    const duration = 30000;
    const totalWidth = carousel.scrollWidth / 2;

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

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Partners Inmobiliarios
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trabajamos en conjunto con los mejores partners del sector inmobiliario para ofrecerte las mejores oportunidades
          </p>
        </div>
        
        <div className="relative">
          <div 
            ref={carouselRef}
            className="flex items-center space-x-12 will-change-transform"
            style={{
              width: '300%',
            }}
          >
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
                style={{ width: '200px', height: '120px' }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={180}
                    height={100}
                    className="object-contain transition-all duration-300 hover:scale-105"
                    style={{
                      maxWidth: '180px',
                      maxHeight: '100px',
                      minWidth: '120px',
                      minHeight: '60px'
                    }}
                    onLoad={() => {
                      console.log(`✅ Partner logo loaded successfully: ${partner.name}`);
                    }}
                    onError={(e) => {
                      console.log(`❌ Error loading partner logo for ${partner.name}:`, partner.logo);
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-red-600 font-bold text-sm text-center">${partner.name}</span>`;
                      }
                    }}
                  />
                </div>
              </div>
            ))}
            
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
                style={{ width: '200px', height: '120px' }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={180}
                    height={100}
                    className="object-contain transition-all duration-300 hover:scale-105"
                    style={{
                      maxWidth: '180px',
                      maxHeight: '100px',
                      minWidth: '120px',
                      minHeight: '60px'
                    }}
                    onLoad={() => {
                      console.log(`✅ Partner logo loaded successfully: ${partner.name}`);
                    }}
                    onError={(e) => {
                      console.log(`❌ Error loading partner logo for ${partner.name}:`, partner.logo);
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-red-600 font-bold text-sm text-center">${partner.name}</span>`;
                      }
                    }}
                  />
                </div>
              </div>
            ))}

            {partners.map((partner, index) => (
              <div
                key={`third-${index}`}
                className="flex-shrink-0 flex items-center justify-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
                style={{ width: '200px', height: '120px' }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={180}
                    height={100}
                    className="object-contain transition-all duration-300 hover:scale-105"
                    style={{
                      maxWidth: '180px',
                      maxHeight: '100px',
                      minWidth: '120px',
                      minHeight: '60px'
                    }}
                    onLoad={() => {
                      console.log(`✅ Partner logo loaded successfully: ${partner.name}`);
                    }}
                    onError={(e) => {
                      console.log(`❌ Error loading partner logo for ${partner.name}:`, partner.logo);
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-red-600 font-bold text-sm text-center">${partner.name}</span>`;
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
