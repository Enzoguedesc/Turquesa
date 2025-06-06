import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { id, name, price, image, category } = product;
  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-100 mb-4">
        <Link to={`/product/${id}`}>
          <div className="h-full w-full relative">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hover Overlay */}
            <div
              className={`absolute inset-0 bg-black/5 flex items-center justify-center transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className={`transform transition-transform duration-300 ${
                  isHovered ? "translate-y-0" : "translate-y-4"
                }`}
              >
                <button
                  className="btn-primary bg-white text-black hover:bg-white/90"
                  aria-label="Adicionar ao carrinho"
                >
                  <ShoppingBag size={18} className="mr-2" />
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Wishlist Button */}
      <button
        className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
        aria-label="Adicionar aos favoritos"
      >
        <Heart size={16} />
      </button>

      {/* Product Info */}
      <div>
        <span className="text-xs text-gray-500 mb-1 block">
          {category}
        </span>
        <h3 className="text-base font-medium">
          <Link to={`/product/${id}`} className="hover:underline">
            {name}
          </Link>
        </h3>
        <p className="mt-1 text-gray-900 font-medium">
          {formattedPrice}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
