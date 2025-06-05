import React, { useEffect, useState } from "react";
import Setting from "../Assests/img/Animation - 1748514887685.gif";
import { Button, Container, IconButton } from "@mui/material";
import aboutMe from "../Assests/img/Animation - 1748525028707.gif";
import {
  Bedtime,
  GitHub,
  Instagram,
  KeyboardArrowUp,
  LightMode,
  LinkedIn,
} from "@mui/icons-material";
import { Typewriter } from "react-simple-typewriter";
import BasicTabs from "./Tabs";
import ContactForm from "./ContactUs";

const Portfolio_Main = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);


  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [darkMode]);

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

    

  return (
    <div className={`${darkMode ? "dark" : ""} transition-colors duration-800`}>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
        {/* Toggle */}
        <div className="flex justify-end p-10">
          <IconButton
            onClick={() => setDarkMode(!darkMode)}
            className="backdrop-blur-md bg-black/30 dark:bg-white/10 rounded-xl border border-white/20"
            sx={{
              color: "#4fc3f7",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            {darkMode ? <LightMode /> : <Bedtime />}
          </IconButton>
        </div>

        <div className="flex items-center justify-center gap-4">
          {/* Text column: H1 + P stacked */}
          <div>
            <h1 className="font-extrabold md:text-6xl xs:text-xs bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-1">
              Hi, I'm <br />
              Full-Stack Developer
            </h1>
            <p className="xs:text-xs md:text-xl sm:text-sm text-gray-400">
              React | .NET Core | Tailwind Css | SQL | MERN | MongoDB
            </p>
          </div>
          {/* Image next to text */}
          <img
            src={Setting}
            alt="Settings Icon"
            className="xs:w-10 mr-7 mb-6 md:w-100 h-auto"
          />
        </div>
        <div className="flex justify-center items-center"></div>
        <h3 className="text-gray-500 dark:text-gray-200 text-lg text-xl">
          <Typewriter
            words={["Let's build something amazing!"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h3>
        <div className="flex justify-center items-center gap-10 mt-4">
          <a
            href="https://www.instagram.com/fhezxn"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-900 shadow-lg p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            <Instagram className="text-pink-500 w-6 h-6" />
          </a>

          <a
            href="http://www.linkedin.com/in/faizan-sayyed-047922322"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-900 shadow-lg p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            <LinkedIn className="text-blue-600 w-6 h-6" />
          </a>

          <a
            href="https://github.com/sfaizanx"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-900 shadow-lg p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            <GitHub className="text-black dark:text-white w-6 h-6" />
          </a>
        </div>
        <h2 className="text-3xl font-bold my-20">About Me</h2>
        <div className="About-Us md:flex grid md:grid-cols-2 justify-center items-center gap-1 mt-10">
          {/* Left side: About Text */}
          <div className="text-center mx-20">
            <h3 className="text-3xl font-bold text-start">Hello,I'm</h3>
            <p className="text-4xl font-extrabold mb-5 text-blue-400 text-start">
              Faizan Sayyed
            </p>
            <p
              className="text-lg text-gray-600 dark:text-gray-300 mt-6 text-start"
              style={{ lineHeight: "1.5", maxWidth: "600px" }}
            >
              I'm a freelance web developer who loves to design and build clean,
              responsive, and scalable web applications. Passionate about
              solving problems and constantly improving user experiences with
              modern tools like React, Tailwind, .NET Core, and more...
            </p>
            <div className="flex justify-start gap-4 mt-6">
              <a href="Faizan-Resume.pdf" download>
                <Button
                  variant="outlined"
                  className="mt-5 bg-blue-500 text-white hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </Button>
              </a>
              <Button
                variant="contained"
                className="mt-5 bg-blue-500 text-white hover:bg-blue-600 hover:text-white transition-colors duration-300"
                href="mailto:sayyedfaizan1777@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire Me
              </Button>
            </div>
          </div>

          {/* Right side: Image */}
          <div className="flex justify-center items-center">
            <img
              src={aboutMe}
              alt="About Me Icon"
              className="w-40 h-40 object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
        {/* Portfolio Showcase */}
        <Container fluid className="mx-10">
          <div className="Showcase justify-center items-center mx-10 my-20">
            <h2 className="text-3xl font-bold my-20 text-center">
              Portfolio Showcase
            </h2>
            <BasicTabs />
          </div>
        </Container>

        {/* Contact Us */}
        <Container fluid className="mx-10">
          <div className="Contact-Us justify-center items-center mx-5 mt-20">
            <h2 className="text-3xl font-bold text-center">Contact Us</h2>
            <p className="text-lg mb-6 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Have a project in mind? Let's get in touch!
            </p>
            <ContactForm />
          </div>
        </Container>

        {/* Testimonials */}
        <Container fluid className="m-20 ">
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
        </Container>


        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6 mt-20">
          <Container>
            <div className="text-center">
              <p className="text-sm">
                © {new Date().getFullYear()} Faizan Sayyed. All rights reserved.
              </p>
            </div>
          </Container>
        </footer>
        {showTopBtn && (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="fixed bottom-4 right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition duration-700 z-50"
          >
            <KeyboardArrowUp className="w-6 h-6"/>
          </a>
        )}
      </div>
    </div>
  );
};

export default Portfolio_Main;
