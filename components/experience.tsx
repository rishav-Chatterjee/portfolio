export function Experience() {
  const experience = [
    {
      role: 'Full-Stack Developer',
      company: 'DigiAIR Technologies & Analytics Pvt. Ltd.',
      period: 'July 2019 - Present',
      highlights: [
        'Delivered 10+ production-ready web applications using MERN stack and Next.js',
        'Built and optimized 5+ REST APIs and WebSocket endpoints, reducing latency by 15%',
        'Designed ~15+ reusable components, reducing development time by 20-25%',
        'Improved page load and rendering performance by up to 35% through optimization',
        'Reduced post-deployment issues by 15-20% through better testing and documentation',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science and Technology',
      school: 'Abacus Institute of Engineering and Management',
      period: 'Sep 2019 - Aug 2022',
    },
    {
      degree: 'Diploma in Computer Science and Technology',
      school: 'Technique Polytechnic Institute',
      period: 'Sep 2016 - Aug 2019',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl space-y-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="glass p-8 space-y-4 border-l-4 border-l-blue-600">
                <div>
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-foreground">
                      <span className="text-blue-600 dark:text-blue-400 font-bold flex-shrink-0 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Education</h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="glass p-8 space-y-2">
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className="text-lg text-muted-foreground">{edu.school}</p>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
