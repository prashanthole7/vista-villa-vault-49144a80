import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Building, Phone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const navItems = [{
  label: "Home",
  path: "/",
  icon: Home
}, {
  label: "Properties",
  path: "/listings",
  icon: Building
}, {
  label: "Contact",
  path: "/contact",
  icon: Phone
}];
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Building className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">BuildIndia</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(item => <Link key={item.path} to={item.path} className={cn("text-sm font-medium transition-colors hover:text-primary", location.pathname === item.path ? "text-primary" : "text-muted-foreground")}>
              {item.label}
            </Link>)}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <Link to="/listings">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Link>
          </Button>
          <Button size="sm" asChild>
            <a href="tel:+919876543210">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-2">
            {navItems.map(item => <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className={cn("flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors", location.pathname === item.path ? "bg-primary text-primary-foreground" : "hover:bg-muted")}>
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>)}
            <div className="pt-2 space-y-2">
              <Button className="w-full" size="sm" asChild>
                <a href="tel:+919876543210">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </nav>
        </div>}
    </header>;
}