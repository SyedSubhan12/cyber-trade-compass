
import React from 'react';
import { motion } from "framer-motion";
import CurrencyParticlesBackground from '@/components/currency-background/CurrencyParticlesBackground';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background */}
      <CurrencyParticlesBackground />
      
      {/* Navigation */}
      <nav className="relative z-20 px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold text-arctic">TradeSage</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-arctic/80 hover:text-arctic transition-colors text-sm">Home</a>
            <a href="#" className="text-arctic/80 hover:text-arctic transition-colors text-sm">About</a>
            <a href="#" className="text-arctic/80 hover:text-arctic transition-colors text-sm">Blog</a>
            <a href="#" className="text-arctic/80 hover:text-arctic transition-colors text-sm">Contact</a>
          </div>
          
          <Button className="bg-plasma-purple hover:bg-plasma-purple/90 text-white rounded-full px-6">
            Book a call
          </Button>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4 z-10 text-center">
        <div className="mb-6 inline-flex items-center">
          <div className="bg-plasma-purple/20 backdrop-blur-sm px-4 py-1 rounded-full flex items-center">
            <span className="bg-plasma-purple text-white text-xs px-2 py-0.5 rounded-full mr-2">New</span>
            <span className="text-sm text-arctic">Automated Lead Generation</span>
          </div>
        </div>
        
        <motion.div 
          className="max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-arctic mb-6">
            Intelligent Automation for <br/>Modern Businesses.
          </h1>
          <p className="text-xl text-arctic/70 mb-10 max-w-2xl mx-auto">
            TradeSage brings AI automation to your fingertips & streamline tasks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="bg-plasma-purple hover:bg-plasma-purple/90 text-white px-6 py-6 text-lg font-medium rounded-lg flex items-center"
              size="lg"
            >
              Get in touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline"
              className="border-white/10 hover:bg-white/5 text-arctic"
              size="lg"
            >
              View services
            </Button>
          </div>
        </motion.div>

        {/* Bottom right button */}
        <div className="absolute bottom-8 right-8">
          <Button 
            className="bg-plasma-purple hover:bg-plasma-purple/90 text-white rounded-full px-6 flex items-center"
          >
            Use For Free <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
