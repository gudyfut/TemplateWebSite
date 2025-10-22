import React from 'react';
import chef from '../assets/images/chef.png';
import cliente1 from '../assets/images/cliente.png';
import cliente2 from '../assets/images/cliente2.png';
import cliente3 from '../assets/images/cliente3.png';
import cliente4 from '../assets/images/cliente4.png';
import '../styles/Testimonials.css';

const depoimentos = [
  { nome: 'Gabriel Tauchen', texto: 'Extremamente saboroso e delicioso! A melhor experiência que já tive!!!', img: cliente1 },
  { nome: 'Vitor Cebola', texto: 'Valeu cada centavo! Experiência surreal.', img: cliente3 },
  { nome: 'Emanuel Martins', texto: 'O melhor lugar do mundo, ambiente maravilhoso!', img: cliente4 },
  { nome: 'Fulana de Tal', texto: 'Esse lugar é especial para mim!', img: cliente2 },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <img src={chef} id="testimonial_chef" alt="Chef" />
      <div id="testimonials_content">
        <h2 className="section-title">Depoimentos</h2>
        <h3 className="section-subtitle">O que os clientes falam sobre nós</h3>
        <div id="feedbacks">
          {depoimentos.map((d, i) => (
            <div key={i} className="feedback">
              <img src={d.img} className="feedback-avatar" alt={d.nome} />
              <div className="feedback-content">
                <p>
                  {d.nome}
                  <span>
                    {[...Array(5)].map((_, j) => <i key={j} className="fa-solid fa-star"></i>)}
                  </span>
                </p>
                <p>{d.texto}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="btn-default">Ver mais avaliações</button>
      </div>
    </section>
  );
};

export default Testimonials;
