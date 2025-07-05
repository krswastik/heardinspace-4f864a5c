
import React from 'react';
import Hero from '../components/Hero';
import SpaceWaves from '../components/SpaceWaves';
import SpaceArcade from '../components/SpaceArcade';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';
import StarField from '../components/StarField';
import Space3D from '../components/Space3D';
import Logo from '../components/Logo';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-x-hidden" style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
      <StarField />
      <Space3D />
      <Logo />
      <Hero />
      <SpaceWaves />
      <SpaceArcade />
      <Timeline />
      <Footer />
    </div>
  );
};

export default Index;
