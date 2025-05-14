
import React, { useEffect, useRef } from 'react';
import { WhatsAppButton } from './Header';
import gsap from 'gsap';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
    
    // Parallax effect on scroll
    gsap.to(heroRef.current, {
      backgroundPositionY: "30%",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
    
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1581993192873-6ac88bef5be5?q=80&w=2069&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div 
        ref={textRef}
        className="container mx-auto z-10 px-4 text-center"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          Doutor<span className="text-doctor">Phone</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Seu Celular, Nossa Especialidade. Reparos rápidos, confiáveis e com garantia.
        </h2>
        
        <div className="animate-pulse mt-8">
          <WhatsAppButton />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
