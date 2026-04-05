import React from 'react';
import Hero from '../components/Hero';
import FeaturedCategories from '../components/FeaturedCategories';
import WhyChooseUs from '../components/WhyChooseUs';
import EditorialSection from '../components/EditorialSection';
import NewArrivals from '../components/NewArrivals';
import ProductHighlight from '../components/ProductHighlight';
import CustomerExperience from '../components/CustomerExperience';
import Storytelling from '../components/Storytelling';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <WhyChooseUs />
      <EditorialSection />
      <NewArrivals />
      <ProductHighlight />
      <CustomerExperience />
      <Storytelling />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Home;
