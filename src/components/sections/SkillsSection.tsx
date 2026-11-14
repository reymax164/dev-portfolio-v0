import React from 'react';
import { skillCategories } from '../../data/portfolioData';
import { SkillCard } from '../SkillCard';
import { Cpu } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100/50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-4">
            <Cpu className="w-3.5 h-3.5" />
            Expertise & Stack
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base">
            A comprehensive overview of the programming languages, frameworks, databases, and developer tools I leverage.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((categoryData) => (
            <SkillCard key={categoryData.category} categoryData={categoryData} />
          ))}
        </div>

      </div>
    </section>
  );
};