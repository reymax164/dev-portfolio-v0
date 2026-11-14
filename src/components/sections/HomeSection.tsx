import React from 'react';
import { homeData } from '../../data/portfolioData';
import { ArrowRight, FileText } from 'lucide-react';

const Github: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const HomeSection: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-linear-to-b bg-gray-100/50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Actively looking for OJT
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-tight mb-4">
              <span className='font-serif italic font-normal text-gray-900 dark:text-white'>Hi, I'm</span><br/>
              <span className="text-3xl sm:text-4xl md:text-5xl text-emerald-600 dark:text-emerald-400 font-bold mt-2">{homeData.firstName} </span>
              <span className='text-3xl sm:text-4xl md:text-5xl text-emerald-600 dark:text-emerald-400 font-bold mt-2'>{homeData.lastName}</span>
            </h1>

            <p className="text-xl md:text-xl font-normal italic text-gray-700 dark:text-gray-300 mb-6">
              {homeData.role}
            </p>

            <p className="text-gray-600 dark:text-gray-400 text-base md:text-md max-w-xl mb-8 leading-relaxed">
              {homeData.summary || "Summary."}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-xl shadow-sm transition-all text-sm"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={homeData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 font-medium px-6 py-3 rounded-xl shadow-sm transition-all text-sm cursor-pointer"
              >
                <FileText className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                Resume
              </a>

                            <a
                href={homeData.coverLetterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 font-medium px-6 py-3 rounded-xl shadow-sm transition-all text-sm"
              >
                <FileText className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                Cover Letter
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-4 text-gray-500 dark:text-gray-400">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">Connect:</span>
              <a
                href={homeData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={homeData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Visual / Avatar Box */}
          <div className="relative order-first shrink-0 md:order-last">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl bg-linear-to-tr from-emerald-600 to-teal-400 p-1 shadow-xl">
              <div className="w-full h-full bg-white dark:bg-gray-900 rounded-2xl flex items-center justify-center overflow-hidden">
                {homeData.avatarUrl && homeData.avatarUrl !== "/" ? (
                  <img
                    src={homeData.avatarUrl}
                    alt={`avatar`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  /* Fallback avatar placeholder styling */
                  <div className="text-center p-6">
                    <span className="text-6xl font-black text-gray-200 dark:text-gray-700 tracking-tighter">
                      {homeData.firstName[0]}{homeData.lastName[0]}
                    </span>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">Avatar / Photo</p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};