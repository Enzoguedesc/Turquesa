import React, { useRef, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Cliente Fiel há 3 anos",
    content: "A qualidade das roupas é excepcional e o atendimento sempre supera minhas expectativas. Encontro peças únicas que recebo inúmeros elogios.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
  },
  {
    id: 2,
    name: "Felipe Oliveira",
    role: "Influenciador de Moda",
    content: "Como profissional de moda, sou criterioso com o que visto. Esta loja consistentemente oferece peças com acabamento impecável e designs atuais.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
  {
    id: 3,
    name: "Juliana Costa",
    role: "Empresária",
    content: "Preço justo por produtos de alta qualidade. Já tentei várias lojas, mas sempre volto aqui pela consistência no caimento e durabilidade das peças.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
  }
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    testimonialRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding py-24 bg-gray-50"
    >
      <div className="container-custom">
        <div className="text-center mb-16 slide-up-animation">
          <span className="text-sm text-gray-500 uppercase tracking-wider block mb-4">
            Testemunhos
          </span>
          <h2 className="text-4xl font-display font-medium mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior orgulho. Veja o que estão dizendo sobre nós.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={el => testimonialRefs.current[index] = el}
              className="slide-up-animation bg-white p-8 rounded-lg shadow-sm"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.667 12H5.33366C4.96547 12 4.66699 12.2985 4.66699 12.6667V18C4.66699 18.3682 4.96547 18.6667 5.33366 18.6667H9.33366C9.70185 18.6667 10.0003 18.9651 10.0003 19.3333V23.3333C10.0003 23.7015 9.70185 24 9.33366 24H5.33366C4.96547 24 4.66699 23.7015 4.66699 23.3333V12.6667C4.66699 10.0893 6.76975 8 9.33366 8H10.667C11.0352 8 11.3337 8.29848 11.3337 8.66667V11.3333C11.3337 11.7015 11.0352 12 10.667 12ZM26.667 12H21.3337C20.9655 12 20.667 12.2985 20.667 12.6667V18C20.667 18.3682 20.9655 18.6667 21.3337 18.6667H25.3337C25.7018 18.6667 26.0003 18.9651 26.0003 19.3333V23.3333C26.0003 23.7015 25.7018 24 25.3337 24H21.3337C20.9655 24 20.667 23.7015 20.667 23.3333V12.6667C20.667 10.0893 22.7697 8 25.3337 8H26.667C27.0352 8 27.3337 8.29848 27.3337 8.66667V11.3333C27.3337 11.7015 27.0352 12 26.667 12Z" fill="currentColor" fillOpacity="0.2" />
                  </svg>
                </div>

                <p className="text-gray-700 mb-6 flex-grow">
                  {testimonial.content}
                </p>

                <div className="flex items-center mt-auto">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;