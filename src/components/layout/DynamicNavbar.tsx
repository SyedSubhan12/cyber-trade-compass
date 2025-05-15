import React, { useEffect, useState } from 'react';

const DynamicNavbar = () => {
  useEffect(() => {
    // Initialize scroll handling
    const handleScroll = () => {
      const navbar = document.getElementById("main-navbar");
      const contentElement = document.getElementsByClassName("content-section")[0];
      
      if (navbar && contentElement) {
        // Cast to HTMLElement to access offsetTop
        const content = contentElement as HTMLElement;
        
        // 100px threshold after the content section starts
        const sticky = content.offsetTop + 100;
        
        if (window.scrollY > sticky) {
          navbar.classList.add("navbar-sticky");
          
          // Add hide-on-scroll-down functionality
          if (window.scrollY > lastScrollTop && window.scrollY > navbar.offsetHeight) {
            navbar.classList.add("navbar-hidden");
          } else {
            navbar.classList.remove("navbar-hidden");
          }
        } else {
          navbar.classList.remove("navbar-sticky");
          navbar.classList.remove("navbar-hidden");
        }
        
        // Save current scroll position
        lastScrollTop = window.scrollY;
      }
    };
    
    // Track last scroll position to determine direction
    let lastScrollTop = 0;
    
    // Run once on initial load
    handleScroll();
    
    // Add scroll event listener immediately
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <nav id="main-navbar" className="fixed top-0 left-0 right-0 z-50 w-full py-4 transition-all duration-300">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold text-arctic">TradeSage</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-arctic/80 hover:text-arctic transition-colors text-sm">Home</a>
          <a href="#features" className="text-arctic/80 hover:text-arctic transition-colors text-sm">Features</a>
          <a href="#pricing" className="text-arctic/80 hover:text-arctic transition-colors text-sm">Pricing</a>
          <a href="#" className="text-arctic/80 hover:text-arctic transition-colors text-sm">Contact</a>
        </div>
        
        <button className="bg-plasma-purple hover:bg-plasma-purple/90 text-white rounded-full px-6 py-2">
          Get Started
        </button>
      </div>
      
      <style>
        {`
          #main-navbar {
            background-color: transparent;
            transition: all 0.3s ease;
          }
          
          .navbar-sticky {
            background-color: rgba(15, 23, 42, 0.8) !important;
            backdrop-filter: blur(8px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transform: translateY(0);
            transition: transform 0.3s ease;
          }
          
          .navbar-hidden {
            transform: translateY(-100%);
            transition: transform 0.3s ease;
          }
          
          @media (max-width: 768px) {
            #main-navbar {
              padding: 0.75rem 0;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default DynamicNavbar; 