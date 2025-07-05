
import React from 'react';
import { Star, Rocket, Book } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-16 px-4 relative z-10 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                  HEARD IN SPACE
                </span>
              </h3>
              <p className="text-gray-400 mt-2">
                Exploring the cosmos through interactive storytelling and immersive experiences.
              </p>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-cyan-400 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-orange-400 rounded-full flex items-center justify-center">
                <Rocket className="w-4 h-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-cyan-400 rounded-full flex items-center justify-center">
                <Book className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#space-waves" className="hover:text-orange-400 transition-colors">Space Waves</a></li>
              <li><a href="#space-arcade" className="hover:text-cyan-400 transition-colors">Space Arcade</a></li>
              <li><Link to="/archive" className="hover:text-orange-400 transition-colors">Mission Archive</Link></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Timeline</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Learn</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Space Facts</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Mission Guides</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Educational Resources</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Teacher Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Feedback</a></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 HeardInSpace. Made with cosmic curiosity and stellar dedication.
            </div>
            
            <div className="text-gray-400 text-sm">
              <span>Data sourced from </span>
              <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors">NASA</a>
              <span> • Powered by imagination</span>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-xs text-gray-500 font-mono">
              "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." - Einstein
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
