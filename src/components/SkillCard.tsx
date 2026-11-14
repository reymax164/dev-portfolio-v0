import React from 'react';
import type { SkillCategory } from '../types/portfolio';

interface SkillCardProps {
  categoryData: SkillCategory;
}

export const SkillCard: React.FC<SkillCardProps> = ({ categoryData }) => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-colors flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-100 dark:border-gray-800">
          {categoryData.category}
        </h3>
        
        <div className="grid grid-cols-2 gap-3">
          {categoryData.skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-gray-50/80 dark:bg-gray-800/80 hover:bg-gray-100 dark:hover:bg-emerald-950/50 border border-gray-100/80 dark:border-gray-700 hover:border-gray-200 dark:hover:border-emerald-800 transition-all group"
            >
              {/* Skill Icons CDN badge */}
              <img
                src={`https://skillicons.dev/icons?i=${skill.icon}&theme=light`}
                alt={skill.name}
                className="w-7 h-7 shrink-0 group-hover:scale-110 transition-transform"
                loading="lazy"
                onError={(e) => {
                  // Fallback if an icon identifier fails to load from CDN
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 truncate">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};