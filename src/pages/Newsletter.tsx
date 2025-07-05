
import React, { useState } from 'react';
import { ArrowLeft, Mail, CheckCircle, Star, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import StarField from '../components/StarField';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Weekly Space Facts",
      description: "Discover amazing facts about our universe every week"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Mission Updates",
      description: "Stay updated with the latest space missions and discoveries"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Exclusive Content",
      description: "Access subscriber-only educational resources and games"
    }
  ];

  const recentIssues = [
    {
      date: "March 8, 2024",
      title: "The James Webb Space Telescope's Latest Discoveries",
      preview: "Explore the breathtaking images and scientific breakthroughs from JWST..."
    },
    {
      date: "March 1, 2024",
      title: "Mars Rover Perseverance: 3 Years on the Red Planet",
      preview: "Celebrating three years of incredible discoveries on Mars..."
    },
    {
      date: "February 23, 2024",
      title: "Understanding Black Holes: A Beginner's Guide",
      preview: "Dive into the mysterious world of black holes and their secrets..."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-x-hidden">
      <StarField />
      
      <div className="relative z-10 py-12 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-orange-400">SPACE</span> <span className="text-white">NEWSLETTER</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300">Stay Connected with the Cosmos</p>
          </div>

          {!subscribed ? (
            <>
              {/* Subscription Form */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 mb-12">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Join Our Space Community</h2>
                  <p className="text-gray-300">Get weekly updates about space exploration, educational content, and exclusive access to new features.</p>
                </div>

                <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                  <div className="flex gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                      required
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-white hover:from-orange-600 hover:to-orange-700 transition-all whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {features.map((feature, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center">
                    <div className="text-orange-400 mb-4 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 mb-12 text-center">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Welcome to the Space Community!</h2>
              <p className="text-gray-300">Thank you for subscribing! You'll receive your first newsletter within the next week.</p>
            </div>
          )}

          {/* Recent Issues */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-6">Recent Newsletter Issues</h3>
            <div className="space-y-4">
              {recentIssues.map((issue, index) => (
                <div key={index} className="border-l-2 border-cyan-400 pl-4 py-2">
                  <div className="text-sm text-gray-400 mb-1">{issue.date}</div>
                  <h4 className="text-white font-semibold mb-2">{issue.title}</h4>
                  <p className="text-gray-300 text-sm">{issue.preview}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
