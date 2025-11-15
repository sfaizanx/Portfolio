import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Header from "./Header";

const Acheivements = () => {
  const achievements = [
    {
      count: "2+",
      title: "Years Experience",
      desc: "Building scalable web applications",
    },
    {
      count: "20+",
      title: "Projects Completed",
      desc: "From startups to enterprise solutions",
    },
    {
      count: "100K+",
      title: "Lines of Code",
      desc: "Clean, efficient, and maintainable",
    },
    {
      count: "10+",
      title: "Technologies Mastered",
      desc: "Full stack expertise across platforms",
    },
    {
      count: "99%",
      title: "Client Satisfaction",
      desc: "Delivering beyond expectations",
    },
    {
      count: "24/7",
      title: "Problem Solver",
      desc: "Always ready for new challenges",
    },
  ];

  const divRef = useRef(null);

  useEffect(() => {
    gsap.to(divRef.current, {
      y: -20, // move up
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div
      ref={divRef}
      className="flex flex-col justify-center items-center px-4 py-20 sm:py-24 md:py-32 text-center"
    >
      <Header title="ACHIEVEMENTS" />

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-6xl">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="
          border border-gray-600 rounded-2xl 
          bg-white backdrop-blur-sm
          transition-all duration-500 ease-in-out 
          hover:shadow-2xl hover:scale-[1.03]
          p-6 sm:p-8
          flex flex-col justify-center items-center
        "
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900">
              {item.count}
            </h2>
            <p className="text-xl sm:text-2xl font-bold text-gray-800 mt-2">
              {item.title}
            </p>
            <p className="text-sm sm:text-base md:text-lg font-medium text-gray-700 mt-1">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// const style = {
//   border: "3px solid black",

// };

export default Acheivements;
