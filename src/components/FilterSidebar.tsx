import { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';

interface FilterSidebarProps {
  category: string;
  brands: string[];
  selectedBrands: string[];
  onBrandChange: (brands: string[]) => void;
  priceRange: [number, number];
  maxPrice: number;
  onPriceChange: (range: [number, number]) => void;
  selectedRating: number | null;
  onRatingChange: (rating: number | null) => void;
  onClearAll: () => void;
  isMobile?: boolean;
  onClose?: () => void;
}

const FilterSidebar = ({
  category,
  brands,
  selectedBrands,
  onBrandChange,
  priceRange,
  maxPrice,
  onPriceChange,
  selectedRating,
  onRatingChange,
  onClearAll,
  isMobile = false,
  onClose,
}: FilterSidebarProps) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    price: true,
    brand: true,
    rating: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleBrandToggle = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      onBrandChange(selectedBrands.filter(b => b !== brand));
    } else {
      onBrandChange([...selectedBrands, brand]);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const ratings = [4, 3, 2, 1];

  const hasActiveFilters = selectedBrands.length > 0 || selectedRating !== null || priceRange[0] > 0 || priceRange[1] < maxPrice;

  return (
    <aside className={`bg-card rounded-lg border border-border ${isMobile ? 'p-4' : 'p-5'}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">Filters</h2>
        <div className="flex items-center gap-2">
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={onClearAll} className="text-primary">
              Clear All
            </Button>
          )}
          {isMobile && onClose && (
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>

      {/* Price Range */}
      <div className="border-t border-border pt-4">
        <button
          className="flex items-center justify-between w-full text-left mb-3"
          onClick={() => toggleSection('price')}
        >
          <span className="font-medium text-foreground">Price Range</span>
          {expandedSections.price ? (
            <ChevronUp className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
        {expandedSections.price && (
          <div className="space-y-4">
            <Slider
              value={priceRange}
              min={0}
              max={maxPrice}
              step={1000}
              onValueChange={(value) => onPriceChange(value as [number, number])}
              className="mt-2"
            />
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{formatPrice(priceRange[0])}</span>
              <span>{formatPrice(priceRange[1])}</span>
            </div>
          </div>
        )}
      </div>

      {/* Brands */}
      <div className="border-t border-border pt-4 mt-4">
        <button
          className="flex items-center justify-between w-full text-left mb-3"
          onClick={() => toggleSection('brand')}
        >
          <span className="font-medium text-foreground">Brand</span>
          {expandedSections.brand ? (
            <ChevronUp className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
        {expandedSections.brand && (
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {brands.map((brand) => (
              <label
                key={brand}
                className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors"
              >
                <Checkbox
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={() => handleBrandToggle(brand)}
                />
                <span className="text-sm text-foreground">{brand}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rating */}
      <div className="border-t border-border pt-4 mt-4">
        <button
          className="flex items-center justify-between w-full text-left mb-3"
          onClick={() => toggleSection('rating')}
        >
          <span className="font-medium text-foreground">Customer Rating</span>
          {expandedSections.rating ? (
            <ChevronUp className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
        {expandedSections.rating && (
          <div className="space-y-2">
            {ratings.map((rating) => (
              <label
                key={rating}
                className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors"
              >
                <Checkbox
                  checked={selectedRating === rating}
                  onCheckedChange={() => onRatingChange(selectedRating === rating ? null : rating)}
                />
                <span className="text-sm text-foreground flex items-center gap-1">
                  {rating}★ & above
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
};

export default FilterSidebar;
