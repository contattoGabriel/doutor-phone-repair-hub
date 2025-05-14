
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MenuIcon, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Logo size="md" />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-white hover:text-brand-blue transition-colors">Início</Link>
          <Link to="#services" className="text-white hover:text-brand-blue transition-colors">Serviços</Link>
          <Link to="#about" className="text-white hover:text-brand-blue transition-colors">Sobre</Link>
          <Link to="#contact" className="text-white hover:text-brand-blue transition-colors">Contato</Link>
          <WhatsAppButton />
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md py-4 animate-fade-in">
          <nav className="flex flex-col items-center gap-4">
            <Link 
              to="/" 
              className="text-white hover:text-brand-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="#services" 
              className="text-white hover:text-brand-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link 
              to="#about" 
              className="text-white hover:text-brand-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link 
              to="#contact" 
              className="text-white hover:text-brand-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <WhatsAppButton />
          </nav>
        </div>
      )}
    </header>
  );
};

export const WhatsAppButton: React.FC = () => {
  return (
    <Button 
      className="bg-doctor hover:bg-doctor-dark text-white font-medium px-4 py-2 rounded-md transition-transform duration-300 hover:scale-105"
      onClick={() => window.open('https://wa.me/5531999432225?text=Olá,%20gostaria%20de%20mais%20informações', '_blank')}
    >
      Agendar Agora
    </Button>
  );
};

export default Header;
