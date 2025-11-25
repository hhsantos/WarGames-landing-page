import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    identity: '',
    sector: '',
    message: ''
  });
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SENT'>('IDLE');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SENDING');
    // Simulate network request
    setTimeout(() => {
      setStatus('SENT');
      setFormData({ identity: '', sector: '', message: '' });
      setTimeout(() => setStatus('IDLE'), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="border-2 border-[#39ff14] bg-black p-1 md:p-2">
          <div className="border border-[#39ff14] p-6 md:p-10">
            
            <div className="mb-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white bg-[#39ff14] text-black inline-block px-4 py-1 mb-4">
                ESTABLISH UPLINK
              </h2>
              <p className="text-[#39ff14] font-mono mt-2">
                WARNING: UNAUTHORIZED ACCESS IS PROHIBITED.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xl">
              
              <div>
                <label htmlFor="identity" className="block text-[#39ff14] mb-2">
                  > ENTER IDENTITY
                </label>
                <input
                  type="text"
                  id="identity"
                  required
                  value={formData.identity}
                  onChange={(e) => setFormData({...formData, identity: e.target.value})}
                  className="w-full bg-black border-b-2 border-[#39ff14] text-white p-2 focus:outline-none focus:bg-[#39ff14]/10 transition-colors placeholder-[#39ff14]/30"
                  placeholder="NAME OR ALIAS"
                />
              </div>

              <div>
                <label htmlFor="sector" className="block text-[#39ff14] mb-2">
                  > SECTOR / COMPANY
                </label>
                <input
                  type="text"
                  id="sector"
                  required
                  value={formData.sector}
                  onChange={(e) => setFormData({...formData, sector: e.target.value})}
                  className="w-full bg-black border-b-2 border-[#39ff14] text-white p-2 focus:outline-none focus:bg-[#39ff14]/10 transition-colors placeholder-[#39ff14]/30"
                  placeholder="ORGANIZATION"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#39ff14] mb-2">
                  > TRANSMISSION CONTENT
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-black border border-[#39ff14] text-white p-4 focus:outline-none focus:bg-[#39ff14]/10 transition-colors placeholder-[#39ff14]/30"
                  placeholder="DESCRIBE MISSION PARAMETERS..."
                />
              </div>

              <div className="pt-4 flex justify-between items-center">
                <div className="text-xs text-[#39ff14]/50 hidden md:block">
                  ENCRYPTION: ENABLED<br/>
                  TRACE: BLOCKED
                </div>
                <button
                  type="submit"
                  disabled={status !== 'IDLE'}
                  className="bg-[#39ff14] text-black font-bold text-xl px-8 py-3 hover:bg-white transition-colors uppercase disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {status === 'IDLE' && <span>SEND TRANSMISSION</span>}
                  {status === 'SENDING' && <span>ENCRYPTING...</span>}
                  {status === 'SENT' && <span>SENT SUCCESSFULLY</span>}
                  {status === 'IDLE' && <span className="animate-pulse">_</span>}
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
};