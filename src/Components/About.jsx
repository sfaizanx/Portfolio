import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-32 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-8">
            <h2 className="space-grotesk text-4xl md:text-6xl font-bold">
              ABOUT
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Full-stack developer passionate about crafting modern 
                web experiences. I combine technical problem-solving with thoughtful design to build applications that are scalable, efficient, and user-friendly.
              </p>
              <p>
                I work with modern technologies like JavaScript, React, and Node.js to develop full-stack solutions and continuously improve my skills by building real-world projects.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-white font-medium mb-4 tracking-wide">
                  FRONTEND
                </h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>React</div>
                  <div>TypeScript</div>
                  <div>Tailwind CSS</div>
                </div>
              </div>
              <div>
                <h3 className="text-white font-medium mb-4 tracking-wide">
                  TOOLS
                </h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>VS Code</div>
                  <div>Git & GitHub</div>
                  <div>Docker</div>
                  <div>Figma</div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-white font-medium mb-4 tracking-wide">
                  BACKEND
                </h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>Node.js & Express</div>
                  <div>C# & .NET</div>
                  <div>MS SQL & MY SQL</div>
                  <div>PostgreSQL</div>
                  <div>MongoDB</div>
                </div>
              </div>
              <div>
                <h3 className="text-white font-medium mb-4 tracking-wide">
                  CLOUD
                </h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div>Vercel</div>
                  <div>Netlify</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
