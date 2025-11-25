import React from 'react';
import { Shield, Terminal, Lock, Cpu, Eye, Globe } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '001',
    title: 'PENTESTING',
    code: 'OP_PEN_TST',
    description: 'Simulación de ataques controlados para identificar vulnerabilidades críticas antes que el enemigo.',
    icon: 'shield'
  },
  {
    id: '002',
    title: 'AUDITORÍA DE CÓDIGO',
    code: 'SRC_CODE_REV',
    description: 'Análisis estático y dinámico. Depuración de backdoors y lógica defectuosa en sus aplicaciones.',
    icon: 'terminal'
  },
  {
    id: '003',
    title: 'CIFRADO E2E',
    code: 'CRYPTO_PROTO',
    description: 'Implementación de algoritmos de grado militar para la protección de datos en tránsito y reposo.',
    icon: 'lock'
  },
  {
    id: '004',
    title: 'HARDENING',
    code: 'SRV_HRD_LNX',
    description: 'Fortalecimiento de infraestructura. Cierre de puertos, configuración de firewalls y mitigación DDoS.',
    icon: 'cpu'
  },
  {
    id: '005',
    title: 'THREAT INTEL',
    code: 'INTEL_GATHER',
    description: 'Monitorización proactiva de amenazas. Sepa quién intenta acceder a su mainframe.',
    icon: 'eye'
  },
  {
    id: '006',
    title: 'DESARROLLO SEGURO',
    code: 'DEV_SECOPS',
    description: 'Creación de aplicaciones web robustas desde cero utilizando metodologías DevSecOps.',
    icon: 'globe'
  }
];

const IconMap = {
  shield: Shield,
  terminal: Terminal,
  lock: Lock,
  cpu: Cpu,
  eye: Eye,
  globe: Globe
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 relative z-10 border-t border-[#39ff14]/30 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-bold text-[#39ff14] mb-4 text-glow">
             <span className="animate-pulse mr-2">></span> MÓDULOS TÁCTICOS
           </h2>
           <p className="text-xl text-[#39ff14]/80 max-w-2xl mx-auto border-l-4 border-[#39ff14] pl-4 text-left font-mono">
             SELECCIONE UNA SUBRUTINA PARA DESPLEGAR CONTRAMEDIDAS.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = IconMap[service.icon];
            return (
              <div 
                key={service.id}
                className="group relative border border-[#39ff14] bg-black/80 p-6 hover:bg-[#39ff14]/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(57,255,20,0.3)]"
              >
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 bg-[#39ff14]" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-[#39ff14]" />
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#39ff14]" />
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#39ff14]" />

                <div className="flex items-center justify-between mb-4 border-b border-[#39ff14]/30 pb-2">
                  <span className="text-xs text-[#39ff14]/70 font-mono tracking-widest">{service.code}</span>
                  <span className="text-xs text-[#39ff14]/70 font-mono">ID: {service.id}</span>
                </div>

                <div className="flex items-center mb-4">
                  <div className="p-3 border border-[#39ff14] mr-4 group-hover:bg-[#39ff14] group-hover:text-black transition-colors duration-300">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#39ff14] transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-[#39ff14]/80 text-lg leading-relaxed font-mono">
                  {service.description}
                </p>

                <div className="mt-6 flex justify-end">
                   <button className="text-sm text-[#39ff14] uppercase hover:underline decoration-2 underline-offset-4 flex items-center gap-2">
                     EXECUTE <span className="animate-pulse">_</span>
                   </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};