import React from 'react';
import { ShieldCheck, Feather, Clock, Droplet } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck size={32} />,
    title: 'Quality Materials',
    description: 'Built to last with carefully selected fabrics and finishes'
  },
  {
    icon: <Feather size={32} />,
    title: 'Comfort First',
    description: 'Designed for long wear without compromise'
  },
  {
    icon: <Clock size={32} />,
    title: 'Minimal & Timeless',
    description: 'Styles that stay relevant beyond trends'
  },
  {
    icon: <Droplet size={32} />,
    title: 'Reliable Craftsmanship',
    description: 'Attention to detail in every stitch'
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-bg-secondary py-24">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-4 p-8 bg-bg-primary rounded-md transition-all duration-300 min-h-[224px] hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] group">
              <div className="text-accent mb-2 transition-transform duration-300 group-hover:scale-110">{feature.icon}</div>
              <h4 className="text-xl font-medium text-text-primary">{feature.title}</h4>
              <p className="text-text-secondary text-[0.95rem] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
