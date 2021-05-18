import React from 'react';
import { ReactSVG } from 'react-svg';

import Button from '../../components/button';
import Header from '../../components/header';
import Footer from '../../components/footer';

import scrollIcon from '../../assets/images/icons/scroll.svg';
import rotateIcon from '../../assets/images/icons/rotate.svg';
import pencilIcon from '../../assets/images/icons/pencil.svg';
import teacherIcon from '../../assets/images/icons/teacher.svg';
import studentIcon from '../../assets/images/icons/student.svg';
import ideiaIcon from '../../assets/images/icons/ideia.svg';
import homeGirl from '../../assets/images/homeGirl.png';
import coinSave from '../../assets/images/illustrations/coin.svg';
import lineIcon from '../../assets/images/illustrations/line.svg';
import scrolllineIcon from '../../assets/images/illustrations/scroll-line.svg';
import pigSave from '../../assets/images/illustrations/big.svg';
import mooneySave from '../../assets/images/illustrations/money-bag.svg';
import camataraCollege from '../../assets/images/catamara.png';
import deltaCollege from '../../assets/images/delta.png';
import marconiCollege from '../../assets/images/marconi.png';
import omegaCollege from '../../assets/images/omega.png';
import santaCollege from '../../assets/images/santa-ursula.png';
import readyToBePart from '../../assets/images/readyToBePart.png';
import mooneyEdu from '../../assets/images/mooneyEdu.png';
import mooneyApp from '../../assets/images/mooneyApp.png';
import whatWeDoSvg from '../../assets/images/illustrations/whatWeDo.svg';
import storeApple from '../../assets/images/social/store-google.svg';
import storeGoogle from '../../assets/images/social/store-apple.svg';

import {
  Content,
  HeaderContent,
  Partners,
  WhyExist,
  OurStrategy,
  StrategyCard,
  Soluction,
  WhatWeDo,
  MooneyEdu,
  MooneyApp,
  Feedbacks,
  FeedbackCard,
  Ready,
} from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Content>
        <HeaderContent>
          <aside>
            <h3>Leve a metodologia MooneyEdu para sua escola</h3>
            <h1>
              Alfabetização Financeira de forma prática, simples, divertida e
              humanizada
            </h1>

            <a className="became-partner" href="#">
              <Button category="primary">Seja um parceiro</Button>
            </a>

            <img src={scrollIcon} alt="Scroll" />
          </aside>

          <img src={homeGirl} alt="Home girl" />
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
        <WhyExist>
          <div>
            <div className="illustration">
              <img src={coinSave} className="coin" alt="" />
              <img src={pigSave} className="pig" alt="" />
              <img src={mooneySave} className="bag" alt="" />
            </div>

            <aside>
              <h3>Nascemos com um propósito</h3>
              <h2>Por que a Mooney existe?</h2>
              <p>
                Nossa missão é melhorar a qualidade de vida das famílias a
                partir do ensino de educação financeira de maneira prática,
                simples e humanizada.
              </p>

              <a href="#">
                <Button category="ghost">Saiba mais</Button>
              </a>
            </aside>
          </div>
        </WhyExist>
        <OurStrategy>
          <div>
            <header>
              <h2>Qual é a nossa estratégia?</h2>
              <p>
                Desenvolvemos uma metodologia de Alfabetização Financeira
                prática, com atividades dinâmicas, focadas no desenvolvimento
                humano e nas competências socioemocionais, como
                autoconhecimento, autocontrole e empatia, consideradas
                habilidades fundamentais para a educação financeira efetiva.
              </p>
            </header>
            <div className="scroll">
              <section>
                <StrategyCard>
                  <img src={rotateIcon} alt="Rotate icon" />
                  <h4>Metodologias Ativas</h4>
                  <p>Sala de aula invertida, onde o jovem é o protoganista</p>
                </StrategyCard>
                <StrategyCard>
                  <img src={pencilIcon} alt="Pencil icon" />
                  <h4>Aprendizagem Baseada em Problema (PBL)</h4>
                  <p>
                    A construção do conhecimento a partir da discussão do
                    problema
                  </p>
                </StrategyCard>
                <StrategyCard>
                  <img src={teacherIcon} alt="Teacher icon" />
                  <h4>Empoderamento do Professor</h4>
                  <p>
                    Liberdade e flexibilidade para conduzir aulas engajantes e
                    interativas em um ambiente dinâmico
                  </p>
                </StrategyCard>
                <StrategyCard>
                  <img src={studentIcon} alt="Student icon" />
                  <h4>Formação Integral do aluno</h4>
                  <p>
                    Educação financeira muito além das competências técnicas da
                    matemática financeira
                  </p>
                </StrategyCard>
                <StrategyCard>
                  <img src={ideiaIcon} alt="Ideia icon" />
                  <h4>Inovação</h4>
                  <p>Recursos tecnológicos, mão na massa e gamificação</p>
                </StrategyCard>
                <img src={lineIcon} alt="Line" />
              </section>
            </div>
          </div>
        </OurStrategy>
        <Soluction>
          <div>
            <img src={scrolllineIcon} alt="Illustration" />
            <WhatWeDo>
              <ReactSVG src={whatWeDoSvg} />
              <aside>
                <h2>O que fazemos?</h2>
                <p>
                  Estimulamos e desenvolvemos a criação de hábitos financeiros
                  saudáveis para uma vida mais equilibrada. Educação Financeira
                  para jovens nas escolas, famílias e sociedade.
                </p>
              </aside>
            </WhatWeDo>
            <MooneyEdu>
              <aside>
                <h2>#MooneyEdu</h2>
                <p>
                  Metodologia de alfabetização financeira para colégios.
                  Educação Financeira trabalhada na sala de aula, utilizando
                  metodologias modernas e recursos tecnológicos.
                </p>

                <a href="#">
                  <Button category="white">Saiba mais</Button>
                </a>
              </aside>

              <img src={mooneyEdu} alt="MooneyEdu" />
            </MooneyEdu>
            <MooneyApp>
              <img src={mooneyApp} alt="MooneyApp" />

              <aside>
                <h2>#MooneyApp</h2>
                <p>
                  Aplicativo gamificado de educação financeira para além da sala
                  de aula. Funcionalidades práticas e a inclusão da família no
                  processo de aprendizagem.
                </p>

                <span>
                  <a href="#">
                    <img src={storeGoogle} alt="Store googlee" />
                  </a>
                  <a href="#">
                    <img src={storeApple} alt="Store Apple" />
                  </a>
                </span>
              </aside>
            </MooneyApp>
          </div>
        </Soluction>
        <Feedbacks>
          <div>
            <h3>Trabalho bem feito</h3>
            <h2>O que falam da Mooney?</h2>

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
        <Ready>
          <div>
            <aside>
              <h2>Pronto para fazer parte dessa nova revolução?</h2>
              <p>Fale com um de nossos representantes agora mesmo.</p>
              <a href="#">
                <Button category="primary">Seja um parceiro</Button>
              </a>
            </aside>

            <img src={readyToBePart} alt="Ready to be part" />
          </div>
        </Ready>
        <Footer />
      </Content>
    </>
  );
};

export default Home;
