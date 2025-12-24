import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  BedDouble,
  Maximize,
  Calendar,
  CheckCircle,
  Phone,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  X,
  Building,
  Dumbbell,
  Car,
  Shield,
  Waves,
  Trees,
  Zap,
  Users,
  Gamepad2,
  Wifi,
  PawPrint,
  Sun,
  Wine,
  Plane,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EMICalculator } from "@/components/EMICalculator";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SEOHead } from "@/components/SEOHead";
import { properties, formatPrice, formatArea } from "@/data/properties";
import { toast } from "@/hooks/use-toast";

const amenityIcons: Record<string, any> = {
  "Swimming Pool": Waves,
  "Gym": Dumbbell,
  "24/7 Security": Shield,
  "Covered Parking": Car,
  "Children's Play Area": Gamepad2,
  "Club House": Users,
  "Power Backup": Zap,
  "Landscaped Gardens": Trees,
  "Rooftop Pool": Waves,
  "Infinity Pool": Waves,
  "Smart Home": Wifi,
  "Pet-Friendly": PawPrint,
  "Terrace Garden": Trees,
  "Private Garden": Trees,
  "Home Theater": Gamepad2,
  "Solar Panels": Sun,
  "Rooftop Restaurant": Wine,
  "Helipad Access": Plane,
  default: CheckCircle,
};

export default function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const property = properties.find((p) => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
            <Button asChild>
              <Link to="/listings">Browse All Properties</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in ${property.title} (${property.bhk}BHK in ${property.locality}) priced at ${formatPrice(property.price)}. Please share more details.`
  );

  const handleScheduleVisit = () => {
    const subject = encodeURIComponent(`Schedule Visit: ${property.title}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}\n\nProperty: ${property.title}\nLocation: ${property.locality}, ${property.city}\nPrice: ${formatPrice(property.price)}`
    );
    window.location.href = `mailto:info@propindia.com?subject=${subject}&body=${body}`;
    toast({
      title: "Opening email client",
      description: "Please send the email to complete your visit request.",
    });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.imageUrls.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.imageUrls.length) % property.imageUrls.length);
  };

  return (
    <>
      <SEOHead
        title={property.title}
        description={`${property.bhk > 0 ? property.bhk + "BHK " : ""}${property.type} in ${property.locality}, ${property.city}. ${formatPrice(property.price)}. ${property.description.slice(0, 100)}...`}
        image={property.imageUrls[0]}
      />
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Breadcrumb */}
          <div className="bg-muted/30 py-3">
            <div className="container">
              <nav className="flex items-center gap-2 text-sm">
                <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
                <span className="text-muted-foreground">/</span>
                <Link to="/listings" className="text-muted-foreground hover:text-foreground">Listings</Link>
                <span className="text-muted-foreground">/</span>
                <span className="text-foreground font-medium truncate">{property.title}</span>
              </nav>
            </div>
          </div>

          <div className="container py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Image Gallery */}
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={property.imageUrls[currentImageIndex]}
                    alt={`${property.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-[400px] object-cover cursor-pointer"
                    onClick={() => setShowGallery(true)}
                  />
                  
                  {property.imageUrls.length > 1 && (
                    <>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full"
                        onClick={prevImage}
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full"
                        onClick={nextImage}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                      
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {property.imageUrls.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentImageIndex(i)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              i === currentImageIndex ? "bg-white" : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge variant={property.status === "Ready to Move" ? "default" : "secondary"}>
                      {property.status}
                    </Badge>
                  </div>
                </div>

                {/* Thumbnails */}
                {property.imageUrls.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {property.imageUrls.map((url, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImageIndex(i)}
                        className={`shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${
                          i === currentImageIndex ? "border-primary" : "border-transparent"
                        }`}
                      >
                        <img
                          src={url}
                          alt={`Thumbnail ${i + 1}`}
                          className="w-20 h-16 object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* Title & Location */}
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{property.locality}, {property.city}</span>
                  </div>
                </div>

                {/* Key Facts */}
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          {formatPrice(property.price)}
                        </div>
                        <div className="text-sm text-muted-foreground">Price</div>
                      </div>
                      {property.bhk > 0 && (
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1">
                            <BedDouble className="h-5 w-5 text-primary" />
                            <span className="text-2xl font-bold">{property.bhk}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">BHK</div>
                        </div>
                      )}
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Maximize className="h-5 w-5 text-primary" />
                          <span className="text-2xl font-bold">{property.areaSqft.toLocaleString()}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">Sq. Ft.</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Building className="h-5 w-5 text-primary" />
                          <span className="text-xl font-bold">{property.type}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">Type</div>
                      </div>
                    </div>
                    {property.possession && (
                      <div className="mt-4 pt-4 border-t flex items-center justify-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Expected Possession: {property.possession}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Description */}
                <Card>
                  <CardHeader>
                    <CardTitle>About This Property</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{property.description}</p>
                  </CardContent>
                </Card>

                {/* Amenities */}
                <Card>
                  <CardHeader>
                    <CardTitle>Amenities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {property.amenities.map((amenity) => {
                        const Icon = amenityIcons[amenity] || amenityIcons.default;
                        return (
                          <div key={amenity} className="flex items-center gap-2 text-sm">
                            <Icon className="h-4 w-4 text-primary shrink-0" />
                            <span className="text-muted-foreground">{amenity}</span>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Map Placeholder */}
                <Card>
                  <CardHeader>
                    <CardTitle>Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <MapPin className="h-8 w-8 mx-auto mb-2" />
                        <p>{property.locality}, {property.city}</p>
                        <p className="text-sm mt-1">Map integration placeholder</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Contact Card */}
                <Card className="sticky top-24">
                  <CardContent className="p-6 space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">
                        {formatPrice(property.price)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {property.bhk > 0 ? `${property.bhk}BHK` : ""} {property.type} • {formatArea(property.areaSqft)}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full" size="lg">
                            Schedule Visit
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Schedule a Visit</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4 pt-4">
                            <Input
                              placeholder="Your Name"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                            <Input
                              placeholder="Phone Number"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                            <Textarea
                              placeholder="Your Message (Optional)"
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                            <Button className="w-full" onClick={handleScheduleVisit}>
                              Submit Request
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>

                      <Button variant="outline" className="w-full" size="lg" asChild>
                        <a href="tel:+919876543210">
                          <Phone className="mr-2 h-5 w-5" />
                          Call Now
                        </a>
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 border-0"
                        size="lg"
                        asChild
                      >
                        <a
                          href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="mr-2 h-5 w-5" />
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* EMI Calculator */}
                <EMICalculator propertyPrice={property.price} />
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <FloatingWhatsApp />

        {/* Fullscreen Gallery */}
        {showGallery && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={() => setShowGallery(false)}
            >
              <X className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              onClick={prevImage}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <img
              src={property.imageUrls[currentImageIndex]}
              alt={`${property.title} - Image ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              onClick={nextImage}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
              {currentImageIndex + 1} / {property.imageUrls.length}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
