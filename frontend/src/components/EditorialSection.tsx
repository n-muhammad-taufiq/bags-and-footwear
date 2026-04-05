import React from 'react';
import editorialImage from '../assets/kier-in-sight-archives-R0mbwH2wxj0-unsplash.jpg';

const EditorialSection: React.FC = () => {
  return (
    <section className="bg-bg-primary py-32 px-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
        <div className="flex-1 max-w-[600px] lg:text-left text-center">
          <span className="uppercase tracking-[0.2em] text-sm font-semibold text-accent block mb-8">The Everyday Standard</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8 text-text-primary leading-tight">In a world full of fast choices, we believe in thoughtful ones.</h2>
          <p className="text-xl text-text-secondary font-light leading-relaxed">
            Every pair, every piece—made to support your daily journey with ease and confidence. 
            No excess. No noise. Just purpose-driven design that fits naturally into your life.
          </p>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <div className="rounded-lg overflow-hidden max-w-[500px] w-full aspect-[4/5] shadow-[0_20px_40px_rgba(0,0,0,0.06)] group cursor-pointer">
            <img 
              src={editorialImage} 
              alt="Editorial shot of purposeful design" 
              className="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
