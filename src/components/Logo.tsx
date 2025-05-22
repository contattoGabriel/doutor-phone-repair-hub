
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
      image: 'h-8'
    },
    md: {
      container: 'h-10',
      image: 'h-10'
    },
    lg: {
      container: 'h-16',
      image: 'h-16'
    }
  };

  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/e14b38c9-7341-422f-9370-28ecf982fc1a.png" 
        alt="DoutorPhone Logo" 
        className={`${sizes[size].image} object-contain`}
      />
    </Link>
  );
};

export default Logo;
