import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types/product';
import { memo } from 'react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = memo(({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleClick = React.useCallback(() => {
    navigate(`/product/${product.id}`);
  }, [product.id, navigate]);

  return (
    <div 
      className="h-full hover:shadow-lg hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <div className="h-[300px] bg-transparent overflow-hidden mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-normal"
          loading="lazy"
          decoding="async"
          fetchPriority="high"
        />
      </div>
      <div className="p-2 md:p-4">
        <div className="text-base font-['WomanFontRegular'] text-[#591C1C]">
          {product.name}
        </div>
        <div className="text-sm text-gray-600 uppercase">
          {product.material}<br />
          {product.color}
        </div>
        <div className="mt-2 font-['WomanFontRegular'] text-black">
          {product.price} TND
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;