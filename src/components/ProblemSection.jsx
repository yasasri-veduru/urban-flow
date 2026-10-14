import React from 'react';
import { 
  Clock, 
  Flame, 
  Ambulance, 
  GitMerge, 
  AlertTriangle, 
  Car, 
  TimerReset,
  ArrowRight
} from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: <TimerReset className="w-6 h-6 text-brand-cyan" />,
      badge: "Fixed Signal Schedules",
      title: "Static, Inflexible Signal Timings",
      description: "Most municipal traffic junctions rely on pre-programmed static timers configured months or years prior. They operate identically regardless of sudden rain, lane blockages, peak surges, or completely vacant cross-lanes.",
      impact: "Unnecessary red-light delays while conflicting green approaches sit empty."
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-400" />,
      badge: "Fluctuating Density",
      title: "Unpredictable Volume Swings",
      description: "Urban traffic flows fluctuate continuously throughout the day. When lane density surges unexpectedly, fixed intervals cannot adapt in real time, rapidly transforming brief queue backups into gridlock.",
      impact: "Compounding queue propagation across adjacent intersections."
    },
    {
      icon: <Flame className="w-6 h-6 text-rose-400" />,
      badge: "Environmental Impact",
      title: "Excess Fuel Consumption & Emissions",
      description: "Prolonged vehicle idling at avoidable red signals forces repetitive stop-and-go acceleration cycles. This unproductive engine idling wastes fuel and elevates urban carbon monoxide and particulate emissions.",
      impact: "Avoidable vehicle emissions and fuel waste during stationary waiting."
    },
    {
      icon: <Ambulance className="w-6 h-6 text-brand-rose" />,
      badge: "Critical Response",
      title: "Emergency Vehicle Bottlenecks",
      description: "Ambulances, fire services, and first responders routinely encounter intersections gridlocked with queued civilian vehicles, lacking a centralized or automated priority green corridor.",
      impact: "Life-critical seconds lost navigating congested signal queues."
    }
  ];

  return (
    <section id="problem" className="py-20 md:py-28 relative bg-navy-900/60 border-t border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono font-medium">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>The Urban Mobility Bottleneck</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Inefficient Signals Lead to <br />
            <span className="text-gradient">Compounding Citywide Congestion</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            In modern expanding cities, conventional traffic control systems remain blind to actual on-road vehicle volume, generating avoidable delays and environmental costs.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((item, index) => (
            <div 
              key={index}
              className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between glass-panel-hover relative overflow-hidden group"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent group-hover:via-brand-cyan transition-all"></div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-navy-800/80 border border-navy-700 flex items-center justify-center group-hover:scale-105 group-hover:border-brand-cyan/40 transition-all shadow-md">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-navy-800 text-slate-300 border border-slate-700">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Consequence callout */}
              <div className="mt-6 pt-4 border-t border-navy-800/80 flex items-start gap-2.5 text-xs text-slate-400 bg-navy-950/40 p-3 rounded-xl">
                <span className="font-mono text-brand-teal font-semibold flex-shrink-0">OBSERVED EFFECT:</span>
                <span>{item.impact}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Structural Comparison: Static Control vs Dynamic Reality */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-navy-850 to-navy-900 border border-navy-700">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-brand-cyan font-semibold">
                Structural Root Cause
              </span>
              <h4 className="text-xl font-bold text-white">
                Why Fixed Timers Fail Modern Cities
              </h4>
              <p className="text-sm text-slate-300">
                Traditional pre-timed cycles treat intersections as independent static clocks rather than interconnected, dynamic mobility nodes.
              </p>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-navy-950/70 border border-rose-500/20">
                <div className="text-xs font-mono font-bold text-rose-400 mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  Conventional Signal Timers
                </div>
                <p className="text-xs text-slate-400">
                  Fixed green and red durations regardless of vehicle queue length, leading to empty green phases and heavy red backlogs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-navy-950/70 border border-brand-teal/30">
                <div className="text-xs font-mono font-bold text-brand-teal mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                  Dynamic Demand Reality
                </div>
                <p className="text-xs text-slate-400">
                  Traffic arrival rates change minute-by-minute with school rushes, commercial shifts, weather conditions, and weekend flows.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
