import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorks from './components/HowItWorks';
import PrototypeDemo from './components/PrototypeDemo';
import BenefitsAndTarget from './components/BenefitsAndTarget';
import PilotCtaAndContact from './components/PilotCtaAndContact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans selection:bg-brand-cyan/20 selection:text-brand-cyan">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Problem Section */}
        <ProblemSection />

        {/* 3. Our Solution Section */}
        <SolutionSection />

        {/* 4. Features Section */}
        <FeaturesSection />

        {/* 5. How It Works Section */}
        <HowItWorks />

        {/* 6. Interactive Prototype Demonstration */}
        <PrototypeDemo />

        {/* 7. Benefits and Target Customers */}
        <BenefitsAndTarget />

        {/* 8. Call to Action and Pilot Contact Form */}
        <PilotCtaAndContact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
