
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="font-display text-xl mb-6">ELEGÂNCIA</h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Boutique de moda elegante com peças exclusivas que combinam estilo contemporâneo e atemporal para o cliente que valoriza qualidade.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links - Shop */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Comprar</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Feminino
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Masculino
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Acessórios
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Novidades
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Promoções
                </Link>
              </li>
            </ul>
          </div>

          {/* Links - Company */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Empresa</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">
                  Carreiras
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Termos
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Receba as últimas novidades e promoções exclusivas.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="bg-gray-800 px-4 py-2 flex-grow text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-white text-black px-4 py-2 text-sm hover:bg-gray-200 transition-colors"
                >
                  Assinar
                </button>
              </div>
            </form>
            <p className="text-gray-500 text-xs">
              Ao assinar, você concorda com nossa Política de Privacidade.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
            <p>© 2023 ELEGÂNCIA. Todos os direitos reservados.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacidade
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Termos
              </Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">
                Mapa do Site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
