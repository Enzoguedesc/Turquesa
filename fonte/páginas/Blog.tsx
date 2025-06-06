
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Como Montar um Guarda-Roupa Cápsula para Todas as Estações",
    excerpt: "Descubra como criar um guarda-roupa versátil com poucas peças que funcionam para todas as estações do ano e diversos ocasiões.",
    image: "https://images.unsplash.com/photo-1610288311735-39299fea2d73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    date: "15 de Março, 2023",
    author: "Marina Soares",
    readTime: "5 min",
    category: "Dicas de Estilo",
    featured: true
  },
  {
    id: 2,
    title: "Tendências de Moda para o Verão 2023",
    excerpt: "As cores, tecidos e estilos que prometem ser sucesso na próxima temporada de verão, trazendo conforto e elegância para os dias quentes.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    date: "02 de Fevereiro, 2023",
    author: "Pedro Mendes",
    readTime: "7 min",
    category: "Tendências",
    featured: true
  },
  {
    id: 3,
    title: "A Importância da Moda Sustentável",
    excerpt: "Como nossas escolhas de consumo impactam o meio ambiente e por que a moda sustentável é o caminho para um futuro mais consciente.",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    date: "18 de Janeiro, 2023",
    author: "Carolina Lima",
    readTime: "10 min",
    category: "Sustentabilidade",
    featured: false
  },
  {
    id: 4,
    title: "Como Escolher o Jeans Perfeito para o Seu Tipo de Corpo",
    excerpt: "Guia completo para encontrar o modelo de jeans ideal que valoriza sua silhueta e garante conforto durante todo o dia.",
    image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    date: "05 de Dezembro, 2022",
    author: "Marina Soares",
    readTime: "6 min",
    category: "Dicas de Estilo",
    featured: false
  },
  {
    id: 5,
    title: "História da Moda: A Evolução do Vestido Preto",
    excerpt: "Do luto à elegância moderna: como o vestido preto se transformou em um ícone atemporal da moda feminina através dos séculos.",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80",
    date: "22 de Novembro, 2022",
    author: "Pedro Mendes",
    readTime: "8 min",
    category: "História da Moda",
    featured: false
  },
  {
    id: 6,
    title: "Acessórios Essenciais para Elevar Qualquer Look",
    excerpt: "Como escolher e combinar acessórios que transformam um visual básico em uma produção sofisticada sem muito esforço.",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2046&q=80",
    date: "10 de Outubro, 2022",
    author: "Carolina Lima",
    readTime: "5 min",
    category: "Dicas de Estilo",
    featured: false
  }
];

// Categories
const categories = [
  "Todas",
  "Dicas de Estilo",
  "Tendências",
  "Sustentabilidade",
  "História da Moda"
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("Todas");
  const [filteredPosts, setFilteredPosts] = React.useState(blogPosts);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedCategory === "Todas") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(
        blogPosts.filter(post => post.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-display font-medium mb-4">
              Blog da Elegância
            </h1>
            <p className="text-gray-600">
              Dicas de estilo, tendências da moda e histórias inspiradoras para você expressar sua elegância em todas as ocasiões.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="pb-12">
          <div className="container-custom">
            <h2 className="text-2xl font-display font-medium mb-8">
              Destaques
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map(post => (
                <div
                  key={post.id}
                  className="group overflow-hidden transition-all duration-300 hover:shadow-md rounded-lg"
                >
                  <Link to={`/blog/${post.id}`} className="block">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span className="inline-block px-2 py-1 rounded-full bg-gray-100 text-xs font-medium mr-3">
                          {post.category}
                        </span>
                        <div className="flex items-center mr-4">
                          <Calendar size={14} className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          <span>{post.readTime} de leitura</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-medium mb-2 group-hover:text-gray-700 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <User size={14} className="mr-1" />
                          <span>{post.author}</span>
                        </div>

                        <span className="text-sm font-medium flex items-center group-hover:text-gray-700 transition-colors">
                          Ler mais
                          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories & Posts */}
      <section className="py-12">
        <div className="container-custom">
          {/* Categories */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedCategory === category
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <div
                key={post.id}
                className="group overflow-hidden transition-all duration-300 hover:shadow-md rounded-lg"
              >
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <span className="inline-block px-2 py-1 rounded-full bg-gray-100 text-xs font-medium mr-3">
                        {post.category}
                      </span>
                      <div className="flex items-center">
                        <Calendar size={12} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-medium mb-2 line-clamp-2 group-hover:text-gray-700 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500">
                        <User size={12} className="mr-1" />
                        <span>{post.author}</span>
                      </div>

                      <div className="flex items-center text-xs text-gray-500">
                        <Clock size={12} className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">
                Nenhum artigo encontrado nesta categoria.
              </p>
              <button
                onClick={() => setSelectedCategory("Todas")}
                className="btn-secondary"
              >
                Ver Todas as Categorias
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-display font-medium mb-4">
              Inscreva-se em Nossa Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Receba as últimas tendências, dicas de estilo e conteúdos exclusivos diretamente em seu e-mail.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-grow px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
