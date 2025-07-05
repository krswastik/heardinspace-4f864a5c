
import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SpaceWaves = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const todaysTransmission = {
    date: new Date().toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    title: "Apollo 11 - Eagle Has Landed",
    mission: "Lunar Landing Module",
    duration: "4:32",
    description: "Experience the historic moment when humanity first touched the lunar surface. This transmission captures the tension and triumph of mankind's greatest achievement.",
    transcript: "Houston, Tranquility Base here. The Eagle has landed...",
    // Demo audio URL - using a space-themed audio file
    audioUrl: "https://www.nasa.gov/wp-content/uploads/2023/04/apollo_11_onboard_audio_database_eagle_has_landed.wav"
  };

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // For demo purposes, we'll simulate audio playback since we don't have actual audio files
        // In a real implementation, you would use: audioRef.current.play();
        simulateAudioPlayback();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Simulate audio playback for demo
  const simulateAudioPlayback = () => {
    const interval = setInterval(() => {
      setCurrentTime(prev => {
        if (prev >= 272) { // 4:32 in seconds
          setIsPlaying(false);
          clearInterval(interval);
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    // Store interval reference to clear it when pausing
    if (audioRef.current) {
      (audioRef.current as any).demoInterval = interval;
    }
  };

  // Handle pause for demo
  React.useEffect(() => {
    if (!isPlaying && audioRef.current && (audioRef.current as any).demoInterval) {
      clearInterval((audioRef.current as any).demoInterval);
    }
  }, [isPlaying]);

  return (
    <section id="space-waves" className="py-12 md:py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-orange-400">SPACE</span> <span className="text-white">WAVES</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300">Daily Transmissions from Across the Galaxy</p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-slate-700 hover:border-orange-400/50 transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Radio Console */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 md:p-6 border border-slate-600">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
                  <div className="text-orange-400 font-mono text-xs md:text-sm">
                    TRANSMISSION #{Math.floor(Math.random() * 1000).toString().padStart(3, '0')}
                  </div>
                  <div className="text-cyan-400 font-mono text-xs md:text-sm">
                    {todaysTransmission.date}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {todaysTransmission.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm md:text-base">
                  Mission: <span className="text-cyan-400">{todaysTransmission.mission}</span>
                </p>

                <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                  {todaysTransmission.description}
                </p>

                {/* Audio Controls */}
                <div className="bg-slate-900 rounded-lg p-4">
                  <div className="flex items-center gap-4 mb-4">
                    <button
                      onClick={togglePlayback}
                      className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      {isPlaying ? <Pause className="w-4 md:w-5 h-4 md:h-5" /> : <Play className="w-4 md:w-5 h-4 md:h-5 ml-1" />}
                    </button>

                    <div className="flex-1">
                      <div className="bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-orange-400 to-cyan-400 h-full transition-all duration-100"
                          style={{ width: `${(currentTime / 272) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="text-xs md:text-sm text-gray-400 font-mono">
                      {Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, '0')} / {todaysTransmission.duration}
                    </div>

                    <Volume2 className="w-4 md:w-5 h-4 md:h-5 text-gray-400" />
                  </div>

                  {/* Waveform visualization */}
                  <div className="flex items-end gap-1 h-12 md:h-16 justify-center">
                    {Array.from({ length: 40 }, (_, i) => (
                      <div
                        key={i}
                        className={`bg-gradient-to-t from-orange-400 to-cyan-400 w-1 transition-all duration-150 ${
                          isPlaying ? 'animate-pulse' : ''
                        }`}
                        style={{ 
                          height: `${Math.random() * 80 + 20}%`,
                          animationDelay: `${i * 50}ms`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Transmission Info */}
            <div className="space-y-6">
              <div className="bg-slate-900/50 rounded-xl p-4 md:p-6 border border-slate-700">
                <h4 className="text-base md:text-lg font-semibold text-orange-400 mb-3">Mission Transcript</h4>
                <div className="bg-slate-800 rounded-lg p-4 font-mono text-xs md:text-sm text-gray-300">
                  <div className="text-cyan-400 mb-2">[STATIC TRANSMISSION BEGINS]</div>
                  <p>"{todaysTransmission.transcript}"</p>
                  <div className="text-cyan-400 mt-2">[TRANSMISSION ENDS]</div>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-xl p-4 md:p-6 border border-slate-700">
                <h4 className="text-base md:text-lg font-semibold text-cyan-400 mb-3">Did You Know?</h4>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  The Apollo 11 mission carried a piece of fabric and wood from the Wright Brothers' 1903 aircraft, 
                  connecting humanity's first flight to its first lunar landing just 66 years later.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 py-3 bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg text-white hover:from-slate-600 hover:to-slate-700 transition-all text-sm md:text-base">
                  Previous Transmission
                </button>
                <Link to="/archive" className="flex-1 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-white hover:from-orange-600 hover:to-orange-700 transition-all text-center text-sm md:text-base">
                  Browse Archive
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo audio element - in production this would have a real audio source */}
      <audio 
        ref={audioRef} 
        preload="none"
        onTimeUpdate={(e) => {
          const audio = e.target as HTMLAudioElement;
          setCurrentTime(Math.floor(audio.currentTime));
        }}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
        }}
      >
        <source src={todaysTransmission.audioUrl} type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
};

export default SpaceWaves;
