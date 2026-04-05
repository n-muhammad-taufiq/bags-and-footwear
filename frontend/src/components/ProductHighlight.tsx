import React from 'react';
import shoesHighlight from '../assets/wiser-by-the-mile-OFHkPCkhYEY-unsplash.jpg';
import bagHighlight from '../assets/zakaria-issaad-dG8QIqUer7o-unsplash.jpg';

const ProductHighlight: React.FC = () => {
  return (
    <section className="bg-bg-primary py-24">
      <div className="container">
        
        {/* Highlight 1 - Shoes */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-32 last:mb-0">
          <div className="flex-1 aspect-square rounded-lg overflow-hidden w-full max-w-[600px]">
            <img src={shoesHighlight} alt="Footwear offering grip and support" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 max-w-[450px] md:text-left text-center">
            <h2 className="text-3xl lg:text-4xl font-medium mb-6 text-text-primary">Built for Movement</h2>
            <p className="text-text-secondary text-lg lg:text-xl leading-relaxed font-light">
              Whether you're navigating busy streets or long days, our footwear adapts to your pace—offering balance, grip, and support where it matters most.
            </p>
          </div>
        </div>

        {/* Highlight 2 - Bags */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24 mb-32 last:mb-0">
          <div className="flex-1 aspect-square rounded-lg overflow-hidden w-full max-w-[600px]">
            <img src={bagHighlight} alt="Practical bag with refined finish" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 max-w-[450px] md:text-left text-center">
            <h2 className="text-3xl lg:text-4xl font-medium mb-6 text-text-primary">Carry What Matters</h2>
            <p className="text-text-secondary text-lg lg:text-xl leading-relaxed font-light">
              Our bags are designed to hold your essentials without weighing you down—practical layouts with a refined finish.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductHighlight;
