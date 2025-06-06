
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1
    });

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-screen opacity-0 transition-opacity duration-1000 ease-out"
    >
      {/* Hero Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Moda Elegância"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-xl text-white">
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              <span className="inline-block text-sm uppercase tracking-wider border border-white/30 px-3 py-1 backdrop-blur-sm bg-black/10 mb-6">
                Nova Coleção 2023
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              Estilo Atemporal para o Verão
            </h1>

            <p
              className="text-lg leading-relaxed mb-8 text-white/90 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
            >
              Descubra nossa coleção exclusiva que combina elegância e conforto para o seu guarda-roupa de verão.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
            >
              <Link
                to="/products"
                className="btn-primary bg-white text-black hover:bg-white/90"
              >
                Comprar Agora
              </Link>

              <Link
                to="/products"
                className="btn-secondary text-white border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20"
              >
                Explorar Coleção
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce opacity-0 animate-fade-in" style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}>
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/50 flex justify-center p-2">
          <div className="w-1 h-3 bg-white/80 rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
