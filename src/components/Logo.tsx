
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  // Size classes
  const sizes = {
    sm: {
      container: 'h-8',
      text: 'text-lg'
    },
    md: {
      container: 'h-10',
      text: 'text-xl md:text-2xl'
    },
    lg: {
      container: 'h-16',
      text: 'text-3xl md:text-4xl'
    }
  };

  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/79ed1a2c-e339-4902-87ac-6bfe09ba66ec.png" 
        alt="DoutorPhone Logo" 
        className={`${sizes[size].container} object-contain`}
      />
    </Link>
  );
};

export default Logo;
