
import React, { useEffect, useRef } from 'react';
import { MessageSquareIcon } from 'lucide-react';
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
      href="https://wa.me/5531999432225"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageSquareIcon className="text-white h-6 w-6" />
    </a>
  );
};

export default FloatingWhatsApp;
