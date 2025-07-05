
import React, { useState } from 'react';
import { ArrowLeft, Star, Rocket, Globe, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import StarField from '../components/StarField';

const SpaceFacts = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const facts = [
    {
      id: 1,
      category: 'planets',
      title: "Jupiter's Great Red Spot",
      fact: "Jupiter's Great Red Spot is a storm that has been raging for over 400 years and is larger than Earth.",
      icon: <Globe className="w-6 h-6" />,
      difficulty: 'Easy'
    },
    {
      id: 2,
      category: 'space',
      title: "Space Silence",
      fact: "Sound cannot travel through space because there are no molecules to vibrate and carry sound waves.",
      icon: <Star className="w-6 h-6" />,
      difficulty: 'Easy'
    },
    {
      id: 3,
      category: 'missions',
      title: "Apollo 11 Computer",
      fact: "The Apollo 11 guidance computer had less processing power than a modern calculator.",
      icon: <Rocket className="w-6 h-6" />,
      difficulty: 'Medium'
    },
    {
      id: 4,
      category: 'planets',
      title: "Venus Temperature",
      fact: "Venus is hotter than Mercury despite being farther from the Sun due to its thick atmosphere.",
      icon: <Globe className="w-6 h-6" />,
      difficulty: 'Medium'
    },
    {
      id: 5,
      category: 'space',
      title: "Time Dilation",
      fact: "Astronauts age slightly slower in space due to time dilation effects from traveling at high speeds.",
      icon: <Clock className="w-6 h-6" />,
      difficulty: 'Hard'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Facts' },
    { id: 'planets', label: 'Planets' },
    { id: 'space', label: 'Space Physics' },
    { id: 'missions', label: 'Space Missions' }
  ];

  const filteredFacts = selectedCategory === 'all' 
    ? facts 
    : facts.filter(fact => fact.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-x-hidden">
      <StarField />
      
      <div className="relative z-10 py-12 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-orange-400">SPACE</span> <span className="text-white">FACTS</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300">Discover Amazing Facts About Our Universe</p>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFacts.map((fact) => (
              <div key={fact.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-orange-400">
                    {fact.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{fact.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      fact.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                      fact.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {fact.difficulty}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{fact.fact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceFacts;
