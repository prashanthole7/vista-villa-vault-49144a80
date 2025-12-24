import { Link } from "react-router-dom";
import { ArrowRight, Building2, Users, MapPin, Star, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { SearchBar } from "@/components/SearchBar";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SEOHead } from "@/components/SEOHead";
import { properties } from "@/data/properties";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Mumbai",
    text: "Found my dream apartment in Andheri within 2 weeks. The team was incredibly helpful throughout the process.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    location: "Bangalore",
    text: "Excellent service! They understood exactly what I was looking for and showed me the best options in Whitefield.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    location: "Pune",
    text: "Very professional and transparent. Helped us negotiate a great deal on our new villa in Kothrud.",
    rating: 5,
  },
];

const stats = [
  { icon: Building2, value: "500+", label: "Properties Listed" },
  { icon: Users, value: "1000+", label: "Happy Customers" },
  { icon: MapPin, value: "15+", label: "Cities Covered" },
];

const Index = () => {
  const featuredProperties = properties.slice(0, 6);

  return (
    <>
      <SEOHead
        title="PropNest - Find Your Dream Home in India"
        description="Discover premium residential properties across India. Browse apartments, villas, and houses in Mumbai, Delhi, Bangalore, and more. Get expert assistance for your property search."
      />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/30 pt-20 pb-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Find Your Perfect
                <span className="text-primary block">Dream Home</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Discover premium residential properties across India's top cities. 
                From cozy apartments to luxurious villas, we help you find the perfect home.
              </p>
            </div>
            
            <SearchBar />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background -mt-10 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-none shadow-lg bg-card">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Listings */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Properties
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Handpicked premium properties from top locations across India
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/listings">
                <Button size="lg" className="group">
                  View All Properties
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Our Customers Say
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Join thousands of happy homeowners who found their perfect property with us
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="pt-8 pb-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Ready to Find Your Dream Home?
                </h2>
                <p className="text-primary-foreground/80">
                  Get in touch with our experts today for personalized property recommendations
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/919876543210?text=Hi, I'm interested in properties" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="secondary" className="gap-2">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </Button>
                </a>
                <a href="tel:+919876543210">
                  <Button size="lg" variant="outline" className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default Index;
