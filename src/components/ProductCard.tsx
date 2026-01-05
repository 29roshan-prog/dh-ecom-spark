import { Link } from 'react-router-dom';
import { ShoppingCart, Star, GitCompare, Check } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useCompare } from '@/context/CompareContext';
import { Product } from '@/data/products';
import { Checkbox } from '@/components/ui/checkbox';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, isInCart } = useCart();
  const { addToCompare, removeFromCompare, isInCompare } = useCompare();
  const inCompare = isInCompare(product.id);
  const inCart = isInCart(product.id);

  const handleCompareToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inCompare) {
      removeFromCompare(product.id);
    } else {
      addToCompare(product);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
      {/* Discount Badge */}
      {product.discount > 0 && (
        <div className="absolute top-2 left-2 z-10 bg-sale text-sale-foreground text-xs font-bold px-2 py-1 rounded">
          {product.discount}% OFF
        </div>
      )}

      {/* Compare Checkbox */}
      <div
        className="absolute top-2 right-2 z-10 flex items-center gap-1 bg-card/90 backdrop-blur-sm rounded px-2 py-1 cursor-pointer"
        onClick={handleCompareToggle}
      >
        <Checkbox
          checked={inCompare}
          className={inCompare ? 'border-primary bg-primary' : ''}
        />
        <span className="text-xs font-medium">Compare</span>
      </div>

      <Link to={`/product/${product.id}`}>
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
              <span className="bg-card text-foreground px-4 py-2 rounded font-semibold">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Brand */}
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            {product.brand}
          </p>

          {/* Name */}
          <h3 className="font-semibold text-foreground line-clamp-2 min-h-[2.5rem] mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <div className="flex items-center gap-0.5 bg-success text-success-foreground text-xs px-1.5 py-0.5 rounded">
              <span>{product.rating}</span>
              <Star className="h-3 w-3 fill-current" />
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviews.toLocaleString()})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-lg font-bold text-foreground">
              {formatPrice(product.price)}
            </span>
            {product.mrp > product.price && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.mrp)}
              </span>
            )}
          </div>

          {/* EMI */}
          {product.emi && (
            <p className="text-xs text-success font-medium mb-3">
              EMI from {product.emi}
            </p>
          )}

          {/* Features */}
          <div className="flex flex-wrap gap-1 mb-3">
            {product.features.slice(0, 2).map((feature, index) => (
              <span
                key={index}
                className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <div className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          {inCart ? (
            <>
              <Check className="h-4 w-4 mr-2" />
              Added to Cart
            </>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </>
          )}
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
