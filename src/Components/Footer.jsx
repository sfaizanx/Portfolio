import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export const Footer = ({ currentYear }) => {
  return (
    <footer className="py-16 px-8 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="space-grotesk text-xl font-bold text-white mb-4">
              FAIZAN SAYYED
            </div>
            <div className="text-gray-400 text-sm">Full Stack Developer</div>
          </div>
          <div>
            <div className="text-gray-500 text-sm mb-4 tracking-wide">
              LINKS
            </div>
            <div className="space-y-2">
              <a
                href="#work"
                className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Work
              </a>
              <a
                href="#about"
                className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                About
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Contact
              </a>
            </div>
          </div>
          <div>
            <div className="text-gray-500 text-sm mb-4 tracking-wide">
              CONNECT
            </div>
            <div className="space-y-2">
              <a
                href="https://www.linkedin.com/in/faizan-sayyed-047922322"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com/sfaizanx"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="GitHub"
              >
                <FaGithub />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-900 pt-8 mt-12 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} FAIZAN SAYYED. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
