
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from 'lucide-react';
import gsap from 'gsap';

interface Testimonial {
  name: string;
  quote: string;
  image: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Ana S.",
      quote: "Meu iPhone voltou como novo em apenas 2 horas! Atendimento impecável e preço justo.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      name: "Carlos M.",
      quote: "A bateria do meu celular estava péssima, após a troca voltou a durar o dia todo. Super recomendo!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      name: "Juliana P.",
      quote: "Quebrei a tela do meu smartphone e achei que teria que comprar outro. O Doutor Phone salvou meu aparelho!",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5
    },
    {
      name: "Ricardo F.",
      quote: "Profissionais pontuais e muito atenciosos. Resolveram o problema da câmera do meu celular rapidamente.",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      rating: 5
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=100",
      }
    });
  }, []);
  
  const nextSlide = () => {
    gsap.to(carouselRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        gsap.to(carouselRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3
        });
      }
    });
  };
  
  const prevSlide = () => {
    gsap.to(carouselRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      onComplete: () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
        gsap.to(carouselRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3
        });
      }
    });
  };
  
  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-site-light to-site-gray/30"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-site-dark mb-4">
            O Que Nossos <span className="text-doctor">Clientes</span> Dizem
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div 
            ref={carouselRef}
            className="transition-all duration-300"
          >
            <Card className="bg-white/80 backdrop-blur-sm border-site-gray/10 overflow-hidden shadow-md">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shrink-0">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-2">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <StarIcon key={i} className="h-5 w-5 fill-doctor text-doctor" />
                      ))}
                    </div>
                    <p className="text-site-dark text-lg md:text-xl italic mb-4">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <p className="text-doctor font-medium">
                      — {testimonials[currentIndex].name}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-center mt-6 gap-3">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-site-gray hover:bg-site-gray/80 flex items-center justify-center text-site-dark transition-colors"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-doctor' : 'bg-site-gray'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-site-gray hover:bg-site-gray/80 flex items-center justify-center text-site-dark transition-colors"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
