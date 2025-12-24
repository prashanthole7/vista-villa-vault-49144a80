import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SEOHead } from "@/components/SEOHead";
import {
  properties,
  cities,
  propertyTypes,
  bhkOptions,
  statusOptions,
  formatPrice,
} from "@/data/properties";

const ITEMS_PER_PAGE = 6;

export default function Listings() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter states from URL
  const selectedCity = searchParams.get("city") || "";
  const selectedType = searchParams.get("type") || "";
  const selectedBhk = searchParams.get("bhk") || "";
  const selectedStatus = searchParams.get("status") || "";
  const minPrice = Number(searchParams.get("minPrice")) || 0;
  const maxPrice = Number(searchParams.get("maxPrice")) || 100000000;
  const sortBy = searchParams.get("sort") || "newest";

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchParams({});
    setCurrentPage(1);
  };

  const filteredProperties = useMemo(() => {
    let result = [...properties];

    if (selectedCity) {
      result = result.filter((p) => p.city === selectedCity);
    }
    if (selectedType) {
      result = result.filter((p) => p.type === selectedType);
    }
    if (selectedBhk) {
      result = result.filter((p) => p.bhk === Number(selectedBhk));
    }
    if (selectedStatus) {
      result = result.filter((p) => p.status === selectedStatus);
    }
    result = result.filter((p) => p.price >= minPrice && p.price <= maxPrice);

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "area":
        result.sort((a, b) => b.areaSqft - a.areaSqft);
        break;
      default:
        // newest first (by id desc)
        result.sort((a, b) => Number(b.id) - Number(a.id));
    }

    return result;
  }, [selectedCity, selectedType, selectedBhk, selectedStatus, minPrice, maxPrice, sortBy]);

  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);
  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const hasActiveFilters = selectedCity || selectedType || selectedBhk || selectedStatus || minPrice > 0 || maxPrice < 100000000;

  return (
    <>
      <SEOHead
        title="Property Listings"
        description="Browse premium properties across India. Filter by city, type, budget, and more. Apartments, villas, and plots available."
      />
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 py-8">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters - Desktop */}
              <aside className="hidden lg:block w-72 shrink-0">
                <Card className="sticky top-24">
                  <CardContent className="p-6 space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">Filters</h3>
                      {hasActiveFilters && (
                        <Button variant="ghost" size="sm" onClick={clearFilters}>
                          Clear All
                        </Button>
                      )}
                    </div>

                    {/* City */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">City</label>
                      <Select value={selectedCity} onValueChange={(v) => updateFilter("city", v)}>
                        <SelectTrigger>
                          <SelectValue placeholder="All Cities" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">All Cities</SelectItem>
                          {cities.map((c) => (
                            <SelectItem key={c} value={c}>{c}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Type */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Property Type</label>
                      <Select value={selectedType} onValueChange={(v) => updateFilter("type", v)}>
                        <SelectTrigger>
                          <SelectValue placeholder="All Types" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">All Types</SelectItem>
                          {propertyTypes.map((t) => (
                            <SelectItem key={t} value={t}>{t}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* BHK */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">BHK</label>
                      <Select value={selectedBhk} onValueChange={(v) => updateFilter("bhk", v)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Any BHK" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">Any BHK</SelectItem>
                          {bhkOptions.map((b) => (
                            <SelectItem key={b} value={String(b)}>{b} BHK</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Status */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Status</label>
                      <Select value={selectedStatus} onValueChange={(v) => updateFilter("status", v)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Any Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">Any Status</SelectItem>
                          {statusOptions.map((s) => (
                            <SelectItem key={s} value={s}>{s}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Price Range */}
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <label className="text-sm font-medium">Budget</label>
                        <span className="text-xs text-muted-foreground">
                          {formatPrice(minPrice)} - {formatPrice(maxPrice)}
                        </span>
                      </div>
                      <Slider
                        value={[minPrice / 1000000, maxPrice / 1000000]}
                        onValueChange={([min, max]) => {
                          const params = new URLSearchParams(searchParams);
                          params.set("minPrice", String(min * 1000000));
                          params.set("maxPrice", String(max * 1000000));
                          setSearchParams(params);
                          setCurrentPage(1);
                        }}
                        min={0}
                        max={100}
                        step={5}
                        className="cursor-pointer"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>₹0</span>
                        <span>₹10 Cr+</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </aside>

              {/* Main Content */}
              <div className="flex-1">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h1 className="text-2xl font-bold text-foreground">
                      {selectedCity || "All"} Properties
                    </h1>
                    <p className="text-sm text-muted-foreground">
                      {filteredProperties.length} properties found
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      className="lg:hidden"
                      onClick={() => setShowFilters(!showFilters)}
                    >
                      <SlidersHorizontal className="mr-2 h-4 w-4" />
                      Filters
                    </Button>

                    <Select value={sortBy} onValueChange={(v) => updateFilter("sort", v)}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Sort By" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Newest First</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="area">Largest Area</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Mobile Filters */}
                {showFilters && (
                  <Card className="lg:hidden mb-6">
                    <CardContent className="p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">Filters</h3>
                        <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Select value={selectedCity} onValueChange={(v) => updateFilter("city", v)}>
                          <SelectTrigger>
                            <SelectValue placeholder="City" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="">All Cities</SelectItem>
                            {cities.map((c) => (
                              <SelectItem key={c} value={c}>{c}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Select value={selectedType} onValueChange={(v) => updateFilter("type", v)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="">All Types</SelectItem>
                            {propertyTypes.map((t) => (
                              <SelectItem key={t} value={t}>{t}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Select value={selectedBhk} onValueChange={(v) => updateFilter("bhk", v)}>
                          <SelectTrigger>
                            <SelectValue placeholder="BHK" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="">Any BHK</SelectItem>
                            {bhkOptions.map((b) => (
                              <SelectItem key={b} value={String(b)}>{b} BHK</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Select value={selectedStatus} onValueChange={(v) => updateFilter("status", v)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="">Any Status</SelectItem>
                            {statusOptions.map((s) => (
                              <SelectItem key={s} value={s}>{s}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      {hasActiveFilters && (
                        <Button variant="outline" size="sm" onClick={clearFilters} className="w-full">
                          Clear All Filters
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                )}

                {/* Properties Grid */}
                {paginatedProperties.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {paginatedProperties.map((property) => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>
                ) : (
                  <Card className="py-12">
                    <CardContent className="text-center">
                      <p className="text-muted-foreground mb-4">No properties found matching your criteria</p>
                      <Button onClick={clearFilters}>Clear Filters</Button>
                    </CardContent>
                  </Card>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-8">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>
                    {[...Array(totalPages)].map((_, i) => (
                      <Button
                        key={i + 1}
                        variant={currentPage === i + 1 ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(i + 1)}
                        className="w-10"
                      >
                        {i + 1}
                      </Button>
                    ))}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}
