import React from 'react';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';

import Footer from '../../components/footer';
import Header from '../../components/header';
import Button from '../../components/button';

import checkIcon from '../../assets/images/icons/check.svg';
import mooneyEduBack from '../../assets/images/mooneyEdu-back.png';
import mooneyEduIlu from '../../assets/images/illustrations/mooneyEdu.svg';

import {
  Checks,
  Container,
  HeaderContent,
  MoreThanMath,
  OurMetodology,
} from './styles';

const Mooneyedu: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <HeaderContent>
          <aside>
            <h3>#MooneyEdu</h3>
            <h1>Educação Financeira com abordagem integral no seu colégio!</h1>
            <p>
              Trabalhamos com o conceito de Alfabetização Financeira, com o
              objetivo de desenvolver a competência financeira dos alunos de
              forma integral, dos conceitos técnicos às habilidades
              socioemocionais.
            </p>

            <Link className="became-partner" to="/sejamooney">
              <Button category="primary">Seja um parceiro</Button>
            </Link>
          </aside>

          <img src={mooneyEduBack} alt="MooneyEdu" />
        </HeaderContent>
        <MoreThanMath>
          <div className="content">
            <ReactSVG src={mooneyEduIlu} />

            <aside>
              <h2>Muito além da Matemática Financeira</h2>
              <p>
                Educação Financeira está diretamente relacionada às escolhas,
                objetivos, projeto de vida e sonhos. Desenvolvemos uma
                metodologia transversal e interdisciplinar de Alfabetização
                Financeira humanizada.
              </p>
            </aside>
          </div>
        </MoreThanMath>
        <OurMetodology>
          <div>
            <h2>
              Nossa metodologia e planos de aulas são ideais para colégios que
              querem{' '}
              <strong>um projeto de educação financeira de sucesso!</strong>
            </h2>

            <section>
              <article>
                <h4>Seu colégio já trabalha com educação financeira?</h4>
                <p>
                  A Mooney Edu proporciona de forma complementar uma excelente
                  experiência de formação integral do aluno, para colégios que
                  já trabalham Educação Financeira somente pela perspectiva
                  técnica (livros e apostilas).
                </p>
              </article>

              <article>
                <h4>Acreditamos no desenvolvimento do professor!</h4>
                <p>
                  Acreditamos no desenvolvimento do professor, além dos
                  treinamentos e capacitações contínuas para aplicar a
                  metodologia em sala de aula, desenvolvemos a Educação
                  Financeira do docente para a aplicação prática em sua vida.
                </p>
              </article>
            </section>
          </div>
        </OurMetodology>
        <Checks>
          <div>
            <h2>
              Educação Financeira de forma prática, simples, divertida e
              humanizada!
            </h2>

            <section>
              <article>
                <span>
                  <img src={checkIcon} alt="Check icon" />
                  <p>
                    Flexibilidade pedagógica: de acordo com a necessidade do
                    colégio e espaço na grade curricular
                  </p>
                </span>
                <span>
                  <img src={checkIcon} alt="Check icon" />
                  <p>
                    Aulas dinâmicas e interativas: Alto Engajamento dos alunos
                  </p>
                </span>
                <span>
                  <img src={checkIcon} alt="Check icon" />
                  <p>Capacitação e treinamento contínuo dos professores</p>
                </span>
                <span>
                  <img src={checkIcon} alt="Check icon" />
                  <p>
                    Eventos especiais aos alunos, responsáveis e colaboradores
                    dos colégios parceiros
                  </p>
                </span>
              </article>

              <article>
                <span>
                  <img src={checkIcon} alt="Check icon" />
                  <p>
                    Aprendizagem Baseada em Problemas (PBL): a construção do
                    conhecimento a partir de discussões de problemas do dia a
                    dia
                  </p>
                </span>
                <span>
                  <img src={checkIcon} alt="Check icon" />
                  <p>
                    Metodologia alinhada à Base Nacional Comum Curricular (BNCC
                    - MEC)
                  </p>
                </span>
                <span>
                  <img src={checkIcon} alt="Check icon" />
                  <p>
                    Acompanhamento pedagógico feito pelos especialistas em
                    educação da Mooney
                  </p>
                </span>
              </article>
            </section>
          </div>
        </Checks>
      </Container>
      <Footer />
    </>
  );
};

export default Mooneyedu;
