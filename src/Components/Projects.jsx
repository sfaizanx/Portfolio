import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import Dahz from "../assets/img/Dahz.png";
import ResumeBuilder from "../assets/img/Resume_Builder.png";
import Portfolio from "../assets/img/Portfolio.png";

const PROJECTS = [
  {
    number: "01",
    Title: "E-Commerce Platform",
    year: "2024",
    type: "Web Application",
    TechStacks: ["Shopify"],
    img: Dahz,
    desc: "Full Featured Online Market Place with Payment Integration",
    Link: "https://thedahz.com",
    Code: "https://github.com/sfaizanx",
  },
  {
    number: "02",
    Title: "AI Resume Builder",
    year: "2024",
    type: "Web Application",
    TechStacks: ["React", "NodeJS", "MongoDB"],
    img: ResumeBuilder,
    desc: "Smart Resume Builder with AI Integration with ATS Verified Templates",
    Link: "https://aismartresume.vercel.app",
    Code: "https://github.com/sfaizanx",
  },
  {
    number: "03",
    Title: "Portfolio",
    year: "2024",
    type: "Frontend Development",
    TechStacks: ["React", "TailwindCSS"],
    img: Portfolio,
    desc: "Portfolio website that clearly presents your work and skills to clients.",
    Link: "https://buildbyfaizan.vercel.app/",
    Code: "https://github.com/sfaizanx",
  },
];

export const Projects = () => {
  return (
    <section id="work" className="py-32 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="space-grotesk text-4xl md:text-6xl font-bold text-white mb-8">
            SELECTED WORK
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl">
            A showcase of my recent projects including full-stack
            applications, APIs, and modern web experiences.
          </p>
        </div>

        <div className="space-y-32">
          {PROJECTS.map((project) => (
            <div
              key={project.Title}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 group"
            >
              {/* LEFT SIDE */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600 text-sm font-mono">
                    {project.number}
                  </span>

                  <span className="text-gray-600 text-sm">
                    {project.year}
                  </span>
                </div>

                <div>
                  <h3 className="space-grotesk text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors">
                    {project.Title}
                  </h3>

                  <div className="text-gray-500 text-sm mb-4">
                    {project.type}
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.TechStacks.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-zinc-800 text-gray-400 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-6">
                    <a
                      href={project.Link}
                      target="_blank"
                      className="text-white hover:text-gray-400 transition-colors flex items-center gap-2"
                    >
                      View Project
                      <FaExternalLinkAlt />
                    </a>

                    <a
                      href={project.Code}
                      target="_blank"
                      className="text-white hover:text-gray-400 transition-colors flex items-center gap-2"
                    >
                      Code
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE IMAGE */}
              <div className="lg:col-span-6">
                <div className="overflow-hidden border border-zinc-800">
                  <img
                    src={project.img}
                    alt={project.Title}
                    className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};