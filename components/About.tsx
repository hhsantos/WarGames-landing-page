import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative z-10 bg-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image / Graphic Side */}
          <div className="border-4 border-[#39ff14] p-2 relative">
             <div className="absolute top-4 left-4 text-xs bg-[#39ff14] text-black px-1 font-bold">FIG 1.1: ARCHITECTURE</div>
             {/* Simulated ASCII Art or Diagram */}
             <div className="bg-[#001100] p-4 font-mono text-xs md:text-sm text-[#39ff14] leading-tight overflow-hidden h-64 md:h-96 w-full flex items-center justify-center">
                <pre>{`
       .---.
      /     \\
      | WOPR |
      \\     /
       '---'
         |
    .----|----.
    |    |    |
  [WEB] [DB] [SEC]
    |    |    |
  [USR] [LOG] [KEY]
                `}</pre>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
             </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-[#39ff14] mb-6 text-glow">
               ARCHIVO CLASIFICADO
            </h2>
            <div className="space-y-6 text-lg text-[#39ff14]/90 font-mono">
              <p>
                <span className="font-bold text-white">> ORIGEN:</span> Fundado en las sombras de la red, WOPR Security nació con un propósito: restaurar el equilibrio en un ciberespacio caótico.
              </p>
              <p>
                <span className="font-bold text-white">> MISIÓN:</span> No jugamos juegos. Entendemos que su infraestructura web es crítica. Empleamos tácticas ofensivas para construir defensas impenetrables.
              </p>
              <p>
                <span className="font-bold text-white">> CAPACIDADES:</span> Nuestro equipo está compuesto por veteranos de la industria, criptógrafos y desarrolladores full-stack obsesionados con la seguridad.
              </p>
            </div>

            <div className="mt-8 border-t border-[#39ff14] pt-8 flex gap-4">
              <div className="flex-1 border border-[#39ff14]/50 p-4 text-center">
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-xs text-[#39ff14]">UPTIME</div>
              </div>
              <div className="flex-1 border border-[#39ff14]/50 p-4 text-center">
                <div className="text-3xl font-bold text-white mb-1">0</div>
                <div className="text-xs text-[#39ff14]">BREACHES</div>
              </div>
              <div className="flex-1 border border-[#39ff14]/50 p-4 text-center">
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-xs text-[#39ff14]">SURVEILLANCE</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};