import React from 'react';

import logoSvg from '../../assets/images/icons/logo.svg';
import linkedin from '../../assets/images/social/linkedin.svg';
import whatsapp from '../../assets/images/social/whatsapp.svg';
import instagram from '../../assets/images/social/instagram.svg';
import applestore from '../../assets/images/social/applestore.svg';
import googleplay from '../../assets/images/social/googleplay.svg';

import { Container } from './styles';
import { Link } from 'react-router-dom';

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
            <strong>Perguntas? Entre em contato!</strong>
            <span>parcerias@mooneyapp.com.br</span>
          </div>
        </aside>

        <aside className="links">
          <article>
            <strong>Mooney</strong>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/mooneyedu">Mooney Edu</Link>
              </li>
              <li>
                <Link to="/mooneyapp">Mooney App</Link>
              </li>
              <li>
                <Link to="/partners">Parceiros</Link>
              </li>
              <li>Blog</li>
              <li>
                <Link to="/contact">Contato</Link>
              </li>
            </ul>
          </article>
          <article>
            <strong>Hashtags</strong>
            <ul>
              <li>
                <Link to="/mooneyedu">#MooneyEdu</Link>
              </li>
              <li>
                <Link to="/mooneyapp">#MooneyApp</Link>
              </li>
              <li>
                <Link to="/sejamooney">#SejaMooney</Link>
              </li>
              <li>
                <Link to="/partners">#Mooners</Link>
              </li>
            </ul>
          </article>
          <article>
            <strong>Links úteis</strong>
            <ul>
              <li>
                <Link to="/partners">Depoimentos</Link>
              </li>
              <li>
                <Link to="/contact">Dúvidas frequentes</Link>
              </li>
              <li>
                <Link to="/contact">Contato</Link>
              </li>
            </ul>
          </article>
          <article className="social">
            <strong>Siga-nos</strong>
            <ul>
              <li>
                <a
                  href="http://api.whatsapp.com/send?phone=5511971188008"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={whatsapp} alt="Whatsapp" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/mooneyedu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="Instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/mooneyedu/mycompany/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="Linkedin" />
                </a>
              </li>
            </ul>
          </article>
        </aside>

        <span className="stores">
          <a
            href="https://play.google.com/store/apps/details?id=br.com.mooney.missions&hl=pt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={googleplay} alt="googleplay" />
          </a>
          <a
            href="https://apps.apple.com/br/app/mooney/id1509285822"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={applestore} alt="applestore" />
          </a>
        </span>
      </div>
    </Container>
  );
};

export default Footer;
