import { Link } from 'react-router-dom';
import { X, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCompare } from '@/context/CompareContext';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';

const CompareTable = () => {
  const { compareItems, removeFromCompare } = useCompare();
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Get all unique spec keys from all products
  const getAllSpecKeys = () => {
    const keys = new Set<string>();
    compareItems.forEach((product) => {
      Object.keys(product.specs).forEach((key) => keys.add(key));
    });
    return Array.from(keys);
  };

  const specKeys = getAllSpecKeys();

  // Find the best value for numeric specs
  const findBestValue = (key: string): string | null => {
    const values = compareItems.map((p) => p.specs[key]).filter(Boolean);
    if (values.length === 0) return null;

    // For specific keys, determine best value
    const numericValues = values.map((v) => {
      const match = v.match(/[\d.]+/);
      return match ? parseFloat(match[0]) : null;
    });

    const validNumeric = numericValues.filter((v) => v !== null) as number[];
    if (validNumeric.length === 0) return null;

    // Higher is better for most specs
    const highIsBetter = ['RAM', 'Storage', 'Battery', 'Capacity', 'RPM'];
    // Lower is better for some
    const lowIsBetter: string[] = [];

    if (highIsBetter.some((h) => key.includes(h))) {
      const max = Math.max(...validNumeric);
      const idx = numericValues.indexOf(max);
      return values[idx];
    }
    if (lowIsBetter.some((l) => key.includes(l))) {
      const min = Math.min(...validNumeric);
      const idx = numericValues.indexOf(min);
      return values[idx];
    }

    return null;
  };

  if (compareItems.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🔄</div>
        <h2 className="text-2xl font-bold text-foreground mb-2">No products to compare</h2>
        <p className="text-muted-foreground mb-6">
          Add products to compare their specifications side by side
        </p>
        <Link to="/category/all">
          <Button className="bg-primary hover:bg-primary/90">
            Browse Products
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px]">
        <thead>
          <tr>
            <th className="text-left p-4 bg-secondary font-semibold text-foreground w-40">
              Product
            </th>
            {compareItems.map((product) => (
              <th key={product.id} className="p-4 bg-secondary relative">
                <button
                  onClick={() => removeFromCompare(product.id)}
                  className="absolute top-2 right-2 p-1 bg-card rounded-full hover:bg-destructive hover:text-destructive-foreground transition-colors"
                  aria-label={`Remove ${product.name}`}
                >
                  <X className="h-4 w-4" />
                </button>
                <Link to={`/product/${product.id}`} className="block">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-32 h-32 object-contain mx-auto mb-2 bg-card rounded-lg"
                  />
                  <h3 className="font-semibold text-foreground text-sm line-clamp-2 hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
              </th>
            ))}
            {/* Empty slots */}
            {Array.from({ length: 3 - compareItems.length }).map((_, i) => (
              <th key={`empty-${i}`} className="p-4 bg-secondary">
                <Link to="/category/all">
                  <div className="w-32 h-32 mx-auto mb-2 border-2 border-dashed border-border rounded-lg flex items-center justify-center hover:border-primary transition-colors">
                    <span className="text-muted-foreground text-sm">+ Add Product</span>
                  </div>
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Price Row */}
          <tr className="border-b border-border">
            <td className="p-4 font-medium text-foreground">Price</td>
            {compareItems.map((product) => {
              const lowestPrice = Math.min(...compareItems.map((p) => p.price));
              const isBest = product.price === lowestPrice && compareItems.length > 1;
              return (
                <td
                  key={product.id}
                  className={`p-4 text-center ${isBest ? 'bg-success/10' : ''}`}
                >
                  <span className="text-lg font-bold text-foreground">
                    {formatPrice(product.price)}
                  </span>
                  {product.mrp > product.price && (
                    <div className="text-sm text-muted-foreground line-through">
                      {formatPrice(product.mrp)}
                    </div>
                  )}
                  {isBest && (
                    <span className="text-xs text-success font-medium">Best Price</span>
                  )}
                </td>
              );
            })}
            {Array.from({ length: 3 - compareItems.length }).map((_, i) => (
              <td key={`empty-${i}`} className="p-4 text-center text-muted-foreground">
                -
              </td>
            ))}
          </tr>

          {/* Brand Row */}
          <tr className="border-b border-border">
            <td className="p-4 font-medium text-foreground">Brand</td>
            {compareItems.map((product) => (
              <td key={product.id} className="p-4 text-center text-foreground">
                {product.brand}
              </td>
            ))}
            {Array.from({ length: 3 - compareItems.length }).map((_, i) => (
              <td key={`empty-${i}`} className="p-4 text-center text-muted-foreground">
                -
              </td>
            ))}
          </tr>

          {/* Rating Row */}
          <tr className="border-b border-border">
            <td className="p-4 font-medium text-foreground">Rating</td>
            {compareItems.map((product) => {
              const highestRating = Math.max(...compareItems.map((p) => p.rating));
              const isBest = product.rating === highestRating && compareItems.length > 1;
              return (
                <td
                  key={product.id}
                  className={`p-4 text-center ${isBest ? 'bg-success/10' : ''}`}
                >
                  <div className="flex items-center justify-center gap-1">
                    <span className="font-medium text-foreground">{product.rating}</span>
                    <Star className="h-4 w-4 fill-rating text-rating" />
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({product.reviews.toLocaleString()} reviews)
                  </span>
                </td>
              );
            })}
            {Array.from({ length: 3 - compareItems.length }).map((_, i) => (
              <td key={`empty-${i}`} className="p-4 text-center text-muted-foreground">
                -
              </td>
            ))}
          </tr>

          {/* Spec Rows */}
          {specKeys.map((key) => {
            const bestValue = findBestValue(key);
            return (
              <tr key={key} className="border-b border-border">
                <td className="p-4 font-medium text-foreground">{key}</td>
                {compareItems.map((product) => {
                  const value = product.specs[key];
                  const isBest = value && value === bestValue && compareItems.length > 1;
                  return (
                    <td
                      key={product.id}
                      className={`p-4 text-center ${isBest ? 'bg-success/10 font-medium' : ''}`}
                    >
                      <span className="text-foreground">{value || '-'}</span>
                    </td>
                  );
                })}
                {Array.from({ length: 3 - compareItems.length }).map((_, i) => (
                  <td key={`empty-${i}`} className="p-4 text-center text-muted-foreground">
                    -
                  </td>
                ))}
              </tr>
            );
          })}

          {/* Add to Cart Row */}
          <tr>
            <td className="p-4"></td>
            {compareItems.map((product) => (
              <td key={product.id} className="p-4 text-center">
                <Button
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock}
                  className="w-full max-w-[200px] bg-accent hover:bg-accent/90"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </td>
            ))}
            {Array.from({ length: 3 - compareItems.length }).map((_, i) => (
              <td key={`empty-${i}`} className="p-4"></td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompareTable;
