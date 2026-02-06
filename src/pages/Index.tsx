import { Helmet } from "react-helmet-async";
import { Linkedin, Mail, Globe, Shield, Lightbulb } from "lucide-react";
import { Earth3D } from "@/components/Earth3D";

const features = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connect with audiences worldwide through our expansive network and localized solutions.",
  },
  {
    icon: Shield,
    title: "Fast & Secure",
    description: "Enterprise-grade security with lightning-fast performance you can rely on.",
  },
  {
    icon: Lightbulb,
    title: "Innovative",
    description: "Cutting-edge technology solutions that keep you ahead of the competition.",
  },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>BHARATWISE — Launching Soon</title>
        <meta name="description" content="BHARATWISE is launching soon. Stay tuned for something extraordinary." />
      </Helmet>
      
      <div className="relative min-h-screen overflow-hidden flex flex-col">
        {/* Space gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#050d1a] to-[#000000]" />
        
        {/* 3D Earth */}
        <Earth3D />
        
        {/* Main content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-20">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            {/* Glassmorphism Card */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
              {/* Brand */}
              <p className="text-primary/80 font-medium tracking-widest uppercase text-sm mb-4">
                BHARATWISE
              </p>
              
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Welcome to <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Our World
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                We're building something extraordinary. A global platform designed to connect, 
                innovate, and transform the way you experience technology.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105">
                  Get Early Access
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          
          {/* Feature Cards */}
          <div className="w-full max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="relative z-10 flex justify-center gap-4 pb-8">
          <a 
            href="https://www.linkedin.com/company/bharatwiseco/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:scale-110"
            aria-label="Follow us on LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-white" />
          </a>
          <a 
            href="https://mail.google.com/mail/?view=cm&to=bharatwiseco@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:scale-110"
            aria-label="Contact us via email"
          >
            <Mail className="h-5 w-5 text-white" />
          </a>
        </div>
        
        {/* Footer */}
        <div className="relative z-10 text-center pb-6">
          <p className="text-sm text-white/40">
            © 2026 Bharatwise. All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Index;
