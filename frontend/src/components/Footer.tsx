import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-primary text-text-primary pt-24 pb-8 border-t border-bg-tertiary">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-16">
          <div className="max-w-[300px]">
            <h3 className="text-2xl font-bold mb-4">B&F Essentials</h3>
            <p className="text-text-secondary leading-relaxed">Built with purpose. Designed for everyday life.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-16">
            <div className="flex flex-col">
              <h4 className="text-lg font-medium mb-6">Shop</h4>
              <ul className="list-none p-0">
                <li className="mb-3"><a href="#" className="text-text-secondary hover:text-accent transition-colors duration-300">Bags</a></li>
                <li className="mb-3"><a href="#" className="text-text-secondary hover:text-accent transition-colors duration-300">Footwear</a></li>
                <li className="mb-3"><a href="#" className="text-text-secondary hover:text-accent transition-colors duration-300">New Arrivals</a></li>
                <li className="mb-3"><a href="#" className="text-text-secondary hover:text-accent transition-colors duration-300">Best Sellers</a></li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="text-lg font-medium mb-6">About</h4>
              <ul className="list-none p-0">
                <li className="mb-3"><a href="#" className="text-text-secondary hover:text-accent transition-colors duration-300">Our Story</a></li>
                <li className="mb-3"><a href="#" className="text-text-secondary hover:text-accent transition-colors duration-300">Craftsmanship</a></li>
                <li className="mb-3"><a href="#" className="text-text-secondary hover:text-accent transition-colors duration-300">Sustainability</a></li>
                <li className="mb-3"><a href="#" className="text-text-secondary hover:text-accent transition-colors duration-300">Journal</a></li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="text-lg font-medium mb-6">Support</h4>
              <ul className="list-none p-0">
                <li className="mb-3"><a href="#" className="text-text-secondary hover:text-accent transition-colors duration-300">FAQ</a></li>
                <li className="mb-3"><a href="#" className="text-text-secondary hover:text-accent transition-colors duration-300">Shipping & Returns</a></li>
                <li className="mb-3"><a href="#" className="text-text-secondary hover:text-accent transition-colors duration-300">Contact Us</a></li>
                <li className="mb-3"><a href="#" className="text-text-secondary hover:text-accent transition-colors duration-300">Care Guide</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-bg-tertiary text-text-secondary text-sm">
          <p>&copy; {new Date().getFullYear()} B&F Essentials. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
