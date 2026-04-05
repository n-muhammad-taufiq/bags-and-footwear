import React from 'react';

const Storytelling: React.FC = () => {
  return (
    <section className="bg-bg-primary text-center py-24 md:py-32">
      <div className="container">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8 text-text-primary leading-tight">Designed for Real Life</h2>
          <p className="text-2xl md:text-3xl font-medium text-accent mb-6 leading-tight text-balance">
            We don’t chase attention—we build for consistency.
          </p>
          <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed text-balance">
            Our products are made for people who value reliability over noise, and comfort over complexity.
            Because what you wear and carry should support you, not distract you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Storytelling;
