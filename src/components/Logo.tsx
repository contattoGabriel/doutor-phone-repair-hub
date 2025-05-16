
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  // Size classes
  const sizes = {
    sm: {
      container: 'gap-1',
      icon: 'h-5 w-5',
      text: 'text-lg'
    },
    md: {
      container: 'gap-2',
      icon: 'h-7 w-7',
      text: 'text-xl md:text-2xl'
    },
    lg: {
      container: 'gap-3',
      icon: 'h-9 w-9',
      text: 'text-3xl md:text-4xl'
    }
  };

  return (
    <Link to="/" className={`flex items-center ${sizes[size].container} ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-brand-blue rounded-full blur-sm opacity-70"></div>
        <Phone className={`${sizes[size].icon} text-white relative z-10`} />
      </div>
      <span className={`font-display ${sizes[size].text} font-bold`}>
        Doutor<span className="text-doctor">Phone</span>
        <span className="text-brand-blue">.</span>
      </span>
    </Link>
  );
};

export default Logo;
