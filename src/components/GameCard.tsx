
import React, { useState } from 'react';

interface Game {
  id: number;
  title: string;
  description: string;
  difficulty: string;
  thumbnail: string;
  facts: string[];
  tags: string[];
}

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const [isLaunching, setIsLaunching] = useState(false);

  const handleLaunchMission = () => {
    setIsLaunching(true);
    
    // Simulate game launch process
    setTimeout(() => {
      alert(`🚀 Launching ${game.title}!\n\nThis is a demo version. In the full version, this would open an interactive ${game.title.toLowerCase()} simulation where you can:\n\n• Experience realistic space physics\n• Learn through hands-on interaction\n• Complete mission objectives\n• Earn achievements and badges\n\nStay tuned for the complete gaming experience!`);
      setIsLaunching(false);
    }, 2000);
  };

  return (
    <div className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105" 
         style={{ 
           transformStyle: 'preserve-3d',
           perspective: '1000px',
           boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)'
         }}>
      
      <div className="relative h-48 overflow-hidden">
        <img 
          src={game.thumbnail} 
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          style={{ filter: 'contrast(1.1) saturate(1.2)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent"></div>
        
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            game.difficulty === 'Beginner' ? 'bg-green-500/80 text-green-100' :
            game.difficulty === 'Intermediate' ? 'bg-yellow-500/80 text-yellow-100' :
            'bg-red-500/80 text-red-100'
          } backdrop-blur-sm`}>
            {game.difficulty}
          </span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
          {game.title}
        </h3>
        
        <p className="text-gray-300 text-sm leading-relaxed">
          {game.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {game.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-md border border-cyan-400/20 hover:border-cyan-400/50 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-2 border-t border-slate-700/50">
          <h4 className="text-sm font-semibold text-orange-400 mb-2">Did You Know?</h4>
          <ul className="space-y-1">
            {game.facts.slice(0, 2).map((fact, index) => (
              <li key={index} className="text-xs text-gray-400 flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <button 
          onClick={handleLaunchMission}
          disabled={isLaunching}
          className={`w-full mt-4 px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg backdrop-blur-sm ${
            isLaunching 
              ? 'bg-slate-600 text-gray-300 cursor-not-allowed' 
              : 'bg-gradient-to-r from-cyan-500/80 to-cyan-600/80 hover:from-cyan-500 hover:to-cyan-600 text-white hover:shadow-cyan-500/25'
          }`}
          style={{ 
            transformStyle: 'preserve-3d',
            boxShadow: isLaunching ? 'none' : '0 4px 12px -2px rgba(0, 212, 255, 0.3)'
          }}
        >
          {isLaunching ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
              Launching...
            </div>
          ) : (
            'Launch Mission'
          )}
        </button>
      </div>

      {/* 3D glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
           style={{ filter: 'blur(1px)' }}>
      </div>
    </div>
  );
};

export default GameCard;
