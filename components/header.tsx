'use client';

import { ThemeToggle } from './theme-toggle';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 glass backdrop-blur-xl border-b">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Rishav Chatterjee
        </div>

        <nav className="hidden md:flex items-center gap-1">
          <button
            onClick={() => scrollToSection('about')}
            className="px-4 py-2 text-sm font-medium transition-smooth hover:text-blue-600"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="px-4 py-2 text-sm font-medium transition-smooth hover:text-blue-600"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-4 py-2 text-sm font-medium transition-smooth hover:text-blue-600"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-4 py-2 text-sm font-medium transition-smooth hover:text-blue-600"
          >
            Contact
          </button>
        </nav>

      </div>
    </header>
  );
}
