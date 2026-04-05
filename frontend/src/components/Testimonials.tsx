import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-bg-tertiary py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1000px] mx-auto">
          
          <div className="bg-bg-primary p-12 rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between group cursor-default">
            <p className="text-xl font-normal text-text-primary leading-relaxed mb-8 italic">
              “Simple, comfortable, and exactly what I needed for daily use.”
            </p>
            <div className="flex justify-end">
              <span className="text-accent tracking-[2px] text-xl transition-transform duration-300 group-hover:scale-110 origin-right">★★★★★</span>
            </div>
          </div>

          <div className="bg-bg-primary p-12 rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between group cursor-default">
            <p className="text-xl font-normal text-text-primary leading-relaxed mb-8 italic">
              “Great quality and clean design—highly recommended.”
            </p>
            <div className="flex justify-end">
              <span className="text-accent tracking-[2px] text-xl transition-transform duration-300 group-hover:scale-110 origin-right">★★★★★</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
