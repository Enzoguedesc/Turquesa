import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

// Sample product data
const products = [
  {
    id: 1,
    name: "Vestido Midi Elegante",
    price: 299.90,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1983&q=80",
    category: "Feminino"
  },
  {
    id: 2,
    name: "Camisa Linho Premium",
    price: 189.90,
    image: "https://images.unsplash.com/photo-1578932750039-d33cesfa3f18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    category: "Masculino"
  },
  {
    id: 3,
    name: "Blazer Estruturado",
    price: 399.90,
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    category: "Feminino"
  },
  {
    id: 4,
    name: "Calça Alfaiataria",
    price: 259.90,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    category: "Masculino"
  }
];

const FeaturedCollection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    productRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding py-24">
      <div className="container-custom">
        <div className="text-center mb-16 slide-up-animation">
          <span className="text-sm text-gray-500 uppercase tracking-wider block mb-4">
            Escolhas Exclusivas
          </span>
          <h2 className="text-4xl font-display font-medium mb-4">
            Nossa Coleção em Destaque
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Peças cuidadosamente selecionadas para expressar elegância e sofisticação no seu dia a dia.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={el => productRefs.current[index] = el}
              className="slide-up-animation"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="btn-secondary inline-block"
          >
            Ver Toda a Coleção
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;