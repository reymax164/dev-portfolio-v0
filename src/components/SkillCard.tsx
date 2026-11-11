import React from 'react';
import type { SkillCategory } from '../types/portfolio';

interface SkillCardProps {
  categoryData: SkillCategory;
}

export const SkillCard: React.FC<SkillCardProps> = ({ categoryData }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between cursor-pointer">
      <div>
        <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-100">
          {categoryData.category}
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {categoryData.skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-gray-50/80 hover:bg-emerald-50/50 border border-gray-100/80 hover:border-emerald-100 transition-all group"
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
              <span className="text-xs font-semibold text-gray-700 truncate">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};