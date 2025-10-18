import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";
import { FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { RiTailwindCssLine, RiVercelLine } from "react-icons/ri";
import { SiDotnet, SiMongodb, SiMysql, SiSwagger } from "react-icons/si";
import Header from "./Header";

const TechStack = () => {
  const techStack = [
    { icon: FaGithub },
    { icon: FaNodeJs },
    { icon: FaReact },
    { icon: FaHtml5 },
    { icon: FaCss3},
    { icon: SiDotnet },
    { icon: RiTailwindCssLine },
    { icon: SiMongodb },
    { icon: SiMysql },
    { icon: BsFiletypeSql },
    { icon: SiSwagger },
    { icon: RiVercelLine },
    { icon: BiLogoTypescript },
  ];

  const containerRef = useRef(null);
  const iconsRef = useRef([]);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // Initialize positions randomly
    const initialPositions = techStack.map(() => ({
      x: Math.random() * (width - 60),
      y: Math.random() * (height - 60),
      dx: Math.random() * 2 + 0.5, // speed x
      dy: Math.random() * 2 + 0.5, // speed y
    }));
    setPositions(initialPositions);

    const animate = () => {
      initialPositions.forEach((pos, idx) => {
        // Update positions
        pos.x += pos.dx;
        pos.y += pos.dy;

        // Bounce off walls
        if (pos.x <= 0 || pos.x >= width - 50) pos.dx *= -1;
        if (pos.y <= 0 || pos.y >= height - 50) pos.dy *= -1;

        // Prevent overlap
        initialPositions.forEach((other, j) => {
          if (idx !== j) {
            const distX = pos.x - other.x;
            const distY = pos.y - other.y;
            const distance = Math.sqrt(distX ** 2 + distY ** 2);
            if (distance < 60) {
              // minimum separation
              pos.dx *= -1;
              pos.dy *= -1;
            }
          }
        });

        // Apply new position with GSAP for smooth motion
        gsap.to(iconsRef.current[idx], {
          x: pos.x,
          y: pos.y,
          duration: 3,
          ease: "none",
        });
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center px-4 py-20 sm:py-28 md:py-32">
  <Header title="TECH STACK" />

  <div
    ref={containerRef}
    className="relative w-full max-w-5xl h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden mt-10"
  >
    {techStack.map((item, idx) => {
      const Icon = item.icon;
      return (
        <div
          key={idx}
          ref={(el) => (iconsRef.current[idx] = el)}
          className="
            absolute flex items-center justify-center
            w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
            p-2 rounded-full border shadow-xl bg-white
            transition-transform duration-500 ease-in-out
            hover:scale-110 hover:shadow-2xl
          "
        >
          <Icon size={24} sm:size={28} md:size={32} color="#000" />
        </div>
      );
    })}
  </div>
</div>

  );
};

export default TechStack;
