import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';

interface CategoryCardProps {
  id: string;
  name: string;
  icon: string;
  image: string;
  productCount?: number;
}

const CategoryCard = ({ id, name, icon, image, productCount }: CategoryCardProps) => {
  return (
    <Link to={`/category/${id}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-card">
            <span className="text-3xl mb-2 block">{icon}</span>
            <h3 className="text-lg font-semibold">{name}</h3>
            {productCount !== undefined && (
              <p className="text-sm opacity-80">{productCount} Products</p>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
