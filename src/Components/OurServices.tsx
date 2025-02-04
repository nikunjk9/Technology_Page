import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface Service {
  id: number;
  name: string;
  title: string;
  image: string;
}

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      name: "Website Development",
      title: "E-commerce | Business & Corporate Websites",
      image: "/images/ser1.jpg"
    },
    {
      id: 2,
      name: "App Development",
      title: "E-commerce | Enterprise | Hybrid Application",
      image: "/images/ser2.jpg"
    },
    {
      id: 3,
      name: "UI/UX & Product Design",
      title: "Website & app design  |  Branding & digital experiences",
      image: "/images/ser3.jpg"
    },
    {
      id: 4,
      name: "Software Development",
      title: "Enterprise software solutions |  API development & integration",
      image: "/images/ser4.jpg"
    },
    {
      id: 5,
      name: "Digital Marketing Solutions",
      title: "SEO & digital marketing strategy | CRM & marketing automation",
      image: "/images/ser6.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500/5 via-transparent to-transparent py-20 px-4 sm:px-6 lg:px-0 mb-4">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <span className="text-zinc-400 text-sm tracking-wider uppercase mb-3 block">
            What we offer
          </span>
          <div className="flex items-center justify-between">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              <span className="bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-transparent filter drop-shadow-[0_5px_15px_rgba(168,85,247,0.4)]">
                Our Services
              </span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-xs text-right border-l border-zinc-800 pl-6">
              Elevating artists through state-of-the-art facilities
            </p>
          </div>
        </div>

        {/* Services List */}
        <div className="relative">
          {services.map((service) => (
            <div
              key={service.id}
              className={`
                group relative border-t border-zinc-800 py-6 
                transition-all duration-300 ease-out cursor-pointer
                ${hoveredService === service.id ? 'bg-purple-500/10' : 'hover:bg-zinc-900/50'}
              `}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Content Container */}
              <div className="flex items-center justify-between relative">
                <div className="flex items-center space-x-6">
                  <span className="text-zinc-500 font-mono text-base w-6">
                    {String(service.id).padStart(2, '0')}
                  </span>
                  <div className="space-y-1">
                    <h3 className={`
                      text-white font-light tracking-wide
                      transition-all duration-300 ease-out
                      ${hoveredService === service.id ? 'text-2xl' : 'text-3xl'}
                    `}>
                      {service.name}
                    </h3>
                    <p className={`
                      text-zinc-400 text-sm font-light
                      transition-all duration-300 ease-out
                      ${hoveredService === service.id ? 
                        'opacity-100 transform translate-y-0' : 
                        'opacity-0 transform -translate-y-2'}
                    `}>
                      {service.title}
                    </p>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <ArrowUpRight 
                    className={`
                      w-5 h-5 transition-all duration-300 ease-out
                      ${hoveredService === service.id ? 
                        'rotate-45 translate-x-1 text-white' : 
                        'text-zinc-500 group-hover:translate-x-1'}
                    `}
                  />
                </div>
              </div>

              {/* Hover Image */}
              <div 
                className={`
                  absolute left-2/3 -translate-x-1/2 -top-28 w-72 h-64 
                  overflow-hidden transition-all duration-500 ease-out 
                  pointer-events-none z-20
                  ${hoveredService === service.id ? 
                    'opacity-100 translate-y-0' : 
                    'opacity-0 translate-y-8'}
                `}
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  width={1000}
                  height={1000}
                  className={`
                    w-full h-full object-cover rounded-lg
                    transition-transform duration-700 ease-out
                    ${hoveredService === service.id ? 'scale-110' : 'scale-100'}
                  `}
                />
              </div>
            </div>
          ))}

          {/* Bottom border */}
          <div className="border-t border-zinc-800" />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;