import React, { useEffect } from "react";
import Hero from "../components/Hero";
import FeaturedCollection from "../components/FeaturedCollection";
import Testimonials from "../components/Testimonials";
import NewsletterSignup from "../components/NewsletterSignup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Category 1 */}
            <div className="relative h-[500px] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Moda Feminina"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-2xl font-display mb-4 text-center">Feminino</h3>
                <a href="/products" className="bg-white text-black px-6 py-2 rounded-sm hover:bg-white/90 transition-colors">
                  Comprar Agora
                </a>
              </div>
            </div>

            {/* Category 2 */}
            <div className="relative h-[500px] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Moda Masculina"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-2xl font-display mb-4 text-center">Masculino</h3>
                <a href="/products" className="bg-white text-black px-6 py-2 rounded-sm hover:bg-white/90 transition-colors">
                  Comprar Agora
                </a>
              </div>
            </div>

            {/* Category 3 */}
            <div className="relative h-[500px] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Acessórios"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-2xl font-display mb-4 text-center">Acessórios</h3>
                <a href="/products" className="bg-white text-black px-6 py-2 rounded-sm hover:bg-white/90 transition-colors">
                  Comprar Agora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <FeaturedCollection />

      {/* Promo Banner */}
      <section className="py-20 relative bg-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="max-w-lg">
                <span className="text-sm uppercase tracking-wider text-gray-500 mb-4 block">
                  Promoção por Tempo Limitado
                </span>
                <h2 className="text-4xl font-display font-medium mb-4">
                  30% de Desconto na Nova Coleção
                </h2>
                <p className="text-gray-600 mb-8">
                  Aproveite nossa promoção exclusiva e renove seu guarda-roupa com peças elegantes e de alta qualidade.
                </p>
                <a
                  href="/products"
                  className="btn-primary"
                >
                  Comprar com Desconto
                </a>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Promoção Especial"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Instagram Feed */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-medium mb-4">
              @elegancia no Instagram
            </h2>
            <p className="text-gray-600">
              Siga-nos e compartilhe seu estilo usando a hashtag #EleganciaStyle
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <a
                key={item}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-square overflow-hidden group"
              >
                <img
                  src={`https://source.unsplash.com/random/600x600?fashion&sig=${item}`}
                  alt="Instagram Post"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
