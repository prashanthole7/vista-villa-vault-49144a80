import { Link } from "react-router-dom";
import { MapPin, Maximize, BedDouble, Phone, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Property, formatPrice, formatArea } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in ${property.title} (${property.bhk}BHK in ${property.locality}) priced at ${formatPrice(property.price)}. Please share more details.`
  );

  return (
    <Card className="group overflow-hidden border-0 shadow-card hover:shadow-card-hover transition-all duration-300">
      <div className="relative overflow-hidden">
        <Link to={`/property/${property.id}`}>
          <img
            src={property.imageUrls[0]}
            alt={property.title}
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant={property.status === "Ready to Move" ? "default" : "secondary"}>
            {property.status}
          </Badge>
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
            {property.type}
          </Badge>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="text-lg font-bold text-white drop-shadow-lg">
            {formatPrice(property.price)}
          </span>
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        <Link to={`/property/${property.id}`}>
          <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-1">
            {property.title}
          </h3>
        </Link>

        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          <span className="line-clamp-1">{property.locality}, {property.city}</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          {property.bhk > 0 && (
            <div className="flex items-center gap-1">
              <BedDouble className="h-3.5 w-3.5" />
              <span>{property.bhk} BHK</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Maximize className="h-3.5 w-3.5" />
            <span>{formatArea(property.areaSqft)}</span>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button size="sm" className="flex-1" asChild>
            <a href="tel:+919876543210">
              <Phone className="mr-1 h-3.5 w-3.5" />
              Call
            </a>
          </Button>
          <Button size="sm" variant="outline" className="flex-1 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 border-0" asChild>
            <a 
              href={`https://wa.me/919876543210?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-1 h-3.5 w-3.5" />
              WhatsApp
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
