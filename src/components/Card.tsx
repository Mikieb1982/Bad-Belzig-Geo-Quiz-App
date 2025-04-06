'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  className = '',
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {title && (
        <div className="bg-belzig-green-500 text-white px-4 py-3">
          <h3 className="font-semibold">{title}</h3>
        </div>
      )}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default Card;
