'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const companies = [
  {
    name: 'Aerolíneas Argentinas',
    logo: '/img/logos/aerolineas-argentinas-logo.png',
    alt: 'Aerolíneas Argentinas'
  },
  {
    name: 'Pedidos Ya',
    logo: '/img/logos/pedidos-ya-logo.png',
    alt: 'Pedidos Ya'
  },
  {
    name: 'Ximaro',
    logo: '/img/logos/ximaro-logo.png',
    alt: 'Ximaro'
  },
  {
    name: 'EDVSA',
    logo: '/img/logos/edv-logo.png',
    alt: 'EDVSA'
  },
  {
    name: 'Mas Logística',
    logo: '/img/logos/mas-logistica-logo.png',
    alt: 'Mas Logística'
  },
  {
    name: 'Land Bebidas',
    logo: '/img/logos/land-bebidas-logo.png',
    alt: 'Land Bebidas'
  },
  {
    name: '2H Empanadas',
    logo: '/img/logos/2h-empanadas-logo.png',
    alt: '2H Empanadas'
  },
  {
    name: 'Copitec',
    logo: '/img/logos/copitec-logo.png',
    alt: 'Copitec'
  },
  {
    name: 'BP',
    logo: '/img/logos/bp-logo.jpg',
    alt: 'BP'
  },
  {
    name: 'Luz Azul',
    logo: '/img/logos/luz-azul-logo.jpg',
    alt: 'Luz Azul'
  },
  {
    name: 'Publisite',
    logo: '/img/logos/publisite-logo.jpg',
    alt: 'Publisite'
  },
  {
    name: 'Topper',
    logo: '/img/logos/topper-logo.png',
    alt: 'Topper'
  },
  {
    name: 'Alpargatas',
    logo: '/img/logos/alpargatas-logo.png',
    alt: 'Alpargatas'
  },
  {
    name: 'Blue Bell',
    logo: '/img/logos/blue-bell-logo.png',
    alt: 'Blue Bell'
  },
  {
    name: 'OCASA',
    logo: '/img/logos/ocasa-logo.png',
    alt: 'OCASA'
  },
  {
    name: 'Correo OCA',
    logo: '/img/logos/correo-oca-logo.png',
    alt: 'Correo OCA'
  },
  {
    name: 'Pan y Café',
    logo: '/img/logos/pan-y-cafe-logo.jpg',
    alt: 'Pan y Café'
  },
  {
    name: 'Eko Market',
    logo: '/img/logos/eko-market-logo.png',
    alt: 'Eko Market'
  },
  {
    name: 'Osfatun',
    logo: '/img/logos/osfatun-logo.png',
    alt: 'Osfatun'
  },
  {
    name: 'CONICET',
    logo: '/img/logos/conicet-logo.png',
    alt: 'CONICET'
  },
  {
    name: 'Decortinas',
    logo: '/img/logos/decortinas-logo.png',
    alt: 'Decortinas'
  },
  {
    name: 'Baterías Moura',
    logo: '/img/logos/baterias-moura-logo.png',
    alt: 'Baterías Moura'
  },
  {
    name: 'Clarín',
    logo: '/img/logos/clarin-logo.png',
    alt: 'Clarín'
  },
  {
    name: 'Sancor Salud',
    logo: '/img/logos/sancor-salud-medicina-privada-seeklogo.png',
    alt: 'Sancor Salud'
  }
];

export default function CompaniesSection() {
  const carouselRef1 = useRef<HTMLDivElement>(null);
  const carouselRef2 = useRef<HTMLDivElement>(null);

  const firstRowCompanies = companies.slice(0, 12);
  const secondRowCompanies = companies.slice(12, 24);

  useEffect(() => {
    const animateCarousel = (carousel: HTMLDivElement, duration: number) => {
      let animationId: number;
      let startTime: number;
      const itemWidth = 200 + 48; // width + gap
      const totalItems = carousel.children.length / 2; // dividido por 2 porque duplicamos
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
      return animationId;
    };

    const animationId1 = carouselRef1.current ? animateCarousel(carouselRef1.current, 120000) : null;
    const animationId2 = carouselRef2.current ? animateCarousel(carouselRef2.current, 120000) : null;

    return () => {
      if (animationId1) cancelAnimationFrame(animationId1);
      if (animationId2) cancelAnimationFrame(animationId2);
    };
  }, []);

  const renderCompanyLogo = (company: typeof companies[0], key: string) => (
    <div
      key={key}
      className="flex-shrink-0 flex items-center justify-center p-4 transition-all duration-300 hover:scale-105"
      style={{ width: '200px', height: '120px' }}
    >
      <Image
        src={company.logo}
        alt={company.alt}
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
            parent.innerHTML = `<span class="text-red-600 font-bold text-sm text-center">${company.name}</span>`;
          }
        }}
      />
    </div>
  );

  const renderCompanyRow = (companyList: typeof companies, carouselRef: React.RefObject<HTMLDivElement>, keyPrefix: string) => (
    <div className="relative mb-8 overflow-hidden">
      <div 
        ref={carouselRef}
        className="flex items-center will-change-transform"
        style={{ 
          width: `${companyList.length * 2 * (200 + 48)}px`,
          gap: '48px'
        }}
      >
        {companyList.map((company, index) => renderCompanyLogo(company, `${keyPrefix}-first-${index}`))}
        {companyList.map((company, index) => renderCompanyLogo(company, `${keyPrefix}-second-${index}`))}
      </div>
    </div>
  );

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Empresas que confían en nosotros
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trabajamos con las mejores empresas del país para brindar soluciones inmobiliarias de calidad
          </p>
        </div>
        
        <div className="space-y-8">
          {renderCompanyRow(firstRowCompanies, carouselRef1 as React.RefObject<HTMLDivElement>, 'row1')}
          {renderCompanyRow(secondRowCompanies, carouselRef2 as React.RefObject<HTMLDivElement>, 'row2')}
        </div>
      </div>
    </section>
  );
}
