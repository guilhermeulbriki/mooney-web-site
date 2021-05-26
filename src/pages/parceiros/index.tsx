import React, { useCallback, useEffect, useState } from 'react';
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
import arrowIcon from '../../assets/images/icons/arrow.svg';

import imageOne from '../../assets/images/feedbacks/image-one.png';
import imageTwo from '../../assets/images/feedbacks/image-two.png';
import imageThree from '../../assets/images/feedbacks/image-three.png';
import imageFour from '../../assets/images/feedbacks/image-four.png';
import imageFive from '../../assets/images/feedbacks/image-five.png';
import imageSix from '../../assets/images/feedbacks/image-six.png';
import imageSeven from '../../assets/images/feedbacks/image-seven.png';
import imageEight from '../../assets/images/feedbacks/image-eight.png';

import {
  Container,
  FeedbackCard,
  Feedbacks,
  HeaderContent,
  Partners,
  Presence,
} from './styles';
import { FeedbacksData } from '../../data/feedbacks';

interface IFeedbacks {
  id: number;
  name: string;
  college: string;
  message: string;
  picture: string;
}

const Parceiros: React.FC = () => {
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
      <Container>
        <HeaderContent>
          <aside>
            <h3>#SejaMooney</h3>
            <h1>Colégios parceiros que levam a nossa missão!</h1>
            <p>
              Vamos levar Educação e Alfabetização Financeira de qualidade para
              seus alunos?
            </p>

            <Link className="became-partner" to="/sejamooney">
              <Button category="primary">Seja um parceiro</Button>
            </Link>
          </aside>

          <img src={partnersBack} alt="MooneyEdu" />
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
                      utilizam a metodologia Mooney e disponibilizam Educação
                      Financeira de qualidade.
                    </p>
                  </section>
                </div>

                <div>
                  <img src={backpackIcon} alt="Backpack" />

                  <section>
                    <h4>20 mil</h4>
                    <p>
                      beneficiados pelos programas de Alfabetização Financeira
                      da Mooney.
                    </p>
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
      </Container>
      <Footer />
    </>
  );
};

export default Parceiros;
