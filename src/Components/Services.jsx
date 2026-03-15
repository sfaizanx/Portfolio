import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const SERVICES = [
  {
    number: "01",
    title: "Web Development",
    desc: "Full-stack applications with modern frameworks and best practices",
    tech: ["React", "Node.js", "TypeScript"],
  },
  {
    number: "02",
    title: "API Development",
    desc: "RESTful APIs with robust architecture",
    tech: ["Express", "REST", ".NET API"],
  },
  {
    number: "03",
    title: "Database Design",
    desc: "Scalable database architecture and optimization",
    tech: ["PostgreSQL", "MongoDB", "Ms SQL", "MySQL"],
  },
  {
    number: "04",
    title: "Cloud Solutions",
    desc: "Deployment and scaling on modern platforms",
    tech: ["Vercel", "Docker", "Netlify"],
  },
];

export const Services = () => {
  return (
    <section className="py-32 px-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="space-grotesk text-4xl md:text-6xl font-bold text-white mb-8">
            SERVICES
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Comprehensive development services from concept to deployment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-800">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-black p-8 hover:bg-zinc-900 transition-all duration-300 cursor-pointer hover-scale group"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-gray-600 text-sm font-mono">
                  {service.number}
                </span>
                <FaArrowRight className="text-gray-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-white text-xl font-medium mb-4 space-grotesk">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-zinc-800 text-gray-400 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
