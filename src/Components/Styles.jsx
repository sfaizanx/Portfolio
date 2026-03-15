export const GlobalStyles = () => {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
      
      body {
        font-family: 'Inter', sans-serif;
      }
      
      .space-grotesk {
        font-family: 'Space Grotesk', sans-serif;
      }
      
      .fade-in {
        opacity: 0;
        animation: fadeIn 1s ease forwards;
      }
      
      .fade-in-delay {
        opacity: 0;
        animation: fadeIn 1s ease forwards;
        animation-delay: 0.3s;
      }
      
      .fade-in-delay-2 {
        opacity: 0;
        animation: fadeIn 1s ease forwards;
        animation-delay: 0.6s;
      }
      
      @keyframes fadeIn {
        to {
          opacity: 1;
        }
      }
      
      .text-stroke {
        -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
        color: transparent;
      }
      
      .grid-pattern {
        background-image:
          radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0);
        background-size: 20px 20px;
      }
      
      .cursor-dot {
        width: 8px;
        height: 8px;
        background: white;
        border-radius: 50%;
        position: absolute;
        pointer-events: none;
        z-index: 9999;
        animation: blink 1s infinite;
      }
      
      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
      
      .hover-scale {
        transition: transform 0.3s ease;
      }
      
      .hover-scale:hover {
        transform: scale(1.02);
      }
      
      .project-card {
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
      }
      
      .project-card:hover {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.3);
      }
    `}</style>
  );
};
