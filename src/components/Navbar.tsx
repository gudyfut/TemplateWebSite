import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';

const SECTION_IDS = ['home', 'menu', 'testimonials'];

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  // usa estratégia similar ao script jQuery original: calcula posição de scroll
  // e determina a seção ativa; usa requestAnimationFrame para throttling e evitar flicker
  useEffect(() => {
    const headerEl = () => document.querySelector('header') as HTMLElement | null;
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    let ticking = false;

    const calcActive = () => {
      const header = headerEl();
      const headerHeight = header ? header.offsetHeight : 0;
      const scrollPosition = window.scrollY;

      let activeIndex = 0;

      for (let i = 0; i < sections.length; i++) {
        const sec = sections[i];
        const buffer = 10; // pequeno espaço para considerar a seção ativa
        const sectionTop = sec.offsetTop - headerHeight - buffer;
        const sectionBottom = sectionTop + sec.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          activeIndex = i;
          break;
        }
      }

      // se estivermos no final da página, marque a última seção
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 5) {
        activeIndex = sections.length - 1;
      }

      const newActive = SECTION_IDS[activeIndex];
      setActive((prev) => (prev === newActive ? prev : newActive));
      // header box-shadow (replicar comportamento original): sem shadow no topo
      try {
        if (header) {
          const shadowNeeded = (window.scrollY - headerHeight) > 0;
          const current = header.style.boxShadow || '';
          const desired = shadowNeeded ? '5px 1px 5px rgba(0, 0, 0, 0.1)' : 'none';
          if (current !== desired) header.style.boxShadow = desired;
        }
      } catch (e) {
        // ignore
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(calcActive);
        ticking = true;
      }
    };

    // inicializa estado
    calcActive();

    window.addEventListener('scroll', onScroll, { passive: true });
    // recoloca sections ao redimensionar (offsetTop pode mudar)
    window.addEventListener('resize', calcActive);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', calcActive);
    };
  }, []);

  return (
    <header>
      <nav id="navbar">
        <div className="nav-left">
          <i className="fa-solid fa-burger" id="nav_logo">La Vintagree</i>
        </div>

        <div className="nav-center">
          <ul id="nav_list">
            <li className={`nav-item ${active === 'home' ? 'active' : ''}`}>
              <a href="#home">Início</a>
            </li>
            <li className={`nav-item ${active === 'menu' ? 'active' : ''}`}>
              <a href="#menu">Cardápio</a>
            </li>
            <li className={`nav-item ${active === 'testimonials' ? 'active' : ''}`}>
              <a href="#testimonials">Avaliações</a>
            </li>
          </ul>
        </div>

        <div className="nav-right">
          <button className="btn-default">Peça aqui!</button>
          <button id="mobile_btn" onClick={() => setMobileOpen((s) => !s)} aria-expanded={mobileOpen} aria-label="Abrir menu">
            <i className={`fa-solid ${mobileOpen ? 'fa-x' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>

  <div id="mobile_menu" className={mobileOpen ? 'active' : ''} aria-hidden={!mobileOpen}>
        <ul id="mobile_nav_list">
          <li className={`nav-item ${active === 'home' ? 'active' : ''}`}><a href="#home">Início</a></li>
          <li className={`nav-item ${active === 'menu' ? 'active' : ''}`}><a href="#menu">Cardápio</a></li>
          <li className={`nav-item ${active === 'testimonials' ? 'active' : ''}`}><a href="#testimonials">Avaliações</a></li>
        </ul>
        <button className="btn-default" onClick={() => setMobileOpen(false)}>Peça aqui!</button>
      </div>
    </header>
  );
};

export default Navbar;