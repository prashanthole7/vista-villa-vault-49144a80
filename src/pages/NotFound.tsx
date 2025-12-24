import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const NotFound = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found - PropNest"
        description="The page you're looking for doesn't exist. Return to our homepage to continue browsing properties."
      />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Home className="w-12 h-12 text-primary" />
              </div>
              
              <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Page Not Found
              </h2>
              <p className="text-muted-foreground mb-8">
                Oops! The page you're looking for doesn't exist or has been moved. 
                Let's get you back on track.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button size="lg" className="gap-2 w-full sm:w-auto">
                    <Home className="w-5 h-5" />
                    Go to Homepage
                  </Button>
                </Link>
                <Link to="/listings">
                  <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                    <ArrowLeft className="w-5 h-5" />
                    Browse Properties
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
