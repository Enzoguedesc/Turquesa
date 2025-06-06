
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    for (const key in formData) {
      if (formData[key as keyof typeof formData] === "") {
        toast.error("Por favor, preencha todos os campos.");
        return;
      }
    }

    if (!formData.email.includes("@")) {
      toast.error("Por favor, insira um e-mail válido.");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-display font-medium mb-4">
              Entre em Contato
            </h1>
            <p className="text-gray-600">
              Estamos à disposição para atender suas dúvidas, sugestões ou reclamações. Ficaremos felizes em ajudar!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 h-full">
                <h2 className="text-xl font-medium mb-6">Informações de Contato</h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="mt-1 mr-4">
                      <MapPin size={20} className="text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Endereço</h3>
                      <p className="text-gray-600 text-sm">
                        Av. Paulista, 1578<br />
                        Bela Vista, São Paulo - SP<br />
                        CEP: 01310-200
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="mt-1 mr-4">
                      <Phone size={20} className="text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Telefone</h3>
                      <p className="text-gray-600 text-sm">
                        +55 (11) 3456-7890<br />
                        +55 (11) 98765-4321 (WhatsApp)
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="mt-1 mr-4">
                      <Mail size={20} className="text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">E-mail</h3>
                      <p className="text-gray-600 text-sm">
                        contato@elegancia.com<br />
                        atendimento@elegancia.com
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start">
                    <div className="mt-1 mr-4">
                      <Clock size={20} className="text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Horário de Atendimento</h3>
                      <p className="text-gray-600 text-sm">
                        Segunda a Sexta: 9h às 18h<br />
                        Sábado: 10h às 15h<br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-6 border-t">
                  <h3 className="font-medium mb-4">Nos Siga</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center transition-colors hover:bg-gray-200"
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center transition-colors hover:bg-gray-200"
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center transition-colors hover:bg-gray-200"
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center transition-colors hover:bg-gray-200"
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-medium mb-6">Envie uma Mensagem</h2>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome Completo <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-mail <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                        required
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Assunto <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                        required
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="Informações sobre produtos">Informações sobre produtos</option>
                        <option value="Dúvidas sobre pedidos">Dúvidas sobre pedidos</option>
                        <option value="Trocas e devoluções">Trocas e devoluções</option>
                        <option value="Parceria e Revenda">Parceria e Revenda</option>
                        <option value="Outros">Outros</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Mensagem <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black resize-none"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <MessageSquare size={18} className="mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="aspect-[16/9] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.098097572236!2d-46.65830492539837!3d-23.563224178919434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1710873522014!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Loja"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-medium mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-600">
              Encontre respostas para as perguntas mais comuns dos nossos clientes.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="divide-y">
              {/* FAQ Item 1 */}
              <div className="py-6">
                <h3 className="text-lg font-medium mb-2">Qual o prazo de entrega dos produtos?</h3>
                <p className="text-gray-600">
                  O prazo de entrega varia conforme a região, mas geralmente é de 3 a 8 dias úteis após a confirmação do pagamento. Na página de checkout, você poderá ver uma estimativa mais precisa baseada no seu CEP.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="py-6">
                <h3 className="text-lg font-medium mb-2">Como funciona a política de trocas e devoluções?</h3>
                <p className="text-gray-600">
                  Aceitamos trocas e devoluções em até 30 dias após o recebimento do produto, desde que o mesmo esteja em perfeito estado, com etiquetas originais e acompanhado da nota fiscal. Para iniciar o processo, entre em contato com nosso atendimento.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="py-6">
                <h3 className="text-lg font-medium mb-2">Quais formas de pagamento são aceitas?</h3>
                <p className="text-gray-600">
                  Aceitamos pagamentos via cartão de crédito (parcelamos em até 10x sem juros), PIX, boleto bancário e transferência bancária. Todas as transações são processadas em ambiente seguro.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="py-6">
                <h3 className="text-lg font-medium mb-2">Posso rastrear meu pedido?</h3>
                <p className="text-gray-600">
                  Sim, após o envio do pedido, você receberá por e-mail um código de rastreamento que permitirá acompanhar o status da entrega. Também é possível consultar esse código na área "Meus Pedidos" da sua conta.
                </p>
              </div>

              {/* FAQ Item 5 */}
              <div className="py-6">
                <h3 className="text-lg font-medium mb-2">As lojas físicas possuem os mesmos produtos do site?</h3>
                <p className="text-gray-600">
                  Nossa loja online e as lojas físicas compartilham o mesmo catálogo, mas pode haver diferenças pontuais na disponibilidade de determinados produtos. Recomendamos consultar o estoque da loja física por telefone antes de visitá-la.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
