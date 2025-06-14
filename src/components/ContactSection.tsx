
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone as PhoneIcon, Mail as MailIcon, MessageSquare as MessageSquareIcon, Instagram as InstagramIcon, MapPin as MapPinIcon } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import gsap from 'gsap';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verificar se os campos obrigatórios estão preenchidos
    if (!formData.name || !formData.phone || !formData.model) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }
    
    // Formatar a mensagem para o WhatsApp
    const message = `*Formulário de Contato - Doutor Phone*
    
*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*Telefone:* ${formData.phone}
*Modelo:* ${formData.model}
*Mensagem:* ${formData.message}`;
    
    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Abrir o WhatsApp com a mensagem formatada
    window.open(`https://wa.me/553199943225?text=${encodedMessage}`, '_blank');
  };
  
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
      className="py-20 bg-site-dark"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-site-light mb-4">
            Entre em <span className="text-brand-blue">Contato</span>
          </h2>
          <p className="text-site-light/70 max-w-2xl mx-auto">
            Estamos prontos para ajudar com o reparo do seu dispositivo. Preencha o formulário 
            abaixo ou entre em contato diretamente pelos nossos canais de atendimento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <form ref={formRef} className="bg-site-dark/50 p-6 md:p-8 rounded-lg border border-site-light/10" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-site-light text-sm font-medium mb-1">
                  Nome Completo <span className="text-brand-blue">*</span>
                </label>
                <Input 
                  id="name" 
                  placeholder="Seu nome" 
                  className="bg-site-dark/50 border-site-light/20 text-site-light"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-site-light text-sm font-medium mb-1">
                  E-mail
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="seu@email.com" 
                  className="bg-site-dark/50 border-site-light/20 text-site-light"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-site-light text-sm font-medium mb-1">
                  Telefone <span className="text-brand-blue">*</span>
                </label>
                <Input 
                  id="phone" 
                  placeholder="(00) 00000-0000" 
                  className="bg-site-dark/50 border-site-light/20 text-site-light"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="model" className="block text-site-light text-sm font-medium mb-1">
                  Modelo do Celular <span className="text-brand-blue">*</span>
                </label>
                <Input 
                  id="model" 
                  placeholder="Ex: iPhone 13, Samsung Galaxy S21" 
                  className="bg-site-dark/50 border-site-light/20 text-site-light"
                  value={formData.model}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-site-light text-sm font-medium mb-1">
                  Descrição do Problema
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Descreva o problema com seu dispositivo" 
                  className="bg-site-dark/50 border-site-light/20 text-site-light min-h-[120px]"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-darkBlue text-site-light">
                Enviar Mensagem
              </Button>
            </div>
          </form>
          
          <div 
            ref={infoRef}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                <PhoneIcon className="h-5 w-5 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-site-light font-medium text-lg mb-1">Telefone</h3>
                <p className="text-site-light/70">31 9994-3225</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                <MailIcon className="h-5 w-5 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-site-light font-medium text-lg mb-1">E-mail</h3>
                <p className="text-site-light/70">contato@doutorphone.com.br</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                <MessageSquareIcon className="h-5 w-5 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-site-light font-medium text-lg mb-1">WhatsApp</h3>
                <p className="text-site-light/70">
                  <a 
                    href="https://wa.me/553199943225" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:underline"
                  >
                    31 9994-3225
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                <InstagramIcon className="h-5 w-5 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-site-light font-medium text-lg mb-1">Instagram</h3>
                <p className="text-site-light/70">
                  <a 
                    href="https://instagram.com/doutorphone" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:underline"
                  >
                    @doutorphone
                  </a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                <MapPinIcon className="h-5 w-5 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-site-light font-medium text-lg mb-1">Endereço</h3>
                <p className="text-site-light/70">Av. Afonso Pena, 1500, Belo Horizonte - MG</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
