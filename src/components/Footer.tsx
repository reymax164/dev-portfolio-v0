// src/components/Footer.tsx

import React from 'react';
import { heroData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        
        <div>
          <p className="font-bold text-gray-900 tracking-tight">
            {heroData.firstName} {heroData.lastName}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {heroData.role} • Built with React, TypeScript & Tailwind CSS
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>© {currentYear} All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
};