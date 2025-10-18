import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

const Title = () => {
  const textRef = useRef(null);
  const waveRef1 = useRef(null);
  const waveRef2 = useRef(null);

  useEffect(() => {
    // Animate stroke "FAIZAN"
    const stroke = textRef.current;
    const length = stroke.getComputedTextLength();

    gsap.set(stroke, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.to(stroke, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power2.inOut",
    });

    // Wave animation for letters
    const animateWave = (waveElement) => {
      const letters = waveElement.querySelectorAll(".letter");
      gsap.to(letters, {
        y: (i) => Math.sin(i * 0.5) * 10,
        duration: 0.6,
        ease: "sine.inOut",
        stagger: 0.05,
        yoyo: true,
        repeat: -1,
      });
    };

    animateWave(waveRef1.current);
    animateWave(waveRef2.current);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-center px-4 py-0 sm:py-28 md:py-36">
      {/* Animated SVG Title */}
      <div className="animate-pulse transition-all duration-[3000ms] ease-in-out w-full flex justify-center overflow-hidden">
        <svg
          width="100%"
          height="200"
          viewBox="0 0 1000 200"
          className="max-w-[900px] sm:max-w-[700px] md:max-w-[800px] lg:max-w-[1000px]"
        >
          <text
            ref={textRef}
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="180"
            fontWeight="900"
            fill="none"
            stroke="black"
            strokeWidth="3"
          >
            FAIZAN
          </text>
        </svg>
      </div>

      {/* Floating Wave Texts */}
      <div
        ref={waveRef1}
        className="font-extrabold tracking-widest flex justify-center flex-wrap 
        text-3xl sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl mt-6"
      >
        {"FULL STACK".split("").map((ch, i) => (
          <span key={i} className="letter inline-block">
            {ch}
          </span>
        ))}
      </div>

      <div
        ref={waveRef2}
        className="font-extrabold flex justify-center flex-wrap 
        text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-3"
      >
        {"DEVELOPER".split("").map((ch, i) => (
          <span key={i} className="letter inline-block">
            {ch}
          </span>
        ))}
      </div>

      {/* Download Button */}
      <div className="mt-10 flex items-center gap-2 text-[9px] font-black text-black hover:underline transition-all duration-300">
        <FaArrowRight className="text-[9px]" />
        <a href="/FAIZAN-RESUME.pdf" download>
          DOWNLOAD CV
        </a>
      </div>
    </div>
  );
};

export default Title;
