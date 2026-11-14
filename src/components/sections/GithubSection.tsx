import React from 'react';
import { homeData } from '../../data/portfolioData';
import { Activity } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

export const GithubSection: React.FC = () => {
  // Extract username from socialLinks.github (e.g., https://github.com/username -> username)
  const username = homeData.socialLinks.github.replace(/\/$/, '').split('/').pop() || '';

  return (
    <section id="github" className="py-20 bg-gray-50/50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-4">
            <Activity className="w-3.5 h-3.5" />
            Open Source & Contributions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
            GitHub Activity
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base">
            A real-time visual snapshot of my recent code commits, repository activity, and open-source contributions.
          </p>
        </div>

        {/* Contribution Graph Box */}
        <div className="bg-white dark:bg-gray-950 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col items-center">
          {username && username !== '' ? (
            <div className="w-full overflow-x-auto flex justify-center py-2">
              <img
                src={`https://ghchart.rshah.org/10b981/${username}`}
                alt={`${username}'s GitHub Contributions`}
                className="min-w-162.5 h-auto dark:invert dark:hue-rotate-180"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="py-12 text-center text-gray-400">
              <FaGithub className="w-10 h-10 mx-auto mb-3 text-gray-300 dark:text-gray-700" />
              <p className="text-sm font-medium">
                Add your GitHub username in <code className="text-emerald-600 dark:text-emerald-400">portfolioData.ts</code> to display your live activity graph.
              </p>
            </div>
          )}

          {/* Action Link */}
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800 w-full flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>Data synced directly from GitHub</span>
            <a
              href={homeData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <FaGithub className="w-4 h-4" />
              Follow on GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};