
import React from 'react';
import GameCard from './GameCard';

const SpaceArcade = () => {
  const games = [
    {
      id: 1,
      title: "Apollo Landing",
      description: "Master the historic lunar landing sequence with realistic physics and controls.",
      difficulty: "Intermediate",
      thumbnail: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400",
      facts: ["The Eagle had only 25 seconds of fuel left when it landed", "Neil Armstrong manually piloted the final descent"],
      tags: ["Physics", "Historical", "Piloting"]
    },
    {
      id: 2,
      title: "Satellite Assembly",
      description: "Build and deploy communication satellites in zero gravity conditions.",
      difficulty: "Beginner",
      thumbnail: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=400",
      facts: ["Satellites travel at 17,500 mph to maintain orbit", "Over 3,000 active satellites currently orbit Earth"],
      tags: ["Engineering", "Assembly", "Orbital Mechanics"]
    },
    {
      id: 3,
      title: "Planet Detective",
      description: "Identify planets and moons from cryptic visual and spectroscopic clues.",
      difficulty: "Advanced",
      thumbnail: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=400",
      facts: ["Venus rotates backwards compared to other planets", "Jupiter has 95 known moons"],
      tags: ["Astronomy", "Analysis", "Discovery"]
    },
    {
      id: 4,
      title: "Mars Rover Mission",
      description: "Navigate the Martian terrain and conduct scientific experiments.",
      difficulty: "Intermediate",
      thumbnail: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=400",
      facts: ["Mars rovers are controlled with an 8-24 minute communication delay", "Perseverance can produce oxygen from Martian atmosphere"],
      tags: ["Exploration", "Science", "Remote Operation"]
    }
  ];

  return (
    <section id="space-arcade" className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-cyan-400">SPACE</span> <span className="text-white">ARCADE</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Interactive missions that blend gaming with real space science. 
            Learn through hands-on exploration of the cosmos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105">
            Launch Full Arcade
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpaceArcade;
