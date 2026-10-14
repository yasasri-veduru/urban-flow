import React from 'react';
import { 
  Cpu, 
  Sliders, 
  Ambulance, 
  BarChart3, 
  Network, 
  CheckCircle, 
  Info,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export default function SolutionSection() {
  const capabilities = [
    {
      id: "01",
      icon: <Cpu className="w-6 h-6 text-brand-cyan" />,
      title: "Real-Time Vehicle Detection & Density Estimation",
      description: "Utilizes computer vision models running on standard CCTV camera streams or simulated video feeds to identify, classify (cars, buses, two-wheelers, trucks), and compute queue density per approach.",
      detail: "Translates visual pixel frames into quantified queue lengths and vehicle counts without destructive roadbed sensors."
    },
    {
      id: "02",
      icon: <Sliders className="w-6 h-6 text-brand-teal" />,
      title: "Adaptive Signal Timing Logic",
      description: "Replaces rigid cycle timers with adaptive algorithmic scheduling that dynamically extends green intervals for high-volume approaches while minimizing idle wait times on low-density lanes.",
      detail: "Calculates optimal green allocation within configurable minimum and maximum safety boundaries."
    },
    {
      id: "03",
      icon: <Ambulance className="w-6 h-6 text-brand-rose" />,
      title: "Emergency Vehicle Prioritization Protocol",
      description: "Identifies emergency first responders (ambulances, fire engines, emergency services) via optical detection or automated priority tags, preemptively clearing conflicting signal phases.",
      detail: "Enables life-saving green corridors while safely staging cross-traffic deceleration."
    },
    {
      id: "04",
      icon: <BarChart3 className="w-6 h-6 text-indigo-400" />,
      title: "Traffic Monitoring & Analytics Telemetry",
      description: "Consolidates intersection telemetry into a unified municipal dashboard, visualizing flow rates, congestion heatmaps, historical trends, and signal efficiency metrics.",
      detail: "Empowers traffic engineers and municipal planners with granular situational visibility."
    },
    {
      id: "05",
      icon: <Network className="w-6 h-6 text-purple-400" />,
      title: "Multi-Intersection Coordination Framework",
      description: "Architected for prospective corridor-level synchronization, enabling upstream and downstream junctions to exchange queue forecasts and prevent bottleneck spillover.",
      detail: "Targeted for prospective multi-junction network coordination in future pilot phases."
    }
  ];

  return (
    <section id="solution" className="py-20 md:py-28 relative bg-navy-950 bg-radial-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prototype Venture Disclaimer Banner */}
        <div className="mb-14 p-4 sm:p-5 rounded-2xl bg-navy-900/90 border border-brand-cyan/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-start sm:items-center gap-3">
            <div className="p-2 rounded-xl bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30 flex-shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-white font-mono">
                  VENTURE MATURITY NOTICE // PROTOTYPE STAGE
                </h4>
                <span className="text-[10px] px-2 py-0.5 rounded bg-brand-cyan/20 text-brand-cyan font-mono font-semibold">
                  WADHWANI VENTURE
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Urban Flow is an early-stage student venture prototype. The architecture and algorithms are demonstrated using computer vision models and simulated intersection data. Urban Flow is not currently deployed across live citywide traffic systems or connected to municipal physical signal controllers.
              </p>
            </div>
          </div>
          
          <a 
            href="#prototype-demo" 
            className="flex-shrink-0 text-xs font-mono font-semibold text-brand-cyan hover:text-white flex items-center gap-1 group px-3 py-1.5 rounded-lg bg-navy-800 border border-brand-cyan/30"
          >
            <span>Test Simulation</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-medium">
            <Cpu className="w-3.5 h-3.5" />
            <span>The Urban Flow Solution</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Adaptive Intelligence for <br />
            <span className="text-gradient">Dynamic Urban Intersections</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Urban Flow combines lightweight computer vision analysis with adaptive signal timing logic to transform static intersections into responsive traffic networks.
          </p>
        </div>

        {/* Capabilities Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className={`glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between glass-panel-hover group ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-navy-850 border border-brand-cyan/20 flex items-center justify-center group-hover:border-brand-cyan/50 group-hover:shadow-glow-cyan transition-all">
                    {cap.icon}
                  </div>
                  <span className="font-mono text-xs text-slate-500 font-bold">
                    CAPABILITY {cap.id}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                  {cap.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {cap.description}
                </p>
              </div>

              <div className="pt-4 border-t border-navy-800/80">
                <div className="text-[11px] font-mono text-brand-teal flex items-start gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                  <span>{cap.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
