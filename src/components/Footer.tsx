
import React from 'react';
import { InstagramIcon, MessageSquareIcon, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container px-4 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo size="sm" className="mb-4" />
            <p className="text-white/60 text-sm">
              Especialistas em reparos de smartphones, com técnicos qualificados e peças originais.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/60 hover:text-doctor transition-colors text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link to="#services" className="text-white/60 hover:text-doctor transition-colors text-sm">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="#about" className="text-white/60 hover:text-doctor transition-colors text-sm">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="#contact" className="text-white/60 hover:text-doctor transition-colors text-sm">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-doctor" />
                <span className="text-white/60 text-sm">+55 31 9994-3225</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquareIcon className="h-4 w-4 text-doctor" />
                <a 
                  href="https://wa.me/5531999432225" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-doctor transition-colors text-sm"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <InstagramIcon className="h-4 w-4 text-doctor" />
                <a 
                  href="https://instagram.com/doutorphone" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-doctor transition-colors text-sm"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Horário de Funcionamento</h3>
            <ul className="space-y-2">
              <li className="text-white/60 text-sm">Segunda a Sexta: 9h às 18h</li>
              <li className="text-white/60 text-sm">Sábado: 9h às 14h</li>
              <li className="text-white/60 text-sm">Domingo: Fechado</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2025 Doutor Phone. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
