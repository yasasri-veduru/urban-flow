import React, { useState } from 'react';
import { 
  Camera, 
  Cpu, 
  Sliders, 
  Ambulance, 
  Leaf, 
  TrendingDown, 
  Eye, 
  Clock, 
  ShieldCheck, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: "feature-1",
      number: "01",
      icon: <Camera className="w-7 h-7 text-brand-cyan" />,
      tag: "Computer Vision",
      title: "Intelligent Traffic Analysis",
      subtitle: "Estimate traffic density using camera-based analysis",
      description: "Urban Flow is designed to leverage existing standard CCTV intersection camera feeds or edge vision sensors. By feeding frames into vehicle detection models, the system classifies vehicles by category (cars, buses, trucks, two-wheelers) and computes real-time queue lengths and lane density without installing costly inductive loops under the pavement.",
      bulletPoints: [
        "Camera-based vehicle counting and classification",
        "Lane-by-lane density and queue length estimation",
        "Non-invasive implementation utilizing existing municipal camera feeds",
        "Robust analysis capable of handling varying lighting and weather conditions"
      ],
      interactivePreview: {
        title: "Density Estimation Telemetry",
        metrics: [
          { label: "Detected Vehicles", value: "24 Units", status: "Active" },
          { label: "Lane 1 (North)", value: "78% (Dense)", status: "High Priority" },
          { label: "Lane 2 (East)", value: "18% (Sparse)", status: "Low Priority" },
          { label: "Processing Latency", value: "< 120 ms", status: "Optimal" },
        ]
      }
    },
    {
      id: "feature-2",
      number: "02",
      icon: <Sliders className="w-7 h-7 text-brand-teal" />,
      tag: "Algorithmic Timing",
      title: "Adaptive Signal Management",
      subtitle: "Demonstrate how signal timings respond to changing traffic conditions",
      description: "Unlike static timer boxes that switch signals on arbitrary countdowns, Urban Flow's proposed adaptive algorithm calculates dynamic green-light durations proportionate to the immediate vehicle queues detected on each approach, smoothly reallocating green time to where it is needed most.",
      bulletPoints: [
        "Dynamic green interval extension based on vehicle queue volume",
        "Automated curtailment of green time when approaches clear",
        "Configurable minimum and maximum phase safety limits",
        "Elimination of needless waiting at empty cross-streets"
      ],
      interactivePreview: {
        title: "Adaptive Cycle Allocation",
        metrics: [
          { label: "Current Phase", value: "Phase 1 (North/South)", status: "Active Green" },
          { label: "Allocated Green", value: "32 Seconds", status: "Dynamically Extended" },
          { label: "Cross-Street Queue", value: "Minimal (4 vehicles)", status: "Queued" },
          { label: "Next Cycle Estimate", value: "Phase 2 in 8s", status: "Calculated" },
        ]
      }
    },
    {
      id: "feature-3",
      number: "03",
      icon: <Ambulance className="w-7 h-7 text-brand-rose" />,
      tag: "Critical Clearance",
      title: "Emergency Vehicle Priority",
      subtitle: "Demonstrate a proposed priority mechanism for emergency vehicles",
      description: "When an emergency responder approaches an intersection, seconds can decide lives. Urban Flow models an intelligent preemption mechanism that detects emergency vehicles (ambulances, fire engines, emergency responders) and safely overrides standard signal cycling to establish an expedited green corridor.",
      bulletPoints: [
        "Automated emergency vehicle detection and priority phase request",
        "Preemptive transition of conflicting approaches to controlled red",
        "Smooth post-emergency recovery back to normal adaptive cycling",
        "Designed to reduce first-responder delays across busy city junctions"
      ],
      interactivePreview: {
        title: "Emergency Preemption Protocol",
        metrics: [
          { label: "Priority Status", value: "AMBULANCE DETECTED", status: "Priority 1" },
          { label: "Target Approach", value: "North Corridor Approach", status: "Cleared" },
          { label: "Safety Red Hold", value: "East/West Cross Traffic", status: "Locked" },
          { label: "Recovery Mode", value: "Adaptive Auto-Resume", status: "Standby" },
        ]
      }
    },
    {
      id: "feature-4",
      number: "04",
      icon: <Leaf className="w-7 h-7 text-emerald-400" />,
      tag: "Eco-Efficiency",
      title: "Sustainable Mobility",
      subtitle: "Aim to reduce unnecessary idling, fuel consumption, and emissions",
      description: "Vehicle idling at poorly synchronized red lights is a prime contributor to urban fuel wastage and localized air pollution. Urban Flow aims to smooth traffic flow, minimizing redundant deceleration and idling cycles to support cleaner, more sustainable urban transport.",
      bulletPoints: [
        "Targets reduction of prolonged red-light engine idling",
        "Promotes continuous vehicular momentum through adaptive intervals",
        "Potential reduction in unnecessary fuel burn during stop-and-go driving",
        "Aligns municipal transportation with modern smart-city sustainability goals"
      ],
      interactivePreview: {
        title: "Eco Impact Simulation",
        metrics: [
          { label: "Idling Prevention", value: "Reduced Idle Queues", status: "Target" },
          { label: "Stop-and-Go Cycles", value: "Minimized Churn", status: "Projected" },
          { label: "Fuel Conservation", value: "Avoidable Idling Cut", status: "Efficiency" },
          { label: "Urban Carbon Footprint", value: "Decreased Stagnation", status: "Goal" },
        ]
      }
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 relative bg-navy-900/50 border-t border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Functional Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Intelligent Features Engineered for <br />
            <span className="text-gradient">Responsive Municipal Mobility</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Four interconnected capabilities proposed to modernize traditional municipal traffic signal operations.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div
              key={feature.id}
              className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between glass-panel-hover group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan/20 via-brand-teal to-transparent group-hover:from-brand-cyan group-hover:to-brand-teal transition-all"></div>

              <div>
                {/* Header with Number and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-navy-850 border border-brand-cyan/20 flex items-center justify-center group-hover:border-brand-cyan/60 group-hover:shadow-glow-cyan transition-all">
                    {feature.icon}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-mono text-2xl font-black text-slate-700 group-hover:text-brand-cyan/40 transition-colors">
                      {feature.number}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-navy-800 text-slate-300 border border-slate-700">
                      {feature.tag}
                    </span>
                  </div>
                </div>

                {/* Title and Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-brand-cyan transition-colors">
                  {feature.title}
                </h3>
                <h4 className="text-sm font-medium text-brand-teal mb-4 font-mono">
                  {feature.subtitle}
                </h4>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Key Bullet Points */}
                <div className="space-y-2 mb-6">
                  {feature.bulletPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Telemetry Simulator Preview Box */}
              <div className="pt-4 border-t border-navy-800">
                <div className="p-3.5 rounded-xl bg-navy-950/70 border border-navy-800">
                  <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center justify-between">
                    <span className="text-white font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
                      {feature.interactivePreview.title}
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase">Simulated Feed</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    {feature.interactivePreview.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-2 rounded bg-navy-900/60 border border-slate-800/80">
                        <div className="text-[10px] text-slate-500">{m.label}</div>
                        <div className="text-slate-200 font-bold">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
