import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ShoppingCart,
  Star,
  Truck,
  Shield,
  RotateCcw,
  GitCompare,
  Check,
  Minus,
  Plus,
  ChevronRight,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGallery from '@/components/ProductGallery';
import ProductCard from '@/components/ProductCard';
import CompareBar from '@/components/CompareBar';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useCompare } from '@/context/CompareContext';
import { getProductById, products } from '@/data/products';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart, isInCart } = useCart();
  const { addToCompare, isInCompare, removeFromCompare } = useCompare();

  const product = getProductById(Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Product not found</h1>
            <Link to="/">
              <Button>Go to Home</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const inCart = isInCart(product.id);
  const inCompare = isInCompare(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  const handleCompareToggle = () => {
    if (inCompare) {
      removeFromCompare(product.id);
    } else {
      addToCompare(product);
    }
  };

  // Get related products
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <Helmet>
        <title>{product.name} - D Mobiles & Home Appliances</title>
        <meta
          name="description"
          content={`Buy ${product.name} at best price. ${product.features.join(', ')}. Free delivery and genuine warranty.`}
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1 py-6">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-6 overflow-x-auto">
              <Link to="/" className="text-muted-foreground hover:text-primary">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <Link
                to={`/category/${product.category}`}
                className="text-muted-foreground hover:text-primary"
              >
                {product.category === 'mobiles' ? 'Mobiles & Tablets' : 'Home Appliances'}
              </Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <span className="text-foreground truncate">{product.name}</span>
            </nav>

            {/* Product Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Gallery */}
              <ProductGallery images={product.images} productName={product.name} />

              {/* Product Info */}
              <div>
                {/* Brand */}
                <p className="text-sm text-primary font-medium uppercase tracking-wider mb-2">
                  {product.brand}
                </p>

                {/* Name */}
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1 bg-success text-success-foreground text-sm px-2 py-1 rounded">
                    <span className="font-medium">{product.rating}</span>
                    <Star className="h-3.5 w-3.5 fill-current" />
                  </div>
                  <span className="text-muted-foreground">
                    {product.reviews.toLocaleString()} Reviews
                  </span>
                </div>

                {/* Price */}
                <div className="bg-secondary rounded-lg p-4 mb-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-3xl font-bold text-foreground">
                      {formatPrice(product.price)}
                    </span>
                    {product.mrp > product.price && (
                      <>
                        <span className="text-lg text-muted-foreground line-through">
                          {formatPrice(product.mrp)}
                        </span>
                        <span className="text-lg text-success font-semibold">
                          {product.discount}% off
                        </span>
                      </>
                    )}
                  </div>
                  {product.emi && (
                    <p className="text-sm text-muted-foreground">
                      EMI available from{' '}
                      <span className="text-success font-medium">{product.emi}</span>
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="font-semibold text-foreground mb-3">Highlights</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-medium text-foreground">Quantity:</span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-10 text-center font-medium">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <Button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                    size="lg"
                  >
                    {inCart ? (
                      <>
                        <Check className="h-5 w-5 mr-2" />
                        Added to Cart
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        Add to Cart
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={handleBuyNow}
                    disabled={!product.inStock}
                    variant="default"
                    className="flex-1"
                    size="lg"
                  >
                    Buy Now
                  </Button>
                </div>

                {/* Compare Button */}
                <Button
                  variant="outline"
                  onClick={handleCompareToggle}
                  className={inCompare ? 'border-primary text-primary' : ''}
                >
                  <GitCompare className="h-4 w-4 mr-2" />
                  {inCompare ? 'Remove from Compare' : 'Add to Compare'}
                </Button>

                {/* Stock Status */}
                {!product.inStock && (
                  <p className="text-destructive font-medium mt-4">
                    Currently out of stock
                  </p>
                )}

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
                  <div className="text-center">
                    <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <p className="text-xs text-muted-foreground">Free Delivery</p>
                  </div>
                  <div className="text-center">
                    <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <p className="text-xs text-muted-foreground">Genuine Warranty</p>
                  </div>
                  <div className="text-center">
                    <RotateCcw className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <p className="text-xs text-muted-foreground">Easy Returns</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <section className="mb-12">
              <h2 className="text-xl font-bold text-foreground mb-4">Specifications</h2>
              <div className="bg-card rounded-lg border border-border overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.specs).map(([key, value], index) => (
                      <tr
                        key={key}
                        className={index % 2 === 0 ? 'bg-secondary/50' : 'bg-card'}
                      >
                        <td className="px-4 py-3 font-medium text-foreground w-1/3">
                          {key}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Related Products
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {relatedProducts.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </main>

        <Footer />
        <CompareBar />
      </div>
    </>
  );
};

export default ProductDetail;
