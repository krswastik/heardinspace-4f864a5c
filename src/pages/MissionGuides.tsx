
import React from 'react';
import { ArrowLeft, Rocket, Target, CheckCircle, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import StarField from '../components/StarField';

const MissionGuides = () => {
  const guides = [
    {
      id: 1,
      title: "Space Station Docking Procedures",
      description: "Learn the step-by-step process of docking with the International Space Station",
      difficulty: "Advanced",
      duration: "45 mins",
      steps: 8,
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Satellite Deployment Mission",
      description: "Master the art of deploying satellites in various orbital configurations",
      difficulty: "Intermediate",
      duration: "30 mins",
      steps: 6,
      icon: <Rocket className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Mars Landing Protocol",
      description: "Execute a successful landing sequence on the Martian surface",
      difficulty: "Expert",
      duration: "60 mins",
      steps: 12,
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Lunar Orbit Insertion",
      description: "Navigate spacecraft into stable lunar orbit for extended missions",
      difficulty: "Intermediate",
      duration: "35 mins",
      steps: 7,
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

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
              <span className="text-orange-400">MISSION</span> <span className="text-white">GUIDES</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300">Master Space Operations with Expert Training</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide) => (
              <div key={guide.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-orange-400/50 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-cyan-400">
                    {guide.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{guide.title}</h3>
                    <p className="text-gray-300 mb-4">{guide.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className={`px-3 py-1 rounded-full ${
                        guide.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        guide.difficulty === 'Advanced' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {guide.difficulty}
                      </span>
                      <span className="text-gray-400">{guide.duration}</span>
                      <span className="text-gray-400">{guide.steps} steps</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-white hover:from-orange-600 hover:to-orange-700 transition-all">
                  Start Mission Guide
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionGuides;
