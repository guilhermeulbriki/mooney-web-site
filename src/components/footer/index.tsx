import React from 'react';

import logoSvg from '../../assets/images/icons/logo.svg';
import linkedin from '../../assets/images/social/linkedin.svg';
import whatsapp from '../../assets/images/social/whatsapp.svg';
import instagram from '../../assets/images/social/instagram.svg';
import applestore from '../../assets/images/social/applestore.svg';
import googleplay from '../../assets/images/social/googleplay.svg';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <aside className="mooney">
          <div className="logo">
            <img src={logoSvg} alt="Mooney" />
            <span>© 2021 Mooney. All rights reserved.</span>
          </div>

          <div className="email">
            <strong>Perguntas? Manda ai!</strong>
            <span>parcerias@mooneyapp.com.br</span>
          </div>
        </aside>

        <aside className="links">
          <article>
            <strong>Mooney</strong>
            <ul>
              <li>Home</li>
              <li>Soluções</li>
              <li>Parceiros</li>
              <li>Blog</li>
              <li>Contato</li>
            </ul>
          </article>
          <article>
            <strong>Hashtags</strong>
            <ul>
              <li>#MooneyEdu</li>
              <li>#MooneyApp</li>
              <li>#SejaMooney</li>
              <li>#Mooners</li>
            </ul>
          </article>
          <article>
            <strong>Links úteis</strong>
            <ul>
              <li>Depoimentos do diretores</li>
              <li>Dúvidas frequentes</li>
              <li>Contato</li>
            </ul>
          </article>
          <article className="social">
            <strong>Siga-nos</strong>
            <ul>
              <li>
                <img src={whatsapp} alt="Whatsapp" />
              </li>
              <li>
                <img src={instagram} alt="Instagram" />
              </li>
              <li>
                <img src={linkedin} alt="Linkedin" />
              </li>
            </ul>
          </article>
        </aside>

        <span className="stores">
          <img src={applestore} alt="applestore" />
          <img src={googleplay} alt="googleplay" />
        </span>
      </div>
    </Container>
  );
};

export default Footer;
