import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cities, propertyTypes } from "@/data/properties";

const budgetRanges = [
  { label: "Any Budget", value: "all" },
  { label: "Under ₹50 Lakhs", value: "0-5000000" },
  { label: "₹50 Lakhs - ₹1 Cr", value: "5000000-10000000" },
  { label: "₹1 Cr - ₹2 Cr", value: "10000000-20000000" },
  { label: "₹2 Cr - ₹5 Cr", value: "20000000-50000000" },
  { label: "Above ₹5 Cr", value: "50000000-999999999" },
];

export function SearchBar() {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (city && city !== "all") params.set("city", city);
    if (propertyType && propertyType !== "all") params.set("type", propertyType);
    if (budget && budget !== "all") {
      const [min, max] = budget.split("-");
      if (min) params.set("minPrice", min);
      if (max) params.set("maxPrice", max);
    }
    navigate(`/listings?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-3 p-4 md:p-2 bg-background rounded-2xl shadow-card">
        <Select value={city} onValueChange={setCity}>
          <SelectTrigger className="flex-1 border-0 bg-muted/50 focus:ring-0">
            <SelectValue placeholder="Select City" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Cities</SelectItem>
            {cities.map((c) => (
              <SelectItem key={c} value={c}>{c}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={propertyType} onValueChange={setPropertyType}>
          <SelectTrigger className="flex-1 border-0 bg-muted/50 focus:ring-0">
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            {propertyTypes.map((t) => (
              <SelectItem key={t} value={t}>{t}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={budget} onValueChange={setBudget}>
          <SelectTrigger className="flex-1 border-0 bg-muted/50 focus:ring-0">
            <SelectValue placeholder="Budget" />
          </SelectTrigger>
          <SelectContent>
            {budgetRanges.map((b) => (
              <SelectItem key={b.value} value={b.value}>{b.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button size="lg" onClick={handleSearch} className="md:px-8">
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>
    </div>
  );
}
