
import React, { useState } from 'react';
import { Play, Calendar, Clock, ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import StarField from '../components/StarField';

const Archive = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const transmissions = [
    {
      id: 1,
      title: "Apollo 11 - Eagle Has Landed",
      mission: "Lunar Landing Module",
      date: "July 20, 1969",
      duration: "4:32",
      category: "historic",
      description: "The historic moment when humanity first touched the lunar surface.",
      transcript: "Houston, Tranquility Base here. The Eagle has landed...",
      isNew: false
    },
    {
      id: 2,
      title: "Voyager 1 - Jupiter Flyby",
      mission: "Deep Space Exploration",
      date: "March 5, 1979",
      duration: "7:45",
      category: "exploration",
      description: "Voyager 1's approach to Jupiter reveals stunning details of the gas giant.",
      transcript: "We are seeing incredible detail in Jupiter's atmosphere...",
      isNew: false
    },
    {
      id: 3,
      title: "Space Shuttle Challenger Launch",
      mission: "STS-6 Mission",
      date: "April 4, 1983",
      duration: "3:21",
      category: "shuttle",
      description: "The successful launch of Space Shuttle Challenger on its maiden voyage.",
      transcript: "We have main engine start... and liftoff of Space Shuttle Challenger...",
      isNew: false
    },
    {
      id: 4,
      title: "Mars Perseverance Landing",
      mission: "Mars 2020 Mission",
      date: "February 18, 2021",
      duration: "6:12",
      category: "mars",
      description: "Perseverance rover's successful landing in Jezero Crater on Mars.",
      transcript: "Touchdown confirmed! Perseverance is safe on the surface of Mars...",
      isNew: true
    },
    {
      id: 5,
      title: "ISS Docking Procedure",
      mission: "International Space Station",
      date: "October 15, 2023",
      duration: "8:30",
      category: "iss",
      description: "Live transmission during a routine docking procedure at the ISS.",
      transcript: "Houston, we have successful docking with the International Space Station...",
      isNew: true
    },
    {
      id: 6,
      title: "Hubble Deep Field Discovery",
      mission: "Hubble Space Telescope",
      date: "December 1, 1995",
      duration: "5:18",
      category: "discovery",
      description: "The groundbreaking Hubble Deep Field observations.",
      transcript: "The images we're receiving show galaxies beyond our wildest expectations...",
      isNew: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Transmissions' },
    { id: 'historic', label: 'Historic Missions' },
    { id: 'exploration', label: 'Deep Space' },
    { id: 'mars', label: 'Mars Missions' },
    { id: 'iss', label: 'Space Station' },
    { id: 'discovery', label: 'Discoveries' }
  ];

  const filteredTransmissions = transmissions.filter(transmission => {
    const matchesSearch = transmission.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transmission.mission.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || transmission.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-x-hidden">
      <StarField />
      
      <div className="relative z-10 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold mb-4">
              <span className="text-orange-400">TRANSMISSION</span> <span className="text-white">ARCHIVE</span>
            </h1>
            <p className="text-xl text-gray-300">Explore Historic Space Communications</p>
          </div>

          {/* Search and Filter */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search transmissions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-10 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Transmissions Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredTransmissions.map((transmission) => (
              <div key={transmission.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white">{transmission.title}</h3>
                      {transmission.isNew && (
                        <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full">NEW</span>
                      )}
                    </div>
                    <p className="text-cyan-400 text-sm font-semibold">{transmission.mission}</p>
                  </div>
                  <button className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 ml-1" />
                  </button>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {transmission.description}
                </p>

                <div className="bg-slate-900/50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-gray-400 mb-1">TRANSCRIPT PREVIEW</p>
                  <p className="text-sm text-gray-300 font-mono">"{transmission.transcript}"</p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {transmission.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {transmission.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTransmissions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No transmissions match your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Archive;
