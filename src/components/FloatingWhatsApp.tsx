
import React, { useEffect, useRef } from 'react';
import { MessageSquare } from 'lucide-react'; // Using MessageSquare as it resembles WhatsApp icon
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
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <div className="relative">
        {/* Custom WhatsApp icon styling */}
        <MessageSquare className="text-white h-6 w-6" />
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2 w-2 bg-white rounded-full"></span>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
