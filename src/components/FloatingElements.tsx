
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
}

export function FloatingElements() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = ['cyan', 'purple', 'pink'];
    const newParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      size: 4 + Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-full opacity-60`}
          style={{
            left: `${particle.left}%`,
            bottom: '-20px',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color === 'cyan' 
              ? 'hsl(190 95% 55%)' 
              : particle.color === 'purple'
              ? 'hsl(280 60% 60%)'
              : 'hsl(330 80% 65%)',
            animation: `particle-float ${particle.duration}s linear infinite`,
            animationDelay: `${particle.delay}s`,
            boxShadow: `0 0 ${particle.size * 2}px currentColor`,
          }}
        />
      ))}
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 rounded-lg border-2 border-cyan-400/30 rotate-45 float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-12 h-12 rounded-lg border-2 border-purple-400/30 rotate-12 float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-20 h-20 rounded-full border-2 border-pink-400/30 float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-10 w-14 h-14 rounded-lg border-2 border-cyan-400/30 -rotate-12 float" style={{ animationDelay: '1.5s' }} />
    </div>
  );
}