import { Helmet } from "react-helmet-async";
import { Linkedin, Mail } from "lucide-react";
import natureBg from "@/assets/nature-bg.jpg";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>BHARATWISE — Launching Soon</title>
        <meta name="description" content="BHARATWISE is launching soon. Stay tuned for something extraordinary." />
      </Helmet>
      
      <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
        {/* Background Image with Ken Burns Animation */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-ken-burns"
          style={{ backgroundImage: `url(${natureBg})` }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-6">
          {/* Brand Name */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-wider text-white mb-6 drop-shadow-2xl">
            BHARATWISE
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl font-light tracking-widest text-white/80 uppercase">
            Launching soon
          </p>
        </div>
        
        {/* Social Links */}
        <div className="absolute bottom-16 left-0 right-0 z-10 flex justify-center gap-6">
          <a 
            href="https://www.linkedin.com/company/bharatwiseco/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
            aria-label="Follow us on LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-white" />
          </a>
          <a 
            href="mailto:bharatwiseco@gmail.com"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
            aria-label="Contact us via email"
          >
            <Mail className="h-5 w-5 text-white" />
          </a>
        </div>
        
        {/* Footer */}
        <div className="absolute bottom-6 left-0 right-0 z-10 text-center">
          <p className="text-sm text-white/60">
            © 2026 Bharatwise. All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Index;
