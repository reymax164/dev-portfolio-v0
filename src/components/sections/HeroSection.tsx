import React from 'react';
import { heroData } from '../../data/portfolioData';
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

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-linear-to-b from-gray-50/50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for opportunities & projects
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black tracking-tight mb-4">
              Hi, I'm
              <span className="text-emerald-600"> {heroData.firstName} {heroData.lastName}</span>
            </h1>

            <p className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
              {heroData.role}
            </p>

            <p className="text-gray-600 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
              {heroData.summary || "Summary."}
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
                href={heroData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 font-medium px-6 py-3 rounded-xl shadow-sm transition-all text-sm"
              >
                <FileText className="w-4 h-4 text-gray-500" />
                Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-4 text-gray-500">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Connect:</span>
              <a
                href={heroData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={heroData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Visual / Avatar Box */}
          <div className="relative shrink-0">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 p-1 shadow-xl">
              <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center overflow-hidden">
                {heroData.avatarUrl && heroData.avatarUrl !== "/" ? (
                  <img
                    src={heroData.avatarUrl}
                    alt={`${heroData.firstName} ${heroData.lastName}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  /* Fallback avatar placeholder styling */
                  <div className="text-center p-6">
                    <span className="text-6xl font-black text-gray-200 tracking-tighter">
                      {heroData.firstName[0]}{heroData.lastName[0]}
                    </span>
                    <p className="text-xs text-gray-400 mt-2">Avatar / Photo</p>
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