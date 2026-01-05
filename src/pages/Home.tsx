import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import CompareBar from '@/components/CompareBar';
import { categories, getFeaturedProducts, getBestSellers, getProductsByCategory } from '@/data/products';

const Home = () => {
  const featuredProducts = getFeaturedProducts();
  const bestSellers = getBestSellers();

  return (
    <>
      <Helmet>
        <title>D Mobiles & Home Appliances - Best Electronics Store in India</title>
        <meta
          name="description"
          content="Shop the latest mobiles, tablets, refrigerators, washing machines, and air conditioners at the best prices. Free delivery, easy EMI, and genuine warranty."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
          {/* Hero Slider */}
          <HeroSlider />

          {/* Shop by Category */}
          <section className="py-10 md:py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Shop by Category
                </h2>
                <p className="text-muted-foreground">
                  Explore our wide range of products
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {categories.map((category) => (
                  <CategoryCard
                    key={category.id}
                    id={category.id}
                    name={category.name}
                    icon={category.icon}
                    image={category.image}
                    productCount={getProductsByCategory(category.id).length}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Featured Products */}
          <section className="py-10 md:py-16 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                    Featured Products
                  </h2>
                  <p className="text-muted-foreground">Top-rated items you'll love</p>
                </div>
                <Link
                  to="/category/all"
                  className="text-primary font-medium hover:underline hidden md:block"
                >
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="text-center mt-8 md:hidden">
                <Link
                  to="/category/all"
                  className="text-primary font-medium hover:underline"
                >
                  View All Products →
                </Link>
              </div>
            </div>
          </section>

          {/* Promotional Banner */}
          <section className="py-10 md:py-16">
            <div className="container mx-auto px-4">
              <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-primary-foreground overflow-hidden relative">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground rounded-full translate-y-1/2 -translate-x-1/2" />
                </div>
                <div className="relative z-10 max-w-xl">
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full mb-4">
                    Limited Time Offer
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    No Cost EMI Available
                  </h2>
                  <p className="text-lg opacity-90 mb-6">
                    Shop now and pay in easy monthly installments with 0% interest.
                    Available on orders above ₹10,000.
                  </p>
                  <Link
                    to="/category/all"
                    className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Shop Now →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Best Sellers */}
          <section className="py-10 md:py-16 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                    Best Sellers
                  </h2>
                  <p className="text-muted-foreground">Most popular products</p>
                </div>
                <Link
                  to="/category/all"
                  className="text-primary font-medium hover:underline hidden md:block"
                >
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {bestSellers.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-10 md:py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Why Choose D Mobiles?
                </h2>
                <p className="text-muted-foreground">
                  Your satisfaction is our priority
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card rounded-xl p-6 text-center border border-border hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl">💯</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    100% Genuine Products
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    All products come with manufacturer warranty and are sourced directly from authorized distributors.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 text-center border border-border hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Best Price Guarantee
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We offer competitive prices and match any lower price you find elsewhere.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 text-center border border-border hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-4 bg-success/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Expert Support
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Our trained team is ready to help you choose the right product and provide after-sales support.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <CompareBar />
      </div>
    </>
  );
};

export default Home;
