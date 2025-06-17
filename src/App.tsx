import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Properties from './components/Properties';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Properties />
      <About />
      <Testimonials />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;