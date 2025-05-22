
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Index: React.FC = () => {
  useEffect(() => {
    // Set document title
    document.title = "Doutor Phone | Seu Celular, Nossa Especialidade";
    
    // Create smooth scrolling effect (Apple-inspired)
    const smoother = ScrollSmoother.create({
      smooth: 1.5, // Smoothness factor (higher = smoother)
      effects: true, // Enables special effects like parallax
      smoothTouch: 0.1, // Smooth scrolling for touch devices (subtle)
    });
    
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
    
    // Apple-style section transitions
    gsap.utils.toArray('section').forEach((section: any, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top bottom-=100",
        end: "bottom top+=100",
        toggleClass: {targets: section, className: "active"},
      });
    });
    
    return () => {
      // Clean up animations
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      smoother && smoother.kill();
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-site-light text-site-dark">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Header />
          <main>
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <ContactSection />
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </div>
    </div>
  );
};

export default Index;
