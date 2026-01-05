import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CompareTable from '@/components/CompareTable';
import CompareBar from '@/components/CompareBar';
import { useCompare } from '@/context/CompareContext';

const Compare = () => {
  const { compareItems } = useCompare();

  return (
    <>
      <Helmet>
        <title>Compare Products - D Mobiles & Home Appliances</title>
        <meta
          name="description"
          content="Compare product specifications side by side to make the best buying decision."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1 py-6">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Compare Products
              </h1>
              <p className="text-muted-foreground">
                {compareItems.length > 0
                  ? `Comparing ${compareItems.length} product${compareItems.length > 1 ? 's' : ''}`
                  : 'Add products to compare their specifications side by side'}
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <CompareTable />
            </div>
          </div>
        </main>

        <Footer />
        <CompareBar />
      </div>
    </>
  );
};

export default Compare;
