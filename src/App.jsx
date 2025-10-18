import { useEffect } from 'react'
import './App.css'
import Title from './Components/Title'
import Acheivements from './Components/Acheivements'
import TechStack from './Components/TechStack'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function App() {

  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  // Check screen width (mobile < 640px)
  const isMobile = window.innerWidth < 640;

  gsap.utils.toArray('.section').forEach((section) => {
    if (isMobile) {
      // On mobile: set fully visible immediately
      gsap.set(section, { opacity: 1, y: 0 });
    } else {
      // On desktop: apply scroll animation
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true,
          },
        }
      );
    }
  });
}, []);

  return (
    <div className="scroll-smooth">
      <div className="section">
        <Title />
      </div>
      <div className="section">
        <Acheivements />
      </div>
      <div className="section">
        <TechStack />
      </div>
      <div className="section">
        <Projects />
      </div>
      <div className="section">
        <Contact />
      </div>
    </div>
  )
}

export default App
