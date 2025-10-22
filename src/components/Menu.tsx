import React from 'react';
import dish1 from '../assets/images/dish.png';
import dish2 from '../assets/images/dish2.png';
import dish3 from '../assets/images/dish3.png';
import dish4 from '../assets/images/dish4.png';
import '../styles/Menu.css';

const pratos = [
  { nome: 'Lámem', descricao: 'Saboreie nosso autêntico lámen, preparado com caldo rico e profundo, macarrão artesanal e uma seleção de ingredientes frescos. Uma verdadeira delícia que aquece o corpo e a alma!', preco: 'R$19,50', img: dish1, estrelas: 5 },
  { nome: 'BLT', descricao: 'Experimente nosso sanduíche BLT clássico, feito com bacon crocante, alface fresca e tomate suculento, tudo no pão tostado.', preco: 'R$15,99', img: dish2, estrelas: 3 },
  { nome: 'SmoothieTooth de Kiwi', descricao: 'Feito com kiwis frescos, banana e um toque de mel, nosso smoothie é a escolha perfeita para um lanche saudável.', preco: 'R$22,59', img: dish3, estrelas: 4 },
  { nome: 'Lá Mocarrena', descricao: 'Macarrão com camarão grelhado, abobrinha e molho de limão, uma opção leve e saborosa.', preco: 'R$32,19', img: dish4, estrelas: 5 },
];

const Menu = () => {
  return (
    <section id="menu">
      <h2 className="section-title">Cardápio</h2>
      <h3 className="section-subtitle">Nossos pratos especiais</h3>

      <div id="dishes">
        {pratos.map((dish, index) => (
          <div className="dish" key={index}>
            <div className="dish-heart"><i className="fa-solid fa-heart"></i></div>
            <img src={dish.img} className="dish-image" alt={dish.nome} />
            <h3 className="dish-title">{dish.nome}</h3>
            <span className="dish-description">{dish.descricao}</span>
            <div className="dish-rate">
              {Array.from({ length: dish.estrelas }).map((_, i) => (
                <i key={i} className="fa-solid fa-star"></i>
              ))}
              <span>({Math.floor(Math.random() * 5000) + 200}+)</span>
            </div>
            <div className="dish-price">
              <h4>{dish.preco}</h4>
              <button className="btn-default"><i className="fa-solid fa-basket-shopping"></i></button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
