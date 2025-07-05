
import React, { useState } from 'react';
import { ArrowLeft, Users, BookOpen, Calendar, Award, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import StarField from '../components/StarField';

const TeacherPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { label: 'Students Engaged', value: '1,247', icon: <Users className="w-6 h-6" /> },
    { label: 'Lessons Completed', value: '89', icon: <BookOpen className="w-6 h-6" /> },
    { label: 'Upcoming Events', value: '5', icon: <Calendar className="w-6 h-6" /> },
    { label: 'Certificates Earned', value: '156', icon: <Award className="w-6 h-6" /> }
  ];

  const recentActivities = [
    { student: 'Emma Johnson', activity: 'Completed Mars Mission Simulation', time: '2 hours ago' },
    { student: 'Michael Chen', activity: 'Earned Solar System Expert Badge', time: '4 hours ago' },
    { student: 'Sarah Williams', activity: 'Started Rocket Physics Course', time: '1 day ago' },
    { student: 'David Brown', activity: 'Submitted Space Station Project', time: '2 days ago' }
  ];

  const upcomingEvents = [
    { title: 'Virtual NASA Tour', date: 'March 15, 2024', participants: 45 },
    { title: 'Asteroid Belt Simulation', date: 'March 18, 2024', participants: 32 },
    { title: 'ISS Live Connection', date: 'March 22, 2024', participants: 78 }
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
              <span className="text-orange-400">TEACHER</span> <span className="text-white">PORTAL</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300">Manage Your Space Education Classroom</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-orange-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                </div>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Recent Activities */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Bell className="w-5 h-5 text-cyan-400" />
                Recent Student Activity
              </h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="border-l-2 border-orange-400 pl-4 py-2">
                    <div className="text-white font-semibold">{activity.student}</div>
                    <div className="text-gray-300 text-sm">{activity.activity}</div>
                    <div className="text-gray-500 text-xs">{activity.time}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cyan-400" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="bg-slate-700/50 rounded-lg p-4">
                    <div className="text-white font-semibold mb-1">{event.title}</div>
                    <div className="text-gray-300 text-sm mb-2">{event.date}</div>
                    <div className="text-orange-400 text-xs">{event.participants} students registered</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <button className="py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-white hover:from-orange-600 hover:to-orange-700 transition-all">
              Create New Assignment
            </button>
            <button className="py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg text-white hover:from-cyan-600 hover:to-cyan-700 transition-all">
              View Student Progress
            </button>
            <button className="py-4 bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg text-white hover:from-slate-700 hover:to-slate-800 transition-all">
              Download Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherPortal;
