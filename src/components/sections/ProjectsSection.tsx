import React from 'react';
import { projects, homeData } from '../../data/portfolioData';
import { ProjectCard } from '../ProjectCard';
import { FolderGit2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { GitHubCalendar } from 'react-github-calendar';

const calendarTheme = {
  light: ['#e5e7eb', '#a7f3d0', '#6ee7b7', '#10b981', '#047857'],
  dark: ['#374151', '#064e3b', '#047857', '#10b981', '#6ee7b7'],
};

export const ProjectsSection: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const username = homeData.socialLinks.github.replace(/\/$/, '').split('/').pop() || '';

  return (
    <section id="projects" className="py-20 bg-gray-100/50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            Portfolio Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base">
            An overview of the notable web applications projects I have developed.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub Activity Sub-Section */}
        <div className="mt-12 pt-12 border-t border-gray-100 dark:border-gray-800">
          <div className="text-center max-w-xl mx-auto mb-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight mb-2">
              GitHub Activity
            </h3>
          </div>

          <div className="bg-gray-50/50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-xs overflow-hidden flex flex-col items-center">
            {username && username !== '' ? (
              <div className="w-full overflow-x-auto py-2 text-gray-600 dark:text-gray-400" tabIndex={0} aria-label="GitHub contributions calendar">
                <div className="w-max mx-auto">
                  <GitHubCalendar
                    username={username}
                    colorScheme={isDarkMode ? 'dark' : 'light'}
                    theme={calendarTheme}
                    errorMessage="Unable to load GitHub contributions. Please try again later."
                  />
                </div>
              </div>
            ) : (
              <div className="py-8 text-center text-gray-400">
                <FaGithub className="w-8 h-8 mx-auto mb-2 text-gray-300 dark:text-gray-600" />
                <p>Configure a GitHub profile to display contributions.</p>
              </div>
            )}

            <div className="mt-4 pt-4 border-t border-gray-200/60 dark:border-gray-700 w-full flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>Contribution data via a third-party service</span>
              <a
                href={homeData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
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