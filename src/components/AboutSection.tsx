
import React, { useEffect, useRef } from 'react';
import { BadgeCheckIcon, ShieldCheckIcon, ClockIcon } from 'lucide-react';
import gsap from 'gsap';

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
    <div ref={featureRef} className="flex flex-col items-center bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
      <div className="w-12 h-12 rounded-full bg-doctor/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-white text-lg font-medium">{title}</h3>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.from(contentRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top bottom-=100",
      }
    });
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
            Quem <span className="text-doctor">Somos</span>
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Na Doutor Phone, somos apaixonados por tecnologia e comprometidos em devolver vida aos seus dispositivos. 
            Com técnicos certificados e peças de alta qualidade, oferecemos reparos rápidos e confiáveis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Feature 
            icon={<BadgeCheckIcon className="text-doctor h-6 w-6" />}
            title="Técnicos Especializados"
            delay={0.1}
          />
          <Feature 
            icon={<ShieldCheckIcon className="text-doctor h-6 w-6" />}
            title="Peças Originais"
            delay={0.2}
          />
          <Feature 
            icon={<ClockIcon className="text-doctor h-6 w-6" />}
            title="Atendimento em Até 24h"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
