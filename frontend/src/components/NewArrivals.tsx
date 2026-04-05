import React from 'react';
import { useCart } from '../context/CartContext';
import product1 from '../assets/mnz-MHvwt4wicXI-unsplash.jpg';
import product2 from '../assets/muhammad-azzam-8lUihZ4tSjY-unsplash.jpg';
import product3 from '../assets/spencer-gu-QGg-xSa6xT4-unsplash.jpg';
import product4 from '../assets/ty-feague-87V27nw0sS0-unsplash.jpg';

const products = [
  { img: product1, name: 'Everyday Tote', price: '₹9,999' },
  { img: product2, name: 'Minimalist Sneaker', price: '₹11,999' },
  { img: product3, name: 'Companion Backpack', price: '₹12,499' },
  { img: product4, name: 'Leather Loafer', price: '₹14,999' }
];

const NewArrivals: React.FC = () => {
  const { addToCart } = useCart();
  return (
    <section className="bg-bg-secondary text-center py-24">
      <div className="container">
        <div className="mb-16 max-w-[600px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-4 text-text-primary">New Arrivals</h2>
          <p className="text-text-secondary text-lg font-light leading-relaxed">Explore the latest additions crafted with the same commitment to comfort, quality, and simplicity.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, idx) => (
            <div key={idx} className="text-left flex flex-col group cursor-pointer">
              <div className="bg-bg-primary aspect-[3/4] rounded-sm overflow-hidden mb-6">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" 
                />
              </div>
              <div className="flex justify-between items-center text-lg mb-4">
                <span className="font-medium text-text-primary">{product.name}</span>
                <span className="text-text-secondary">{product.price}</span>
              </div>
              <button 
                className="w-full py-4 text-sm font-semibold transition-all duration-300 rounded-sm bg-text-primary text-white hover:bg-accent hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
                onClick={() => addToCart({ name: product.name, price: product.price, img: product.img })}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="inline-flex items-center justify-center py-4 px-10 rounded-sm font-medium transition-all duration-300 min-w-[200px] bg-transparent text-text-primary border border-text-primary hover:bg-text-primary hover:text-white hover:-translate-y-0.5">
            View New Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
