
import React, { useEffect, useRef } from 'react';
import { BadgeCheckIcon, ShieldCheckIcon, ClockIcon, StarIcon } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
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
      className="flex flex-col items-center bg-white backdrop-blur-sm p-6 rounded-lg border border-site-gray/20 transition-all duration-500 hover:border-doctor/30 hover:bg-site-light"
    >
      <div className="w-12 h-12 rounded-full bg-doctor/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-site-dark text-lg font-medium">{title}</h3>
    </div>
  );
};

const feedbacks = [
  { 
    name: "Ana Silva", 
    comment: "Estava desesperada com a tela quebrada do meu iPhone. O atendimento foi excepcional, muito profissional e resolveram em apenas 2 horas! Preço justo e qualidade impecável. Super recomendo!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  { 
    name: "Carlos Santos", 
    comment: "Meu Samsung estava com problema na bateria que não durava nem 3 horas. Os técnicos são muito competentes e atenciosos, explicaram todo o processo. Agora meu celular volta a durar o dia inteiro!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  { 
    name: "Maria Oliveira", 
    comment: "Serviço rápido e de qualidade excepcional! Pensava que teria que trocar meu iPhone por causa do problema no alto-falante, mas eles consertaram perfeitamente. Profissionalismo exemplar!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  { 
    name: "João Pereira", 
    comment: "Atendimento diferenciado! Meu celular caiu na água e achei que tinha perdido tudo. A equipe foi muito dedicada, conseguiram recuperar todos os meus dados e ainda deixaram o aparelho funcionando perfeitamente.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  { 
    name: "Fernanda Costa", 
    comment: "Quebrei a câmera do meu smartphone numa viagem importante. O atendimento foi pontual, equipe muito preparada e conseguiram resolver no mesmo dia. Qualidade das peças originais fez toda diferença!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
  },
  { 
    name: "Roberto Lima", 
    comment: "Problema no carregador do iPhone estava me deixando louco. O diagnóstico foi preciso e a solução rápida. Técnicos realmente especializados, muito transparentes quanto aos custos. Excelente custo-benefício!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  }
];

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
      className="py-20 bg-site-light relative"
    >
      <div className="container px-4 mx-auto relative z-10">
        <div ref={contentRef} className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-site-dark mb-6">
              Por Que <span className="text-doctor">Escolher</span> a Doutor Phone
            </h2>
            <p ref={descriptionRef} className="text-site-dark/80 mb-8 text-lg max-w-4xl mx-auto">
              Na Doutor Phone, somos especialistas em reparos de iPhone e Android. Com técnicos certificados e peças originais, oferecemos serviços rápidos, garantia de qualidade e atendimento personalizado. Não venda seu dispositivo por problemas simples - confie em quem entende para resolver.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Features Section */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            
            {/* Enhanced Feedbacks Section with Scroll */}
            <div className="lg:col-span-1">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-site-gray/20 p-6 shadow-lg">
                <h3 className="text-xl font-bold text-site-dark mb-6 text-center">
                  Feedbacks dos <span className="text-doctor">Clientes</span>
                </h3>
                <ScrollArea className="h-96">
                  <div className="space-y-4 pr-4">
                    {feedbacks.map((feedback, index) => (
                      <div key={index} className="bg-site-light/60 p-4 rounded-lg border border-site-gray/10 hover:bg-white/50 transition-colors">
                        <div className="flex items-start gap-3 mb-3">
                          <Avatar className="w-12 h-12 shrink-0">
                            <AvatarImage src={feedback.image} alt={feedback.name} />
                            <AvatarFallback className="bg-doctor/10 text-doctor font-medium">
                              {feedback.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-1 mb-1">
                              {[...Array(feedback.rating)].map((_, i) => (
                                <StarIcon key={i} className="h-4 w-4 fill-doctor text-doctor" />
                              ))}
                            </div>
                            <p className="text-doctor font-medium text-sm">{feedback.name}</p>
                          </div>
                        </div>
                        <p className="text-site-dark/80 text-sm leading-relaxed">"{feedback.comment}"</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>
        </div>
        
        {/* Apple-style animated highlight */}
        <div className="mt-16 text-center">
          <div className="inline-block relative">
            <span className="text-2xl font-light text-site-dark">
              Não venda seu iPhone de graça por <span className="font-bold">motivo de saúde baixa</span>
            </span>
            <div ref={highlightRef} className="absolute -bottom-1 left-0 w-0 h-0.5 bg-doctor"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
