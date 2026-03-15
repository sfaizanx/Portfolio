import React from 'react';

export const Hero = ({ currentYear }) => {
  return (
    <>
      {/* Year indicator */}
      <div className="fixed top-8 right-8 z-50 text-white text-xl font-light fade-in">
        {currentYear}
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-32">
          <div className="space-y-16">
            {/* Main Portfolio Title */}
            <div className="space-y-4">
              <h1 className="space-grotesk text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tighter fade-in">
                DEVELOPER
              </h1>
              <h2 className="space-grotesk text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tighter text-stroke fade-in-delay">
                PORTFOLIO
              </h2>
            </div>

            {/* Name and Description */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-16 fade-in-delay-2">
              <div className="space-y-6">
                <h3 className="space-grotesk text-2xl font-medium">
                  FAIZAN SAYYED
                </h3>
                <div className="text-gray-400 text-sm space-y-2">
                  <p>Full Stack Developer</p>
                  <p>Based in Mumbai, India</p>
                  <p>Specializing in modern web technologies</p>
                </div>
              </div>
              <div className="space-y-6 text-right lg:text-left">
                <div className="text-gray-400 text-sm">consists of</div>
                <div className="space-y-2">
                  <div className="text-white">3 Projects</div>
                  <div className="text-gray-400 text-sm">
                    React, Nodejs, C#, Php, MongoDB, MsSQL, MySQL 
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm animate-bounce">
              <div className="flex flex-col items-center space-y-2">
                <span>scroll</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
