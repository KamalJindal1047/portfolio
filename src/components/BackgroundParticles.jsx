import React, { useEffect, useState } from 'react';

export default function BackgroundParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random floating particles
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * -20,
      opacity: Math.random() * 0.4 + 0.1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Background radial gradient blobs */}
      <div className="absolute top-[10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-brand-blue/10 blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-brand-cyan/10 blur-[130px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[50%] left-[40%] w-[30vw] h-[30vw] rounded-full bg-brand-teal/5 blur-[100px] animate-pulse-slow" style={{ animationDelay: '4s' }}></div>

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-brand-cyan/40"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `float-particle ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      <style>{`
        @keyframes float-particle {
          0% {
            transform: translateY(100vh) translateX(0);
          }
          100% {
            transform: translateY(-10vh) translateX(30px);
          }
        }
      `}</style>
    </div>
  );
}
