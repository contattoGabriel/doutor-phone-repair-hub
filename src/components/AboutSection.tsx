
import React, { useEffect, useRef } from 'react';
import { BadgeCheckIcon, ShieldCheckIcon, ClockIcon } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, delay }) => {
  const featureRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.from(featureRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 0.5,
      delay: delay,
      scrollTrigger: {
        trigger: featureRef.current,
        start: "top bottom-=100",
      }
    });
  }, [delay]);
  
  return (
    <div 
      ref={featureRef} 
      className="flex flex-col items-center bg-white/5 backdrop-blur-md p-6 rounded-lg border border-white/10 transition-all duration-500 hover:border-brand-blue/30 hover:bg-white/8"
    >
      <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-white text-lg font-medium">{title}</h3>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Split text animation (Apple-inspired)
    const text = descriptionRef.current?.innerText.split(" ");
    if (text && descriptionRef.current) {
      descriptionRef.current.innerHTML = '';
      text.forEach((word, i) => {
        const span = document.createElement('span');
        span.innerHTML = word + (i < text.length - 1 ? ' ' : '');
        span.style.opacity = '0';
        span.style.display = 'inline-block';
        span.style.transform = 'translateY(20px)';
        span.style.transition = `opacity 0.5s ease, transform 0.5s ease`;
        span.style.transitionDelay = `${i * 0.03}s`;
        descriptionRef.current?.appendChild(span);
      });
      
      ScrollTrigger.create({
        trigger: descriptionRef.current,
        start: "top bottom-=150",
        onEnter: () => {
          Array.from(descriptionRef.current?.children || []).forEach(span => {
            (span as HTMLElement).style.opacity = '1';
            (span as HTMLElement).style.transform = 'translateY(0)';
          });
        }
      });
    }
    
    // Fade in content
    gsap.from(contentRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top bottom-=100",
      }
    });
    
    // Apple-style highlight animation
    if (highlightRef.current) {
      gsap.fromTo(
        highlightRef.current,
        { width: "0%", left: "0" },
        {
          width: "100%",
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: highlightRef.current,
            start: "top bottom-=50",
          }
        }
      );
    }
  }, []);
  
  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-20 bg-zinc-900 relative"
    >
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1573148195900-7845dcb9b127?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(0.5)"
        }}
      ></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div ref={contentRef} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Por Que <span className="text-brand-blue">Escolher</span> a Doutor Phone
          </h2>
          <p ref={descriptionRef} className="text-white/80 mb-8 text-lg">
            Na Doutor Phone, somos especialistas em reparos de iPhone e Android. Com técnicos certificados e peças originais, oferecemos serviços rápidos, garantia de qualidade e atendimento personalizado. Não venda seu dispositivo por problemas simples - confie em quem entende para resolver.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Feature 
            icon={<BadgeCheckIcon className="text-brand-blue h-6 w-6" />}
            title="Técnicos Especializados"
            delay={0.1}
          />
          <Feature 
            icon={<ShieldCheckIcon className="text-brand-blue h-6 w-6" />}
            title="Peças Originais"
            delay={0.2}
          />
          <Feature 
            icon={<ClockIcon className="text-brand-blue h-6 w-6" />}
            title="Atendimento em Até 24h"
            delay={0.3}
          />
        </div>
        
        {/* Apple-style animated highlight */}
        <div className="mt-16 text-center">
          <div className="inline-block relative">
            <span className="text-2xl font-light text-white">
              Não venda seu iPhone de graça por <span className="font-bold">motivo de saúde baixa</span>
            </span>
            <div ref={highlightRef} className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
