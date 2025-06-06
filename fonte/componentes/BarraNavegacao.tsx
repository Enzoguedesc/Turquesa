
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingBag,
  User,
  Heart,
  Menu,
  X
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button
            className="lg:hidden button-reset"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex-1 lg:flex-initial text-center lg:text-left">
            <Link
              to="/"
              className="inline-block text-2xl font-display font-bold tracking-tighter"
            >
              ELEGÂNCIA
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10 text-sm font-medium">
            <Link to="/" className="hover:opacity-70 transition-opacity">
              Início
            </Link>
            <Link to="/products" className="hover:opacity-70 transition-opacity">
              Feminino
            </Link>
            <Link to="/products" className="hover:opacity-70 transition-opacity">
              Masculino
            </Link>
            <Link to="/products" className="hover:opacity-70 transition-opacity">
              Acessórios
            </Link>
            <Link to="/blog" className="hover:opacity-70 transition-opacity">
              Blog
            </Link>
            <Link to="/about" className="hover:opacity-70 transition-opacity">
              Sobre
            </Link>
            <Link to="/contact" className="hover:opacity-70 transition-opacity">
              Contato
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-5">
            <button className="button-reset hover:opacity-70 transition-opacity">
              <Search size={20} />
            </button>
            <Link to="/account" className="hover:opacity-70 transition-opacity">
              <User size={20} />
            </Link>
            <button className="button-reset hover:opacity-70 transition-opacity">
              <Heart size={20} />
            </button>
            <Link
              to="/cart"
              className="relative hover:opacity-70 transition-opacity"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="container p-6 pt-20">
          <nav className="flex flex-col space-y-6 text-lg">
            <Link
              to="/"
              className="hover:opacity-70 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              to="/products"
              className="hover:opacity-70 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Feminino
            </Link>
            <Link
              to="/products"
              className="hover:opacity-70 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Masculino
            </Link>
            <Link
              to="/products"
              className="hover:opacity-70 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Acessórios
            </Link>
            <Link
              to="/blog"
              className="hover:opacity-70 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="hover:opacity-70 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              to="/contact"
              className="hover:opacity-70 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
