import React from 'react';
import { projects } from '../../data/portfolioData';
import { ProjectCard } from '../ProjectCard';
import { FolderGit2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            Portfolio Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-base">
            A selection of robust full-stack web and mobile systems I've built, focusing on clean code architecture and optimized user workflows.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};