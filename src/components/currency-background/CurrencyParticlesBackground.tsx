import React, { useEffect, useState } from 'react';

const CurrencyParticlesBackground = () => {
  const currencySymbols = ['$', '€', '£', '¥', '₹', '₿'];
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create 6 currency particles - 3 on left, 3 on right
    const initialParticles = currencySymbols.map((symbol, index) => {
      // Determine if symbol should be on left (0,1,2) or right (3,4,5)
      const isOnLeft = index < 3;
      
      // Position horizontally - left side (10-30%) or right side (70-90%)
      const xPos = isOnLeft 
        ? Math.random() * 20 + 10 // 10-30% from left
        : Math.random() * 20 + 70; // 70-90% from left
      
      // Distribute vertically - roughly evenly spaced
      const yPos = (index % 3) * 30 + Math.random() * 15 + 10; // 10-25%, 40-55%, 70-85%
      
      // Generate a color from purple to cyan spectrum for the glow
      const hue = Math.floor(Math.random() * 60) + 240; // 240-300 range (purple to cyan)
      
      return {
        id: index,
        x: xPos,
        y: yPos,
        symbol: symbol, // Use each symbol exactly once
        size: Math.random() * 1.5 + 3, // Larger size between 3 and 4.5
        animationDuration: Math.random() * 4 + 8, // Slower animation (8-12s)
        animationDelay: Math.random() * 5, // Staggered animation start
        glowColor: `hsl(${hue}, 100%, 70%)`,
      };
    });

    setParticles(initialParticles);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black">
      {/* Purple gradient glow */}
      <div className="absolute top-1/5 right-1/10 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl" />
      
      {/* Currency symbols with enhanced styling */}
      {particles.map((particle) => (
        <div 
          key={particle.id}
          className="absolute text-white pointer-events-none"
          style={{
            left: `${particle.x}vw`,
            top: `${particle.y}vh`,
            fontSize: `${particle.size}rem`,
            textShadow: `0 0 10px ${particle.glowColor}, 0 0 20px ${particle.glowColor}`,
            filter: `drop-shadow(0 0 2px ${particle.glowColor})`,
            animation: `float ${particle.animationDuration}s ease-in-out infinite`,
            animationDelay: `${particle.animationDelay}s`,
            opacity: 0.8,
          }}
        >
          {particle.symbol}
        </div>
      ))}

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(30px) rotate(5deg); }
          }
        `}
      </style>
    </div>
  );
};

export default CurrencyParticlesBackground;