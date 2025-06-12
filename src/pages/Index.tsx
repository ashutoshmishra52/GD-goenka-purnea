
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Academics from '../components/Academics';
import Testimonials from '../components/Testimonials';
import Admission from '../components/Admission';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Academics />
      <Testimonials />
      <Admission />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
