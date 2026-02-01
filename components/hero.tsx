'use client';

import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
            Full-Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance">
            Crafting reliable, high-performance web applications with 6+ years of MERN expertise
          </p>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
          I specialize in building scalable web solutions, optimizing performance, and creating seamless user experiences. Currently delivering production-ready applications at DigiAIR Technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button
            onClick={() => scrollToSection('projects')}
            className="glass px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 group transition-smooth hover:bg-blue-600/20"
          >
            View My Work
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 rounded-full font-semibold border-2 border-current transition-smooth hover:bg-foreground/5"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
