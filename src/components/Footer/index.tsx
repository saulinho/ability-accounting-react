import logoImg from '../../assets/logo.svg';
import whatsappImg from '../../assets/whatsapp.svg';
import instagramImg from '../../assets/instagram.svg';
import facebookImg from '../../assets/facebook.svg';


import { Container} from "./styles";

export function Footer() {
  return (
    <Container>
      <div className="footer-contact">
        <div className="footer-logo">
          <a href="https://www.abilityonline.com.br" target="_blank" rel="noreferrer">
            <img src={logoImg} alt="Logo Ability" />
          </a>
        </div>

        <div className="footer-contact-address">
          <div>
            <h2>Contato</h2>
          </div>
          <div>
            <span>Praça Francisco Torquato de Almeida, 29</span>
            <br/>
            <span>Centro - Pará de Minas/MG</span>
            <br/>
            <span>(37) 3232-1127</span>
          </div>
        </div>

        <div className="footer-social-media">
          <a href="https://web.whatsapp.com/send?phone=553732321127" target="_blank" rel="noreferrer">
            <img src={whatsappImg} alt="WhatsApp Ability" />
          </a>

          <a href="https://www.instagram.com/abilityonline/" target="_blank" rel="noreferrer">
            <img src={instagramImg} alt="Instagram Ability" />
          </a>


          <a href="https://www.facebook.com/abilityinformatica" target="_blank" rel="noreferrer">
            <img src={facebookImg} alt="Facebook Ability" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <span>© 2021 - Todos os direitos reservados.</span>
      </div>
    </Container>
    
  );
}