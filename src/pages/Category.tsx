import { useState, useMemo, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Filter, X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import FilterSidebar from '@/components/FilterSidebar';
import CompareBar from '@/components/CompareBar';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { products, getProductsByCategory, brands as allBrands } from '@/data/products';

const Category = () => {
  const { name } = useParams<{ name: string }>();
  const [searchParams] = useSearchParams();
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [sortBy, setSortBy] = useState('popularity');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  // Get filter params from URL
  const urlBrand = searchParams.get('brand');
  const urlSub = searchParams.get('sub');
  const searchQuery = searchParams.get('search');

  useEffect(() => {
    if (urlBrand) {
      setSelectedBrands([urlBrand]);
    }
  }, [urlBrand]);

  // Get base products
  const baseProducts = useMemo(() => {
    if (name === 'all') return products;
    if (name) return getProductsByCategory(name);
    return products;
  }, [name]);

  // Get available brands for this category
  const availableBrands = useMemo(() => {
    const brandsInCategory = new Set(baseProducts.map((p) => p.brand));
    return allBrands.filter((b) => brandsInCategory.has(b));
  }, [baseProducts]);

  // Get max price for this category
  const maxPrice = useMemo(() => {
    return Math.max(...baseProducts.map((p) => p.price), 200000);
  }, [baseProducts]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...baseProducts];

    // Filter by subcategory
    if (urlSub) {
      result = result.filter((p) => p.subcategory === urlSub);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    // Filter by brand
    if (selectedBrands.length > 0) {
      result = result.filter((p) => selectedBrands.includes(p.brand));
    }

    // Filter by price
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Filter by rating
    if (selectedRating) {
      result = result.filter((p) => p.rating >= selectedRating);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'discount':
        result.sort((a, b) => b.discount - a.discount);
        break;
      case 'popularity':
      default:
        result.sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return result;
  }, [baseProducts, urlSub, searchQuery, selectedBrands, priceRange, selectedRating, sortBy]);

  const getCategoryTitle = () => {
    if (searchQuery) return `Search: "${searchQuery}"`;
    if (name === 'mobiles') return 'Mobiles & Tablets';
    if (name === 'appliances') return 'Home Appliances';
    if (name === 'all') return 'All Products';
    return 'Products';
  };

  const clearAllFilters = () => {
    setSelectedBrands([]);
    setPriceRange([0, maxPrice]);
    setSelectedRating(null);
  };

  return (
    <>
      <Helmet>
        <title>{getCategoryTitle()} - D Mobiles & Home Appliances</title>
        <meta
          name="description"
          content={`Shop ${getCategoryTitle()} at best prices. Free delivery, easy EMI, and genuine warranty.`}
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1 py-6">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {getCategoryTitle()}
              </h1>
              <p className="text-muted-foreground">
                {filteredProducts.length} products found
              </p>
            </div>

            <div className="flex gap-6">
              {/* Desktop Filters */}
              <div className="hidden lg:block w-64 flex-shrink-0">
                <FilterSidebar
                  category={name || 'all'}
                  brands={availableBrands}
                  selectedBrands={selectedBrands}
                  onBrandChange={setSelectedBrands}
                  priceRange={priceRange}
                  maxPrice={maxPrice}
                  onPriceChange={setPriceRange}
                  selectedRating={selectedRating}
                  onRatingChange={setSelectedRating}
                  onClearAll={clearAllFilters}
                />
              </div>

              {/* Products Grid */}
              <div className="flex-1">
                {/* Sort and Filter Bar */}
                <div className="flex items-center justify-between mb-6 gap-4">
                  <Button
                    variant="outline"
                    className="lg:hidden"
                    onClick={() => setShowMobileFilters(true)}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>

                  <div className="flex items-center gap-2 ml-auto">
                    <span className="text-sm text-muted-foreground hidden sm:inline">
                      Sort by:
                    </span>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-[160px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="popularity">Popularity</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="rating">Rating</SelectItem>
                        <SelectItem value="discount">Discount</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Active Filters */}
                {(selectedBrands.length > 0 || selectedRating) && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedBrands.map((brand) => (
                      <span
                        key={brand}
                        className="inline-flex items-center gap-1 bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
                      >
                        {brand}
                        <button
                          onClick={() =>
                            setSelectedBrands(selectedBrands.filter((b) => b !== brand))
                          }
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                    {selectedRating && (
                      <span className="inline-flex items-center gap-1 bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                        {selectedRating}★ & above
                        <button onClick={() => setSelectedRating(null)}>
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    )}
                  </div>
                )}

                {/* Products */}
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="text-6xl mb-4">🔍</div>
                    <h2 className="text-xl font-semibold text-foreground mb-2">
                      No products found
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your filters to find what you're looking for.
                    </p>
                    <Button onClick={clearAllFilters}>Clear All Filters</Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <CompareBar />

        {/* Mobile Filters Overlay */}
        {showMobileFilters && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-foreground/50"
              onClick={() => setShowMobileFilters(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-background overflow-y-auto animate-slide-in-right">
              <FilterSidebar
                category={name || 'all'}
                brands={availableBrands}
                selectedBrands={selectedBrands}
                onBrandChange={setSelectedBrands}
                priceRange={priceRange}
                maxPrice={maxPrice}
                onPriceChange={setPriceRange}
                selectedRating={selectedRating}
                onRatingChange={setSelectedRating}
                onClearAll={clearAllFilters}
                isMobile
                onClose={() => setShowMobileFilters(false)}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Category;
