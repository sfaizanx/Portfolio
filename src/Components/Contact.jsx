import React from "react";
import Header from "./Header";
import { FaGithub, FaInstagram, FaLinkedin, FaRocket } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Contact = () => {
  
  return (
    <div className="flex flex-col justify-center items-center px-4 py-20 sm:py-28 md:py-32 text-center">
  {/* Section Header */}
  <Header title="LET'S BUILD" />

  {/* Main Heading */}
  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mt-4">
    SOMETHING AMAZING
  </div>

  {/* Subheading / Description */}
  <div className="text-xs sm:text-lg md:text-xl mt-3 font-black tracking-tight max-w-3xl">
    Ready to bring your ideas to life? Let's collaborate and create <br />
    extraordinary digital experiences together.
  </div>

  {/* Call-to-Action Button */}
  <div className="flex flex-col items-center mt-8 space-y-6">
    <a
      href="mailto:sayyedfaizan1777@gmail.com"
      className="
        group font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-lg
        text-black border border-black flex items-center justify-center gap-2
        transition-all duration-500 hover:bg-black hover:text-white
      "
    >
      <FaRocket />
      START A PROJECT
    </a>

    {/* Social Icons */}
    <div className="flex justify-center gap-6 mt-2">
      <a href="mailto:sayyedfaizan1777@gmail.com">
        <MdMail className="cursor-pointer text-2xl sm:text-3xl transition-transform duration-300 hover:scale-125" />
      </a>
      <a href="https://github.com/sfaizanx" target="_blank" rel="noopener noreferrer">
        <FaGithub className="cursor-pointer text-2xl sm:text-3xl transition-transform duration-300 hover:scale-125" />
      </a>
      <a href="https://www.linkedin.com/in/faizan-sayyed-047922322" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="cursor-pointer text-2xl sm:text-3xl transition-transform duration-300 hover:scale-125" />
      </a>
    </div>
  </div>
</div>

  );
};

export default Contact;
