import React, { useCallback, useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';

import Button from '../../components/button';
import Header from '../../components/header';
import Footer from '../../components/footer';

import scrollIcon from '../../assets/images/icons/scroll.svg';
import rotateIcon from '../../assets/images/icons/rotate.svg';
import pencilIcon from '../../assets/images/icons/pencil.svg';
import teacherIcon from '../../assets/images/icons/teacher.svg';
import studentIcon from '../../assets/images/icons/student.svg';
import arrowIcon from '../../assets/images/icons/arrow.svg';
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
import googlePlay from '../../assets/images/social/store-google.svg';
import appStore from '../../assets/images/social/store-apple.svg';

import imageOne from '../../assets/images/feedbacks/image-one.png';
import imageTwo from '../../assets/images/feedbacks/image-two.png';
import imageThree from '../../assets/images/feedbacks/image-three.png';
import imageFour from '../../assets/images/feedbacks/image-four.png';
import imageFive from '../../assets/images/feedbacks/image-five.png';
import imageSix from '../../assets/images/feedbacks/image-six.png';
import imageSeven from '../../assets/images/feedbacks/image-seven.png';
import imageEight from '../../assets/images/feedbacks/image-eight.png';

import { FeedbacksData } from '../../data/feedbacks';

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
import ReactPlayer from 'react-player';

interface IFeedbacks {
  id: number;
  name: string;
  college: string;
  message: string;
  picture: string;
}

const Home: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<IFeedbacks[]>([]);
  const [avatars, setAvatars] = useState<string[]>([]);
  const [readMore, setReadMore] = useState(false);
  const [feedbackReadMore, setFeedbackReadMore] = useState<number | null>(null);

  useEffect(() => {
    setFeedbacks(FeedbacksData);

    setAvatars([
      imageOne,
      imageTwo,
      imageThree,
      imageFour,
      imageFive,
      imageSix,
      imageSeven,
      imageEight,
    ]);
  }, []);

  const handleFeedbackReadMore = useCallback(
    (feedbackId: number) => {
      if (feedbackReadMore === feedbackId) {
        setReadMore(!readMore);
      } else {
        setReadMore(true);
        setFeedbackReadMore(feedbackId);
      }
    },
    [feedbackReadMore, readMore]
  );

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

            <Link className="became-partner" to="/sejamooney">
              <Button category="primary">Seja um parceiro</Button>
            </Link>

            <img src={scrollIcon} alt="Scroll" />
          </aside>

          <img src={homeGirl} alt="Home girl" />
        </HeaderContent>
        <Partners>
          <div>
            <h2>Mais de 50 colégios parceiros, conheça alguns:</h2>
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
                partir do ensino de Educação Financeira de maneira prática,
                simples e humanizada.
              </p>

              <Link to="/mooneyedu">
                <Button category="ghost">Saiba mais</Button>
              </Link>
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
                autoconhecimento, autocontrole e empatia. Essas são habilidades
                consideradas fundamentais para Educação Financeira efetiva.
              </p>
            </header>
            <div className="scroll">
              <section>
                <StrategyCard>
                  <img src={rotateIcon} alt="Rotate icon" />
                  <h4>Metodologias Ativas</h4>
                  <p>
                    Sala de aula invertida, storytelling e as mais recentes
                    tendências pedagógicas.
                  </p>
                </StrategyCard>
                <StrategyCard>
                  <img src={pencilIcon} alt="Pencil icon" />
                  <h4>PBL - Problem Based Learning</h4>
                  <p>
                    A construção do conhecimento a partir das discussões de
                    problemas do dia a dia.
                  </p>
                </StrategyCard>
                <StrategyCard>
                  <img src={teacherIcon} alt="Teacher icon" />
                  <h4>Professor Mediador</h4>
                  <p>
                    Flexibilidade para conduzir aulas engajantes em um ambiente
                    dinâmico.
                  </p>
                </StrategyCard>
                <StrategyCard>
                  <img src={studentIcon} alt="Student icon" />
                  <h4>Formação Integral do aluno</h4>
                  <p>
                    Educação Financeira com o objetivo de preparar o aluno para
                    os desafios da vida.
                  </p>
                </StrategyCard>
                <StrategyCard>
                  <img src={ideiaIcon} alt="Ideia icon" />
                  <h4>Inovação e Tecnologia</h4>
                  <p>
                    Recursos tecnológicos, atividades práticas, aulas divertidas
                    e aplicativo gamificado{' '}
                  </p>
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
                  Estimulamos o desenvolvimento de hábitos financeiros saudáveis
                  para uma vida equilibrada. <br />
                  Educação Financeira para jovens, famílias e sociedade.
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

                <Link to="/mooneyedu">
                  <Button category="white">Saiba mais</Button>
                </Link>
              </aside>

              <img src={mooneyEdu} alt="MooneyEdu" />
            </MooneyEdu>
            <MooneyApp>
              <img src={mooneyApp} alt="MooneyApp" />

              <aside>
                <h2>#MooneyApp</h2>
                <p>
                  Aplicativo gamificado de Educação Financeira para além da sala
                  de aula. Funcionalidades práticas e a inclusão da família no
                  processo de aprendizagem.
                </p>

                <span>
                  <a
                    href="https://play.google.com/store/apps/details?id=br.com.mooney.missions&hl=pt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={googlePlay} alt="Google play" />
                  </a>
                  <a
                    href="https://apps.apple.com/br/app/mooney/id1509285822"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={appStore} alt="App store" />
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

            <section className="video">
              <ReactPlayer
                controls={true}
                url="https://www.youtube.com/watch?v=NH3tSiuGYKw"
              />

              <p>Depoimento de Samuel, colégio Delta</p>
            </section>

            <div className="scroll">
              <aside>
                {feedbacks.map((feedback) => (
                  <FeedbackCard
                    isReadMore={feedbackReadMore === feedback.id && readMore}
                    key={feedback.id}
                  >
                    <img src={avatars[feedback.id]} alt="Avatar" />

                    <h4>{feedback.name}</h4>
                    <h5>{feedback.college}</h5>

                    <p>{feedback.message}</p>

                    <span
                      onClick={() => handleFeedbackReadMore(feedback.id)}
                      className="read-more"
                    >
                      <strong className="more">Ler mais</strong>
                      <strong className="less">Ler menos</strong>

                      <img src={arrowIcon} alt="Arrow" />
                    </span>
                  </FeedbackCard>
                ))}
              </aside>
            </div>
          </div>
        </Feedbacks>
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
      </Content>
      <Footer />
    </>
  );
};

export default Home;
