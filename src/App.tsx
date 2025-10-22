import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ScrollReveal from 'scrollreveal';

function App() {
  useEffect(() => {
    ScrollReveal().reveal('#cta', { origin: 'left', duration: 2000, distance: '20%' });
    ScrollReveal().reveal('.dish', { origin: 'left', duration: 2000, distance: '20%' });
    ScrollReveal().reveal('#testimonial_chef', { origin: 'left', duration: 1000, distance: '20%' });
    ScrollReveal().reveal('.feedback', { origin: 'right', duration: 1000, distance: '20%' });
  }, []);

  return (
    <>
      <Navbar />
      <main id="content">
        <Home />
        <Menu />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;
