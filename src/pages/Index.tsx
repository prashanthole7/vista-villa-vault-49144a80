import { Helmet } from "react-helmet-async";
import natureBg from "@/assets/nature-bg.jpg";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>BHARATWISE — Launching Soon</title>
        <meta name="description" content="BHARATWISE is launching soon. Stay tuned for something extraordinary." />
      </Helmet>
      
      <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${natureBg})` }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-6">
          {/* Brand Name with Glass Effect */}
          <div className="inline-block px-8 py-6 sm:px-12 sm:py-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl mb-6">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-wider text-white drop-shadow-lg">
              BHARATWISE
            </h1>
          </div>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl font-light tracking-widest text-white/80 uppercase">
            Launching soon
          </p>
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
