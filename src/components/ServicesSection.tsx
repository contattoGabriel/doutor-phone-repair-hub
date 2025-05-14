
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SmartphoneIcon, BatteryIcon, CameraIcon, SettingsIcon, ToolIcon } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.from(cardRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      delay: delay,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom-=100",
      }
    });
  }, [delay]);
  
  return (
    <Card 
      ref={cardRef}
      className="service-card bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden"
    >
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-full bg-doctor/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <div className="text-doctor text-sm font-medium cursor-pointer hover:underline">
          Saiba Mais
        </div>
      </CardFooter>
    </Card>
  );
};

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top bottom-=100",
      }
    });
  }, []);
  
  const services = [
    {
      title: "Troca de Tela",
      description: "Substituição de telas quebradas ou com defeito, mantendo a qualidade original do seu aparelho.",
      icon: <SmartphoneIcon className="text-doctor h-6 w-6" />,
      delay: 0.1
    },
    {
      title: "Substituição de Bateria",
      description: "Restaure a duração da bateria do seu dispositivo com peças de alta qualidade.",
      icon: <BatteryIcon className="text-doctor h-6 w-6" />,
      delay: 0.2
    },
    {
      title: "Reparos de Câmera",
      description: "Conserte problemas com a câmera frontal ou traseira do seu celular.",
      icon: <CameraIcon className="text-doctor h-6 w-6" />,
      delay: 0.3
    },
    {
      title: "Diagnóstico Geral",
      description: "Análise completa do seu dispositivo para identificar todos os problemas existentes.",
      icon: <SettingsIcon className="text-doctor h-6 w-6" />,
      delay: 0.4
    },
    {
      title: "Outros Serviços",
      description: "Reparos de conectores, botões, alto-falantes e outros componentes de seu smartphone.",
      icon: <ToolIcon className="text-doctor h-6 w-6" />,
      delay: 0.5
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="container px-4 mx-auto">
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nossos Serviços de <span className="text-doctor">Reparo</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Oferecemos uma variedade de serviços especializados para reparar e otimizar o desempenho do seu dispositivo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center bg-doctor/10 py-6 px-4 rounded-lg border border-doctor/20 max-w-xl mx-auto">
          <p className="text-white font-medium">
            <span className="text-doctor font-bold">Garantia de 90 dias</span> em todos os reparos
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
