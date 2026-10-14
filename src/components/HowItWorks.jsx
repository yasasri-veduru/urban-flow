import React, { useState } from 'react';
import { 
  Video, 
  Cpu, 
  Sliders, 
  LayoutDashboard, 
  ArrowRight, 
  ChevronRight, 
  Layers, 
  Workflow, 
  Eye, 
  Check, 
  Database,
  Radio
} from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "step-1",
      number: "01",
      icon: <Video className="w-6 h-6 text-brand-cyan" />,
      title: "Camera Feeds & Traffic Inputs",
      summary: "Ingest standard video feeds or sample intersection footage",
      description: "Existing roadside CCTV cameras, traffic monitoring streams, or pre-recorded evaluation footage are interfaced as visual inputs. No intrusive street-cutting or underground magnetic sensors are needed.",
      inputLabel: "Raw Video Ingestion",
      outputLabel: "Decoded Video Frames (30 FPS)",
      payloadData: {
        source: "CCTV_IP_STREAM_CAM01",
        resolution: "1920x1080 @ 30fps",
        coverage: "4-Way Quad Approach",
        format: "RTSP / H.264 Video Stream"
      }
    },
    {
      id: "step-2",
      number: "02",
      icon: <Cpu className="w-6 h-6 text-brand-teal" />,
      title: "AI Vehicle Detection & Density",
      summary: "Classify vehicles and compute real-time approach density",
      description: "Lightweight computer vision neural networks analyze incoming frames to draw bounding boxes, classify vehicle categories (cars, vans, buses, emergency responders), and calculate the queue density per approach.",
      inputLabel: "Video Frames",
      outputLabel: "Classified Vehicle Counts & Lane Density Matrix",
      payloadData: {
        model: "YOLOv8 Edge Vision Quantized",
        detections: "North: 24 | South: 16 | East: 5 | West: 7",
        densityIndex: "North: 84% | South: 55% | East: 18% | West: 25%",
        emergencyDetected: "Negative (Standard Flow)"
      }
    },
    {
      id: "step-3",
      number: "03",
      icon: <Sliders className="w-6 h-6 text-indigo-400" />,
      title: "Adaptive Signal Timing Logic",
      summary: "Dynamically calculate optimal phase durations",
      description: "The adaptive optimization algorithm evaluates the lane density matrix against safety constraints. It determines whether to extend the current green phase for an ongoing heavy queue or transition to the next phase smoothly.",
      inputLabel: "Density Matrix & Cycle History",
      outputLabel: "Optimal Phase Durations (Seconds)",
      payloadData: {
        activePhase: "Phase 1 (North-South)",
        allocatedGreen: "38 seconds (Extended +14s)",
        crossStreetYellowTransition: "Scheduled in 12s",
        safetyConstraints: "Pedestrian Crosswalk Min: 15s Verified"
      }
    },
    {
      id: "step-4",
      number: "04",
      icon: <LayoutDashboard className="w-6 h-6 text-emerald-400" />,
      title: "Dashboard & Proposed Signal States",
      summary: "Display conditions and recommended signals for operators",
      description: "The resulting signal state recommendations, countdown timers, queue heatmaps, and performance metrics are broadcast to the municipal traffic control dashboard, allowing automated execution or human oversight.",
      inputLabel: "Signal Logic & Telemetry",
      outputLabel: "Real-Time Operator HUD & Controller Command",
      payloadData: {
        signalState: "North: GREEN | East: RED | West: RED",
        queueClearanceRate: "Estimated 92% clearance",
        operatorMode: "Adaptive Auto (Supervisor Override Ready)",
        logEvent: "Cycle #148 Optimization Completed"
      }
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-medium">
            <Workflow className="w-3.5 h-3.5" />
            <span>Operational Pipeline</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How Urban Flow Works: <br />
            <span className="text-gradient">A Four-Step Adaptive Workflow</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From raw camera imagery to intelligent signal timings and live operator dashboards, explore the step-by-step pipeline.
          </p>
        </div>

        {/* Desktop Pipeline Flow Diagram with Connecting Arrows */}
        <div className="hidden lg:grid grid-cols-4 gap-4 relative mb-12">
          {steps.map((step, idx) => (
            <div 
              key={step.id} 
              onClick={() => setActiveStep(idx)}
              className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative border flex flex-col justify-between ${
                activeStep === idx 
                  ? 'bg-navy-850/95 border-brand-cyan shadow-glow-cyan' 
                  : 'bg-navy-900/60 border-navy-800 hover:border-slate-700 hover:bg-navy-850/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${
                    activeStep === idx 
                      ? 'bg-navy-800 border-brand-cyan text-brand-cyan' 
                      : 'bg-navy-950 border-navy-800 text-slate-400'
                  }`}>
                    {step.icon}
                  </div>
                  <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-full ${
                    activeStep === idx 
                      ? 'bg-brand-cyan/20 text-brand-cyan' 
                      : 'bg-navy-800 text-slate-500'
                  }`}>
                    STEP {step.number}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.summary}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-navy-800 flex items-center justify-between text-[11px] font-mono">
                <span className={activeStep === idx ? 'text-brand-cyan font-bold' : 'text-slate-500'}>
                  {activeStep === idx ? 'Viewing Step Data' : 'Click to Inspect'}
                </span>
                <ChevronRight className={`w-4 h-4 transition-transform ${activeStep === idx ? 'text-brand-cyan translate-x-1' : 'text-slate-600'}`} />
              </div>

              {/* Connecting arrow to next card */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20">
                  <div className="w-7 h-7 rounded-full bg-navy-950 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan shadow-md">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Step Selector */}
        <div className="lg:hidden flex overflow-x-auto gap-3 pb-4 mb-6">
          {steps.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`flex-shrink-0 px-4 py-2.5 rounded-xl border text-xs font-mono font-medium flex items-center gap-2 ${
                activeStep === idx
                  ? 'bg-brand-cyan/20 border-brand-cyan text-brand-cyan font-bold'
                  : 'bg-navy-900 border-navy-800 text-slate-400'
              }`}
            >
              <span>{step.number}.</span>
              <span>{step.title}</span>
            </button>
          ))}
        </div>

        {/* Active Step Deep-Dive & Payload Inspector */}
        <div className="p-6 sm:p-8 rounded-2xl bg-navy-900 border border-brand-cyan/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Step Explanation */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center font-mono font-bold text-sm text-brand-cyan">
                  {steps[activeStep].number}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-teal font-semibold">
                  Detailed Operational Architecture
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {steps[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {steps[activeStep].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-navy-950/80 border border-navy-800">
                  <div className="text-[10px] uppercase font-mono text-slate-500">Pipeline Input</div>
                  <div className="text-xs font-semibold text-slate-200 mt-0.5">
                    {steps[activeStep].inputLabel}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-navy-950/80 border border-brand-teal/30">
                  <div className="text-[10px] uppercase font-mono text-brand-teal">Pipeline Output</div>
                  <div className="text-xs font-semibold text-brand-teal mt-0.5">
                    {steps[activeStep].outputLabel}
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Step Telemetry Payload Viewer */}
            <div className="lg:col-span-5">
              <div className="rounded-xl bg-navy-950 border border-navy-800 overflow-hidden shadow-inner">
                <div className="px-4 py-2.5 bg-navy-850/80 border-b border-navy-800 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Database className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>DATA_PAYLOAD // STEP_{steps[activeStep].number}</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    SIMULATED JSON
                  </span>
                </div>

                <div className="p-4 font-mono text-xs text-slate-300 space-y-2.5">
                  {Object.entries(steps[activeStep].payloadData).map(([key, val]) => (
                    <div key={key} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-navy-850 pb-2 last:border-0 last:pb-0 gap-1">
                      <span className="text-slate-400 text-[11px] uppercase tracking-wide">
                        {key}:
                      </span>
                      <span className="text-brand-cyan font-semibold break-words">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
