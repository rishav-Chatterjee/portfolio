import { ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Excalidraw Canvas Application',
      description: 'Real-time collaborative drawing application enabling multiple users to draw simultaneously with smooth syncing.',
      tech: ['Next.js', 'React', 'Redux Toolkit', 'WebSockets'],
      highlights: [
        'Scalable Redux architecture for canvas state management',
        'Reduced data-loss issues by ~30%',
        'Real-time collaboration with efficient state syncing',
      ],
    },
    {
      title: 'Comment Library Module',
      description: 'Reusable, plug-and-play comment module supporting threaded comments and real-time updates across projects.',
      tech: ['Next.js', 'TypeScript', 'Redux Toolkit', 'WebSockets'],
      highlights: [
        'WebSocket-based live commenting reducing delays by 40%',
        'Modular API design improving integration time by 25%',
        'Cross-project integration support',
      ],
    },
    {
      title: 'Video Call Application',
      description: 'Secure video calling system with authentication, meeting rooms, and comprehensive participant controls.',
      tech: ['Jitsi', 'Next.js', 'React', 'Redux'],
      highlights: [
        'Secure video calling with Jitsi SDK integration',
        'Session handling and meeting scheduling',
        '20% improvement in call stability and UI responsiveness',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-6 bg-foreground/2">
      <div className="container mx-auto max-w-4xl space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">Building scalable, high-performance applications</p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="glass p-8 md:p-10 space-y-6 group">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-smooth">{project.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-blue-600/10 border border-blue-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="space-y-2 text-foreground">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-blue-600 dark:text-blue-400 font-bold flex-shrink-0">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
