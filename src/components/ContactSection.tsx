
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PhoneIcon, MailIcon, MessageSquareIcon, InstagramIcon, MapPinIcon } from 'lucide-react';
import gsap from 'gsap';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=100",
      }
    });
    
    tl.from(formRef.current, {
      x: -50,
      opacity: 0,
      duration: 0.8,
    }).from(infoRef.current, {
      x: 50,
      opacity: 0,
      duration: 0.8,
    }, "-=0.6");
    
    return () => {
      tl.kill();
    };
  }, []);
  
  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-black"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Entre em <span className="text-doctor">Contato</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Estamos prontos para ajudar com o reparo do seu dispositivo. Preencha o formulário 
            abaixo ou entre em contato diretamente pelos nossos canais de atendimento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <form ref={formRef} className="bg-zinc-900/50 p-6 md:p-8 rounded-lg border border-white/10">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-white text-sm font-medium mb-1">
                  Nome Completo
                </label>
                <Input 
                  id="name" 
                  placeholder="Seu nome" 
                  className="bg-black/50 border-white/20 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-1">
                  E-mail
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="seu@email.com" 
                  className="bg-black/50 border-white/20 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-white text-sm font-medium mb-1">
                  Telefone
                </label>
                <Input 
                  id="phone" 
                  placeholder="(00) 00000-0000" 
                  className="bg-black/50 border-white/20 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="model" className="block text-white text-sm font-medium mb-1">
                  Modelo do Celular
                </label>
                <Input 
                  id="model" 
                  placeholder="Ex: iPhone 13, Samsung Galaxy S21" 
                  className="bg-black/50 border-white/20 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white text-sm font-medium mb-1">
                  Descrição do Problema
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Descreva o problema com seu dispositivo" 
                  className="bg-black/50 border-white/20 text-white min-h-[120px]"
                />
              </div>
              
              <Button className="w-full bg-doctor hover:bg-doctor-dark text-white">
                Enviar Mensagem
              </Button>
            </div>
          </form>
          
          <div 
            ref={infoRef}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-doctor/10 flex items-center justify-center shrink-0">
                <PhoneIcon className="h-5 w-5 text-doctor" />
              </div>
              <div>
                <h3 className="text-white font-medium text-lg mb-1">Telefone</h3>
                <p className="text-white/70">+55 31 9994-3225</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-doctor/10 flex items-center justify-center shrink-0">
                <MailIcon className="h-5 w-5 text-doctor" />
              </div>
              <div>
                <h3 className="text-white font-medium text-lg mb-1">E-mail</h3>
                <p className="text-white/70">contato@doutorphone.com.br</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-doctor/10 flex items-center justify-center shrink-0">
                <MessageSquareIcon className="h-5 w-5 text-doctor" />
              </div>
              <div>
                <h3 className="text-white font-medium text-lg mb-1">WhatsApp</h3>
                <p className="text-white/70">
                  <a 
                    href="https://wa.me/5531999432225" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-doctor hover:underline"
                  >
                    +55 31 9994-3225
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-doctor/10 flex items-center justify-center shrink-0">
                <InstagramIcon className="h-5 w-5 text-doctor" />
              </div>
              <div>
                <h3 className="text-white font-medium text-lg mb-1">Instagram</h3>
                <p className="text-white/70">
                  <a 
                    href="https://instagram.com/doutorphone" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-doctor hover:underline"
                  >
                    @doutorphone
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-doctor/10 flex items-center justify-center shrink-0">
                <MapPinIcon className="h-5 w-5 text-doctor" />
              </div>
              <div>
                <h3 className="text-white font-medium text-lg mb-1">Endereço</h3>
                <p className="text-white/70">Av. Afonso Pena, 1500, Belo Horizonte - MG</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
