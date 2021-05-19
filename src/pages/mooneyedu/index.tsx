import React from 'react';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';

import Footer from '../../components/footer';
import Header from '../../components/header';
import Button from '../../components/button';

import mooneyEduBack from '../../assets/images/mooneyEdu-back.png';
import mooneyEduIlu from '../../assets/images/illustrations/mooneyEdu.svg';

import { Container, HeaderContent, MoreThanMath } from './styles';

const Mooneyedu: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <HeaderContent>
          <aside>
            <h3>#MooneyEdu</h3>
            <h1>Educação Financeira de verdade no seu colégio!</h1>
            <p>
              Trabalhamos com o conceito de Alfabetização Financeira, com o
              objetivo de desenvolver a competência financeira dos alunos de
              forma integral, dos conceitos técnicos à habilidades
              socioemocionais.
            </p>

            <Link className="became-partner" to="/">
              <Button category="primary">Seja um parceiro</Button>
            </Link>
          </aside>

          <img src={mooneyEduBack} alt="MooneyEdu" />
        </HeaderContent>
        <MoreThanMath>
          <div className="content">
            <ReactSVG src={mooneyEduIlu} />

            <aside>
              <h2>Muito além da matemática financeira</h2>
              <p>
                educação financeira está diretamente relacionada às escolhas,
                objetivos, projeto de vida e sonhos. Desenvolvemos uma
                metodologia transversal e interdisciplinar de alfabetização
                financeira humanizada.
              </p>
            </aside>
          </div>
        </MoreThanMath>
      </Container>
      <Footer />
    </>
  );
};

export default Mooneyedu;
