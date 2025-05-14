
import React from 'react';

const CurrencyParticlesBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black">
      {/* Purple gradient glow */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-plasma-purple/20 blur-[150px]" />
      {/* Small stars effect using absolute positioned divs */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            opacity: Math.random() * 0.5 + 0.1
          }}
        />
      ))}
    </div>
  );
};

export default CurrencyParticlesBackground;
