
import React from 'react';
import { motion } from "framer-motion";
import CurrencyBackground from '@/components/currency-background/CurrencyBackground';
import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/features/FeatureCard';
import MarketSnapshot from '@/components/market/MarketSnapshot';
import { ChevronRight, LineChart, Shield, Zap } from 'lucide-react';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-space-blue overflow-hidden">
      {/* Currency Background */}
      <CurrencyBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 z-10">
        <motion.div 
          className="max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-arctic mb-6">
            Modern Trading, <span className="neon-gradient">Simplified</span>
          </h1>
          <p className="text-xl md:text-2xl text-arctic/80 mb-10 max-w-2xl mx-auto">
            Trade smarter with real-time AI-powered insights and intuitive tools that give you the edge
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="bg-gradient-to-r from-neon-green to-electric-cyan hover:from-neon-green/90 hover:to-electric-cyan/90 text-space-blue px-8 py-6 text-lg font-semibold rounded-lg"
              size="lg"
            >
              Start Trading Now
            </Button>
            <Button 
              variant="outline"
              className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-arctic flex items-center gap-2"
              size="lg"
            >
              <span>View Demo</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </section>
      
      {/* Main Navigation - Using transparent style for homepage */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-space-blue/50 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-md bg-gradient-to-r from-neon-green to-electric-cyan flex items-center justify-center">
              <LineChart className="h-6 w-6 text-space-blue" />
            </div>
            <h1 className="ml-3 text-xl font-bold text-arctic">TradeSage</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-arctic/70 hover:text-arctic transition-colors">Features</a>
            <a href="#markets" className="text-arctic/70 hover:text-arctic transition-colors">Markets</a>
            <a href="#pricing" className="text-arctic/70 hover:text-arctic transition-colors">Pricing</a>
            <a href="#about" className="text-arctic/70 hover:text-arctic transition-colors">About</a>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" className="text-arctic hover:text-neon-green hover:bg-space-blue/50">
              Log In
            </Button>
            <Button className="bg-white/10 hover:bg-white/20 text-arctic border-white/10">
              Sign Up
            </Button>
          </div>
        </div>
      </nav>
      
      {/* Features Section */}
      <section id="features" className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-arctic mb-4">Key Features</h2>
            <p className="text-lg text-arctic/70 max-w-2xl mx-auto">Our platform combines cutting-edge technology with user-friendly interfaces to deliver the ultimate trading experience.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<LineChart className="h-12 w-12 text-neon-green" />}
              title="Advanced Analytics"
              description="Real-time market analysis powered by AI to help you make informed decisions faster than ever before."
            />
            <FeatureCard 
              icon={<Zap className="h-12 w-12 text-electric-cyan" />}
              title="Instant Execution"
              description="Lightning-fast trade execution with minimal slippage, ensuring you get the best price every time."
            />
            <FeatureCard 
              icon={<Shield className="h-12 w-12 text-plasma-purple" />}
              title="Bank-Level Security"
              description="Your assets are protected with military-grade encryption and multi-factor authentication systems."
            />
          </div>
        </div>
      </section>
      
      {/* Market Snapshot */}
      <section id="markets" className="py-20 relative z-10 bg-graphite/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-arctic mb-4">Market Snapshot</h2>
            <p className="text-lg text-arctic/70 max-w-2xl mx-auto">Stay updated with the latest market trends and opportunities.</p>
          </motion.div>
          
          <div className="bg-space-blue/50 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
            <MarketSnapshot />
          </div>
          
          <div className="mt-10 text-center">
            <Button 
              variant="outline" 
              className="border-electric-cyan text-electric-cyan hover:bg-electric-cyan/10"
            >
              View Full Dashboard
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-graphite to-space-blue p-12 rounded-2xl border border-white/10 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-arctic mb-6">Ready to start trading?</h2>
            <p className="text-lg text-arctic/70 mb-8 max-w-2xl mx-auto">Join thousands of traders who have already discovered the TradeSage advantage.</p>
            <Button 
              className="bg-gradient-to-r from-neon-green to-electric-cyan hover:from-neon-green/90 hover:to-electric-cyan/90 text-space-blue px-8 py-6 text-lg font-semibold"
              size="lg"
            >
              Create Free Account
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-graphite/20 border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="h-8 w-8 rounded-md bg-gradient-to-r from-neon-green to-electric-cyan flex items-center justify-center">
                <LineChart className="h-5 w-5 text-space-blue" />
              </div>
              <h3 className="ml-2 text-lg font-bold text-arctic">TradeSage</h3>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm text-arctic/70">
              <a href="#" className="hover:text-arctic">Terms of Service</a>
              <a href="#" className="hover:text-arctic">Privacy Policy</a>
              <a href="#" className="hover:text-arctic">Security</a>
              <a href="#" className="hover:text-arctic">Contact Us</a>
            </div>
            
            <div className="mt-6 md:mt-0 text-sm text-arctic/50">
              © 2025 TradeSage. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
