
import React from 'react';
import { InstagramIcon, MessageSquareIcon, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-site-dark w-full border-t border-site-light/10">
      <div className="container px-4 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Logo size="md" className="mb-6" />
            <p className="text-site-light/70 text-base">
              Especialistas em reparos de smartphones, com técnicos qualificados e peças originais.
            </p>
          </div>
          
          <div>
            <h3 className="text-site-light font-medium text-xl mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-site-light/70 hover:text-brand-blue transition-colors text-base">
                  Início
                </Link>
              </li>
              <li>
                <Link to="#services" className="text-site-light/70 hover:text-brand-blue transition-colors text-base">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="#about" className="text-site-light/70 hover:text-brand-blue transition-colors text-base">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="#contact" className="text-site-light/70 hover:text-brand-blue transition-colors text-base">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-site-light font-medium text-xl mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-blue" />
                <span className="text-site-light/70 text-base">31 9994-3225</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquareIcon className="h-5 w-5 text-brand-blue" />
                <a 
                  href="https://wa.me/553199943225" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-site-light/70 hover:text-brand-blue transition-colors text-base"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <InstagramIcon className="h-5 w-5 text-brand-blue" />
                <a 
                  href="https://instagram.com/doutorphone" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-site-light/70 hover:text-brand-blue transition-colors text-base"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-site-light font-medium text-xl mb-6">Horário de Funcionamento</h3>
            <ul className="space-y-4">
              <li className="text-site-light/70 text-base">Segunda a Sexta: 9h às 18h</li>
              <li className="text-site-light/70 text-base">Sábado: 9h às 14h</li>
              <li className="text-site-light/70 text-base">Domingo: Fechado</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-site-light/10 mt-12 pt-12 text-center">
          <p className="text-site-light/70 text-base">
            © 2025 Doutor Phone. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
