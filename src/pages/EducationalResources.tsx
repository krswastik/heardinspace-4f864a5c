
import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Video, FileText, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import StarField from '../components/StarField';

const EducationalResources = () => {
  const [selectedGrade, setSelectedGrade] = useState('all');

  const resources = [
    {
      id: 1,
      title: "Solar System Interactive Model",
      type: "interactive",
      grade: "elementary",
      description: "3D interactive model showing planetary orbits and characteristics",
      icon: <Video className="w-5 h-5" />,
      downloadSize: "45 MB"
    },
    {
      id: 2,
      title: "Space Physics Workbook",
      type: "worksheet",
      grade: "high-school",
      description: "Comprehensive workbook covering orbital mechanics and space physics",
      icon: <FileText className="w-5 h-5" />,
      downloadSize: "12 MB"
    },
    {
      id: 3,
      title: "Astronaut Training Activities",
      type: "activity",
      grade: "middle-school",
      description: "Hands-on activities simulating astronaut training exercises",
      icon: <BookOpen className="w-5 h-5" />,
      downloadSize: "8 MB"
    },
    {
      id: 4,
      title: "Mars Exploration Documentary",
      type: "video",
      grade: "all",
      description: "Educational documentary about Mars exploration missions",
      icon: <Video className="w-5 h-5" />,
      downloadSize: "250 MB"
    }
  ];

  const grades = [
    { id: 'all', label: 'All Grades' },
    { id: 'elementary', label: 'Elementary' },
    { id: 'middle-school', label: 'Middle School' },
    { id: 'high-school', label: 'High School' }
  ];

  const filteredResources = selectedGrade === 'all' 
    ? resources 
    : resources.filter(resource => resource.grade === selectedGrade || resource.grade === 'all');

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
              <span className="text-orange-400">EDUCATIONAL</span> <span className="text-white">RESOURCES</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300">Free Learning Materials for Space Education</p>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {grades.map(grade => (
                <button
                  key={grade.id}
                  onClick={() => setSelectedGrade(grade.id)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedGrade === grade.id
                      ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {grade.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-orange-400">
                    {resource.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                    <p className="text-gray-300 mb-4">{resource.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span className="capitalize">{resource.type}</span>
                      <span>•</span>
                      <span className="capitalize">{resource.grade === 'all' ? 'All Grades' : resource.grade.replace('-', ' ')}</span>
                      <span>•</span>
                      <span>{resource.downloadSize}</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg text-white hover:from-cyan-600 hover:to-cyan-700 transition-all flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Resource
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalResources;
