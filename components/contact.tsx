"use client";

import { Mail, Linkedin, Github, Phone, Twitter } from "lucide-react";

export function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "iamrishav2606@gmail.com",
      href: "mailto:iamrishav2606@gmail.com",
      icon: Mail,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/iamrishavchatterjee",
      href: "https://linkedin.com/in/iamrishavchatterjee",
      icon: Linkedin,
    },
    {
      label: "X",
      value: "x.com/Rishav_Chatter",
      href: "https://x.com/Rishav_Chatter",
      icon: Twitter,
    },

    {
      label: "GitHub",
      value: "github.com/rishav-Chatterjee",
      href: "https://github.com/rishav-Chatterjee",
      icon: Github,
    },
  ];

  return (
    <section id="contact" className="pt-20 pb-10 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Let's collaborate and build something amazing together
          </p>
        </div>

        <div className="glass p-12 space-y-8">
          <p className="text-center text-lg text-foreground leading-relaxed">
            I'm always interested in hearing about new projects and
            opportunities. Feel free to reach out through any of the channels
            below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contacts.map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <a
                  key={idx}
                  href={contact.href}
                  target={
                    contact.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contact.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group p-6 glass rounded-xl flex items-start gap-4 transition-smooth hover:bg-white/15 dark:hover:bg-white/10"
                >
                  <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div className="space-y-1">
                    <p className="font-semibold text-foreground">
                      {contact.label}
                    </p>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-smooth break-all">
                      {contact.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          <p>Location: Tribeni, Hooghly, West Bengal, India</p>
        </div>
      </div>
    </section>
  );
}
