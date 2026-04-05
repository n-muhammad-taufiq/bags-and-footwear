import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search, User, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[1000] bg-bg-primary border-b border-bg-tertiary transition-all duration-300 ${
        isScrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-b-transparent py-4' : 'py-5'
      }`}
    >
      <div className="container flex justify-between items-center">
        
        {/* Brand Name */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-semibold text-text-primary tracking-tight">
            B&F Essentials
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex list-none gap-10">
            <li>
              <Link to="/" className="font-medium text-text-primary text-base hover:text-accent transition-colors duration-300">
                Home
              </Link>
            </li>
            <li className="relative h-full group">
              <a href="#" className="flex items-center gap-1 font-medium text-text-primary text-base hover:text-accent transition-colors duration-300">
                Shop <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
              </a>
              {/* Invisible bridge */}
              <div className="absolute top-full left-0 w-full h-5"></div>
              <ul className="absolute top-full -left-4 bg-bg-primary shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-bg-tertiary rounded-sm py-4 min-w-[220px] list-none opacity-0 invisible translate-y-1 transition-all duration-300 cubic-bezier group-hover:opacity-100 group-hover:visible group-hover:translate-y-5 flex flex-col z-[1000]">
                <li><a href="#" className="block px-6 py-2 font-normal text-text-secondary hover:bg-bg-secondary hover:text-text-primary hover:pl-8 transition-all duration-300">Bags</a></li>
                <li><a href="#" className="block px-6 py-2 font-normal text-text-secondary hover:bg-bg-secondary hover:text-text-primary hover:pl-8 transition-all duration-300">Footwear</a></li>
                <li><a href="#" className="block px-6 py-2 font-normal text-text-secondary hover:bg-bg-secondary hover:text-text-primary hover:pl-8 transition-all duration-300">Accessories</a></li>
              </ul>
            </li>
            <li className="relative h-full group">
              <a href="#" className="flex items-center gap-1 font-medium text-text-primary text-base hover:text-accent transition-colors duration-300">
                Collections <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
              </a>
              {/* Invisible bridge */}
              <div className="absolute top-full left-0 w-full h-5"></div>
              <ul className="absolute top-full -left-4 bg-bg-primary shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-bg-tertiary rounded-sm py-4 min-w-[220px] list-none opacity-0 invisible translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-5 flex flex-col z-[1000]">
                <li><a href="#" className="block px-6 py-2 font-normal text-text-secondary hover:bg-bg-secondary hover:text-text-primary hover:pl-8 transition-all duration-300">New Arrivals</a></li>
                <li><a href="#" className="block px-6 py-2 font-normal text-text-secondary hover:bg-bg-secondary hover:text-text-primary hover:pl-8 transition-all duration-300">Best Sellers</a></li>
                <li><a href="#" className="block px-6 py-2 font-normal text-text-secondary hover:bg-bg-secondary hover:text-text-primary hover:pl-8 transition-all duration-300">Essentials</a></li>
              </ul>
            </li>
            <li><a href="#" className="font-medium text-text-primary text-base hover:text-accent transition-colors duration-300">About</a></li>
            <li><a href="#" className="font-medium text-text-primary text-base hover:text-accent transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button className="text-text-primary hover:text-accent transition-colors duration-300" aria-label="Search">
            <Search size={22} />
          </button>
          
          <Link to="/auth" className="text-text-primary hover:text-accent transition-colors duration-300" aria-label="Account">
            <User size={22} />
          </Link>

          <button className="text-text-primary hover:text-accent transition-colors duration-300" aria-label="Cart" onClick={() => setIsCartOpen(true)}>
            <div className="relative">
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-[5px] -right-[5px] bg-accent text-white rounded-full w-[18px] h-[18px] flex items-center justify-center text-[10px] font-bold">
                  {cartCount}
                </span>
              )}
            </div>
          </button>
          
          <button 
            className="md:hidden text-text-primary hover:text-accent transition-colors duration-300" 
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-bg-primary p-8 shadow-[0_10px_20px_rgba(0,0,0,0.05)] transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-[10px]'
      }`}>
        <ul className="list-none flex flex-col gap-6 text-center">
          <li><a href="#" className="text-xl font-medium text-text-primary" onClick={() => setIsMobileMenuOpen(false)}>Shop</a></li>
          <li><a href="#" className="text-xl font-medium text-text-primary" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
          <li><a href="#" className="text-xl font-medium text-text-primary" onClick={() => setIsMobileMenuOpen(false)}>Journal</a></li>
          <li><a href="#" className="text-xl font-medium text-text-primary" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
