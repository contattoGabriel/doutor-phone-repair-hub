
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Index: React.FC = () => {
  useEffect(() => {
    // Initialize GSAP animations
    document.title = "Doutor Phone | Seu Celular, Nossa Especialidade";
    
    // Handle scroll animations
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((element) => {
      ScrollTrigger.create({
        trigger: element,
        start: 'top bottom-=100',
        onEnter: () => {
          element.classList.add('animated');
        }
      });
    });
    
    return () => {
      // Clean up animations
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
