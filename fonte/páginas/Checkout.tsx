
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CreditCard, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "sonner";

// Sample cart items for order summary
const cartItems = [
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

const subtotal = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

const shipping = subtotal >= 500 ? 0 : 30;
const total = subtotal + shipping;

const paymentMethods = [
  { id: "credit-card", name: "Cartão de Crédito", icon: <CreditCard size={24} /> },
  { id: "pix", name: "PIX", icon: <span className="text-lg">PIX</span> },
  { id: "boleto", name: "Boleto Bancário", icon: <span className="text-lg">$</span> },
];

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  // Form states
  const [shippingForm, setShippingForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [paymentForm, setPaymentForm] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  const handleShippingFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitShipping = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form
    for (const key in shippingForm) {
      if (shippingForm[key as keyof typeof shippingForm] === "") {
        toast.error("Por favor, preencha todos os campos.");
        return;
      }
    }
    setStep(2);
    window.scrollTo(0, 0);
  };

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();

    if (paymentMethod === "credit-card") {
      // Validate card form
      for (const key in paymentForm) {
        if (paymentForm[key as keyof typeof paymentForm] === "") {
          toast.error("Por favor, preencha todos os dados do cartão.");
          return;
        }
      }
    }

    setIsPlacingOrder(true);

    // Simulate order processing
    setTimeout(() => {
      setIsPlacingOrder(false);
      setStep(3);
      window.scrollTo(0, 0);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24">
        <div className="container-custom py-12">
          {/* Checkout Steps */}
          <div className="mb-12">
            <div className="flex justify-between items-center max-w-3xl mx-auto">
              <div className={`flex flex-col items-center ${step >= 1 ? 'text-black' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 1 ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'}`}>
                  1
                </div>
                <span className="text-sm">Endereço</span>
              </div>

              <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-black' : 'bg-gray-200'}`}></div>

              <div className={`flex flex-col items-center ${step >= 2 ? 'text-black' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 2 ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'}`}>
                  2
                </div>
                <span className="text-sm">Pagamento</span>
              </div>

              <div className={`flex-1 h-1 mx-2 ${step >= 3 ? 'bg-black' : 'bg-gray-200'}`}></div>

              <div className={`flex flex-col items-center ${step >= 3 ? 'text-black' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 3 ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'}`}>
                  3
                </div>
                <span className="text-sm">Confirmação</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Checkout Form */}
            <div className="lg:col-span-2">
              {/* Step 1: Shipping Information */}
              {step === 1 && (
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-medium">Informações de Entrega</h2>
                    <Link to="/cart" className="text-sm text-gray-600 flex items-center">
                      <ArrowLeft size={16} className="mr-1" />
                      Voltar ao carrinho
                    </Link>
                  </div>

                  <form onSubmit={handleSubmitShipping}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="md:col-span-2">
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                          Nome Completo
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={shippingForm.fullName}
                          onChange={handleShippingFormChange}
                          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          E-mail
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={shippingForm.email}
                          onChange={handleShippingFormChange}
                          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={shippingForm.phone}
                          onChange={handleShippingFormChange}
                          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                          required
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                          Endereço
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={shippingForm.address}
                          onChange={handleShippingFormChange}
                          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                          Cidade
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={shippingForm.city}
                          onChange={handleShippingFormChange}
                          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                            Estado
                          </label>
                          <input
                            type="text"
                            id="state"
                            name="state"
                            value={shippingForm.state}
                            onChange={handleShippingFormChange}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                            CEP
                          </label>
                          <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            value={shippingForm.zipCode}
                            onChange={handleShippingFormChange}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary"
                    >
                      Continuar para Pagamento
                    </button>
                  </form>
                </div>
              )}

              {/* Step 2: Payment Information */}
              {step === 2 && (
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-medium">Método de Pagamento</h2>
                    <button
                      onClick={() => setStep(1)}
                      className="text-sm text-gray-600 flex items-center"
                    >
                      <ArrowLeft size={16} className="mr-1" />
                      Voltar ao endereço
                    </button>
                  </div>

                  <div className="mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {paymentMethods.map((method) => (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setPaymentMethod(method.id)}
                          className={`flex items-center justify-center gap-2 p-4 border rounded-md transition-colors ${
                            paymentMethod === method.id
                              ? "border-black bg-gray-50"
                              : "border-gray-200 hover:bg-gray-50"
                          }`}
                        >
                          {method.icon}
                          <span>{method.name}</span>
                        </button>
                      ))}
                    </div>

                    {paymentMethod === "credit-card" && (
                      <div className="border rounded-md p-4">
                        <h3 className="text-lg font-medium mb-4">Dados do Cartão</h3>
                        <form onSubmit={handleSubmitPayment}>
                          <div className="grid grid-cols-1 gap-4 mb-6">
                            <div>
                              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                Número do Cartão
                              </label>
                              <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                value={paymentForm.cardNumber}
                                onChange={handlePaymentFormChange}
                                placeholder="0000 0000 0000 0000"
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                                required
                              />
                            </div>

                            <div>
                              <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                                Nome no Cartão
                              </label>
                              <input
                                type="text"
                                id="cardName"
                                name="cardName"
                                value={paymentForm.cardName}
                                onChange={handlePaymentFormChange}
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                                required
                              />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                                  Data de Validade
                                </label>
                                <input
                                  type="text"
                                  id="expiry"
                                  name="expiry"
                                  value={paymentForm.expiry}
                                  onChange={handlePaymentFormChange}
                                  placeholder="MM/AA"
                                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                                  required
                                />
                              </div>

                              <div>
                                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                                  CVV
                                </label>
                                <input
                                  type="text"
                                  id="cvv"
                                  name="cvv"
                                  value={paymentForm.cvv}
                                  onChange={handlePaymentFormChange}
                                  placeholder="123"
                                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                                  required
                                />
                              </div>
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="w-full btn-primary flex items-center justify-center"
                            disabled={isPlacingOrder}
                          >
                            {isPlacingOrder ? (
                              <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processando...
                              </>
                            ) : (
                              "Finalizar Pedido"
                            )}
                          </button>
                        </form>
                      </div>
                    )}

                    {paymentMethod === "pix" && (
                      <div className="border rounded-md p-4">
                        <h3 className="text-lg font-medium mb-4">Pagamento via PIX</h3>
                        <p className="text-gray-600 mb-4">
                          Ao finalizar, você receberá um código PIX para pagamento imediato. O processamento do seu pedido iniciará após a confirmação do pagamento.
                        </p>

                        <button
                          onClick={handleSubmitPayment}
                          className="w-full btn-primary flex items-center justify-center"
                          disabled={isPlacingOrder}
                        >
                          {isPlacingOrder ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Processando...
                            </>
                          ) : (
                            "Finalizar Pedido"
                          )}
                        </button>
                      </div>
                    )}

                    {paymentMethod === "boleto" && (
                      <div className="border rounded-md p-4">
                        <h3 className="text-lg font-medium mb-4">Pagamento via Boleto</h3>
                        <p className="text-gray-600 mb-4">
                          Ao finalizar, você receberá um boleto bancário para pagamento. O processamento do seu pedido iniciará após a confirmação do pagamento, o que pode levar até 3 dias úteis.
                        </p>

                        <button
                          onClick={handleSubmitPayment}
                          className="w-full btn-primary flex items-center justify-center"
                          disabled={isPlacingOrder}
                        >
                          {isPlacingOrder ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Processando...
                            </>
                          ) : (
                            "Finalizar Pedido"
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {step === 3 && (
                <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                  <div className="flex flex-col items-center justify-center py-8">
                    <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-6">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>

                    <h2 className="text-2xl font-medium mb-4">
                      Pedido Realizado com Sucesso!
                    </h2>

                    <p className="text-gray-600 max-w-md mx-auto mb-8">
                      Obrigado por sua compra! Seu pedido foi recebido e está sendo processado.
                      Em breve você receberá uma confirmação por e-mail.
                    </p>

                    <div className="bg-gray-50 rounded-lg p-4 mb-8 w-full max-w-md">
                      <div className="text-left mb-4">
                        <div className="text-sm text-gray-500">Número do Pedido</div>
                        <div className="font-medium">#ELG-{Math.floor(100000 + Math.random() * 900000)}</div>
                      </div>

                      <div className="text-left">
                        <div className="text-sm text-gray-500">Data do Pedido</div>
                        <div className="font-medium">{new Date().toLocaleDateString('pt-BR')}</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Link to="/" className="btn-primary block">
                        Voltar para a Loja
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary */}
            {step < 3 && (
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg p-6 shadow-sm sticky top-24">
                  <h2 className="text-lg font-medium mb-6">Resumo do Pedido</h2>

                  <div className="divide-y">
                    {cartItems.map((item) => (
                      <div key={item.id} className="py-4 flex gap-4">
                        <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-grow">
                          <h4 className="text-sm">{item.name}</h4>
                          <div className="text-xs text-gray-500 mb-1">
                            {item.color} | {item.size} | Qtd: {item.quantity}
                          </div>
                          <div className="text-sm font-medium">
                            {(item.price * item.quantity).toLocaleString('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            })}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 mt-4 space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>
                        {subtotal.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </span>
                    </div>

                    <div className="flex justify-between">
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
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
