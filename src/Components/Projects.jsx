import React from "react";
import Header from "./Header";
import { FaShare } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import Dahz from '../assets/img/Dahz.png'
import ResumeBuilder from '../assets/img/Resume_Builder.png'
import Portfoilio from '../assets/img/Portfolio.png'

const Projects = () => {
  const Projects = [
    {
      Title: "E-Commerce Platform",
      TechStacks: "React, .NETAPI, MSSQL",
      img: Dahz,
      desc: "Full Featured Online Market Place with Payment Integration",
      Link: "https://thedahz.com",
      Code: "https://github.com/sfaizanx",
    },
    {
      Title: "AI Resume Builder",
      TechStacks: "React, NodeJS, MONGODB",
      img: ResumeBuilder,
      desc: "Smart Resume Builder with AI Integration with ATS Verified Templates",
      Link: "https://aismartresume.vercel.app",
      Code: "https://github.com/sfaizanx",
    },
    {
      Title: "Portfolio",
      TechStacks: "React, TailwindCSS",
      img: Portfoilio,
      desc: "Portfoilo website that makes clear to clients and Views about yourself",
      Link: "https://faizan-portfolio-chi.vercel.app/",
      Code: "https://github.com/sfaizanx",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center px-4 py-20 sm:py-28 md:py-32">
  <Header title="PROJECTS" />

  <div className="flex flex-wrap justify-center gap-6 mt-5 w-full">
    {Projects.map((item, idx) => (
      <div
        key={idx}
        className="border rounded-2xl overflow-hidden w-full sm:w-[300px] md:w-[350px] lg:w-[380px] transition-all duration-500 hover:shadow-2xl"
      >
        {/* Project Image */}
        <img
          src={item.img}
          alt={item.Title}
          className="rounded-t-2xl w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover"
        />

        {/* Project Details */}
        <div className="bg-black rounded-b-2xl p-5 sm:p-6 text-white flex flex-col">
          <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold">
            {item.Title}
          </h2>

          <p className="text-sm sm:text-base font-bold tracking-widest mt-1">
            {item.TechStacks}
          </p>

          <p className="text-sm sm:text-base font-medium my-2">
            {item.desc}
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-2 mt-2">
            <a
              href={item.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white p-2 rounded hover:bg-white/10 transition"
            >
              <FaShare /> Live Demo
            </a>

            <a
              href={item.Code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white p-2 rounded hover:bg-white/10 transition"
            >
              <DiGithubBadge size={20} /> Code
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Projects;
