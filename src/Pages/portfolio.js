import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { Brightness4, Brightness7} from "@mui/icons-material";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setProjects([
      {
        id: 1,
        title: "E-Commerce Store",
        description:
          "Full-stack e-commerce app with React and .NET Core backend.",
        liveUrl: "https://example.com/store",
        githubUrl: "https://github.com/username/store",
      },
      {
        id: 2,
        title: "Portfolio Website",
        description:
          "Personal responsive portfolio built with React and Tailwind.",
        liveUrl: "https://example.com/portfolio",
        githubUrl: "https://github.com/username/portfolio",
      },
    ]);
  }, []);


  return (
    <div className={`${darkMode ? "dark" : ""} transition-colors duration-700`}>
      <div className="min-h-screen bg-gradient-to-tr from-gray-100 via-gray-200 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 px-6 py-10">
        {/* Toggle */}
        <div className="flex justify-end">
          <Button
            startIcon={darkMode ? <Brightness7 /> : <Brightness4 />}
            onClick={() => setDarkMode(!darkMode)}
          ></Button>
        </div>

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">
            Hi, I'm FAIZAN SAYYED
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Full-Stack Developer | React | .NET Core | Tailwind | Sql
          </p>
          <a
            href="mailto:sayyedfaizan1777@gmail.com"
            className="mt-6 inline-block"
          >
            <Button variant="outlined" className="mt-5">
              Hire Me
            </Button>
          </a>
        </motion.section>

        {/* About Me */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto my-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
          <p className="text-lg text-justify">
            I'm a freelance web developer who loves to design and build clean,
            responsive, and scalable web applications. Passionate about solving
            problems and constantly improving user experiences with modern tools
            like React, Tailwind, .NET Core, and more...
          </p>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-5xl mx-auto my-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              ".NET Core",
              "SQL",
              "Tailwind CSS",
              "Git",
              ".NET API",
              "NodeJS",
              "MongoDB",
              "C/C++",
            ].map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg text-center"
              >
                <p className="font-semibold">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="max-w-6xl mx-auto my-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6"
              >
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="flex justify-between">
                  <a
                    href={project.liveUrl}
                    className="text-indigo-600 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-indigo-600 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6 }}
          className="max-w-3xl mx-auto text-center my-16"
        >
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="mb-4">Interested in working together? Let’s connect!</p>
          <a href="mailto:sayyedfaizan1777@gmail.com">
            <Button variant="contained">Send Email</Button>
          </a>
        </motion.section>

        {/* Resume */}
        <section className="text-center my-16">
          <h2 className="text-3xl font-bold mb-4">Download Resume</h2>
          <a href="Faizan-Resume.pdf" download>
            <Button variant="outlined">Download PDF</Button>
          </a>
        </section>

        {/* Testimonials */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8 }}
          className="max-w-4xl mx-auto my-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Testimonials</h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <p className="italic">
                “Incredible developer! Delivered the project on time and
                exceeded expectations.”
              </p>
              <p className="text-right text-sm mt-2 font-light">
                — Ansari Saud
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <p className="italic">
                “Great communication and quality work. Highly recommended!”
              </p>
              <p className="text-right text-sm mt-2 font-light">
                — Shahad Mulla
              </p>
            </div>
          </div>
        </motion.section>

        {showTopBtn && (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="fixed bottom-4 right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition duration-700 z-50"
          >
            ↑
          </a>
        )}

      </div>
    </div>
  );
}
