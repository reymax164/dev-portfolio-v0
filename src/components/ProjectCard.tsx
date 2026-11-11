// src/components/ProjectCard.tsx

import React from 'react';
import type { Project } from '../types/portfolio';
import { ExternalLink, GitFork, Calendar } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between cursor-pointer group">
      <div>
        {/* Project Thumbnail / Preview Box */}
        <div className="relative h-48 bg-linear-to-br from-gray-100 to-gray-200 overflow-hidden flex items-center justify-center border-b border-gray-100">
          <div className="text-center p-4">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Project Preview</span>
            <p className="text-sm font-medium text-gray-600 mt-1">{project.title}</p>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-3">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
              {project.title}
            </h3>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full shrink-0">
              <Calendar className="w-3 h-3" />
              {project.dateRange}
            </span>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium bg-gray-50 text-gray-700 border border-gray-100 px-2.5 py-1 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Links Footer */}
      <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 flex items-center justify-end gap-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-gray-900 bg-white border border-gray-200 px-3 py-2 rounded-xl shadow-xs transition-colors"
          >
            <GitFork className="w-4 h-4" />
            Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 px-3 py-2 rounded-xl shadow-xs transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};