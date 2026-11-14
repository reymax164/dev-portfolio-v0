// src/components/Footer.tsx

import React from 'react';
import { homeData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        
        <div>
          <p className="font-bold text-gray-900 dark:text-white tracking-tight">
            {homeData.firstName} {homeData.lastName}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {homeData.role} • Built with React, TypeScript & Tailwind CSS
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <span>© {currentYear} All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
};