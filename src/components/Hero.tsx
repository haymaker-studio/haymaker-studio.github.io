import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 mix-blend-multiply"></div>
        <img
          src="https://images.unsplash.com/photo-1574279606130-09958dc756f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80"
          alt="Athlete in action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Next-Gen Athlete Agency</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Legacy</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Turn your athletic journey into a thriving brand. Join the next generation of athlete creators with proven strategies for growth and monetization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => scrollToSection('brand')}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all inline-flex items-center gap-2"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('why')}
              className="relative overflow-hidden border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors group"
            >
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}