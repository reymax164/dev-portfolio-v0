import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/sections/HomeSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { EducationSection } from './components/sections/EducationSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/Footer';
import { CursorTrail } from './components/CursorTrail';
import { Sun, Moon } from 'lucide-react';

export function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode])

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <div className="app-interaction min-h-screen select-none cursor-none bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 selection:bg-emerald-500 selection:text-white transition-colors duration-300">
      <button
        onClick={toggleDarkMode}
        aria-label="Toggle Theme"
        aria-pressed={isDarkMode}
        className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none"
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5 text-amber-400 fill-amber-400/20" />
        ) : (
          <Moon className="w-5 h-5 text-emerald-600 fill-emerald-600/20" />
        )}
      </button>

      <Navbar />
      <main>
        <HomeSection />
        <SkillsSection />
        <ProjectsSection isDarkMode={isDarkMode} />
        <CertificationsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      <CursorTrail />
    </div>
  );
}

export default App;