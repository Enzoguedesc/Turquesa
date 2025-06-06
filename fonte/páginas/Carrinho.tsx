
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import { ArrowRight, Info, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

// Sample cart items
const initialCartItems = [
  {
    id: 1,
    name: "Vestido Midi Elegante",
    price: 299.90,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1983&q=80",
    quantity: 1,
    size: "M",
    color: "Preto",
  },
  {
    id: 3,
    name: "Blazer Estruturado",
    price: 399.90,
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    quantity: 1,
    size: "P",
    color: "Azul Marinho",
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState("");
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Shipping cost (free above R$500)
  const shipping = subtotal >= 500 ? 0 : 30;

  // Total
  const total = subtotal + shipping;

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast.success("Item removido do carrinho");
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setIsApplyingCoupon(true);

    // Simulate API call
    setTimeout(() => {
      toast.error("Cupom inválido ou expirado");
      setIsApplyingCoupon(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24">
        <div className="container-custom py-12">
          <h1 className="text-3xl font-display font-medium mb-12 text-center">
            Seu Carrinho
          </h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="inline-flex justify-center items-center w-24 h-24 bg-gray-100 rounded-full mb-6">
                <ShoppingBag size={40} className="text-gray-400" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Seu carrinho está vazio</h2>
              <p className="text-gray-600 mb-8">
                Parece que você ainda não adicionou nenhum item ao seu carrinho.
              </p>
              <Link
                to="/products"
                className="btn-primary"
              >
                Continuar Comprando
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      {...item}
                      onRemove={handleRemoveItem}
                      onUpdateQuantity={handleUpdateQuantity}
                    />
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg p-6 shadow-sm sticky top-24">
                  <h2 className="text-lg font-medium mb-6">Resumo do Pedido</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>
                        {subtotal.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Frete</span>
                      <span>
                        {shipping === 0
                          ? "Grátis"
                          : shipping.toLocaleString('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            })
                        }
                      </span>
                    </div>

                    {shipping > 0 && (
                      <div className="text-xs text-gray-500 flex items-start gap-1">
                        <Info size={14} className="flex-shrink-0 mt-0.5" />
                        <span>
                          Frete grátis para compras acima de R$500
                        </span>
                      </div>
                    )}

                    <div className="border-t pt-4">
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span>
                          {total.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          })}
                        </span>
                      </div>

                      <div className="text-xs text-gray-500 mt-1">
                        ou 10x de {(total / 10).toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })} sem juros
                      </div>
                    </div>
                  </div>

                  {/* Coupon Code */}
                  <form onSubmit={handleApplyCoupon} className="mb-6">
                    <label htmlFor="coupon" className="block text-sm font-medium text-gray-700 mb-2">
                      Cupom de Desconto
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        id="coupon"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Digite seu cupom"
                        className="flex-grow border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                      />
                      <button
                        type="submit"
                        disabled={isApplyingCoupon || !couponCode}
                        className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-200 disabled:opacity-50"
                      >
                        Aplicar
                      </button>
                    </div>
                  </form>

                  {/* Checkout Button */}
                  <Link
                    to="/checkout"
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    Finalizar Compra
                    <ArrowRight size={18} className="ml-2" />
                  </Link>

                  <div className="mt-4">
                    <Link
                      to="/products"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center justify-center"
                    >
                      Continuar Comprando
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
