import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, Users, ThumbsUp, Star, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import StarField from '../components/StarField';

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const discussions = [
    {
      id: 1,
      title: "Best strategies for Mars landing simulations?",
      author: "SpaceExplorer23",
      replies: 15,
      likes: 32,
      category: "Gaming",
      timeAgo: "2 hours ago"
    },
    {
      id: 2,
      title: "Educational resources for teaching orbital mechanics",
      author: "TeacherMike",
      replies: 8,
      likes: 24,
      category: "Education",
      timeAgo: "5 hours ago"
    },
    {
      id: 3,
      title: "Did anyone catch the ISS transmission today?",
      author: "RadioAstronomer",
      replies: 42,
      likes: 67,
      category: "Space Waves",
      timeAgo: "1 day ago"
    }
  ];

  const topMembers = [
    { name: "AstroNinja", points: 2847, level: "Space Commander" },
    { name: "CosmoTeacher", points: 2156, level: "Mission Specialist" },
    { name: "RocketScientist", points: 1932, level: "Flight Engineer" },
    { name: "StarGazer", points: 1645, level: "Astronaut Candidate" }
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
              <span className="text-orange-400">SPACE</span> <span className="text-white">COMMUNITY</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300">Connect with Fellow Space Enthusiasts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 mb-6">
                <div className="flex gap-4 mb-6">
                  <button
                    onClick={() => setActiveTab('discussions')}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      activeTab === 'discussions'
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    Discussions
                  </button>
                  <button
                    onClick={() => setActiveTab('events')}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      activeTab === 'events'
                        ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    Events
                  </button>
                </div>

                {activeTab === 'discussions' && (
                  <div className="space-y-4">
                    {discussions.map((discussion) => (
                      <div key={discussion.id} className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700/70 transition-all cursor-pointer">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-white font-semibold hover:text-orange-400 transition-colors">
                            {discussion.title}
                          </h3>
                          <span className="text-xs text-gray-400">{discussion.timeAgo}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span className="text-cyan-400">{discussion.author}</span>
                          <span className="px-2 py-1 bg-slate-600 rounded text-xs">{discussion.category}</span>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            {discussion.replies}
                          </div>
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="w-4 h-4" />
                            {discussion.likes}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'events' && (
                  <div className="text-center py-8">
                    <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400">No upcoming community events at the moment.</p>
                    <p className="text-sm text-gray-500 mt-2">Check back soon for exciting space community gatherings!</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Top Members */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-orange-400" />
                  Top Members
                </h3>
                <div className="space-y-3">
                  {topMembers.map((member, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="text-white font-semibold">{member.name}</div>
                        <div className="text-gray-400 text-sm">{member.level}</div>
                      </div>
                      <div className="text-orange-400 font-bold">{member.points}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Community Stats */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-cyan-400" />
                  Community Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Members</span>
                    <span className="text-white font-bold">12,847</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Active Today</span>
                    <span className="text-green-400 font-bold">1,234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Discussions</span>
                    <span className="text-white font-bold">3,456</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Posts Today</span>
                    <span className="text-cyan-400 font-bold">89</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
