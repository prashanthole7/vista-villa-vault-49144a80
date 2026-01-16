import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>BHARATWISE — Launching Soon</title>
        <meta name="description" content="BHARATWISE is launching soon. Stay tuned for something extraordinary." />
      </Helmet>
      
      <div className="relative min-h-screen bg-background overflow-hidden flex items-center justify-center">
        {/* Aurora Background */}
        <div className="aurora-container">
          <div className="aurora aurora-1"></div>
          <div className="aurora aurora-2"></div>
          <div className="aurora aurora-3"></div>
        </div>
        
        {/* Noise Overlay */}
        <div className="noise-overlay"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6">
          {/* Glow Effect */}
          <div className="brand-glow"></div>
          
          {/* Brand Name */}
          <h1 className="brand-name text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-wider text-foreground mb-6">
            BHARATWISE
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl font-light tracking-widest text-muted-foreground uppercase">
            Launching soon
          </p>
        </div>
      </div>
    </>
  );
};

export default Index;
