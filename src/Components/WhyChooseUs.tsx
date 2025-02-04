import React, { useState, useRef, useEffect } from 'react';
import { Code, Gauge, Users, ArrowRight } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from 'next/image';

const CardEffect = ({ children }: { children: React.ReactNode }) => {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(140px 140px at ${offsetX}px ${offsetY}px, black, transparent)`;

  const border = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return;
      const borderRect = border.current.getBoundingClientRect();
      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div ref={border} className="relative h-full">
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-blue-400/30"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
      />
      {children}
    </div>
  );
};

const WhyChooseUs = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const stats = [
    {
      number: '100+',
      title: 'Successful Projects',
      description: 'Partner with our seasoned developers who have delivered cutting-edge solutions across multiple industries and technologies.',
      icon: <Code className="w-8 h-8" />,
      gradient: 'from-blue-600 to-cyan-600',
      bgGradient: 'from-blue-950/20 to-cyan-950/20',
      gif: '/images/gif1.gif' // Replace with your actual GIF path
    },
    {
      number: '99%',
      title: 'Client Satisfaction',
      description: 'Experience exceptional service quality with our commitment to delivering solutions that exceed expectations.',
      icon: <Gauge className="w-8 h-8" />,
      gradient: 'from-purple-600 to-pink-600',
      bgGradient: 'from-purple-950/20 to-pink-950/20',
      gif: '/images/gif34.gif' // Replace with your actual GIF path
    },
    {
      number: '24/7',
      title: 'Expert Support',
      description: 'Access round-the-clock technical support and maintenance from our dedicated team of IT professionals.',
      icon: <Users className="w-8 h-8" />,
      gradient: 'from-amber-600 to-orange-600',
      bgGradient: 'from-amber-950/20 to-orange-950/20',
      gif: '/images/gif6.gif' // Replace with your actual GIF path
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-purple-500/5 via-transparent to-transparent py-20 lg:py-24 mb-12 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-14">
        <div className="inline-block">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-purple-500/30 rounded-full bg-purple-500/10 backdrop-blur-sm">
              <span className="text-sm text-purple-300 font-medium">Why Choose Us</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Transform Your Business
            </span>
            <span className="block mt-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent pb-2">
              With Technology
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Partner with us to build scalable, innovative solutions that drive your business forward. 
            Our expertise in cutting-edge technologies ensures your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 px-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* GIF Preview */}
              <div 
                className={`
                  absolute left-1/2 -translate-x-1/2 -top-20 w-40 h-40
                  transform transition-all duration-700 ease-in-out z-20
                  ${hoveredCard === index ? 'opacity-100 translate-y-0 scale-105' : 'opacity-0 translate-y-8 scale-95'}
                `}
              >
                <Image 
                  src={stat.gif}
                  alt={stat.title}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-xl shadow-xl"
                />
              </div>

              <CardEffect>
                <div className={`
                  relative h-full p-8 rounded-2xl border border-blue-500/10
                  backdrop-blur-xl transition-all duration-500 z-10
                  ${hoveredCard === index ? 'bg-gradient-to-b ' + stat.bgGradient : 'bg-white/5'}
                `}>
                  <div className={`
                    inline-flex items-center justify-center p-3 rounded-xl mb-6
                    bg-gradient-to-r ${stat.gradient}
                  `}>
                    {stat.icon}
                  </div>

                  <div className="space-y-4">
                    <h3 className={`
                      text-5xl font-bold bg-gradient-to-r ${stat.gradient} 
                      bg-clip-text text-transparent transition-all duration-500
                    `}>
                      {stat.number}
                    </h3>
                    
                    <h4 className="text-xl font-semibold text-white">
                      {stat.title}
                    </h4>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {stat.description}
                    </p>

                    <div className={`
                      flex items-center gap-2 text-sm font-medium
                      transition-all duration-300 
                      ${hoveredCard === index ? 'text-white' : 'text-gray-500'}
                    `}>
                      Learn More 
                      <ArrowRight className={`
                        w-4 h-4 transition-transform duration-300
                        ${hoveredCard === index ? 'translate-x-1' : ''}
                      `} />
                    </div>
                  </div>

                  <div className={`
                    absolute inset-0 rounded-2xl transition-opacity duration-500
                    bg-gradient-to-r ${stat.gradient} -z-10 blur-lg opacity-0
                    ${hoveredCard === index ? 'opacity-20' : ''}
                  `} />
                </div>
              </CardEffect>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;