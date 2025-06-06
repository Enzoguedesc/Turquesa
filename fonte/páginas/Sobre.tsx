
import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ShoppingBag, MapPin, Users, Clock } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    });

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Nossa Loja"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container-custom relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-display font-medium mb-4">
              Nossa História
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Conheça a Elegância, uma marca nascida da paixão pela moda e pelo desejo de oferecer peças que combinam elegância atemporal com design contemporâneo.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section
        ref={el => sectionRefs.current[0] = el}
        className="py-20 slide-up-animation"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm text-gray-500 uppercase tracking-wider block mb-4">
                Nossa Jornada
              </span>
              <h2 className="text-3xl font-display font-medium mb-6">
                De uma pequena ideia a uma marca reconhecida
              </h2>
              <p className="text-gray-600 mb-6">
                Fundada em 2010, a Elegância nasceu do sonho de criar uma marca de roupas que não seguisse apenas tendências passageiras, mas que valorizasse a qualidade dos materiais e o cuidado com cada detalhe.
              </p>
              <p className="text-gray-600 mb-6">
                Nossa jornada começou com uma pequena loja no centro da cidade, onde cada peça era cuidadosamente selecionada para oferecer aos nossos clientes algo além de roupas - uma experiência de estilo e conforto que perdura.
              </p>
              <p className="text-gray-600">
                Hoje, mais de uma década depois, nos expandimos para várias lojas e um e-commerce de sucesso, mantendo sempre nossa essência: oferecer peças que combinam elegância atemporal com toques contemporâneos.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551446591-142875a901a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Nossa História"
                className="w-full h-[500px] object-cover rounded-lg"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-black text-white flex flex-col items-center justify-center p-4 rounded-lg">
                <span className="text-4xl font-display font-medium">13</span>
                <span className="text-sm">Anos de história</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section
        ref={el => sectionRefs.current[1] = el}
        className="py-20 bg-gray-50 slide-up-animation"
      >
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm text-gray-500 uppercase tracking-wider block mb-4">
              O Que Nos Define
            </span>
            <h2 className="text-3xl font-display font-medium mb-6">
              Nossa Missão e Valores
            </h2>
            <p className="text-gray-600">
              Mais do que uma marca de roupas, a Elegância representa um estilo de vida e uma filosofia que valoriza a qualidade, a ética e a expressão pessoal através da moda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Mission */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag size={24} className="text-gray-700" />
              </div>
              <h3 className="text-xl font-medium mb-3">Nossa Missão</h3>
              <p className="text-gray-600">
                Proporcionar peças que equilibram elegância e conforto, permitindo que cada cliente expresse sua personalidade através do estilo.
              </p>
            </div>

            {/* Sustainability */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <MapPin size={24} className="text-gray-700" />
              </div>
              <h3 className="text-xl font-medium mb-3">Sustentabilidade</h3>
              <p className="text-gray-600">
                Comprometidos com práticas sustentáveis, desde a escolha de materiais até processos de produção que minimizam impactos ambientais.
              </p>
            </div>

            {/* Quality */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Users size={24} className="text-gray-700" />
              </div>
              <h3 className="text-xl font-medium mb-3">Comunidade</h3>
              <p className="text-gray-600">
                Valorizamos o relacionamento com nossos clientes e a comunidade local, promovendo eventos e iniciativas que fortalecem esses laços.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Clock size={24} className="text-gray-700" />
              </div>
              <h3 className="text-xl font-medium mb-3">Inovação</h3>
              <p className="text-gray-600">
                Buscamos constantemente inovar em nossas coleções, mesclando tendências contemporâneas com designs atemporais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        ref={el => sectionRefs.current[2] = el}
        className="py-20 slide-up-animation"
      >
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm text-gray-500 uppercase tracking-wider block mb-4">
              Nosso Time
            </span>
            <h2 className="text-3xl font-display font-medium mb-6">
              As Pessoas por Trás da Elegância
            </h2>
            <p className="text-gray-600">
              Conheça alguns dos talentosos profissionais que trabalham diariamente para trazer o melhor da moda até você.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="aspect-square overflow-hidden rounded-full mb-6">
                <img
                  src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Fundadora e CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Marina Soares</h3>
              <p className="text-gray-500 mb-4">Fundadora e CEO</p>
              <p className="text-gray-600">
                Com mais de 20 anos de experiência no mercado de moda, Marina fundou a Elegância com a visão de criar uma marca que valorizasse peças atemporais e de alta qualidade.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="aspect-square overflow-hidden rounded-full mb-6">
                <img
                  src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Diretor Criativo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Pedro Mendes</h3>
              <p className="text-gray-500 mb-4">Diretor Criativo</p>
              <p className="text-gray-600">
                Graduado em Design de Moda, Pedro é responsável por traduzir tendências globais para o estilo único da Elegância, sempre mantendo o equilíbrio entre o contemporâneo e o clássico.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="aspect-square overflow-hidden rounded-full mb-6">
                <img
                  src="https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Gerente de Produção"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Carolina Lima</h3>
              <p className="text-gray-500 mb-4">Gerente de Produção</p>
              <p className="text-gray-600">
                Com um olhar atento aos detalhes, Carolina supervisiona todo o processo de produção, garantindo que cada peça atenda aos rigorosos padrões de qualidade da Elegância.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-medium mb-6">
            Faça parte da nossa história
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Explore nossas coleções e descubra por que somos referência em elegância e qualidade no mundo da moda.
          </p>
          <a
            href="/products"
            className="btn-primary bg-white text-black hover:bg-white/90"
          >
            Conhecer Produtos
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
