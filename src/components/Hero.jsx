import React, { useState } from 'react';
import { 
  ArrowRight, 
  Activity, 
  ShieldAlert, 
  Cpu, 
  Play, 
  Sparkles, 
  CheckCircle2, 
  Radio, 
  Zap, 
  Layers,
  ChevronDown
} from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('flow');

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-cyan/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-brand-teal/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Student Venture Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850/90 border border-brand-cyan/30 text-xs font-medium text-slate-300 shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
              </span>
              <span className="font-semibold text-brand-cyan">Wadhwani Venture Submission</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300 font-mono text-[11px]">AI Smart City Innovation</span>
            </div>

            {/* Startup Brand & Headline */}
            <div className="space-y-3">
              <div className="font-mono text-xs uppercase tracking-widest text-brand-teal font-semibold">
                Autonomous Signal Optimization Architecture
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                Smarter Signals. <br />
                <span className="text-gradient">Smoother Cities.</span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              AI-powered traffic management designed to optimize signal timings, prioritize emergency vehicles, and support sustainable urban mobility.
            </p>

            {/* Key Capability Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 pb-2">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-navy-900/80 border border-navy-800 text-xs text-slate-300">
                <Cpu className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                <span>Computer Vision Density</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-navy-900/80 border border-navy-800 text-xs text-slate-300">
                <Activity className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Adaptive Cycle Timing</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-navy-900/80 border border-navy-800 text-xs text-slate-300 col-span-2 sm:col-span-1">
                <ShieldAlert className="w-4 h-4 text-brand-rose flex-shrink-0" />
                <span>Emergency Green Wave</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('solution')}
                className="px-7 py-3.5 rounded-xl text-sm font-bold text-navy-950 bg-gradient-to-r from-brand-cyan via-teal-300 to-brand-teal hover:from-white hover:to-brand-cyan transition-all duration-300 shadow-lg shadow-brand-cyan/20 hover:shadow-glow-cyan flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Our Solution</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('prototype-demo')}
                className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-navy-850 hover:bg-navy-800 border border-brand-cyan/40 hover:border-brand-cyan transition-all duration-300 shadow-md flex items-center gap-2.5 group cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
                  <Play className="w-2.5 h-2.5 fill-current" />
                </div>
                <span>Request a Demo</span>
              </button>
            </div>

            {/* Prototype Stage Notice */}
            <div className="pt-3 flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-amber-400/80"></span>
              <span>Prototype Stage Venture • Designed for Municipal & Smart-City Pilots</span>
            </div>

          </div>

          {/* Right Column: High-Tech Smart City Traffic Visual & Telemetry HUD */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Glowing backplate */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-cyan/30 to-brand-teal/20 rounded-3xl blur-xl opacity-75"></div>

              {/* Main Visual Terminal / HUD */}
              <div className="relative rounded-2xl bg-navy-900 border border-brand-cyan/30 shadow-2xl overflow-hidden">
                
                {/* HUD Top bar */}
                <div className="px-4 py-3 bg-navy-950/90 border-b border-navy-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    <span className="ml-2 text-xs font-mono text-slate-400">UF-CORRIDOR-04 // CAM-FEED</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono">
                    <Radio className="w-3 h-3 animate-pulse" />
                    <span>AI INFERENCE ACTIVE</span>
                  </div>
                </div>

                {/* Simulated Traffic Camera / City Flow View */}
                <div className="relative bg-navy-950 aspect-[4/3] overflow-hidden flex items-center justify-center p-4">
                  
                  {/* Subtle Grid / Road Simulation Graphic */}
                  <svg className="w-full h-full text-slate-700" viewBox="0 0 400 300" fill="none">
                    {/* Background Roadway Cross */}
                    <rect x="0" y="0" width="400" height="300" fill="#060C1B" />
                    
                    {/* Cross Roads */}
                    <rect x="140" y="0" width="120" height="300" fill="#0D162F" />
                    <rect x="0" y="90" width="400" height="120" fill="#0D162F" />

                    {/* Lane divider dashes */}
                    <line x1="200" y1="0" x2="200" y2="300" stroke="#00F0FF" strokeWidth="2" strokeDasharray="8 8" opacity="0.3" />
                    <line x1="0" y1="150" x2="400" y2="150" stroke="#00F0FF" strokeWidth="2" strokeDasharray="8 8" opacity="0.3" />

                    {/* Pedestrian Crosswalks */}
                    <rect x="145" y="80" width="110" height="6" fill="#334155" opacity="0.5" />
                    <rect x="145" y="214" width="110" height="6" fill="#334155" opacity="0.5" />
                    <rect x="130" y="95" width="6" height="110" fill="#334155" opacity="0.5" />
                    <rect x="264" y="95" width="6" height="110" fill="#334155" opacity="0.5" />

                    {/* Intersection Center Pulse */}
                    <circle cx="200" cy="150" r="28" fill="none" stroke="#00F0FF" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                    <circle cx="200" cy="150" r="8" fill="#00D2B4" opacity="0.6" className="animate-pulse" />

                    {/* Simulated Vehicles with Computer Vision Bounding Boxes */}
                    {/* Vehicle 1: Northbound Car */}
                    <g transform="translate(160, 230)">
                      <rect width="22" height="38" rx="4" fill="#38BDF8" opacity="0.9" />
                      <rect x="-3" y="-3" width="28" height="44" rx="2" fill="none" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="2 2" />
                      <text x="32" y="12" fill="#00F0FF" fontSize="9" fontFamily="monospace" fontWeight="bold">CAR [98%]</text>
                      <text x="32" y="24" fill="#94A3B8" fontSize="8" fontFamily="monospace">v: 24 km/h</text>
                    </g>

                    {/* Vehicle 2: Northbound Van */}
                    <g transform="translate(162, 175)">
                      <rect width="20" height="32" rx="4" fill="#2DD4BF" opacity="0.8" />
                      <rect x="-2" y="-2" width="24" height="36" rx="2" fill="none" stroke="#2DD4BF" strokeWidth="1.2" />
                      <text x="-48" y="16" fill="#2DD4BF" fontSize="8" fontFamily="monospace">VAN [94%]</text>
                    </g>

                    {/* Vehicle 3: Eastbound Bus */}
                    <g transform="translate(50, 115)">
                      <rect width="52" height="24" rx="4" fill="#F59E0B" opacity="0.85" />
                      <rect x="-2" y="-2" width="56" height="28" rx="2" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
                      <text x="4" y="-5" fill="#F59E0B" fontSize="9" fontFamily="monospace" fontWeight="bold">BUS [96%]</text>
                    </g>

                    {/* Vehicle 4: Emergency Vehicle Simulation (Ambulance approaching South) */}
                    <g transform="translate(215, 40)">
                      <rect width="24" height="42" rx="4" fill="#EF4444" opacity="0.95" />
                      {/* Flashing strobe effect */}
                      <circle cx="12" cy="18" r="7" fill="#F43F5E" opacity="0.8" className="animate-ping" />
                      <rect x="-4" y="-4" width="32" height="50" rx="3" fill="none" stroke="#F43F5E" strokeWidth="2" />
                      <text x="34" y="14" fill="#F43F5E" fontSize="9" fontFamily="monospace" fontWeight="bold">AMBULANCE</text>
                      <text x="34" y="26" fill="#F87171" fontSize="8" fontFamily="monospace">PRIORITY 1</text>
                    </g>

                    {/* Virtual Traffic Lights Visual */}
                    {/* North-South Light: Green for Priority Corridor */}
                    <g transform="translate(270, 70)">
                      <rect width="14" height="34" rx="3" fill="#0B132B" stroke="#1E293B" strokeWidth="1" />
                      <circle cx="7" cy="8" r="4" fill="#334155" />
                      <circle cx="7" cy="17" r="4" fill="#334155" />
                      <circle cx="7" cy="26" r="4" fill="#10B981" className="animate-pulse" />
                    </g>

                    {/* East-West Light: Red Holding Cross Traffic */}
                    <g transform="translate(118, 65)">
                      <rect width="14" height="34" rx="3" fill="#0B132B" stroke="#1E293B" strokeWidth="1" />
                      <circle cx="7" cy="8" r="4" fill="#EF4444" />
                      <circle cx="7" cy="17" r="4" fill="#334155" />
                      <circle cx="7" cy="26" r="4" fill="#334155" />
                    </g>
                  </svg>

                  {/* High-Tech Digital Scanning HUD Overlays */}
                  <div className="absolute top-4 left-4 bg-navy-950/85 backdrop-blur-md p-2.5 rounded-xl border border-brand-cyan/30 text-[11px] font-mono space-y-1">
                    <div className="flex items-center justify-between gap-4 text-slate-400">
                      <span>APPROACH:</span>
                      <span className="text-white font-bold">NORTH CORRIDOR</span>
                    </div>
                    <div className="flex items-center justify-between gap-4 text-slate-400">
                      <span>DENSITY:</span>
                      <span className="text-brand-cyan font-bold">HIGH (82%)</span>
                    </div>
                    <div className="flex items-center justify-between gap-4 text-slate-400">
                      <span>ACTION:</span>
                      <span className="text-emerald-400 font-bold">+18s ADAPTIVE GREEN</span>
                    </div>
                  </div>

                  {/* Priority Notification Banner */}
                  <div className="absolute bottom-4 right-4 left-4 bg-gradient-to-r from-navy-950/95 via-navy-900/95 to-navy-950/95 border border-brand-rose/40 rounded-xl p-2.5 flex items-center justify-between text-xs backdrop-blur-md shadow-lg">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-rose animate-ping"></span>
                      <span className="text-brand-rose font-bold font-mono">PRIORITY OVERRIDE ENGAGED</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-300">
                      South-Bound Corridors Cleared
                    </span>
                  </div>
                </div>

                {/* Real-time telemetry footer */}
                <div className="p-3 bg-navy-950 border-t border-navy-800 grid grid-cols-3 gap-2 text-center text-xs font-mono">
                  <div className="p-1.5 rounded bg-navy-900/60 border border-slate-800">
                    <div className="text-[10px] text-slate-500 uppercase">Detection Rate</div>
                    <div className="text-white font-semibold">Real-time Vision</div>
                  </div>
                  <div className="p-1.5 rounded bg-navy-900/60 border border-slate-800">
                    <div className="text-[10px] text-slate-500 uppercase">Signal Control</div>
                    <div className="text-brand-cyan font-semibold">Dynamic Phase</div>
                  </div>
                  <div className="p-1.5 rounded bg-navy-900/60 border border-slate-800">
                    <div className="text-[10px] text-slate-500 uppercase">Hardware Model</div>
                    <div className="text-brand-teal font-semibold">CCTV / Edge AI</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Down indicator */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => scrollToSection('problem')}
          className="text-slate-500 hover:text-brand-cyan transition-colors flex flex-col items-center gap-1 text-xs font-mono group"
        >
          <span>UNDERSTAND THE CHALLENGE</span>
          <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
