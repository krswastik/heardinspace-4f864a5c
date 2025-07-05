
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToWaves = () => {
    document.getElementById('space-waves')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative z-10 px-4">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-wider transform-gpu perspective-1000">
            <span className="bg-gradient-to-r from-orange-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent animate-pulse block transform rotate-x-12 hover:rotate-x-0 transition-transform duration-700" style={{ transformStyle: 'preserve-3d' }}>
              HEARD
            </span>
            <br />
            <span className="text-white block transform -rotate-x-6 hover:rotate-x-0 transition-transform duration-700" style={{ transformStyle: 'preserve-3d' }}>
              IN SPACE
            </span>
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-cyan-400 mx-auto rounded-full transform hover:scale-x-150 transition-transform duration-500" style={{ transformStyle: 'preserve-3d' }}></div>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light transform hover:translate-z-4 transition-transform duration-500" style={{ transformStyle: 'preserve-3d' }}>
          Tune into intergalactic frequencies and discover the universe through
          <br />
          <span className="text-orange-400">daily transmissions</span> and <span className="text-cyan-400">interactive missions</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <button 
            onClick={scrollToWaves}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 hover:translate-y-[-4px] active:translate-y-[-2px]"
            style={{ 
              transformStyle: 'preserve-3d',
              boxShadow: '0 8px 16px -4px rgba(255, 107, 53, 0.3), 0 0 0 1px rgba(255, 107, 53, 0.1)'
            }}
          >
            Listen to Today's Transmission
          </button>
          
          <button 
            onClick={() => document.getElementById('space-arcade')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:translate-y-[-4px] active:translate-y-[-2px]"
            style={{ 
              transformStyle: 'preserve-3d',
              boxShadow: '0 8px 16px -4px rgba(0, 212, 255, 0.3), 0 0 0 1px rgba(0, 212, 255, 0.1)'
            }}
          >
            Enter Space Arcade
          </button>
        </div>

        <div className="pt-16">
          <div className="animate-bounce">
            <ChevronDown 
              className="w-8 h-8 text-gray-400 mx-auto cursor-pointer hover:text-orange-400 transition-colors transform hover:scale-125 hover:translate-y-[-2px]"
              onClick={scrollToWaves}
              style={{ 
                transformStyle: 'preserve-3d',
                filter: 'drop-shadow(0 4px 8px rgba(255, 107, 53, 0.3))'
              }}
            />
          </div>
        </div>
      </div>

      {/* Enhanced floating orbs with 3D effects */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-ping transform hover:scale-150 transition-transform" style={{ filter: 'drop-shadow(0 0 10px #00d4ff)' }}></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-orange-400 rounded-full animate-pulse transform hover:scale-150 transition-transform" style={{ filter: 'drop-shadow(0 0 8px #ff6b35)' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-gradient-to-r from-orange-400 to-cyan-400 rounded-full animate-pulse transform hover:scale-150 transition-transform" style={{ filter: 'drop-shadow(0 0 12px #ff6b35)' }}></div>
    </section>
  );
};

export default Hero;
