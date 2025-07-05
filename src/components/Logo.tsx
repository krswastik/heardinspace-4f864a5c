
import React from 'react';

const Logo = () => {
  return (
    <div className="fixed top-4 left-4 z-20">
      <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-white/10">
        <img 
          src="/lovable-uploads/840c39d8-0997-4fa3-87ba-e0d8d0187358.png" 
          alt="HeardInSpace Logo" 
          className="h-12 w-auto"
          style={{ 
            filter: 'drop-shadow(0 0 10px rgba(255, 107, 53, 0.3))',
            mixBlendMode: 'normal'
          }}
        />
      </div>
    </div>
  );
};

export default Logo;
