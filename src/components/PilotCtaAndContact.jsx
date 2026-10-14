import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  MapPin, 
  Building2, 
  User, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  FileText, 
  ExternalLink,
  Info,
  Calendar
} from 'lucide-react';

export default function PilotCtaAndContact() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    sector: 'Municipal Corporation',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmission, setLastSubmission] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setLastSubmission({ ...formData, timestamp: new Date().toLocaleString() });
    }, 800);
  };

  // Generate mailto link as fallback
  const mailtoHref = `mailto:pilot-inquiries@urbanflow.example?subject=${encodeURIComponent(
    `Urban Flow Pilot Demonstration Request - ${formData.organization || 'Prospective Partner'}`
  )}&body=${encodeURIComponent(
    `Hello Urban Flow Student Venture Team,\n\nName: ${formData.name}\nOrganization: ${formData.organization}\nSector: ${formData.sector}\nEmail: ${formData.email}\n\nMessage / Pilot Objectives:\n${formData.message}\n\n[Inquiry sent via Urban Flow Landing Prototype]`
  )}`;

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-navy-950 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-brand-cyan/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Strong Closing Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pilot Collaboration Opportunity</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Smarter <br />
            <span className="text-gradient">Cities Together.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Explore how Urban Flow could support more efficient, safer, and more sustainable urban mobility.
          </p>

          <div className="pt-2">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-navy-950 bg-gradient-to-r from-brand-cyan via-teal-300 to-brand-teal hover:from-white hover:to-brand-cyan transition-all shadow-lg hover:shadow-glow-cyan"
            >
              <Calendar className="w-4 h-4" />
              <span>Request a Pilot Demonstration</span>
            </a>
          </div>
        </div>

        {/* Contact & Pilot Request Form Box */}
        <div id="contact-form" className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Venture Context & Contact Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel rounded-2xl p-6 sm:p-7 space-y-5">
              <h3 className="text-xl font-bold text-white">
                Pilot Partnership Inquiry
              </h3>
              
              <p className="text-sm text-slate-300 leading-relaxed">
                We are actively seeking feedback, mentoring, and candidate intersection evaluation opportunities from city authorities and mobility stakeholders.
              </p>

              <div className="space-y-4 pt-2">
                
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-navy-850 border border-navy-700 flex items-center justify-center text-brand-cyan flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <div className="text-slate-400 font-mono uppercase text-[10px]">Team Contact Email</div>
                    <div className="text-slate-200 font-mono font-semibold">
                      [contact-placeholder@urbanflow.example]
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                      * Official venture contact placeholder
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-navy-850 border border-navy-700 flex items-center justify-center text-brand-teal flex-shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <div className="text-slate-400 font-mono uppercase text-[10px]">Academic Venture Program</div>
                    <div className="text-slate-200 font-medium">
                      Wadhwani Student Venture Program
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                      Student Startup Track // Phase: Prototype
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-navy-850 border border-navy-700 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <div className="text-slate-400 font-mono uppercase text-[10px]">Location & Incubation</div>
                    <div className="text-slate-200 font-medium">
                      [Campus Incubation Center Placeholder]
                    </div>
                  </div>
                </div>

              </div>

              {/* Notice regarding backend integration */}
              <div className="p-3 rounded-xl bg-navy-950/70 border border-navy-800 text-[11px] font-mono text-slate-400 space-y-1">
                <div className="text-brand-teal font-semibold flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" />
                  <span>Integration Note</span>
                </div>
                <p>
                  This form features interactive client-side submission with an immediate direct <strong className="text-slate-200">mailto:</strong> trigger fallback to reach our team without requiring external database keys.
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-brand-cyan/30 shadow-2xl">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono font-medium text-slate-300">
                        Full Name <span className="text-brand-cyan">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Dr. Rajesh Kumar"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-800 focus:border-brand-cyan focus:outline-none text-sm text-white placeholder-slate-600 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Organization */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono font-medium text-slate-300">
                        Organization / Agency <span className="text-brand-cyan">*</span>
                      </label>
                      <input
                        type="text"
                        name="organization"
                        required
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="e.g. Municipal Traffic Department"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-800 focus:border-brand-cyan focus:outline-none text-sm text-white placeholder-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono font-medium text-slate-300">
                        Official Email <span className="text-brand-cyan">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. r.kumar@smartcity.gov.in"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-800 focus:border-brand-cyan focus:outline-none text-sm text-white placeholder-slate-600 transition-colors"
                      />
                    </div>

                    {/* Sector */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono font-medium text-slate-300">
                        Sector / Agency Type
                      </label>
                      <select
                        name="sector"
                        value={formData.sector}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-800 focus:border-brand-cyan focus:outline-none text-sm text-white transition-colors"
                      >
                        <option value="Municipal Corporation">Municipal Corporation</option>
                        <option value="Traffic Police Department">Traffic Police Department</option>
                        <option value="Smart-City Authority / SPV">Smart-City Authority / SPV</option>
                        <option value="Commercial Complex / Tech Park">Commercial Complex / Tech Park</option>
                        <option value="Infrastructure Operator">Infrastructure Operator</option>
                        <option value="Academic / Research Evaluator">Academic / Research Evaluator</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono font-medium text-slate-300">
                      Message & Demonstration Interests <span className="text-brand-cyan">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your current intersection challenges, sample video feeds available for testing, or questions regarding pilot feasibility..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-800 focus:border-brand-cyan focus:outline-none text-sm text-white placeholder-slate-600 transition-colors"
                    ></textarea>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-bold text-navy-950 bg-gradient-to-r from-brand-cyan to-brand-teal hover:from-white hover:to-brand-cyan transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-glow-cyan disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-navy-950 border-t-transparent rounded-full animate-spin"></div>
                          <span>Transmitting Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Pilot Request</span>
                        </>
                      )}
                    </button>

                    <a
                      href={mailtoHref}
                      className="w-full sm:w-auto text-center px-4 py-3 rounded-xl text-xs font-mono font-semibold text-slate-300 hover:text-white bg-navy-850 hover:bg-navy-800 border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Open in Email App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <p className="text-[11px] text-slate-500 font-mono text-center sm:text-left pt-1">
                    * Submissions are processed locally in demonstration mode. No credit card or paid license required.
                  </p>

                </form>
              ) : (
                /* Success Confirmation State */
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h4 className="text-xl font-bold text-white">
                    Pilot Demonstration Request Received!
                  </h4>

                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{lastSubmission?.name}</strong>. Your inquiry on behalf of <strong className="text-brand-cyan">{lastSubmission?.organization}</strong> has been logged in our demonstration registry.
                  </p>

                  {/* Summary card */}
                  <div className="text-left bg-navy-950 p-4 rounded-xl border border-navy-800 max-w-md mx-auto text-xs font-mono space-y-2 text-slate-300">
                    <div className="flex justify-between border-b border-navy-850 pb-1.5">
                      <span className="text-slate-500">Contact Email:</span>
                      <span className="text-white">{lastSubmission?.email}</span>
                    </div>
                    <div className="flex justify-between border-b border-navy-850 pb-1.5">
                      <span className="text-slate-500">Sector:</span>
                      <span className="text-brand-teal">{lastSubmission?.sector}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Logged At:</span>
                      <span className="text-slate-400">{lastSubmission?.timestamp}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-navy-950 bg-brand-cyan hover:bg-white transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send Direct Email Copy</span>
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-white bg-navy-850 border border-slate-700"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
