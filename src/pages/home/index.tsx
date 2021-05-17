import React from 'react';
import { ReactSVG } from 'react-svg';

import Button from '../../components/button';
import Header from '../../components/header';

import scrollIcon from '../../assets/images/icons/scroll.svg';
import homeGirl from '../../assets/images/homeGirl.png';
// import homeSaveMoney from '../../assets/images/illustrations/homeSaveMoney.svg';
import coinSave from '../../assets/images/illustrations/coin.svg';
import pigSave from '../../assets/images/illustrations/big.svg';
import mooneySave from '../../assets/images/illustrations/money-bag.svg';
import camataraCollege from '../../assets/images/catamara.png';
import deltaCollege from '../../assets/images/delta.png';
import marconiCollege from '../../assets/images/marconi.png';
import omegaCollege from '../../assets/images/omega.png';
import santaCollege from '../../assets/images/santa-ursula.png';

import { Content, HeaderContent, Partners, WhyExist } from './styles';

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
            <span>
              <img src={camataraCollege} alt="College" />
              <img src={deltaCollege} alt="College" />
              <img src={marconiCollege} alt="College" />
              <img src={omegaCollege} alt="College" />
              <img src={santaCollege} alt="College" />
            </span>
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
                <Button category="ghost">Seja um parceiro</Button>
              </a>
            </aside>
          </div>
        </WhyExist>
      </Content>
    </>
  );
};

export default Home;
