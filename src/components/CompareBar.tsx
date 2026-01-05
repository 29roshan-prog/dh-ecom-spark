import { Link } from 'react-router-dom';
import { X, GitCompare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCompare } from '@/context/CompareContext';

const CompareBar = () => {
  const { compareItems, removeFromCompare, clearCompare } = useCompare();

  if (compareItems.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-xl z-50 animate-slide-up">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Product thumbnails */}
          <div className="flex items-center gap-3 overflow-x-auto">
            <div className="flex items-center gap-1 text-primary font-medium flex-shrink-0">
              <GitCompare className="h-4 w-4" />
              <span className="text-sm">Compare ({compareItems.length}/3)</span>
            </div>
            
            {compareItems.map((product) => (
              <div
                key={product.id}
                className="relative flex-shrink-0 group"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded-lg border border-border"
                />
                <button
                  onClick={() => removeFromCompare(product.id)}
                  className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label={`Remove ${product.name} from comparison`}
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}

            {/* Empty slots */}
            {Array.from({ length: 3 - compareItems.length }).map((_, i) => (
              <div
                key={`empty-${i}`}
                className="w-12 h-12 rounded-lg border-2 border-dashed border-border flex items-center justify-center flex-shrink-0"
              >
                <span className="text-xs text-muted-foreground">+</span>
              </div>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={clearCompare}
              className="text-muted-foreground"
            >
              Clear All
            </Button>
            <Link to="/compare">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90"
                disabled={compareItems.length < 2}
              >
                Compare Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareBar;
