import React from 'react';
import hero from '../assets/images/hero.png';
import '../styles/Home.css';

const Home = () => {
  return (
    <section id="home">
      <div className="shape"></div>

      <div id="cta">
        <h1 className="title">
          O sabor que vai até <span>você</span>
        </h1>

        <p className="description">
          Descubra uma experiência gastronômica única no "Lá Vintagree"! Combinando tradição e inovação, nosso restaurante oferece pratos que são verdadeiras obras de arte...
        </p>

        <div id="cta_buttons">
          <a href="#" className="btn-default">Ver cardápio</a>
          <a href="tel:+5555555555" id="phone_button">
            <button className="btn-default">
              <i className="fa-solid fa-phone"></i>
            </button>
            (35) 9708-6357
          </a>
        </div>

        <div className="social-media-buttons">
          <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
        </div>
      </div>

      <div id="banner">
        <img src={hero} alt="Prato principal" />
      </div>
    </section>
  );
};

export default Home;
