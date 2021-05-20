import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../components/footer';
import Header from '../../components/header';

import storeBlackGoogle from '../../assets/images/social/store-google-black.svg';
import storeBlackApple from '../../assets/images/social/store-apple-black.svg';
import mooneyAppBack from '../../assets/images/mooneyapp-back.png';
import mockupone from '../../assets/images/mockup-one.png';
import mockupthree from '../../assets/images/mockup-three.png';
import mockuptwo from '../../assets/images/mockup-two.png';
import mockupfour from '../../assets/images/mockup-four.png';
import readyToBePart from '../../assets/images/readyToBePart.png';

import {
  Container,
  HeaderContent,
  BePart,
  Mockups,
  Mockup,
  Ready,
} from './styles';
import Button from '../../components/button';

const Mooneyapp: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <HeaderContent>
          <aside>
            <h3>#MooneyApp</h3>
            <h1>
              Educação Financeira em família, de forma divertida e engajante
            </h1>
            <p>
              Aplicativo gamificado de Educação Financeira para além do ambiente
              de aprendizagem. Funcionalidades práticas e a inclusão da família.
            </p>

            <span>
              <a
                href="https://play.google.com/store?hl=pt_BR&gl=US"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={storeBlackGoogle} alt="Store google" />
              </a>
              <a
                href="https://apps.apple.com/br/app/mooney/id1509285822"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={storeBlackApple} alt="Store apple" />
              </a>
            </span>
          </aside>

          <img src={mooneyAppBack} alt="Mooneyapp" />
        </HeaderContent>
        <BePart>
          <h2>
            Faça parte dessa revolução e{' '}
            <strong>leve a Educação Financeira</strong> com você
          </h2>
        </BePart>
        <Mockups>
          <Mockup side="left">
            <img src={mockupone} alt="Mokcup" />

            <aside>
              <h2>
                Pets Virtuais (Mooners) que engaja o aluno em sua jornada de
                autonomia financeira.
              </h2>
              <p>
                Hábitos financeiros são constituídos ao mesmo tempo que aluno
                faz uma coleção de Mooners e pode trocar com amigos.
              </p>
            </aside>
          </Mockup>
          <Mockup side="right">
            <img src={mockuptwo} alt="Mokcup" />

            <aside>
              <h2>
                Cofrinhos virtuais para poupar para metas de curto, médio e
                longo prazo.
              </h2>
              <p>
                Hábitos financeiros são constituídos ao mesmo tempo que aluno
                faz uma coleção de Mooners e pode trocar com amigos.
              </p>
            </aside>
          </Mockup>
          <Mockup side="left">
            <img src={mockupthree} alt="Mokcup" />

            <aside>
              <h2>
                Jornada Mooney: trilha de conteúdo complementar aos tópicos
                trabalhados em sala de aula
              </h2>
              <p>
                Hábitos financeiros são constituídos ao mesmo tempo que aluno
                faz uma coleção de Mooners e pode trocar com amigos.
              </p>
            </aside>
          </Mockup>
          <Mockup side="right">
            <img src={mockupfour} alt="Mokcup" />

            <aside>
              <h2>
                Tarefas pedagógicas em famílias que ensinam o papel da
                colaboração e do trabalho em ambiente coletivo
              </h2>
              <p>
                trazendo também a família nessa jornada de desenvolvimento da
                competência financeira do jovem
              </p>
            </aside>
          </Mockup>
        </Mockups>
        <Ready>
          <div>
            <aside>
              <h2>Pronto para fazer parte dessa revolução?</h2>
              <p>Fale com um de nossos especialistas.</p>

              <Link to="/sejamooney">
                <Button category="primary">Seja um parceiro</Button>
              </Link>
            </aside>

            <img src={readyToBePart} alt="Ready to be part" />
          </div>
        </Ready>
      </Container>
      <Footer />
    </>
  );
};

export default Mooneyapp;
