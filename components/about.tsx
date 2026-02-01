export function About() {
  const skills = {
    'Frontend': ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Redux', 'TanStack', 'Tailwind', 'Shadcn'],
    'Backend': ['Node.js', 'Express.js', 'WebSockets', 'REST APIs'],
    'Database': ['MongoDB', 'PostgreSQL'],
    'DevOps': ['Docker', 'Docker Compose', 'AWS'],
  };

  return (
    <section id="about" className="py-20 px-4 md:px-6 bg-foreground/2">
      <div className="container mx-auto max-w-4xl space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <p className="text-lg text-muted-foreground">Full-Stack MERN Developer with passion for building scalable applications</p>
        </div>

        <div className="glass p-8 md:p-12 space-y-6">
          <p className="text-lg leading-relaxed text-balance">
            I'm a Full-Stack MERN developer with 6 years of experience delivering reliable, high-performance web applications. I specialize in building streamlined APIs, creating user-focused front-end solutions, and developing real-time and large-scale products.
          </p>
          <p className="text-lg leading-relaxed text-balance">
            At DigiAIR Technologies, I've delivered 10+ production-ready applications, optimized performance by up to 35%, and designed reusable components that reduce development time. I'm passionate about writing clean, efficient code and collaborating with teams to deliver exceptional digital experiences.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="glass p-6 space-y-3">
                <h4 className="font-semibold text-lg text-blue-600 dark:text-blue-400">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-blue-600/10 border border-blue-600/30 text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
