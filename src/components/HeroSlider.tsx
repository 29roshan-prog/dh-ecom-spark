import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    id: 1,
    title: 'New Year Sale',
    subtitle: 'Up to 40% Off on Smartphones',
    description: 'Latest models from Samsung, Apple & OnePlus',
    cta: 'Shop Now',
    link: '/category/mobiles',
    bgGradient: 'from-primary to-primary/80',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
  },
  {
    id: 2,
    title: 'Home Appliance Fest',
    subtitle: 'Premium Appliances at Best Prices',
    description: 'Refrigerators, ACs & Washing Machines',
    cta: 'Explore Deals',
    link: '/category/appliances',
    bgGradient: 'from-accent to-accent/80',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
  },
  {
    id: 3,
    title: 'Easy EMI Options',
    subtitle: 'No Cost EMI Available',
    description: 'On orders above ₹10,000',
    cta: 'Learn More',
    link: '/category/all',
    bgGradient: 'from-success to-success/80',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[300px] md:h-[450px] lg:h-[500px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Background */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`}>
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 h-full flex items-center relative z-10">
              <div className="max-w-xl text-primary-foreground">
                <span className="inline-block px-3 py-1 bg-primary-foreground/20 rounded-full text-sm mb-4">
                  {slide.title}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                  {slide.subtitle}
                </h2>
                <p className="text-lg md:text-xl opacity-90 mb-6">
                  {slide.description}
                </p>
                <Link to={slide.link}>
                  <Button size="lg" variant="secondary" className="font-semibold">
                    {slide.cta} →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-card text-foreground p-2 rounded-full shadow-lg transition-all z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-card text-foreground p-2 rounded-full shadow-lg transition-all z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-primary-foreground w-8'
                : 'bg-primary-foreground/50 hover:bg-primary-foreground/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
