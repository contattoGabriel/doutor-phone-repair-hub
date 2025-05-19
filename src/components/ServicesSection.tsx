
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Battery, Wrench, Cable, ShoppingCart, Tag, Image, Camera, Phone } from 'lucide-react';
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
      className="service-card bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden transform transition-all duration-500 hover:translate-y-[-8px] hover:shadow-[0_20px_50px_rgba(30,82,241,0.15)]"
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
        <div className="text-brand-blue text-sm font-medium cursor-pointer hover:underline">
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
    
    // Apple-inspired staggered animation - Fix TypeScript error
    const cards = gsap.utils.toArray('.service-card');
    gsap.set(cards, { opacity: 0, y: 50 });
    
    // Fixed type issue by ensuring proper type compatibility
    ScrollTrigger.batch(cards as Element[], {
      interval: 0.1,
      batchMax: 3,
      onEnter: batch => gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      }),
    });
  }, []);
  
  const services = [
    {
      title: "Troca de Tela",
      description: "Substituição de telas quebradas ou com defeito para iPhone e Android, mantendo a qualidade original do seu aparelho.",
      icon: <Smartphone className="text-brand-blue h-6 w-6" />,
      delay: 0.1
    },
    {
      title: "Reparo em Placas",
      description: "Consertos técnicos avançados em placas-mãe para recuperar dispositivos com problemas complexos.",
      icon: <Wrench className="text-brand-blue h-6 w-6" />,
      delay: 0.2
    },
    {
      title: "Troca de Bateria",
      description: "Restaure a saúde da bateria do seu iPhone ou Android para 100% com peças originais de alta qualidade.",
      icon: <Battery className="text-brand-blue h-6 w-6" />,
      delay: 0.3
    },
    {
      title: "Carregadores e Cabos",
      description: "Venda de acessórios originais e homologados para carregamento rápido e seguro do seu dispositivo.",
      icon: <Cable className="text-brand-blue h-6 w-6" />,
      delay: 0.4
    },
    {
      title: "Cases e Películas",
      description: "Proteção para seu celular com cases e películas comuns e cerâmicas da melhor qualidade.",
      icon: <ShoppingCart className="text-brand-blue h-6 w-6" />,
      delay: 0.5
    },
    {
      title: "Troca de Conector",
      description: "Reparos em conectores de carga para iPhone e Android, resolvendo problemas de carregamento.",
      icon: <Phone className="text-brand-blue h-6 w-6" />,
      delay: 0.6
    },
    {
      title: "Troca de Carcaça",
      description: "Renovação completa da aparência do seu iPhone ou Android com troca de carcaça de alta qualidade.",
      icon: <Tag className="text-brand-blue h-6 w-6" />,
      delay: 0.7
    },
    {
      title: "Diagnóstico Completo",
      description: "Análise profissional da saúde do seu dispositivo, identificando problemas antes que se agravem.",
      icon: <Camera className="text-brand-blue h-6 w-6" />,
      delay: 0.8
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="container px-4 mx-auto">
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nossos <span className="text-brand-blue">Serviços</span> Especializados
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
        
        <div className="mt-12 text-center bg-brand-blue/10 py-6 px-4 rounded-lg border border-brand-blue/20 max-w-xl mx-auto">
          <p className="text-white font-medium">
            <span className="text-brand-blue font-bold">Não venda seu iPhone de graça por motivo de saúde baixa!</span> 
            <br />Trocamos sua bateria por uma original e voltamos a saúde dele para 100%.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
