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
        <OurMetodology>
          <div>
            <h2>
              Nossa metodologia e planos de aulas são ideais para colégios que
              querem{' '}
              <strong>
                implementar um projeto de educação financeira de sucesso!
              </strong>
            </h2>

            <section>
              <article>
                <h4>
                  Seu colégio já trabalha com educação financeira na grade
                  curricular?
                </h4>
                <p>
                  A Mooney Edu proporciona de forma complementar uma excelente
                  experiência de formação integral do aluno, para colégios que
                  já trabalham educação financeira somente pela perspectiva
                  técnica (livros e apostilas).
                </p>
              </article>

              <article>
                <h4>Acreditamos no empoderamento do professor</h4>
                <p>
                  Acreditamos no empoderamento do professor, além dos
                  treinamentos e capacitações contínuas para aplicar a
                  metodologia em sala de aula, desenvolvemos a educação
                  financeira do docente para a aplicação prática em sua própria
                  vida.
                </p>
              </article>
            </section>
          </div>
        </OurMetodology>
        <Checks>
          <div>
            <h2>
              Educação Financeira de forma prática, simples, divertida e
              humanizada
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
                  <p>Aulas dinâmicas e interativas: Alto Engajamento</p>
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
                    conhecimento a partir da discussão do problema.
                  </p>
                </span>
                <span>
                  <img src={checkIcon} alt="Check icon" />
                  <p>Metodologia alinhada à BNCC - MEC</p>
                </span>
                <span>
                  <img src={checkIcon} alt="Check icon" />
                  <p>Acompanhamento pedagógico por especialistas Mooney</p>
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
