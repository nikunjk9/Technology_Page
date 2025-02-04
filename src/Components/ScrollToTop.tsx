// components/ScrollToTop.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-4 md:right-8 bg-white hover:bg-[#481E93]
      text- hover:text-white rounded-full p-3 shadow-lg 
      transition-all duration-300 ease-in-out transform hover:scale-110
      focus:outline-none 
      z-50
      ${showScrollButton ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      aria-label="Scroll to top"
    >
      <ChevronUp  
      className="h-6 w-6 md:h-9 md:w-9"/>
    </button>
  );
};

export default ScrollToTop;