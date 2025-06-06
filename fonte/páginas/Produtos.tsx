import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";

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
  },
  {
    id: 5,
    name: "Saia Midi Plissada",
    price: 229.90,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    category: "Feminino"
  },
  {
    id: 6,
    name: "Jaqueta de Couro",
    price: 459.90,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    category: "Masculino"
  },
  {
    id: 7,
    name: "Blusa de Seda",
    price: 179.90,
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    category: "Feminino"
  },
  {
    id: 8,
    name: "Suéter de Cashmere",
    price: 329.90,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    category: "Masculino"
  }
];

const Products = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 500 });
  const [sortBy, setSortBy] = useState("newest");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let result = [...products];

    // Apply category filter
    if (selectedCategory !== "Todos") {
      result = result.filter(product => product.category === selectedCategory);
    }

    // Apply price range filter
    result = result.filter(
      product => product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Apply sorting
    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredProducts(result);
  }, [selectedCategory, priceRange, sortBy]);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handlePriceChange = (min: number, max: number) => {
    setPriceRange({ min, max });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const clearFilters = () => {
    setSelectedCategory("Todos");
    setPriceRange({ min: 0, max: 500 });
    setSortBy("newest");
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <div className="bg-gray-100 py-24 mt-16">
        <div className="container-custom">
          <h1 className="text-4xl font-display font-medium text-center">
            Produtos
          </h1>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-16">
        <div className="container-custom">
          {/* Mobile Filter Button */}
          <div className="flex justify-between items-center mb-8 lg:hidden">
            <button
              onClick={toggleFilter}
              className="flex items-center gap-2 px-4 py-2 border rounded-md"
            >
              <SlidersHorizontal size={18} />
              Filtros
            </button>

            <div className="relative">
              <select
                value={sortBy}
                onChange={handleSortChange}
                className="appearance-none bg-white border rounded-md px-4 py-2 pr-8 focus:outline-none"
              >
                <option value="newest">Mais Recentes</option>
                <option value="price-asc">Preço: Menor para Maior</option>
                <option value="price-desc">Preço: Maior para Menor</option>
                <option value="name-asc">Nome: A-Z</option>
                <option value="name-desc">Nome: Z-A</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters for Desktop */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">Categorias</h3>
                  <ul className="space-y-2">
                    {["Todos", "Feminino", "Masculino", "Acessórios"].map((category) => (
                      <li key={category}>
                        <button
                          onClick={() => handleCategoryChange(category)}
                          className={`w-full text-left py-2 px-3 rounded-md transition-colors ${
                            selectedCategory === category
                              ? "bg-black text-white"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">Preço</h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => handlePriceChange(0, 100)}
                      className={`w-full text-left py-2 px-3 rounded-md transition-colors ${
                        priceRange.min === 0 && priceRange.max === 100
                          ? "bg-black text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      Até R$ 100
                    </button>
                    <button
                      onClick={() => handlePriceChange(100, 200)}
                      className={`w-full text-left py-2 px-3 rounded-md transition-colors ${
                        priceRange.min === 100 && priceRange.max === 200
                          ? "bg-black text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      R$ 100 - R$ 200
                    </button>
                    <button
                      onClick={() => handlePriceChange(200, 300)}
                      className={`w-full text-left py-2 px-3 rounded-md transition-colors ${
                        priceRange.min === 200 && priceRange.max === 300
                          ? "bg-black text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      R$ 200 - R$ 300
                    </button>
                    <button
                      onClick={() => handlePriceChange(300, 500)}
                      className={`w-full text-left py-2 px-3 rounded-md transition-colors ${
                        priceRange.min === 300 && priceRange.max === 500
                          ? "bg-black text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      Acima de R$ 300
                    </button>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">Ordenar por</h3>
                  <select
                    value={sortBy}
                    onChange={handleSortChange}
                    className="w-full p-2 border rounded-md focus:outline-none"
                  >
                    <option value="newest">Mais Recentes</option>
                    <option value="price-asc">Preço: Menor para Maior</option>
                    <option value="price-desc">Preço: Maior para Menor</option>
                    <option value="name-asc">Nome: A-Z</option>
                    <option value="name-desc">Nome: Z-A</option>
                  </select>
                </div>

                <button
                  onClick={clearFilters}
                  className="w-full py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Limpar Filtros
                </button>
              </div>
            </div>

            {/* Mobile Filter Sidebar */}
            <div
              className={`fixed inset-0 bg-white z-50 transform transition-transform p-6 overflow-y-auto lg:hidden ${
                filterOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium">Filtros</h2>
                <button onClick={toggleFilter}>
                  <X size={24} />
                </button>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Categorias</h3>
                <ul className="space-y-2">
                  {["Todos", "Feminino", "Masculino", "Acessórios"].map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => {
                          handleCategoryChange(category);
                          setFilterOpen(false);
                        }}
                        className={`w-full text-left py-2 px-3 rounded-md transition-colors ${
                          selectedCategory === category
                            ? "bg-black text-white"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Preço</h3>
                <div className="space-y-3">
                  <button
                    onClick={() => {
                      handlePriceChange(0, 100);
                      setFilterOpen(false);
                    }}
                    className={`w-full text-left py-2 px-3 rounded-md transition-colors ${
                      priceRange.min === 0 && priceRange.max === 100
                        ? "bg-black text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    Até R$ 100
                  </button>
                  <button
                    onClick={() => {
                      handlePriceChange(100, 200);
                      setFilterOpen(false);
                    }}
                    className={`w-full text-left py-2 px-3 rounded-md transition-colors ${
                      priceRange.min === 100 && priceRange.max === 200
                        ? "bg-black text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    R$ 100 - R$ 200
                  </button>
                  <button
                    onClick={() => {
                      handlePriceChange(200, 300);
                      setFilterOpen(false);
                    }}
                    className={`w-full text-left py-2 px-3 rounded-md transition-colors ${
                      priceRange.min === 200 && priceRange.max === 300
                        ? "bg-black text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    R$ 200 - R$ 300
                  </button>
                  <button
                    onClick={() => {
                      handlePriceChange(300, 500);
                      setFilterOpen(false);
                    }}
                    className={`w-full text-left py-2 px-3 rounded-md transition-colors ${
                      priceRange.min === 300 && priceRange.max === 500
                        ? "bg-black text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    Acima de R$ 300
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => {
                    clearFilters();
                    setFilterOpen(false);
                  }}
                  className="flex-1 py-2 px-4 border border-gray-300 rounded-md"
                >
                  Limpar
                </button>
                <button
                  onClick={() => setFilterOpen(false)}
                  className="flex-1 py-2 px-4 bg-black text-white rounded-md"
                >
                  Aplicar
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Results Count and Sort (Desktop) */}
              <div className="hidden lg:flex justify-between items-center mb-8">
                <p className="text-gray-600">
                  {filteredProducts.length} {filteredProducts.length === 1 ? "produto" : "produtos"} encontrados
                </p>
              </div>

              {/* Active Filters */}
              {(selectedCategory !== "Todos" || priceRange.min !== 0 || priceRange.max !== 500) && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedCategory !== "Todos" && (
                    <div className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                      {selectedCategory}
                      <button onClick={() => setSelectedCategory("Todos")}>
                        <X size={14} />
                      </button>
                    </div>
                  )}
                  {(priceRange.min !== 0 || priceRange.max !== 500) && (
                    <div className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                      {`R$${priceRange.min} - R$${priceRange.max}`}
                      <button onClick={() => setPriceRange({ min: 0, max: 500 })}>
                        <X size={14} />
                      </button>
                    </div>
                  )}
                  <button
                    onClick={clearFilters}
                    className="text-sm text-gray-500 underline"
                  >
                    Limpar todos
                  </button>
                </div>
              )}

              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600 mb-4">Nenhum produto encontrado</p>
                  <p className="text-gray-500 mb-6">Tente ajustar seus filtros para encontrar o que procura.</p>
                  <button
                    onClick={clearFilters}
                    className="btn-secondary"
                  >
                    Limpar Filtros
                  </button>
                </div>
              ) : (
                <div className="product-grid">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
