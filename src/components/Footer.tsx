import wave from '../assets/images/wave.svg';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
  <img id="wave" src={wave} alt="Decorativo" />
      <div id="footer_items">
        <span id="copyright">© 2025 Restaurante Delícia</span>
        <div className="social-media-buttons">
          <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
