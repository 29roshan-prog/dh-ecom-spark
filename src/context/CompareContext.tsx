import React, { createContext, useContext, useState, useCallback } from 'react';
import { Product } from '@/data/products';
import { useToast } from '@/hooks/use-toast';

interface CompareContextType {
  compareItems: Product[];
  addToCompare: (product: Product) => boolean;
  removeFromCompare: (productId: number) => void;
  clearCompare: () => void;
  isInCompare: (productId: number) => boolean;
  canAddMore: () => boolean;
}

const MAX_COMPARE_ITEMS = 3;

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [compareItems, setCompareItems] = useState<Product[]>([]);
  const { toast } = useToast();

  const canAddMore = useCallback(() => {
    return compareItems.length < MAX_COMPARE_ITEMS;
  }, [compareItems.length]);

  const addToCompare = useCallback((product: Product): boolean => {
    if (compareItems.some(item => item.id === product.id)) {
      toast({
        title: "Already in comparison",
        description: `${product.name} is already selected for comparison`,
        variant: "destructive",
      });
      return false;
    }

    if (!canAddMore()) {
      toast({
        title: "Comparison limit reached",
        description: "You can compare up to 3 products at a time. Remove one to add another.",
        variant: "destructive",
      });
      return false;
    }

    setCompareItems(prev => [...prev, product]);
    toast({
      title: "Added to comparison",
      description: `${product.name} added. ${MAX_COMPARE_ITEMS - compareItems.length - 1} slots remaining.`,
    });
    return true;
  }, [compareItems, canAddMore, toast]);

  const removeFromCompare = useCallback((productId: number) => {
    setCompareItems(prev => {
      const item = prev.find(p => p.id === productId);
      if (item) {
        toast({
          title: "Removed from comparison",
          description: `${item.name} removed from comparison`,
        });
      }
      return prev.filter(p => p.id !== productId);
    });
  }, [toast]);

  const clearCompare = useCallback(() => {
    setCompareItems([]);
    toast({
      title: "Comparison cleared",
      description: "All products removed from comparison",
    });
  }, [toast]);

  const isInCompare = useCallback((productId: number) => {
    return compareItems.some(item => item.id === productId);
  }, [compareItems]);

  return (
    <CompareContext.Provider
      value={{
        compareItems,
        addToCompare,
        removeFromCompare,
        clearCompare,
        isInCompare,
        canAddMore,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
};
