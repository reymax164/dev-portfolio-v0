// src/components/Navbar.tsx

import React, { useState, useEffect } from 'react';
import { navItems, homeData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = navItems.map((item) => item.href.replace('#', ''));
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold text-md text-emerald-700 dark:text-emerald-400 tracking-tight cursor-pointer">
          {homeData.firstName} {homeData.lastName}
        </a>
        <nav className="hidden md:flex items-center space-x-8 cursor-pointer">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative py-1 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-emerald-600 dark:text-emerald-400 font-semibold'
                    : 'text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400'
                }`}
              >
                {item.label}
                {/* Active Underline Pill */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 dark:bg-emerald-400 rounded-full animate-in fade-in zoom-in duration-200" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="md:hidden">
          <a
            href="#contact"
            className="text-xs font-semibold bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-xs hover:bg-emerald-700 transition-colors"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
};