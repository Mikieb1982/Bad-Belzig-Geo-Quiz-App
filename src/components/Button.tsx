'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  className = '',
}) => {
  // Base classes
  let baseClasses = 'rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Variant classes
  let variantClasses = '';
  switch (variant) {
    case 'primary':
      variantClasses = 'bg-belzig-green-500 text-white hover:bg-belzig-green-600 focus:ring-belzig-green-500';
      break;
    case 'secondary':
      variantClasses = 'bg-belzig-gray-200 text-belzig-gray-800 hover:bg-belzig-gray-300 focus:ring-belzig-gray-300';
      break;
    case 'outline':
      variantClasses = 'bg-transparent border border-belzig-green-500 text-belzig-green-500 hover:bg-belzig-green-50 focus:ring-belzig-green-500';
      break;
  }
  
  // Size classes
  let sizeClasses = '';
  switch (size) {
    case 'sm':
      sizeClasses = 'px-3 py-1.5 text-sm';
      break;
    case 'md':
      sizeClasses = 'px-4 py-2 text-base';
      break;
    case 'lg':
      sizeClasses = 'px-6 py-3 text-lg';
      break;
  }
  
  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Disabled classes
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${widthClasses} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
