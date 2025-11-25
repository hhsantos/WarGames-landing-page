import React, { useState, useEffect } from 'react';
import { BootState } from './types';
import { TerminalHero } from './components/TerminalHero';
import { NavBar } from './components/NavBar';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { WarRoomMap } from './components/WarRoomMap';

const App: React.FC = () => {
  const [bootState, setBootState] = useState<BootState>(BootState.BOOTING);

  // Sound effect handler (optional enhancement placeholder)
  useEffect(() => {
    // In a real app, we might play a 'hum' or typing sounds here
  }, [bootState]);

  return (
    <div className="min-h-screen bg-black text-[#39ff14] relative font-vt323 selection:bg-[#39ff14] selection:text-black">
      
      {/* CRT Effects */}
      <div className="scanlines"></div>
      <div className="fixed inset-0 pointer-events-none z-50 bg-[radial-gradient(circle,rgba(0,0,0,0)_60%,rgba(0,0,0,0.6)_100%)]"></div>
      <div className="flicker fixed inset-0 pointer-events-none z-40 bg-white/5 opacity-[0.02]"></div>

      {/* Background Map */}
      <WarRoomMap />

      {/* Intro Sequence or Main Site */}
      {bootState !== BootState.ONLINE ? (
        <TerminalHero bootState={bootState} setBootState={setBootState} />
      ) : (
        <div className="animate-[fadeIn_1s_ease-in]">
          <NavBar />
          
          <main>
            <TerminalHero bootState={bootState} setBootState={setBootState} />
            <Services />
            <About />
            <Contact />
          </main>

          <footer className="bg-black border-t border-[#39ff14]/30 py-8 relative z-10 text-center">
            <p className="text-[#39ff14]/60 text-sm">
              &copy; 1983-{new Date().getFullYear()} WOPR SECURITY SYSTEMS. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[#39ff14]/40 text-xs mt-2">
              "THE ONLY WINNING MOVE IS NOT TO PLAY."
            </p>
          </footer>
        </div>
      )}

    </div>
  );
};

export default App;