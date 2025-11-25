import React, { useEffect, useState } from 'react';

// Simplified coordinate mapping for visual effect
// Not geographically perfect, but fits the stylized "War Room" aesthetic
const targets = [
  { id: 1, x: 20, y: 35, name: "NORAD" },
  { id: 2, x: 45, y: 30, name: "LONDON" },
  { id: 3, x: 55, y: 32, name: "MOSCOW" },
  { id: 4, x: 75, y: 40, name: "BEIJING" },
  { id: 5, x: 85, y: 70, name: "SYDNEY" },
  { id: 6, x: 30, y: 75, name: "BRASILIA" },
  { id: 7, x: 15, y: 38, name: "SILICON VALLEY" },
];

export const WarRoomMap: React.FC = () => {
  const [activeArcs, setActiveArcs] = useState<number[]>([]);

  useEffect(() => {
    // Randomly trigger missile arcs
    const interval = setInterval(() => {
      const targetIndex = Math.floor(Math.random() * targets.length);
      setActiveArcs(prev => {
        const newArcs = [...prev, targetIndex];
        if (newArcs.length > 5) newArcs.shift();
        return newArcs;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
      <svg className="w-full h-full text-[#39ff14]" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Grid */}
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1" strokeOpacity="0.5"/>
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />

        {/* Continents (Abstract Outlines) */}
        {/* North America */}
        <path d="M 5 10 L 30 10 L 40 40 L 15 50 Z" fill="none" stroke="currentColor" strokeWidth="0.2" />
        {/* South America */}
        <path d="M 20 55 L 35 55 L 30 90 L 20 80 Z" fill="none" stroke="currentColor" strokeWidth="0.2" />
        {/* Europe/Asia */}
        <path d="M 42 12 L 90 12 L 85 55 L 60 60 L 45 35 Z" fill="none" stroke="currentColor" strokeWidth="0.2" />
        {/* Africa */}
        <path d="M 42 40 L 60 40 L 55 75 L 40 60 Z" fill="none" stroke="currentColor" strokeWidth="0.2" />
        {/* Australia */}
        <path d="M 75 65 L 95 65 L 90 85 L 75 80 Z" fill="none" stroke="currentColor" strokeWidth="0.2" />

        {/* Targets */}
        {targets.map((t) => (
          <g key={t.id}>
            <circle cx={t.x} cy={t.y} r="0.5" fill="currentColor" className="animate-pulse" />
            <circle cx={t.x} cy={t.y} r="1.5" fill="none" stroke="currentColor" strokeWidth="0.1" className="animate-[ping_3s_ease-in-out_infinite]" />
          </g>
        ))}

        {/* Arcs */}
        {activeArcs.map((idx, i) => {
          const start = targets[idx];
          const end = targets[(idx + 1) % targets.length];
          // Calculate a curve
          const midX = (start.x + end.x) / 2;
          const midY = (start.y + end.y) / 2 - 20; // Arc upwards

          return (
             <path
               key={`${start.id}-${end.id}-${i}`}
               d={`M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`}
               fill="none"
               stroke={i % 2 === 0 ? "#39ff14" : "#ff0000"} // Mix of green and red lines
               strokeWidth="0.2"
               strokeDasharray="2"
               className="animate-[dash_5s_linear_infinite]"
             >
               <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" fill="freeze" />
             </path>
          );
        })}
      </svg>
    </div>
  );
};