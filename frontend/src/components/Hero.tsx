import React from 'react';
import heroImage from '../assets/haley-truong-LnR6-7P2YNk-unsplash.jpg';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row min-h-[90vh] relative bg-bg-secondary pt-20">
      <div className="flex-1 flex items-center py-16">
        <div className="container max-w-[600px] lg:ml-[max(2rem,calc((100vw-1440px)/2+2rem))] lg:mr-8 p-0">
          <div className="animate-fade-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-text-primary tracking-tight mb-6">Step Into Confidence.<br />Carry With Purpose.</h1>
            <p className="text-lg md:text-xl font-light text-text-secondary leading-relaxed mb-10 max-w-[500px]">
              Discover thoughtfully crafted bags and footwear designed for comfort, durability, and everyday elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center py-4 px-8 rounded-sm font-medium transition-all duration-300 min-w-[160px] bg-text-primary text-white hover:bg-accent hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
                Shop Footwear
              </button>
              <button className="inline-flex items-center justify-center py-4 px-8 rounded-sm font-medium transition-all duration-300 min-w-[160px] bg-bg-primary text-text-primary border border-text-primary hover:bg-accent hover:border-accent hover:text-white hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
                Explore Bags
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 relative overflow-hidden min-h-[50vh] lg:min-h-0">
        <img 
          src={heroImage} 
          alt="Bags and footwear minimal setup" 
          className="absolute inset-0 w-full h-full object-cover object-center animate-image-reveal" 
        />
      </div>
    </section>
  );
};

export default Hero;
