import React from 'react';
import { navItems, heroData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/**/}
        <a href="#home" className="font-bold text-md text-emerald-600 tracking-tight">
            {heroData.firstName} {heroData.lastName}
        </a>

        {/* nav links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button placeholder*/}
        <div className="md:hidden">
          <a
            href="#contact"
            className="text-xs font-semibold bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-emerald-700 transition-colors"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
};