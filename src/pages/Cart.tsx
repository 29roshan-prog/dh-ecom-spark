import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartItem from '@/components/CartItem';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { items, getCartTotal, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const subtotal = getCartTotal();
  const savings = items.reduce(
    (total, item) => total + (item.product.mrp - item.product.price) * item.quantity,
    0
  );
  const deliveryFee = subtotal >= 999 ? 0 : 99;
  const total = subtotal + deliveryFee;

  return (
    <>
      <Helmet>
        <title>Shopping Cart - D Mobiles & Home Appliances</title>
        <meta
          name="description"
          content="Review your shopping cart and proceed to checkout."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1 py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Shopping Cart
            </h1>

            {items.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-muted-foreground">
                      {items.length} item{items.length > 1 ? 's' : ''} in cart
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:text-destructive"
                      onClick={clearCart}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Clear Cart
                    </Button>
                  </div>
                  {items.map((item) => (
                    <CartItem
                      key={item.product.id}
                      product={item.product}
                      quantity={item.quantity}
                    />
                  ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-card rounded-lg border border-border p-6 sticky top-24">
                    <h2 className="text-lg font-semibold text-foreground mb-4">
                      Order Summary
                    </h2>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-foreground">
                        <span>Subtotal</span>
                        <span>{formatPrice(subtotal)}</span>
                      </div>
                      {savings > 0 && (
                        <div className="flex justify-between text-success">
                          <span>You Save</span>
                          <span>-{formatPrice(savings)}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-foreground">
                        <span>Delivery</span>
                        <span>
                          {deliveryFee === 0 ? (
                            <span className="text-success">FREE</span>
                          ) : (
                            formatPrice(deliveryFee)
                          )}
                        </span>
                      </div>
                      {deliveryFee > 0 && (
                        <p className="text-xs text-muted-foreground">
                          Add {formatPrice(999 - subtotal)} more for free delivery
                        </p>
                      )}
                    </div>

                    <div className="border-t border-border pt-4 mb-6">
                      <div className="flex justify-between text-lg font-bold text-foreground">
                        <span>Total</span>
                        <span>{formatPrice(total)}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Inclusive of all taxes
                      </p>
                    </div>

                    <Button
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      size="lg"
                    >
                      Proceed to Checkout
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>

                    <div className="mt-4 text-center">
                      <Link
                        to="/"
                        className="text-sm text-primary hover:underline"
                      >
                        Continue Shopping
                      </Link>
                    </div>

                    {/* Trust */}
                    <div className="mt-6 pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                        <span>🔒</span>
                        <span>Secure checkout with SSL encryption</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>💳</span>
                        <span>We accept all major payment methods</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-secondary rounded-full flex items-center justify-center">
                  <ShoppingBag className="h-12 w-12 text-muted-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Your cart is empty
                </h2>
                <p className="text-muted-foreground mb-6">
                  Looks like you haven't added anything to your cart yet.
                </p>
                <Link to="/">
                  <Button className="bg-primary hover:bg-primary/90">
                    Start Shopping
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Cart;
