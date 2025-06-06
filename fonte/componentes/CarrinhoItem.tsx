
import React from "react";
import { Minus, Plus, X } from "lucide-react";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size: string;
  color: string;
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  image,
  quantity,
  size,
  color,
  onRemove,
  onUpdateQuantity,
}) => {
  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const totalPrice = (price * quantity).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const handleIncrement = () => {
    onUpdateQuantity(id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onUpdateQuantity(id, quantity - 1);
    }
  };

  return (
    <div className="flex py-6 border-b border-gray-200">
      {/* Product Image */}
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Product Details */}
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{name}</h3>
            <p className="ml-4">{totalPrice}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            {color} | {size}
          </p>
        </div>

        <div className="flex flex-1 items-end justify-between text-sm">
          {/* Quantity Selector */}
          <div className="flex items-center border rounded">
            <button
              type="button"
              className="px-2 py-1 hover:bg-gray-100 transition-colors"
              onClick={handleDecrement}
              disabled={quantity <= 1}
            >
              <Minus size={16} />
            </button>
            <span className="px-4 py-1">{quantity}</span>
            <button
              type="button"
              className="px-2 py-1 hover:bg-gray-100 transition-colors"
              onClick={handleIncrement}
            >
              <Plus size={16} />
            </button>
          </div>

          {/* Remove Button */}
          <button
            type="button"
            className="font-medium text-gray-500 hover:text-gray-800 transition-colors flex items-center"
            onClick={() => onRemove(id)}
          >
            <X size={16} className="mr-1" />
            Remover
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;