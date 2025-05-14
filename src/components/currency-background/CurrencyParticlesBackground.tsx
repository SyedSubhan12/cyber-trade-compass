
import React, { useEffect, useState } from 'react';

const CurrencyParticlesBackground: React.FC = () => {
  const currencySymbols = ['$', '€', '£', '¥', '₿', '₹', '₽'];
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    symbol: string;
    size: number;
    speed: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    // Create initial currency particles
    const initialParticles = Array.from({ length: 30 }).map((_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      symbol: currencySymbols[Math.floor(Math.random() * currencySymbols.length)],
      size: Math.random() * 1.5 + 1, // Size between 1 and 2.5
      speed: Math.random() * 0.5 + 0.1, // Speed between 0.1 and 0.6
      opacity: Math.random() * 0.3 + 0.05 // Opacity between 0.05 and 0.35
    }));

    setParticles(initialParticles);

    // Animation loop
    const animationInterval = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          y: particle.y + particle.speed > 100 ? -10 : particle.y + particle.speed,
          x: particle.x + (Math.random() * 0.2 - 0.1) // Slight horizontal movement
        }))
      );
    }, 50);

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black">
      {/* Purple gradient glow */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-plasma-purple/20 blur-[150px]" />
      
      {/* Currency symbols */}
      {particles.map((particle) => (
        <div 
          key={particle.id}
          className="absolute text-white/30 pointer-events-none"
          style={{
            left: `${particle.x}vw`,
            top: `${particle.y}vh`,
            fontSize: `${particle.size}rem`,
            opacity: particle.opacity,
            transform: `rotate(${Math.random() * 30 - 15}deg)`,
            transition: 'top 0.5s ease-out, left 1s ease-out'
          }}
        >
          {particle.symbol}
        </div>
      ))}

      {/* Small stars effect using absolute positioned divs */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div 
          key={`star-${i}`}
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
