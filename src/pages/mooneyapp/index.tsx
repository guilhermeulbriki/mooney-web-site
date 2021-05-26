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
                href="https://play.google.com/store/apps/details?id=br.com.mooney.missions&hl=pt"
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
              <h2>Aplicativo gamificado. Jovens mais engajados!</h2>
              <p>
                Hábitos financeiros saudáveis são construídos ao mesmo tempo que
                jovem aprende e se diverte.
              </p>
            </aside>
          </Mockup>
          <Mockup side="right">
            <img src={mockuptwo} alt="Mokcup" />

            <aside>
              <h2>Cofrinhos virtuais!</h2>
              <p>
                Crie metas e objetivos. Aproveite a jornada, ganhe recompensas e
                se divirta muito.
              </p>
            </aside>
          </Mockup>
          <Mockup side="left">
            <img src={mockupthree} alt="Mokcup" />

            <aside>
              <h2>Jornada Mooney. Conheça a trilha do conhecimento!</h2>
              <p>
                Área exclusiva para alunos dos colégios parceiros. Conteúdo
                complementar aos temas tratados em sala de aula e muita
                interatividade.
              </p>
            </aside>
          </Mockup>
          <Mockup side="right">
            <img src={mockupfour} alt="Mokcup" />

            <aside>
              <h2>Tarefas pedagógicas!</h2>
              <p>
                Vamos tratar do assunto em família? Crie tarefas remuneradas ou
                não. Uma ótima ferramenta para discutir o papel da colaboração
                do jovem em um ambiente coletivo.
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
