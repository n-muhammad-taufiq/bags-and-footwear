import React from 'react';
import { ShoppingCart, Lock, Truck, HeadphonesIcon } from 'lucide-react';

const experiences = [
  { icon: <ShoppingCart size={22} />, label: 'Easy Ordering Process' },
  { icon: <Lock size={22} />, label: 'Secure Payments' },
  { icon: <Truck size={22} />, label: 'Fast Delivery' },
  { icon: <HeadphonesIcon size={22} />, label: 'Responsive Support' }
];

const CustomerExperience: React.FC = () => {
  return (
    <section className="bg-bg-secondary border-t border-b border-bg-tertiary py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-around items-center gap-10 md:gap-8 flex-wrap">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex items-center gap-4 group">
              <div className="text-accent flex items-center justify-center w-[50px] h-[50px] bg-bg-primary rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.03)] transition-transform duration-300 group-hover:scale-110">
                {exp.icon}
              </div>
              <span className="font-medium text-text-primary text-lg">{exp.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerExperience;
