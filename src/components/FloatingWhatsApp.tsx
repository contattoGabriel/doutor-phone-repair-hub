
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const FloatingWhatsApp: React.FC = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  
  useEffect(() => {
    // Initial animation
    gsap.from(buttonRef.current, {
      scale: 0.5,
      opacity: 0,
      duration: 0.5,
      delay: 1,
      ease: "back.out(1.7)"
    });
    
    // Pulse animation
    gsap.to(buttonRef.current, {
      scale: 1.1,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "sine.inOut"
    });
  }, []);
  
  return (
    <a 
      ref={buttonRef}
      href="https://wa.me/5531999432225?text=Olá,%20gostaria%20de%20mais%20informações"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <img 
        src="/lovable-uploads/89ae2a0a-2fdb-4a5c-b637-344c5069672f.png" 
        alt="WhatsApp" 
        className="w-full h-full"
      />
    </a>
  );
};

export default FloatingWhatsApp;
