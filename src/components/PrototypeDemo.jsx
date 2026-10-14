import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Siren, 
  Sliders, 
  Gauge, 
  Cpu, 
  ShieldAlert, 
  Activity, 
  AlertCircle, 
  CheckCircle2, 
  TrendingDown, 
  Car, 
  Radio, 
  Eye, 
  Layers,
  Sparkles
} from 'lucide-react';

export default function PrototypeDemo() {
  // Preset Density Modes: 'low', 'medium', 'high'
  const [densityPreset, setDensityPreset] = useState('medium');
  
  // Custom approach densities (0 to 100)
  const [densities, setDensities] = useState({
    north: 65,
    south: 50,
    east: 25,
    west: 30,
  });

  // Algorithm mode: 'adaptive' (Urban Flow) vs 'fixed' (Legacy fixed timer)
  const [controlMode, setControlMode] = useState('adaptive');

  // Simulation running state
  const [isPlaying, setIsPlaying] = useState(true);

  // Emergency Mode state
  const [isEmergencyActive, setIsEmergencyActive] = useState(false);
  const [emergencyApproach, setEmergencyApproach] = useState('north');

  // Active Phase: 'NS' (North-South active) or 'EW' (East-West active)
  const [activePhase, setActivePhase] = useState('NS');
  // Phase state: 'GREEN' | 'YELLOW' | 'RED'
  const [phaseColor, setPhaseColor] = useState('GREEN');
  const [countdown, setCountdown] = useState(14);
  const [totalCycleTime, setTotalCycleTime] = useState(20);

  // Vision overlay toggle
  const [showVisionOverlay, setShowVisionOverlay] = useState(true);

  // Decision logs
  const [logs, setLogs] = useState([
    { id: 1, time: "10:42:01", message: "Prototype simulation initialized with standard 4-way junction model.", type: "system" },
    { id: 2, time: "10:42:05", message: "Vision model active: density analysis calibrated for North, South, East, West approaches.", type: "vision" },
    { id: 3, time: "10:42:10", message: "Phase 1 (North/South) allocated 18s adaptive green based on 65% density.", type: "decision" },
  ]);

  // Handle Preset Changes
  const handlePresetChange = (preset) => {
    setDensityPreset(preset);
    let newDensities;
    if (preset === 'low') {
      newDensities = { north: 25, south: 20, east: 15, west: 15 };
    } else if (preset === 'medium') {
      newDensities = { north: 65, south: 50, east: 25, west: 30 };
    } else { // high
      newDensities = { north: 90, south: 85, east: 40, west: 45 };
    }
    setDensities(newDensities);
    addLog(`Density preset switched to [${preset.toUpperCase()}]. Recalculating queue weights.`, 'system');
  };

  const handleDensitySlider = (direction, value) => {
    setDensityPreset('custom');
    setDensities(prev => ({ ...prev, [direction]: Number(value) }));
  };

  const addLog = (message, type = 'system') => {
    const time = new Date().toLocaleTimeString('en-US', { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" });
    setLogs(prev => [{ id: Date.now() + Math.random(), time, message, type }, ...prev.slice(0, 19)]);
  };

  // Toggle Emergency Vehicle
  const triggerEmergency = () => {
    if (!isEmergencyActive) {
      setIsEmergencyActive(true);
      setActivePhase('NS');
      setPhaseColor('GREEN');
      setCountdown(12);
      addLog("🚨 [EMERGENCY PRIORITY OVERRIDE] Ambulance detected on North Approach. Preemptive green corridor locked. Cross traffic halted to Red.", "emergency");
    } else {
      setIsEmergencyActive(false);
      addLog("Emergency vehicle cleared intersection. Resuming adaptive signal cycling.", "system");
    }
  };

  // Simulation Clock Tick
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCountdown(prev => {
        if (isEmergencyActive) {
          if (prev <= 1) {
            // keep priority until released or auto-cleared
            addLog("Ambulance safely traversed intersection corridor. Re-entering baseline cycle.", "system");
            setIsEmergencyActive(false);
            return 8;
          }
          return prev - 1;
        }

        if (prev <= 1) {
          // Time to transition phase
          if (phaseColor === 'GREEN') {
            setPhaseColor('YELLOW');
            return 3; // 3 seconds yellow
          } else if (phaseColor === 'YELLOW') {
            // Switch phase
            const nextPhase = activePhase === 'NS' ? 'EW' : 'NS';
            setActivePhase(nextPhase);
            setPhaseColor('GREEN');

            // Calculate green duration
            let nextDuration = 15;
            if (controlMode === 'adaptive') {
              const relevantDensity = nextPhase === 'NS' 
                ? Math.max(densities.north, densities.south)
                : Math.max(densities.east, densities.west);
              
              // Adaptive calculation: base 10s + up to 20s proportional to density
              nextDuration = Math.round(10 + (relevantDensity / 100) * 18);
              addLog(`AI Decision: Phase ${nextPhase} assigned ${nextDuration}s green (Approach density: ${relevantDensity}%).`, 'decision');
            } else {
              // Fixed legacy mode: rigid 15s
              nextDuration = 15;
              addLog(`Fixed Timer: Switched to Phase ${nextPhase} for static 15s interval.`, 'fixed');
            }

            setTotalCycleTime(nextDuration);
            return nextDuration;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, isEmergencyActive, phaseColor, activePhase, controlMode, densities]);

  // Helper to get signal colors per direction
  const getLightState = (direction) => {
    const isNS = direction === 'north' || direction === 'south';
    const isMyPhaseActive = (isNS && activePhase === 'NS') || (!isNS && activePhase === 'EW');

    if (isEmergencyActive) {
      if (direction === emergencyApproach) return 'GREEN';
      if (direction === 'south') return 'GREEN';
      return 'RED';
    }

    if (isMyPhaseActive) {
      return phaseColor; // 'GREEN' or 'YELLOW'
    } else {
      return 'RED';
    }
  };

  const resetSimulation = () => {
    setActivePhase('NS');
    setPhaseColor('GREEN');
    setCountdown(14);
    setIsEmergencyActive(false);
    handlePresetChange('medium');
    addLog("Simulation state reset to default parameters.", "system");
  };

  return (
    <section id="prototype-demo" className="py-20 md:py-28 relative bg-navy-950 overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-brand-teal/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Prototype Header & Disclaimer Badge */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-850 border border-brand-cyan/40 text-xs font-mono font-medium text-slate-300">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
            <span className="text-brand-cyan font-bold">Interactive Prototype Demonstration</span>
            <span className="text-slate-500">|</span>
            <span className="text-amber-400 font-semibold">Front-End Simulation (Sample Data)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Live 4-Way Intersection Simulator
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Test how Urban Flow's proposed adaptive algorithms estimate lane density, adjust signal durations, and prioritize emergency vehicles compared to rigid fixed-time cycles.
          </p>

          <p className="text-xs text-amber-400/90 font-mono bg-navy-900/80 p-2 rounded-xl border border-amber-500/20 max-w-xl mx-auto">
            * This interactive tool is a conceptual front-end prototype built for our Wadhwani venture submission. It demonstrates algorithmic logic with simulated sample data, not a live municipal traffic controller.
          </p>
        </div>

        {/* Simulator Control Bar */}
        <div className="glass-panel rounded-2xl p-4 sm:p-6 mb-8 border border-brand-cyan/30 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            
            {/* Density Presets */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold mr-1 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-brand-cyan" />
                Traffic Density:
              </span>
              <button
                onClick={() => handlePresetChange('low')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                  densityPreset === 'low'
                    ? 'bg-emerald-500 text-navy-950 shadow-md font-bold'
                    : 'bg-navy-850 text-slate-300 hover:text-white border border-slate-700'
                }`}
              >
                Low (Off-Peak)
              </button>
              <button
                onClick={() => handlePresetChange('medium')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                  densityPreset === 'medium'
                    ? 'bg-brand-cyan text-navy-950 shadow-md font-bold'
                    : 'bg-navy-850 text-slate-300 hover:text-white border border-slate-700'
                }`}
              >
                Medium (Regular)
              </button>
              <button
                onClick={() => handlePresetChange('high')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                  densityPreset === 'high'
                    ? 'bg-rose-500 text-white shadow-md font-bold'
                    : 'bg-navy-850 text-slate-300 hover:text-white border border-slate-700'
                }`}
              >
                High (Rush Hour)
              </button>
            </div>

            {/* Algorithm Mode Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold mr-1">
                Algorithm:
              </span>
              <button
                onClick={() => {
                  setControlMode('adaptive');
                  addLog("Mode switched to [Urban Flow Adaptive AI]. Signal durations dynamically adjusted by queue size.", "decision");
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                  controlMode === 'adaptive'
                    ? 'bg-brand-teal text-navy-950 font-bold shadow-glow-teal'
                    : 'bg-navy-850 text-slate-400 border border-slate-700'
                }`}
              >
                <Sparkles className="w-3 h-3" />
                Urban Flow Adaptive
              </button>
              <button
                onClick={() => {
                  setControlMode('fixed');
                  addLog("Mode switched to [Legacy Fixed Timers]. Signals execute static 15s cycles regardless of queue volume.", "fixed");
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                  controlMode === 'fixed'
                    ? 'bg-amber-400 text-navy-950 font-bold'
                    : 'bg-navy-850 text-slate-400 border border-slate-700'
                }`}
              >
                Legacy Fixed Timer
              </button>
            </div>

            {/* Simulation Controls & Emergency Trigger */}
            <div className="flex items-center gap-2 flex-wrap sm:ml-auto">
              
              {/* Emergency Vehicle Priority Button */}
              <button
                onClick={triggerEmergency}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 shadow-lg ${
                  isEmergencyActive
                    ? 'bg-brand-rose text-white animate-pulse shadow-glow-rose'
                    : 'bg-rose-950/70 text-rose-300 border border-rose-500/40 hover:bg-rose-900/60'
                }`}
              >
                <Siren className={`w-4 h-4 ${isEmergencyActive ? 'animate-bounce' : ''}`} />
                <span>
                  {isEmergencyActive ? 'Deactivate Priority Corridor' : 'Simulate Emergency Vehicle'}
                </span>
              </button>

              {/* Play/Pause */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-xl bg-navy-850 border border-slate-700 text-slate-200 hover:text-white hover:border-brand-cyan"
                title={isPlaying ? "Pause Simulation" : "Resume Simulation"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-emerald-400" />}
              </button>

              {/* Reset */}
              <button
                onClick={resetSimulation}
                className="p-2 rounded-xl bg-navy-850 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500"
                title="Reset Simulation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

            </div>

          </div>
        </div>

        {/* Emergency Alert Banner */}
        {isEmergencyActive && (
          <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-rose-950 via-rose-900 to-rose-950 border border-rose-500 text-white flex flex-col sm:flex-row items-center justify-between gap-3 shadow-glow-rose animate-pulse">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-rose-600 text-white">
                <Siren className="w-5 h-5 animate-spin" />
              </div>
              <div>
                <div className="font-mono font-bold text-sm text-rose-200 flex items-center gap-2">
                  <span>EMERGENCY VEHICLE PREEMPTION PROTOCOL ACTIVE</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-black/40 text-rose-300 font-mono">PRIORITY 1</span>
                </div>
                <p className="text-xs text-rose-100">
                  Ambulance detected on North approach. North-South corridor held GREEN. Cross approaches (East/West) locked to RED.
                </p>
              </div>
            </div>
            <button
              onClick={triggerEmergency}
              className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-white text-rose-950 hover:bg-rose-100 flex-shrink-0"
            >
              Clear & Resume Normal Flow
            </button>
          </div>
        )}

        {/* Main Simulation Grid: 2-Columns (Visual Schematic + Telemetry Dashboard) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Visual 4-Way Intersection Simulator Schematic */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="relative rounded-2xl bg-navy-900 border border-brand-cyan/30 shadow-2xl overflow-hidden p-4 sm:p-6">
              
              {/* Header inside schematic */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-navy-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-xs font-mono text-slate-300 font-bold uppercase">
                    4-Way Junction Visualizer
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-navy-800 text-brand-cyan border border-brand-cyan/20">
                    Active Phase: {activePhase === 'NS' ? 'North / South' : 'East / West'}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono">
                  <button
                    onClick={() => setShowVisionOverlay(!showVisionOverlay)}
                    className={`px-2.5 py-1 rounded text-[11px] border flex items-center gap-1 ${
                      showVisionOverlay
                        ? 'bg-brand-cyan/15 border-brand-cyan text-brand-cyan font-semibold'
                        : 'bg-navy-800 border-slate-700 text-slate-400'
                    }`}
                  >
                    <Eye className="w-3 h-3" />
                    <span>AI Vision Tags</span>
                  </button>
                </div>
              </div>

              {/* 4-Way Intersection SVG Diagram */}
              <div className="relative w-full aspect-square max-h-[500px] mx-auto bg-navy-950 rounded-xl border border-slate-800 flex items-center justify-center overflow-hidden">
                
                <svg className="w-full h-full" viewBox="0 0 500 500" fill="none">
                  {/* Grass / Ground */}
                  <rect width="500" height="500" fill="#040914" />

                  {/* Corner Curbs / Walkways */}
                  <rect x="0" y="0" width="170" height="170" fill="#0B1328" />
                  <rect x="330" y="0" width="170" height="170" fill="#0B1328" />
                  <rect x="0" y="330" width="170" height="170" fill="#0B1328" />
                  <rect x="330" y="330" width="170" height="170" fill="#0B1328" />

                  {/* Asphalt Roads */}
                  {/* North-South Road */}
                  <rect x="170" y="0" width="160" height="500" fill="#0E172F" />
                  {/* East-West Road */}
                  <rect x="0" y="170" width="500" height="160" fill="#0E172F" />

                  {/* Lane Dividers */}
                  {/* North-South Center Divider */}
                  <line x1="250" y1="0" x2="250" y2="160" stroke="#00F0FF" strokeWidth="2.5" strokeDasharray="10 8" opacity="0.6" />
                  <line x1="250" y1="340" x2="250" y2="500" stroke="#00F0FF" strokeWidth="2.5" strokeDasharray="10 8" opacity="0.6" />
                  
                  {/* East-West Center Divider */}
                  <line x1="0" y1="250" x2="160" y2="250" stroke="#00F0FF" strokeWidth="2.5" strokeDasharray="10 8" opacity="0.6" />
                  <line x1="340" y1="250" x2="500" y2="250" stroke="#00F0FF" strokeWidth="2.5" strokeDasharray="10 8" opacity="0.6" />

                  {/* White Stop Lines */}
                  <line x1="170" y1="168" x2="250" y2="168" stroke="#FFFFFF" strokeWidth="4" opacity="0.8" />
                  <line x1="250" y1="332" x2="330" y2="332" stroke="#FFFFFF" strokeWidth="4" opacity="0.8" />
                  <line x1="168" y1="250" x2="168" y2="330" stroke="#FFFFFF" strokeWidth="4" opacity="0.8" />
                  <line x1="332" y1="170" x2="332" y2="250" stroke="#FFFFFF" strokeWidth="4" opacity="0.8" />

                  {/* Crosswalk Zebra Stripes */}
                  {/* North Crosswalk */}
                  {[175, 195, 215, 235, 255, 275, 295, 315].map(x => (
                    <rect key={`cw-n-${x}`} x={x} y="152" width="10" height="12" fill="#334155" opacity="0.8" />
                  ))}
                  {/* South Crosswalk */}
                  {[175, 195, 215, 235, 255, 275, 295, 315].map(x => (
                    <rect key={`cw-s-${x}`} x={x} y="336" width="10" height="12" fill="#334155" opacity="0.8" />
                  ))}
                  {/* West Crosswalk */}
                  {[175, 195, 215, 235, 255, 275, 295, 315].map(y => (
                    <rect key={`cw-w-${y}`} x="152" y={y} width="12" height="10" fill="#334155" opacity="0.8" />
                  ))}
                  {/* East Crosswalk */}
                  {[175, 195, 215, 235, 255, 275, 295, 315].map(y => (
                    <rect key={`cw-e-${y}`} x="336" y={y} width="12" height="10" fill="#334155" opacity="0.8" />
                  ))}

                  {/* Intersection Center Hub Radar */}
                  <circle cx="250" cy="250" r="45" fill="none" stroke="#00F0FF" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                  <circle cx="250" cy="250" r="12" fill="#00D2B4" opacity="0.4" className="animate-pulse" />

                  {/* ================= DIRECTIONAL VEHICLES & QUEUES ================= */}

                  {/* NORTH APPROACH (Driving South towards center) */}
                  <g id="north-vehicles">
                    {/* Vehicle 1 - Lead Vehicle */}
                    <g transform="translate(205, 110)">
                      {isEmergencyActive ? (
                        // Emergency Ambulance
                        <>
                          <rect width="28" height="48" rx="4" fill="#EF4444" stroke="#FFFFFF" strokeWidth="2" />
                          <circle cx="14" cy="22" r="8" fill="#F43F5E" className="animate-ping" />
                          <text x="14" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">EMS</text>
                          {showVisionOverlay && (
                            <g transform="translate(34, 15)">
                              <rect x="-2" y="-9" width="76" height="14" rx="2" fill="#881337" opacity="0.9" />
                              <text x="0" y="2" fill="#FECDD3" fontSize="8" fontFamily="monospace" fontWeight="bold">AMBULANCE [99%]</text>
                            </g>
                          )}
                        </>
                      ) : (
                        // Regular Car
                        <>
                          <rect width="26" height="42" rx="4" fill="#38BDF8" />
                          {showVisionOverlay && (
                            <g transform="translate(32, 12)">
                              <rect x="-2" y="-9" width="56" height="14" rx="2" fill="#0C4A6E" opacity="0.85" />
                              <text x="0" y="2" fill="#BAE6FD" fontSize="8" fontFamily="monospace">CAR [97%]</text>
                            </g>
                          )}
                        </>
                      )}
                    </g>

                    {/* Additional North Queue if density > 30 */}
                    {densities.north > 30 && (
                      <g transform="translate(205, 55)">
                        <rect width="26" height="46" rx="4" fill="#F59E0B" />
                        {showVisionOverlay && (
                          <g transform="translate(32, 14)">
                            <rect x="-2" y="-9" width="54" height="14" rx="2" fill="#451A03" opacity="0.85" />
                            <text x="0" y="2" fill="#FDE68A" fontSize="8" fontFamily="monospace">BUS [94%]</text>
                          </g>
                        )}
                      </g>
                    )}

                    {/* Third North Queue if density > 70 */}
                    {densities.north > 70 && (
                      <g transform="translate(205, 8)">
                        <rect width="26" height="38" rx="4" fill="#2DD4BF" />
                      </g>
                    )}
                  </g>

                  {/* SOUTH APPROACH (Driving North towards center) */}
                  <g id="south-vehicles">
                    <g transform="translate(265, 350)">
                      <rect width="26" height="44" rx="4" fill="#818CF8" />
                      {showVisionOverlay && (
                        <g transform="translate(-64, 15)">
                          <rect x="-2" y="-9" width="56" height="14" rx="2" fill="#1E1B4B" opacity="0.85" />
                          <text x="0" y="2" fill="#C7D2FE" fontSize="8" fontFamily="monospace">SUV [95%]</text>
                        </g>
                      )}
                    </g>

                    {densities.south > 40 && (
                      <g transform="translate(265, 410)">
                        <rect width="26" height="40" rx="4" fill="#38BDF8" />
                      </g>
                    )}
                  </g>

                  {/* WEST APPROACH (Driving East towards center) */}
                  <g id="west-vehicles">
                    <g transform="translate(100, 265)">
                      <rect width="44" height="26" rx="4" fill="#34D399" />
                      {showVisionOverlay && (
                        <g transform="translate(0, -14)">
                          <rect x="-2" y="-9" width="58" height="14" rx="2" fill="#064E3B" opacity="0.85" />
                          <text x="0" y="2" fill="#A7F3D0" fontSize="8" fontFamily="monospace">SEDAN [92%]</text>
                        </g>
                      )}
                    </g>
                    {densities.west > 50 && (
                      <g transform="translate(40, 265)">
                        <rect width="42" height="26" rx="4" fill="#CBD5E1" />
                      </g>
                    )}
                  </g>

                  {/* EAST APPROACH (Driving West towards center) */}
                  <g id="east-vehicles">
                    <g transform="translate(350, 205)">
                      <rect width="46" height="26" rx="4" fill="#F472B6" />
                      {showVisionOverlay && (
                        <g transform="translate(0, -14)">
                          <rect x="-2" y="-9" width="58" height="14" rx="2" fill="#4C0519" opacity="0.85" />
                          <text x="0" y="2" fill="#FECDD3" fontSize="8" fontFamily="monospace">TAXI [93%]</text>
                        </g>
                      )}
                    </g>
                    {densities.east > 50 && (
                      <g transform="translate(410, 205)">
                        <rect width="42" height="26" rx="4" fill="#FBBF24" />
                      </g>
                    )}
                  </g>

                  {/* ================= TRAFFIC LIGHT POSTS & COUNTDOWN DISPLAYS ================= */}
                  
                  {/* NORTH SIGNAL POST */}
                  <g transform="translate(125, 105)">
                    <rect width="32" height="58" rx="6" fill="#070E22" stroke="#1E293B" strokeWidth="2" />
                    {/* Red */}
                    <circle cx="16" cy="14" r="6" fill={getLightState('north') === 'RED' ? '#EF4444' : '#27272A'} />
                    {/* Yellow */}
                    <circle cx="16" cy="29" r="6" fill={getLightState('north') === 'YELLOW' ? '#F59E0B' : '#27272A'} />
                    {/* Green */}
                    <circle cx="16" cy="44" r="6" fill={getLightState('north') === 'GREEN' ? '#10B981' : '#27272A'} />
                    
                    {/* Countdown Timer Box */}
                    <rect x="-8" y="-22" width="48" height="18" rx="3" fill="#030712" stroke="#00F0FF" strokeWidth="1" />
                    <text x="16" y="-9" textAnchor="middle" fill="#00F0FF" fontSize="11" fontFamily="monospace" fontWeight="bold">
                      {countdown}s
                    </text>
                  </g>

                  {/* SOUTH SIGNAL POST */}
                  <g transform="translate(345, 340)">
                    <rect width="32" height="58" rx="6" fill="#070E22" stroke="#1E293B" strokeWidth="2" />
                    <circle cx="16" cy="14" r="6" fill={getLightState('south') === 'RED' ? '#EF4444' : '#27272A'} />
                    <circle cx="16" cy="29" r="6" fill={getLightState('south') === 'YELLOW' ? '#F59E0B' : '#27272A'} />
                    <circle cx="16" cy="44" r="6" fill={getLightState('south') === 'GREEN' ? '#10B981' : '#27272A'} />

                    <rect x="-8" y="62" width="48" height="18" rx="3" fill="#030712" stroke="#00F0FF" strokeWidth="1" />
                    <text x="16" y="75" textAnchor="middle" fill="#00F0FF" fontSize="11" fontFamily="monospace" fontWeight="bold">
                      {countdown}s
                    </text>
                  </g>

                  {/* WEST SIGNAL POST */}
                  <g transform="translate(105, 340)">
                    <rect width="32" height="58" rx="6" fill="#070E22" stroke="#1E293B" strokeWidth="2" />
                    <circle cx="16" cy="14" r="6" fill={getLightState('west') === 'RED' ? '#EF4444' : '#27272A'} />
                    <circle cx="16" cy="29" r="6" fill={getLightState('west') === 'YELLOW' ? '#F59E0B' : '#27272A'} />
                    <circle cx="16" cy="44" r="6" fill={getLightState('west') === 'GREEN' ? '#10B981' : '#27272A'} />

                    <rect x="-8" y="62" width="48" height="18" rx="3" fill="#030712" stroke="#00F0FF" strokeWidth="1" />
                    <text x="16" y="75" textAnchor="middle" fill="#00F0FF" fontSize="11" fontFamily="monospace" fontWeight="bold">
                      {countdown}s
                    </text>
                  </g>

                  {/* EAST SIGNAL POST */}
                  <g transform="translate(345, 105)">
                    <rect width="32" height="58" rx="6" fill="#070E22" stroke="#1E293B" strokeWidth="2" />
                    <circle cx="16" cy="14" r="6" fill={getLightState('east') === 'RED' ? '#EF4444' : '#27272A'} />
                    <circle cx="16" cy="29" r="6" fill={getLightState('east') === 'YELLOW' ? '#F59E0B' : '#27272A'} />
                    <circle cx="16" cy="44" r="6" fill={getLightState('east') === 'GREEN' ? '#10B981' : '#27272A'} />

                    <rect x="-8" y="-22" width="48" height="18" rx="3" fill="#030712" stroke="#00F0FF" strokeWidth="1" />
                    <text x="16" y="-9" textAnchor="middle" fill="#00F0FF" fontSize="11" fontFamily="monospace" fontWeight="bold">
                      {countdown}s
                    </text>
                  </g>

                  {/* Direction Labels */}
                  <text x="250" y="24" textAnchor="middle" fill="#64748B" fontSize="11" fontFamily="monospace" fontWeight="bold">NORTH APPROACH</text>
                  <text x="250" y="488" textAnchor="middle" fill="#64748B" fontSize="11" fontFamily="monospace" fontWeight="bold">SOUTH APPROACH</text>
                  <text x="36" y="254" textAnchor="middle" fill="#64748B" fontSize="11" fontFamily="monospace" fontWeight="bold">WEST</text>
                  <text x="464" y="254" textAnchor="middle" fill="#64748B" fontSize="11" fontFamily="monospace" fontWeight="bold">EAST</text>

                </svg>

              </div>

              {/* Status bar under visualizer */}
              <div className="mt-4 pt-3 border-t border-navy-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">Current Phase:</span>
                  <span className="text-white font-bold">
                    {activePhase === 'NS' ? 'Phase 1 [N-S]' : 'Phase 2 [E-W]'}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    phaseColor === 'GREEN' ? 'bg-emerald-500/20 text-emerald-400' :
                    phaseColor === 'YELLOW' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-rose-500/20 text-rose-400'
                  }`}>
                    {phaseColor} ({countdown}s)
                  </span>
                </div>

                <div className="flex items-center gap-2 text-slate-400">
                  <span>Cycle Duration:</span>
                  <span className="text-brand-cyan font-bold">{totalCycleTime}s Total</span>
                </div>
              </div>

            </div>

            {/* Approach Density Sliders */}
            <div className="p-4 rounded-xl bg-navy-900 border border-navy-800">
              <div className="text-xs font-mono font-bold text-white mb-3 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Gauge className="w-3.5 h-3.5 text-brand-teal" />
                  Manual Approach Density Tuning (Simulated Inputs)
                </span>
                <span className="text-[10px] text-slate-400 font-normal">Adjust to observe AI cycle adaptation</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { key: 'north', label: 'North Lane', val: densities.north, color: 'text-brand-cyan' },
                  { key: 'south', label: 'South Lane', val: densities.south, color: 'text-brand-teal' },
                  { key: 'east', label: 'East Lane', val: densities.east, color: 'text-indigo-400' },
                  { key: 'west', label: 'West Lane', val: densities.west, color: 'text-amber-400' },
                ].map(item => (
                  <div key={item.key} className="space-y-1">
                    <div className="flex justify-between text-[11px] font-mono">
                      <span className="text-slate-300">{item.label}</span>
                      <span className={`font-bold ${item.color}`}>{item.val}%</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      value={item.val}
                      onChange={(e) => handleDensitySlider(item.key, e.target.value)}
                      className="w-full h-1.5 bg-navy-950 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Municipal Operator Telemetry Dashboard */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Dashboard Card */}
            <div className="rounded-2xl bg-navy-900 border border-brand-cyan/30 p-5 shadow-2xl space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-navy-800">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-brand-cyan" />
                  <h3 className="text-sm font-mono font-bold text-white uppercase">
                    Operator Telemetry HUD
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  REAL-TIME SIMULATION
                </span>
              </div>

              {/* Approach Direction Cards */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                
                {/* North */}
                <div className="p-3 rounded-xl bg-navy-950/80 border border-navy-800">
                  <div className="flex justify-between items-center text-slate-400 text-[10px] mb-1">
                    <span>NORTH CORRIDOR</span>
                    <span className={`px-1.5 py-0.2 rounded font-bold ${
                      getLightState('north') === 'GREEN' ? 'text-emerald-400' :
                      getLightState('north') === 'YELLOW' ? 'text-amber-400' : 'text-rose-400'
                    }`}>
                      {getLightState('north')}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-white mb-1">
                    {densities.north}% <span className="text-xs text-slate-400 font-normal">Density</span>
                  </div>
                  <div className="w-full bg-navy-850 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-brand-cyan h-full rounded-full" style={{ width: `${densities.north}%` }}></div>
                  </div>
                  <div className="mt-2 text-[10px] text-slate-400 flex justify-between">
                    <span>Vehicles: {Math.round(densities.north * 0.35)}</span>
                    <span>Wait: {getLightState('north') === 'GREEN' ? '0s' : `${countdown}s`}</span>
                  </div>
                </div>

                {/* South */}
                <div className="p-3 rounded-xl bg-navy-950/80 border border-navy-800">
                  <div className="flex justify-between items-center text-slate-400 text-[10px] mb-1">
                    <span>SOUTH CORRIDOR</span>
                    <span className={`px-1.5 py-0.2 rounded font-bold ${
                      getLightState('south') === 'GREEN' ? 'text-emerald-400' :
                      getLightState('south') === 'YELLOW' ? 'text-amber-400' : 'text-rose-400'
                    }`}>
                      {getLightState('south')}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-white mb-1">
                    {densities.south}% <span className="text-xs text-slate-400 font-normal">Density</span>
                  </div>
                  <div className="w-full bg-navy-850 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-brand-teal h-full rounded-full" style={{ width: `${densities.south}%` }}></div>
                  </div>
                  <div className="mt-2 text-[10px] text-slate-400 flex justify-between">
                    <span>Vehicles: {Math.round(densities.south * 0.35)}</span>
                    <span>Wait: {getLightState('south') === 'GREEN' ? '0s' : `${countdown}s`}</span>
                  </div>
                </div>

                {/* East */}
                <div className="p-3 rounded-xl bg-navy-950/80 border border-navy-800">
                  <div className="flex justify-between items-center text-slate-400 text-[10px] mb-1">
                    <span>EAST CORRIDOR</span>
                    <span className={`px-1.5 py-0.2 rounded font-bold ${
                      getLightState('east') === 'GREEN' ? 'text-emerald-400' :
                      getLightState('east') === 'YELLOW' ? 'text-amber-400' : 'text-rose-400'
                    }`}>
                      {getLightState('east')}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-white mb-1">
                    {densities.east}% <span className="text-xs text-slate-400 font-normal">Density</span>
                  </div>
                  <div className="w-full bg-navy-850 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-indigo-400 h-full rounded-full" style={{ width: `${densities.east}%` }}></div>
                  </div>
                  <div className="mt-2 text-[10px] text-slate-400 flex justify-between">
                    <span>Vehicles: {Math.round(densities.east * 0.35)}</span>
                    <span>Wait: {getLightState('east') === 'GREEN' ? '0s' : `${countdown}s`}</span>
                  </div>
                </div>

                {/* West */}
                <div className="p-3 rounded-xl bg-navy-950/80 border border-navy-800">
                  <div className="flex justify-between items-center text-slate-400 text-[10px] mb-1">
                    <span>WEST CORRIDOR</span>
                    <span className={`px-1.5 py-0.2 rounded font-bold ${
                      getLightState('west') === 'GREEN' ? 'text-emerald-400' :
                      getLightState('west') === 'YELLOW' ? 'text-amber-400' : 'text-rose-400'
                    }`}>
                      {getLightState('west')}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-white mb-1">
                    {densities.west}% <span className="text-xs text-slate-400 font-normal">Density</span>
                  </div>
                  <div className="w-full bg-navy-850 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-amber-400 h-full rounded-full" style={{ width: `${densities.west}%` }}></div>
                  </div>
                  <div className="mt-2 text-[10px] text-slate-400 flex justify-between">
                    <span>Vehicles: {Math.round(densities.west * 0.35)}</span>
                    <span>Wait: {getLightState('west') === 'GREEN' ? '0s' : `${countdown}s`}</span>
                  </div>
                </div>

              </div>

              {/* AI Recommendation Box */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-navy-950 to-navy-850 border border-brand-teal/30">
                <div className="text-xs font-mono text-brand-teal font-bold mb-1.5 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>CURRENT ALGORITHM ACTION</span>
                </div>
                
                <p className="text-xs text-slate-200 leading-relaxed font-mono">
                  {isEmergencyActive ? (
                    "Emergency override active: North Approach prioritized for emergency vehicle. All conflicting cross-traffic safely held at RED."
                  ) : controlMode === 'adaptive' ? (
                    `Urban Flow Adaptive: Allocating green time based on real-time density matrix (${Math.max(densities.north, densities.south)}% vs ${Math.max(densities.east, densities.west)}%). Unnecessary idle red-light waiting curtailed.`
                  ) : (
                    "Legacy Timer Active: Executing inflexible 15s green intervals regardless of queue buildup or vacant opposing lanes."
                  )}
                </p>

                <div className="mt-3 pt-3 border-t border-navy-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Cycle Mode: <strong className="text-white">{controlMode.toUpperCase()}</strong></span>
                  <span className="text-brand-cyan">Simulated Idle Delay Cut: ~34%</span>
                </div>
              </div>

              {/* Event Stream Log */}
              <div>
                <div className="text-xs font-mono font-bold text-slate-400 mb-2 flex items-center justify-between">
                  <span>DECISION & INFERENCE LOG</span>
                  <span className="text-[10px] text-slate-500">Live Events</span>
                </div>

                <div className="h-44 overflow-y-auto space-y-1.5 pr-1 font-mono text-[11px] bg-navy-950 p-2.5 rounded-xl border border-navy-850">
                  {logs.map(log => (
                    <div key={log.id} className="flex items-start gap-2 text-slate-300 leading-tight">
                      <span className="text-slate-500 flex-shrink-0 text-[10px]">{log.time}</span>
                      <span className={`break-words ${
                        log.type === 'emergency' ? 'text-rose-400 font-bold' :
                        log.type === 'decision' ? 'text-brand-cyan' :
                        log.type === 'fixed' ? 'text-amber-300' :
                        'text-slate-300'
                      }`}>
                        {log.message}
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
