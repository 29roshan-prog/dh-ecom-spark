import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-auto">
      {/* Trust Badges */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">🚚</span>
              <span className="text-sm font-medium">Free Delivery</span>
              <span className="text-xs text-background/70">On orders above ₹999</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">🔒</span>
              <span className="text-sm font-medium">Secure Payment</span>
              <span className="text-xs text-background/70">100% Protected</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">↩️</span>
              <span className="text-sm font-medium">Easy Returns</span>
              <span className="text-xs text-background/70">7 Day Return Policy</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">🛡️</span>
              <span className="text-sm font-medium">Warranty</span>
              <span className="text-xs text-background/70">Genuine Products</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              D Mobiles <span className="text-accent">& Home Appliances</span>
            </h3>
            <p className="text-background/70 text-sm mb-4">
              Your trusted destination for the latest mobiles and home appliances at the best prices.
              Quality products, genuine warranty, and excellent customer service.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-background/70 hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/category/mobiles" className="text-background/70 hover:text-background transition-colors">
                  Mobiles & Tablets
                </Link>
              </li>
              <li>
                <Link to="/category/appliances" className="text-background/70 hover:text-background transition-colors">
                  Home Appliances
                </Link>
              </li>
              <li>
                <Link to="/compare" className="text-background/70 hover:text-background transition-colors">
                  Compare Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-background/70 hover:text-background transition-colors">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Track Your Order
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Warranty Information
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-1 text-accent" />
                <div>
                  <p className="text-background/70">Toll Free</p>
                  <p className="font-medium">1800-123-4567</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-1 text-accent" />
                <div>
                  <p className="text-background/70">Email</p>
                  <p className="font-medium">support@dmobiles.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-accent" />
                <div>
                  <p className="text-background/70">Store Location</p>
                  <p className="font-medium">Mumbai, Maharashtra, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <p>© 2024 D Mobiles & Home Appliances. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-background transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
