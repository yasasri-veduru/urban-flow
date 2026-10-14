import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Landmark, 
  Building, 
  Compass, 
  TrendingUp, 
  Timer, 
  Fuel, 
  Ambulance, 
  LineChart, 
  CheckCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function BenefitsAndTarget() {
  const intendedBenefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-brand-cyan" />,
      title: "Better Traffic-Flow Management",
      description: "Designed to adapt green intervals dynamically to incoming queue surges, smoothing bottleneck points and helping maintain continuous vehicular momentum across key corridors."
    },
    {
      icon: <Timer className="w-6 h-6 text-brand-teal" />,
      title: "Reduced Unnecessary Waiting",
      description: "Aims to eliminate prolonged idling at red lights when opposing lanes are completely empty, minimizing frustrating delays for daily urban commuters."
    },
    {
      icon: <Fuel className="w-6 h-6 text-emerald-400" />,
      title: "Potential Fuel & Emission Savings",
      description: "By curtailing avoidable stop-and-go acceleration cycles and excessive stationary idling, adaptive timing supports lower fuel burn and reduced urban emissions."
    },
    {
      icon: <Ambulance className="w-6 h-6 text-brand-rose" />,
      title: "Improved Emergency Vehicle Movement",
      description: "Proposed priority preemption protocols clear conflicting lane queues ahead of first responders, facilitating swifter transit for ambulances and fire crews."
    },
    {
      icon: <LineChart className="w-6 h-6 text-indigo-400" />,
      title: "Data-Driven Decisions for Authorities",
      description: "Delivers granular vehicle counts, congestion patterns, and phase efficiency analytics to municipal engineers, turning guesswork into actionable infrastructure planning."
    }
  ];

  const targetCustomers = [
    {
      icon: <Landmark className="w-7 h-7 text-brand-cyan" />,
      role: "Civic Governance",
      name: "Municipal Corporations",
      description: "City civic bodies seeking cost-effective, non-invasive digital solutions to modernize city center intersections without extensive civil construction work.",
      pilotOpportunity: "Single-junction proof of concept or high-density arterial corridor study."
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-brand-teal" />,
      role: "Law & Enforcement",
      name: "Traffic Police Departments",
      description: "Field officers and traffic command units managing peak-hour choke points, emergency green waves, and signal timing enforcement.",
      pilotOpportunity: "Automated queue monitoring and emergency vehicle priority assist."
    },
    {
      icon: <Compass className="w-7 h-7 text-indigo-400" />,
      role: "Smart Infrastructure",
      name: "Smart-City Agencies & SPVs",
      description: "Integrated Command and Control Center (ICCC) initiatives seeking modular, software-driven traffic intelligence compatible with existing camera feeds.",
      pilotOpportunity: "Integration sandbox with existing smart-city surveillance networks."
    },
    {
      icon: <Building2 className="w-7 h-7 text-amber-400" />,
      role: "Private Campuses",
      name: "Commercial Complexes & Industrial Parks",
      description: "Large IT parks, manufacturing clusters, and university campuses experiencing severe gate-entry bottlenecks during morning and evening shifts.",
      pilotOpportunity: "Private ring-road signal coordination and internal transit optimization."
    },
    {
      icon: <Building className="w-7 h-7 text-rose-400" />,
      role: "Highway & Logistics",
      name: "Infrastructure Operators",
      description: "Toll plaza operators, airport access roads, port authorities, and expressway concessionaires handling heavy freight and variable entry loads.",
      pilotOpportunity: "Approach queuing estimation and toll feeder lane optimization."
    }
  ];

  return (
    <section id="benefits" className="py-20 md:py-28 relative bg-navy-900/60 border-t border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION 1: INTENDED BENEFITS ================= */}
        <div className="mb-24">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Projected Value Delivery</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Intended Benefits for <br />
              <span className="text-gradient">Modern Urban Infrastructure</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Designed to create tangible improvements across traffic efficiency, public safety, and environmental sustainability.
            </p>

            <div className="text-xs text-slate-400 font-mono bg-navy-950/80 px-4 py-2 rounded-xl border border-navy-800 inline-block">
              * Note: Stated benefits represent intended design objectives and simulation models, not audited historical claims.
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {intendedBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between glass-panel-hover group ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy-850 border border-brand-cyan/20 flex items-center justify-center mb-5 group-hover:border-brand-cyan/50 group-hover:shadow-glow-cyan transition-all">
                    {benefit.icon}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-navy-800 flex items-center gap-2 text-xs font-mono text-brand-teal">
                  <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Key Venture Objective</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECTION 2: TARGET CUSTOMERS ================= */}
        <div>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/30 text-brand-teal text-xs font-mono font-medium">
              <Building2 className="w-3.5 h-3.5" />
              <span>Target Stakeholders & Pilot Partners</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Tailored for Municipal, Regional & <br />
              <span className="text-gradient">Private Infrastructure Operators</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Urban Flow seeks early pilot opportunities and evaluation feedback from civic agencies and infrastructure managers.
            </p>
          </div>

          {/* Customers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetCustomers.map((cust, idx) => (
              <div
                key={idx}
                className={`glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between glass-panel-hover group ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-navy-850 border border-brand-cyan/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {cust.icon}
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-navy-800 text-slate-300 border border-slate-700">
                      {cust.role}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                    {cust.name}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {cust.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-navy-800 bg-navy-950/40 -mx-6 -mb-6 p-4 rounded-b-2xl">
                  <div className="text-[11px] font-mono text-slate-400">
                    <strong className="text-brand-cyan uppercase">Pilot Scope: </strong>
                    <span>{cust.pilotOpportunity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
