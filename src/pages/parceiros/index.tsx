import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

import Button from '../../components/button';
import Footer from '../../components/footer';
import Header from '../../components/header';
import partnersBack from '../../assets/images/partners.png';
import camataraCollege from '../../assets/images/catamara.png';
import deltaCollege from '../../assets/images/delta.png';
import marconiCollege from '../../assets/images/marconi.png';
import omegaCollege from '../../assets/images/omega.png';
import santaCollege from '../../assets/images/santa-ursula.png';
import map from '../../assets/images/illustrations/map.svg';
import bookIcon from '../../assets/images/icons/book.svg';
import backpackIcon from '../../assets/images/icons/backpack.svg';

import {
  Container,
  FeedbackCard,
  Feedbacks,
  HeaderContent,
  Partners,
  Presence,
} from './styles';

const Parceiros: React.FC = () => {
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

          <img src={partnersBack} alt="MooneyEdu" />
        </HeaderContent>
        <Partners>
          <div>
            <h2>Mais de 50 colégios parceiros, alguns deles:</h2>
            <div className="scroll">
              <div className="content">
                <img src={camataraCollege} alt="College" />
                <img src={deltaCollege} alt="College" />
                <img src={marconiCollege} alt="College" />
                <img src={omegaCollege} alt="College" />
                <img src={santaCollege} alt="College" />
              </div>
            </div>
          </div>
        </Partners>
        <Presence>
          <div>
            <h4>
              Presente em <strong>10 estados</strong> do Brasil
            </h4>

            <article>
              <img src={map} alt="Map" />

              <aside>
                <div>
                  <img src={bookIcon} alt="Book" />

                  <section>
                    <h4>+ 50 escolas</h4>
                    <p>
                      escolas do Brasil já são #Mooners e carregam nossa missão
                      com eles.
                    </p>
                  </section>
                </div>

                <div>
                  <img src={backpackIcon} alt="Backpack" />

                  <section>
                    <h4>20 mil</h4>
                    <p>alunos da base das escolas em todo o país.</p>
                  </section>
                </div>
              </aside>
            </article>
          </div>
        </Presence>
        <Feedbacks>
          <div>
            <h3>Trabalho bem feito</h3>
            <h2>O que falam da Mooney?</h2>

            <section className="video">
              <ReactPlayer
                controls={true}
                url="https://www.youtube.com/watch?v=Qn2tvtCkI2w&t=375s"
              />

              <p>
                Depoimento de José Pereira da Cruz, diretor da escola Afonso
                Pena
              </p>
            </section>

            <div className="scroll">
              <aside draggable>
                <FeedbackCard>
                  <p>
                    “A aprendizagem de finanças desde o período escolar permite
                    estimular e mostrar aos jovens a importância de pensar no
                    futuro considerando conceitos como: ganhar, economizar,
                    planejar e investir para atingir seus sonhos.”
                  </p>

                  <section>
                    <strong>Luã Marins</strong>
                    <span>Head Pedagógico na Inspira Rede de Educadores</span>
                  </section>
                </FeedbackCard>
                <FeedbackCard>
                  <p>
                    “A Mooney trouxe uma metodologia inovadora, transformando a
                    Educação Financeira em um estudo mais interativo e próximo
                    da realidade dos alunos. As aulas, através de propostas
                    relacionadas ao cotidiano, proporcionam a ... “
                  </p>

                  <section>
                    <strong>Ana Teresa Alves</strong>
                    <span>Professora do Colégio Objetivo Guaxupé</span>
                  </section>
                </FeedbackCard>
                <FeedbackCard>
                  <p>
                    “Trabalhar Educação Financeira de maneira leve e dinâmica,
                    como é a proposta da Mooney, está sendo prazeroso tanto para
                    os alunos como para os professores.”
                  </p>

                  <section>
                    <strong>Cristina Santos</strong>
                    <span>Professora do Colégio Poty</span>
                  </section>
                </FeedbackCard>
                <FeedbackCard>
                  <p>
                    “Para o Colégio Itamarati está sendo fantástica essa
                    parceria com a Mooney. Os nossos estudantes estão tendo a
                    oportunidade de aprender sobre auto gestão financeira
                    juntamente com um aprofundamento sócio emocional que amplia
                    o ... ”
                  </p>

                  <section>
                    <strong>Susana Prado</strong>
                    <span>Diretora Pedagógica do Colégio Itamarati</span>
                  </section>
                </FeedbackCard>
                <FeedbackCard>
                  <p>
                    “A experiência tem sido muito positiva, e os alunos
                    interagem com a plataforma de forma divertida.”
                  </p>

                  <section>
                    <strong>Thalyta Novaes</strong>
                    <span>Professora do Colégio Porto União</span>
                  </section>
                </FeedbackCard>
                <FeedbackCard>
                  <p>
                    “A interação tem sido geral, todos se envolvem e gostam de
                    participar dos desafios.”
                  </p>

                  <section>
                    <strong>Taciana Aceiro</strong>
                    <span>Coordenadora do Colégio Itamarati</span>
                  </section>
                </FeedbackCard>
              </aside>
            </div>
          </div>
        </Feedbacks>
      </Container>
      <Footer />
    </>
  );
};

export default Parceiros;
