import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const menuItems = [
  {
    title: 'Mobiles & Tablets',
    icon: '📱',
    category: 'mobiles',
    subcategories: [
      { name: 'Smartphones', slug: 'smartphones' },
      { name: 'Tablets', slug: 'tablets' },
    ],
    brands: ['Samsung', 'Apple', 'OnePlus', 'Xiaomi', 'Vivo', 'Realme'],
  },
  {
    title: 'Home Appliances',
    icon: '🏠',
    category: 'appliances',
    subcategories: [
      { name: 'Refrigerators', slug: 'refrigerators' },
      { name: 'Washing Machines', slug: 'washing-machines' },
      { name: 'Air Conditioners', slug: 'air-conditioners' },
    ],
    brands: ['LG', 'Samsung', 'Whirlpool', 'Haier', 'Voltas', 'Daikin'],
  },
];

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="container mx-auto px-4">
      <ul className="flex items-center gap-1">
        <li>
          <Link
            to="/"
            className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary transition-colors inline-block"
          >
            Home
          </Link>
        </li>
        {menuItems.map((item) => (
          <li
            key={item.category}
            className="relative"
            onMouseEnter={() => setActiveMenu(item.category)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link
              to={`/category/${item.category}`}
              className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
              <ChevronDown className="h-4 w-4" />
            </Link>

            {/* Mega Menu Dropdown */}
            {activeMenu === item.category && (
              <div className="absolute top-full left-0 w-[500px] bg-card shadow-xl rounded-lg border border-border p-6 animate-fade-in z-50">
                <div className="grid grid-cols-2 gap-8">
                  {/* Categories */}
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Categories
                    </h3>
                    <ul className="space-y-2">
                      {item.subcategories.map((sub) => (
                        <li key={sub.slug}>
                          <Link
                            to={`/category/${item.category}?sub=${sub.slug}`}
                            className="text-foreground hover:text-primary transition-colors block py-1"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link
                          to={`/category/${item.category}`}
                          className="text-primary font-medium hover:underline block py-1"
                        >
                          View All →
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Brands */}
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Top Brands
                    </h3>
                    <ul className="space-y-2">
                      {item.brands.map((brand) => (
                        <li key={brand}>
                          <Link
                            to={`/category/${item.category}?brand=${brand}`}
                            className="text-foreground hover:text-primary transition-colors block py-1"
                          >
                            {brand}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Promo Banner */}
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="bg-gradient-accent rounded-lg p-4 text-accent-foreground">
                    <p className="font-semibold">🔥 Special Offer!</p>
                    <p className="text-sm opacity-90">Up to 30% off on {item.title}</p>
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
        <li>
          <Link
            to="/compare"
            className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
          >
            <span>🔄</span>
            <span>Compare</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MegaMenu;
