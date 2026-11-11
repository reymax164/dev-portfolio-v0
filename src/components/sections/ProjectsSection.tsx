// src/components/sections/ProjectsSection.tsx

import React from 'react';
import { projects, heroData } from '../../data/portfolioData';
import { ProjectCard } from '../ProjectCard';
import { FolderGit2, Activity } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

export const ProjectsSection: React.FC = () => {
  // Extract username from socialLinks.github (e.g., https://github.com/username -> username)
  const username = heroData.socialLinks.github.replace(/\/$/, '').split('/').pop() || '';

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
            My notable web application projects as of now.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub Activity Sub-Section */}
        <div className="mt-12 pt-12 border-t border-gray-100">
          <div className="text-center max-w-xl mx-auto mb-4">
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">
              GitHub Contribution Activity
            </h3>
          </div>

          <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 shadow-xs overflow-hidden flex flex-col items-center">
            {username && username !== '' ? (
              <div className="w-full overflow-x-auto flex justify-center py-2">
                <img
                  src={`https://ghchart.rshah.org/10b981/${username}`}
                  alt={`${username}'s GitHub Contributions`}
                  className="min-w-162.5 h-auto"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="py-8 text-center text-gray-400">
                <FaGithub className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                <p className="text-xs font-medium">Add your GitHub username in portfolioData.ts to view the activity graph.</p>
              </div>
            )}

            <div className="mt-4 pt-4 border-t border-gray-200/60 w-full flex items-center justify-between text-xs text-gray-500">
              <span>Synced directly from GitHub</span>
              <a
                href={heroData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-emerald-600 hover:underline"
              >
                <FaGithub className="w-4 h-4" />
                View Profile
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};