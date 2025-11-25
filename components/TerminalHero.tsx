import React, { useState, useEffect, useRef } from 'react';
import { BootState } from '../types';

interface TerminalHeroProps {
  bootState: BootState;
  setBootState: (state: BootState) => void;
}

export const TerminalHero: React.FC<TerminalHeroProps> = ({ bootState, setBootState }) => {
  const [lines, setLines] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  const introSequence = [
    "INITIALIZING CONNECTION...",
    "CPU: NEURAL NET PROCESSOR",
    "MEM: 512 TERAQUAD",
    "LOADING KERNEL...",
    "...",
    "LOGON: JOSHUA",
    "PASSWORD: **********",
    "ACCESS GRANTED.",
    " ",
    "GREETINGS.",
    "SHALL WE PLAY A GAME?",
    " ",
    "> LIST GAMES",
    "1. TIC-TAC-TOE",
    "2. CHESS",
    "3. GLOBAL THERMONUCLEAR WAR",
    "4. SECURE_WEB_DEVELOPMENT",
    " ",
    "> SELECT 4",
    "LOADING 'CIBERSEGURIDAD' MODULE...",
  ];

  useEffect(() => {
    if (bootState !== BootState.BOOTING) return;

    let lineIndex = 0;
    
    const interval = setInterval(() => {
      if (lineIndex >= introSequence.length) {
        clearInterval(interval);
        setTimeout(() => setBootState(BootState.ONLINE), 1000);
        return;
      }

      setLines(prev => [...prev, introSequence[lineIndex]]);
      lineIndex++;
      
      // Auto scroll
      if (bottomRef.current) {
        bottomRef.current.scrollIntoView({ behavior: 'smooth' });
      }

    }, 300); // Speed of typing lines

    return () => clearInterval(interval);
  }, [bootState, setBootState]);

  if (bootState === BootState.ONLINE) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative z-10 pt-20">
         <div className="border-4 border-[#39ff14] p-8 md:p-12 bg-black/80 max-w-4xl w-full border-glow backdrop-blur-sm">
            <h1 className="text-4xl md:text-7xl font-bold text-[#39ff14] mb-6 text-glow font-[VT323]">
              WOPR SECURITY
            </h1>
            <p className="text-xl md:text-2xl text-[#39ff14] mb-8 font-mono">
              "A STRANGE GAME. THE ONLY WINNING MOVE IS SECURE CODE."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
               <div className="p-4 border border-[#39ff14]/50">
                  <h3 className="text-white text-xl mb-2 underline decoration-[#39ff14]">ESTADO DEL SISTEMA</h3>
                  <ul className="text-[#39ff14] space-y-1">
                    <li>> WEB_DEFENSE: ACTIVE</li>
                    <li>> ENCRYPTION: 256-BIT</li>
                    <li>> THREAT_LEVEL: LOW</li>
                  </ul>
               </div>
               <div className="p-4 border border-[#39ff14]/50">
                  <h3 className="text-white text-xl mb-2 underline decoration-[#39ff14]">OBJETIVOS DE LA MISIÓN</h3>
                  <ul className="text-[#39ff14] space-y-1">
                    <li>> AUDITORÍA DE VULNERABILIDADES</li>
                    <li>> DESARROLLO BLINDADO</li>
                    <li>> PROTECCIÓN DE DATOS</li>
                  </ul>
               </div>
            </div>

            <a href="#contact" className="inline-block bg-[#39ff14] text-black text-2xl font-bold px-8 py-3 hover:bg-white transition-colors duration-300 animate-pulse">
              INICIAR PROTOCOLO
            </a>
         </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex items-start justify-start p-4 md:p-10 font-[VT323] text-xl md:text-2xl text-[#39ff14] overflow-y-auto">
      <div className="max-w-3xl w-full">
        {lines.map((line, i) => (
          <div key={i} className="mb-1 leading-relaxed text-glow break-words">
            {line}
          </div>
        ))}
        {bootState === BootState.BOOTING && (
           <div className="animate-pulse">_</div>
        )}
        <div ref={bottomRef} />
      </div>
      
      {/* Skip button */}
      <button 
        onClick={() => setBootState(BootState.ONLINE)}
        className="fixed bottom-10 right-10 text-xs border border-[#39ff14] text-[#39ff14] px-4 py-2 hover:bg-[#39ff14] hover:text-black transition-colors"
      >
        [ ESC ] SKIP SEQUENCE
      </button>
    </div>
  );
};