import { Link } from "react-router-dom";
import { Building, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Building className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">PropIndia</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted partner in finding the perfect property across India. 
              We connect dreams with addresses.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-background transition-colors">Home</Link></li>
              <li><Link to="/listings" className="hover:text-background transition-colors">All Properties</Link></li>
              <li><Link to="/listings?type=Apartment" className="hover:text-background transition-colors">Apartments</Link></li>
              <li><Link to="/listings?type=Villa" className="hover:text-background transition-colors">Villas</Link></li>
              <li><Link to="/contact" className="hover:text-background transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Popular Cities */}
          <div className="space-y-4">
            <h4 className="font-semibold">Popular Cities</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/listings?city=Mumbai" className="hover:text-background transition-colors">Mumbai</Link></li>
              <li><Link to="/listings?city=Bangalore" className="hover:text-background transition-colors">Bangalore</Link></li>
              <li><Link to="/listings?city=Hyderabad" className="hover:text-background transition-colors">Hyderabad</Link></li>
              <li><Link to="/listings?city=Pune" className="hover:text-background transition-colors">Pune</Link></li>
              <li><Link to="/listings?city=Chennai" className="hover:text-background transition-colors">Chennai</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>123 Business Hub, Andheri East, Mumbai 400069</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-background transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info@propindia.com" className="hover:text-background transition-colors">info@propindia.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} PropIndia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
