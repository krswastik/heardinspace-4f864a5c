
import React from 'react';
import { Users, Rocket, Star, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import StarField from '../components/StarField';

const About = () => {
  const teamMembers = [
    {
      name: "Swastik Sharma",
      role: "Full Stack Developer & Project Lead",
      description: "Passionate about space technology and web development. Leading the technical architecture of HeardInSpace.",
      skills: ["React", "Node.js", "Space APIs", "UI/UX Design"]
    },
    {
      name: "Gunjan Hotwani", 
      role: "Frontend Developer & Designer",
      description: "Creative mind behind the stunning visual design and user experience of HeardInSpace.",
      skills: ["React", "3D Graphics", "Animation", "Creative Design"]
    },
    {
      name: "Shivansh Anand Thakur",
      role: "Backend Developer & Data Analyst", 
      description: "Expert in handling space data and creating robust backend systems for our space exploration platform.",
      skills: ["Python", "Data Analysis", "APIs", "Database Design"]
    }
  ];

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
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6">
              <span className="text-orange-400">ABOUT</span> <span className="text-white">US</span>
            </h1>
            <div className="flex justify-center items-center gap-4 mb-8">
              <Rocket className="w-12 h-12 text-cyan-400" />
              <Star className="w-8 h-8 text-orange-400" />
              <Users className="w-12 h-12 text-cyan-400" />
            </div>
          </div>

          {/* Project Description */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 mb-16">
            <h2 className="text-3xl font-bold text-center mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                HEARD IN SPACE
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto mb-8">
              HeardInSpace is an innovative web platform that brings the wonders of space exploration to everyone. 
              Our mission is to make space science accessible, engaging, and interactive through cutting-edge web technologies 
              and immersive storytelling.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Interactive Learning</h3>
                <p className="text-gray-400 text-sm">
                  Engaging games and simulations that make space science fun and accessible
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Real Space Data</h3>
                <p className="text-gray-400 text-sm">
                  Authentic space transmissions and historical data from actual space missions
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Community Driven</h3>
                <p className="text-gray-400 text-sm">
                  Built by students, for students and space enthusiasts worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-white">OUR</span> <span className="text-cyan-400">TEAM</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-orange-400 text-sm font-semibold">{member.role}</p>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 text-center">
                    {member.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-md border border-cyan-400/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* University Section */}
          <div className="text-center bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Proudly representing
            </h3>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              SRM UNIVERSITY
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              This project showcases the innovative spirit and technical excellence fostered at SRM University. 
              We're proud to contribute to the future of space education and technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
