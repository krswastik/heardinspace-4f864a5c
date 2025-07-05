
import React, { useState } from 'react';
import { Calendar, Star, Rocket } from 'lucide-react';

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(0);

  const spaceEvents = [
    {
      year: "1957",
      title: "Sputnik 1 Launch",
      description: "The first artificial satellite begins the Space Age",
      details: "Soviet Union launches humanity's first artificial satellite, marking the beginning of space exploration",
      color: "orange"
    },
    {
      year: "1961",
      title: "First Human in Space",
      description: "Yuri Gagarin orbits Earth",
      details: "Soviet cosmonaut Yuri Gagarin becomes the first human to travel to space and orbit Earth",
      color: "cyan"
    },
    {
      year: "1969",
      title: "Moon Landing",
      description: "Apollo 11 lands on the lunar surface",
      details: "Neil Armstrong and Buzz Aldrin become the first humans to walk on the Moon",
      color: "orange"
    },
    {
      year: "1977",
      title: "Voyager Launch",
      description: "Deep space exploration begins",
      details: "Voyager 1 and 2 launched to explore the outer solar system and beyond",
      color: "cyan"
    },
    {
      year: "1990",
      title: "Hubble Space Telescope",
      description: "Revolutionary space observatory deployed",
      details: "Hubble begins transforming our understanding of the universe with unprecedented images",
      color: "orange"
    },
    {
      year: "2012",
      title: "Mars Curiosity Rover",
      description: "Advanced Mars exploration",
      details: "Curiosity rover lands on Mars to search for signs of past microbial life",
      color: "cyan"
    }
  ];

  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-white">COSMIC</span> <span className="text-orange-400">TIMELINE</span>
          </h2>
          <p className="text-xl text-gray-300">Journey Through Humanity's Greatest Space Achievements</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-400 via-cyan-400 to-orange-400 rounded-full"></div>

          <div className="space-y-12">
            {spaceEvents.map((event, index) => (
              <div 
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} cursor-pointer`}
                onClick={() => setSelectedEvent(index)}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                    selectedEvent === index 
                      ? `border-${event.color}-400 shadow-lg shadow-${event.color}-400/25 scale-105` 
                      : 'border-slate-700 hover:border-slate-600'
                  }`}>
                    <div className={`text-2xl font-bold text-${event.color}-400 mb-2`}>
                      {event.year}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {event.description}
                    </p>
                    
                    <div className={`transition-all duration-500 overflow-hidden ${
                      selectedEvent === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-sm text-gray-400 border-t border-slate-700 pt-4">
                        {event.details}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className={`w-6 h-6 rounded-full border-4 transition-all duration-300 ${
                    selectedEvent === index 
                      ? `bg-${event.color}-400 border-${event.color}-400 scale-150` 
                      : 'bg-slate-800 border-slate-600'
                  }`}>
                    <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                      selectedEvent === index ? `animate-ping bg-${event.color}-400` : ''
                    }`}></div>
                  </div>
                </div>

                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <Calendar className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              What's Next in Space Exploration?
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From Mars colonies to interstellar travel, the future holds infinite possibilities. 
              Stay tuned to HeardInSpace for upcoming missions and breakthrough discoveries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
