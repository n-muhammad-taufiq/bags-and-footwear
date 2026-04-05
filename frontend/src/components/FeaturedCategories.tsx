import React from 'react';
import bagsImage from '../assets/brandon-atchison-1mJxgw6D02Q-unsplash.jpg';
import footwearImage from '../assets/zakaria-issaad-n2INQp0jAHg-unsplash.jpg';

const FeaturedCategories: React.FC = () => {
  return (
    <section className="section bg-bg-primary py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
          
          <div className="flex flex-col gap-6 group cursor-pointer">
            <div className="rounded-md overflow-hidden aspect-[4/5] bg-bg-tertiary">
              <img 
                src={bagsImage} 
                alt="Elegant bags collection" 
                className="w-full h-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" 
              />
            </div>
            <div className="flex flex-col gap-3 flex-grow">
              <h3 className="text-3xl md:text-4xl font-medium text-text-primary">Bags Collection</h3>
              <p className="text-text-secondary max-w-[90%] mb-2">From everyday essentials to travel-ready companions—crafted for function and refined style.</p>
              <a href="#" className="inline-flex items-center text-lg font-medium text-text-primary group-hover:text-accent transition-colors duration-300 mt-auto">
                Explore Bags <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6 group cursor-pointer">
            <div className="rounded-md overflow-hidden aspect-[4/5] bg-bg-tertiary">
              <img 
                src={footwearImage} 
                alt="Comfortable footwear collection" 
                className="w-full h-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" 
              />
            </div>
            <div className="flex flex-col gap-3 flex-grow">
              <h3 className="text-3xl md:text-4xl font-medium text-text-primary">Footwear Collection</h3>
              <p className="text-text-secondary max-w-[90%] mb-2">Designed for all-day comfort with a focus on quality, grip, and timeless appeal.</p>
              <a href="#" className="inline-flex items-center text-lg font-medium text-text-primary group-hover:text-accent transition-colors duration-300 mt-auto">
                Shop Footwear <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
