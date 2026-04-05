import React from 'react';
import ctaImage from '../assets/studio-crevettes-Ft3IiktwwzQ-unsplash.jpg';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-bg-primary py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row bg-bg-secondary rounded-lg overflow-hidden items-center">
          <div className="flex-1 w-full min-h-[400px]">
            <img src={ctaImage} alt="Premium essentials" className="w-full h-full object-cover min-h-[400px]" />
          </div>
          <div className="flex-1 p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-medium mb-10 text-text-primary leading-tight">Ready to upgrade your essentials?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="inline-flex items-center justify-center py-4 px-8 rounded-sm font-medium transition-all duration-300 min-w-[160px] bg-text-primary text-white hover:bg-accent hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
                Shop Now
              </button>
              <button className="inline-flex items-center justify-center py-4 px-8 rounded-sm font-medium transition-all duration-300 min-w-[160px] bg-bg-primary text-text-primary border border-text-primary hover:bg-accent hover:border-accent hover:text-white hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
                Browse Collections
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
