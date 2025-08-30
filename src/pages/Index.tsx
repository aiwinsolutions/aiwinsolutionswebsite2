import React from 'react';
import Navigation from '../components/ui/navigation';
import Hero from '../components/sections/Hero';
import Mission from '../components/sections/Mission';
import Services from '../components/sections/Services';
import Testimonials from '../components/sections/Testimonials';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Mission />
      <Services />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
