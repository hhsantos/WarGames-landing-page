import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { name: 'SISTEMAS', href: '#services' },
    { name: 'PERSONAL', href: '#about' },
    { name: 'PROTOCOLO', href: '#process' },
    { name: 'UPLINK', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-40 bg-black/90 border-b-2 border-[#39ff14] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-[#39ff14] text-2xl font-bold tracking-widest text-glow">
              WOPR<span className="animate-pulse">_</span>SEC
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#39ff14] hover:text-white hover:bg-[#39ff14]/20 px-3 py-2 rounded-md text-xl font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
             <div className="text-[#39ff14] text-lg">
                {time.toLocaleTimeString('en-US', { hour12: false })} <span className="text-xs">ZULU</span>
             </div>
             <div className="border border-red-600 bg-red-900/20 px-2 py-1 flex flex-col items-center justify-center w-24">
                <span className="text-red-500 text-xs font-bold tracking-widest">DEFCON</span>
                <span className="text-red-500 text-2xl font-bold animate-pulse">4</span>
             </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#39ff14] hover:text-white hover:bg-[#39ff14]/20 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-[#39ff14]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#39ff14] hover:text-white block px-3 py-2 rounded-md text-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};