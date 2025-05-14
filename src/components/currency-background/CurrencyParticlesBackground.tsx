
import React, { useCallback, useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import { useIsMobile } from '@/hooks/use-mobile';

const CurrencyParticlesBackground: React.FC = () => {
  const isMobile = useIsMobile();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isLowPower, setIsLowPower] = useState(false);
  
  // Check user preferences
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    // Check for battery saving mode if battery API is available
    if ('getBattery' in navigator) {
      // @ts-ignore - getBattery is not in the standard navigator type
      navigator.getBattery().then((battery: any) => {
        setIsLowPower(battery.charging === false && battery.level < 0.2);
      }).catch(() => {
        // If API fails, assume normal power
        setIsLowPower(false);
      });
    }
    
    const handleMotionChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMotionChange);
    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, []);

  // Disable animation when document is hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      const particlesContainer = document.getElementById('tsparticles');
      if (!particlesContainer) return;
      
      if (document.hidden) {
        // @ts-ignore - container might have a pause method from tsparticles
        particlesContainer.pause?.();
      } else {
        // @ts-ignore - container might have a play method from tsparticles
        particlesContainer.play?.();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Initialize particles
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  // Determine if we should show particles based on preferences and device
  const shouldShowParticles = !prefersReducedMotion && !isLowPower;
  const particleCount = isMobile ? 10 : 20;
  
  if (!shouldShowParticles) {
    return (
      <div className="fixed inset-0 bg-space-blue/30 backdrop-blur-[50px] pointer-events-none z-0" />
    );
  }

  const currencySymbols = ["$", "€", "£", "¥", "₿", "₹", "₽", "₩"];
  
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="fixed inset-0 z-0 pointer-events-none"
        options={{
          fullScreen: false,
          fpsLimit: 30, // Limit FPS for performance
          particles: {
            number: {
              value: particleCount,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "char",
              character: {
                // Randomly select a currency symbol
                value: currencySymbols,
                font: "Arial",
                style: "",
                weight: "400 600"
              }
            },
            opacity: {
              value: {
                min: 0.1,
                max: 0.3
              },
              random: true,
              anim: {
                enable: true,
                speed: 0.2,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: {
                min: isMobile ? 12 : 20,
                max: isMobile ? 24 : 60
              },
              random: true
            },
            rotate: {
              value: {
                min: 0,
                max: 360
              },
              direction: "random",
              animation: {
                enable: true,
                speed: 0.5,
                sync: false
              }
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "bounce"
              },
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            },
            blur: {
              value: 1, // Subtle blur effect
              enable: true
            }
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: {
                enable: !isMobile, // Only enable on desktop
                mode: "repulse"
              },
              onClick: {
                enable: !isMobile, // Only enable on desktop
                mode: "push" // Add a new particle on click
              },
              resize: true
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4
              },
              push: {
                quantity: 1
              }
            }
          },
          detectRetina: true,
          background: {
            color: "transparent",
            opacity: 0
          }
        }}
      />
      <div className="fixed inset-0 bg-space-blue/30 backdrop-blur-[50px] pointer-events-none z-0" />
    </>
  );
};

export default CurrencyParticlesBackground;
