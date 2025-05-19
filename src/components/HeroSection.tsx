
import React, { useEffect, useRef } from 'react';
import { WhatsAppButton } from './Header';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { 
        ease: "power3.out"
      }
    });
    
    // Apple-style staggered text reveal
    tl.from(textRef.current, {
      y: 30,
      opacity: 0,
      duration: 1.2,
    })
    .from(taglineRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
    }, "-=0.6") // Start slightly before previous animation ends
    .from(buttonRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 0.6
    }, "-=0.4");
    
    // Parallax effect on scroll with easing
    gsap.to(heroRef.current, {
      backgroundPositionY: "40%",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5, // Smoother scrub for more fluid effect
      }
    });
    
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen bg-site-dark flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1581993192873-6ac88bef5be5?q=80&w=2069&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-site-dark/80 to-site-dark/40 backdrop-blur-[1px]"></div>
      
      <div className="container mx-auto z-10 px-4 text-center">
        <div 
          ref={textRef}
          className="mb-4"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-site-light tracking-tight">
            Doutor<span className="text-brand-blue">Phone</span>
          </h1>
        </div>
        
        <div 
          ref={taglineRef}
          className="mb-8"
        >
          <h2 className="text-xl md:text-2xl text-site-light/90 max-w-2xl mx-auto font-light tracking-wide">
            Seu Celular, Nossa Especialidade. Reparos rápidos, confiáveis e com garantia para iPhone e Android.
          </h2>
        </div>
        
        <div 
          ref={buttonRef}
          className="mt-8"
        >
          <WhatsAppButton />
        </div>
      </div>
      
      {/* Apple-inspired scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-12 border-2 border-site-light/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-site-light/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
