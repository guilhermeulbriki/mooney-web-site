import styled, { css, keyframes } from 'styled-components';

interface FeedbackCardProps {
  isReadMore: boolean;
}

const scrollIconAnimation = keyframes`
  0% {
    transform: translateY(0px);
  } 50% {
    transform: translateY(16px);
  } 100% {
    transform: translateY(0px);
  }
`;

export const Content = styled.main`
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderContent = styled.header`
  padding-top: 140px;
  width: 100%;
  max-width: 1216px;
  margin: 0 64px;
  display: flex;
  justify-content: space-between;

  aside {
    h3 {
      margin-bottom: 8px;
      margin-top: 64px;

      @media (max-width: 680px) {
        width: 80%;
        min-width: 272px;
        margin-top: 16px;
      }
    }

    h1 {
      font-size: 40px;
      font-weight: 800;
      width: 654px;
      line-height: 60px;
      margin-bottom: 32px;

      @media (max-width: 680px) {
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        width: 80%;
        min-width: 272px;
      }
    }

    img {
      margin-top: 120px;
      animation: ${scrollIconAnimation} infinite 1.5s ease-in-out;
    }
  }

  > img {
    object-fit: contain;

    @media (max-width: 680px) {
      height: 233px;
      width: 243px;
      margin-top: -100px;
    }
  }

  @media (max-width: 1280px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0 0;

    aside {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 88px;

      img {
        display: none;
      }
    }

    img {
      height: 398px;
    }
  }
`;

export const Partners = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  justify-content: center;
  background: var(--content-dividers);
  box-shadow: 0px 0px 8px #e2e2e2;
  margin-top: 160px;
  padding-top: 40px;

  @media (max-width: 680px) {
    margin-top: 32px;
  }

  div {
    width: 100vw;
    max-width: 100%;

    h2 {
      margin: 0 auto;
      margin-bottom: 40px;
      font-weight: 600;
      text-align: center;

      @media (max-width: 680px) {
        width: 80%;
        min-width: 272px;
      }
    }

    .scroll {
      width: 100%;
      overflow-x: auto;
      display: flex;
      justify-content: center;

      .content {
        min-width: 1000px;
        padding-bottom: 40px;
        position: relative;
        display: flex;
        justify-content: center;
        flex: nowrap;

        img {
          filter: grayscale(1);
          transition: filter 0.4s;
          cursor: pointer;

          & + img {
            margin-left: 72px;
          }

          &:hover {
            filter: grayscale(0);
          }
        }
      }

      ::-webkit-scrollbar {
        height: 8px;
        padding-top: 4px;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #85909c;
        border-radius: 8px;
      }

      ::-webkit-scrollbar-track {
        background-color: #c0c7ce;
      }

      @media (max-width: 1000px) {
        justify-content: flex-start;
      }
    }
  }
`;

const coinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

const pigAnimation = keyframes`
  0% {
    transform: translateY(0px);
  } 50% {
    transform: translateY(-5px);
  } 100% {
    transform: translateY(0px);
  }
`;

export const WhyExist = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 140px;

  div {
    width: 100%;
    max-width: 1016px;
    padding: 0 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .illustration {
      position: relative;
      width: 394px;
      height: 368px;

      img {
        position: absolute;
      }

      .coin {
        animation: ${coinAnimation} linear 6s infinite;
        opacity: 0.3;
        object-fit: contain;
      }

      .pig {
        right: 0;
        top: 55px;
        animation: ${pigAnimation} linear 3s infinite;
        object-fit: contain;
      }

      .bag {
        left: 29px;
        object-fit: contain;
      }

      @media (max-width: 984px) {
        width: 274px;
        height: 256px;

        .coin {
          width: 219px;
          height: 219px;
        }

        .pig {
          width: 116px;
          height: 155px;
        }

        .bag {
          width: 214px;
          height: 214px;
          bottom: 20px;
        }
      }
    }

    aside {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      h3 {
        margin-bottom: 8px;
      }

      h2 {
        margin-bottom: 16px;
      }

      p {
        width: 416px;
        text-align: right;
        margin-bottom: 32px;

        @media (max-width: 680px) {
          font-size: 16px;
          line-height: 22.4px;
          text-align: center;
          width: 80%;
          min-width: 272px;
        }
      }
    }
  }

  @media (max-width: 888px) {
    div {
      flex-direction: column;
      align-items: center;

      aside {
        margin-top: 80px;
        align-items: center;
        text-align: center;

        p {
          text-align: center;
        }
      }
    }
  }
`;

export const OurStrategy = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 180px;

  div {
    width: 100vw;
    max-width: 100%;

    header {
      width: 100%;
      padding: 0 64px;
      text-align: center;
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 88px;

      h2 {
        margin-bottom: 16px;
      }

      p {
        max-width: 800px;
      }
    }

    .scroll {
      width: 100%;
      overflow-x: auto;
      display: flex;
      justify-content: center;

      section {
        min-width: 1214px;
        padding-bottom: 160px;
        position: relative;
        display: flex;
        justify-content: center;
        flex: nowrap;

        > img {
          position: absolute;
          z-index: 1;
          top: 11.56px;
        }
      }

      ::-webkit-scrollbar {
        height: 8px;
        padding-top: 4px;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #85909c;
        border-radius: 8px;
      }

      ::-webkit-scrollbar-track {
        background-color: #c0c7ce;
      }

      @media (max-width: 1214px) {
        justify-content: flex-start;
      }
    }
  }
`;

export const StrategyCard = styled.aside`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: center;
  width: 182px;
  text-align: center;
  position: relative;
  z-index: 2;

  & + aside {
    margin-left: 64px;
  }

  img {
    margin-bottom: 24px;
    transition: transform 0.4s;

    &:hover {
      transform: scale(1.1);
    }
  }

  h4 {
    font-size: 20px;
    line-height: 30px;
    font-weight: 600;
    margin-bottom: 8px;

    @media (max-width: 680px) {
      min-width: 180px;
    }
  }

  p {
    font-size: 16px;
    line-height: 22.4px;
    font-weight: 300;
    width: 180px;

    @media (max-width: 680px) {
      min-width: 180px;
    }
  }
`;

export const Soluction = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  justify-content: center;
  min-height: 1511px;
  background: var(--gradient-content);

  div {
    width: 100%;
    max-width: 1172px;
    margin: 120px 64px;
    position: relative;

    > img {
      position: absolute;
      left: 533px;
      top: -120px;
    }
  }

  @media (max-width: 1300px) {
    div {
      > img {
        display: none;
      }
    }
  }
`;

export const WhatWeDo = styled.article`
  display: flex;
  justify-content: space-between;

  div {
    margin: 0 0 0 200px;

    svg:first-child {
      animation: ${pigAnimation} linear 3s infinite;
    }
  }

  aside {
    text-align: right;
    margin-right: 100px;

    h2 {
      color: var(--text-white);
      margin-bottom: 8px;
    }

    p {
      width: 416px;
      color: var(--text-silver);
    }
  }

  @media (max-width: 1300px) {
    div {
      display: none;
    }

    aside {
      width: 100%;
      margin-right: 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      p {
        width: 80%;
        min-width: 272px;
      }
    }
  }
`;

export const MooneyEdu = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 150px 64px 0 100px;

  aside {
    h2 {
      color: var(--text-white);
      margin-bottom: 8px;
    }

    p {
      width: 416px;
      color: var(--text-silver);
      margin-bottom: 32px;
    }
  }

  @media (max-width: 680px) {
    img {
      height: 242px;
      width: 226px;
    }
  }

  @media (max-width: 984px) {
    flex-direction: column;
    align-items: center;
    margin: 150px 0px 0px 0px;

    aside {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 48px;

      p {
        width: 80%;
        min-width: 272px;
      }
    }
  }
`;

export const MooneyApp = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 150px 0 0 0;
  overflow-y: hidden;

  > img {
    margin-left: -100px;
  }

  aside {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h2 {
      color: var(--text-white);
      margin-bottom: 8px;
      text-align: right;
    }

    p {
      width: 416px;
      color: var(--text-silver);
      margin-bottom: 32px;
      text-align: right;
    }

    span {
      display: flex;

      a {
        background: var(--text-white);
        border-radius: 20px;
        height: 40px;
        width: 185px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        & + a {
          margin-left: 16px;
        }
      }
    }
  }

  @media (max-width: 1300px) {
    > img {
      height: 252px;
      object-fit: contain;
    }
  }

  @media (max-width: 984px) {
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: center;

    > img {
      margin-left: -100px;
      max-width: 100%;
      overflow-y: hidden;
    }

    aside {
      align-items: center;
      margin-bottom: 64px;

      h2 {
        text-align: center;
      }

      p {
        text-align: center;
        width: 80%;
        min-width: 272px;
      }

      span a {
        width: 128px;

        img {
          width: 100px;
        }
      }
    }

    > img {
      margin-right: -80px;
    }
  }
`;

export const Feedbacks = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  justify-content: center;
  background: var(--content-dividers);
  padding: 64px 0 0;

  div {
    width: 100%;
    text-align: center;

    h3 {
      margin: 0 auto;
      margin-bottom: 16px;
    }

    h2 {
      margin: 0 auto;
      margin-bottom: 64px;
    }

    .video {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
      margin-bottom: 120px;

      p {
        margin-top: 24px;
      }

      @media (max-width: 700px) {
        display: none;
      }
    }

    .scroll {
      width: 100%;
      overflow-y: auto;
      display: flex;
      padding: 0 64px;

      aside {
        padding-bottom: 64px;
        display: flex;
        justify-content: center;
        flex: nowrap;
      }

      ::-webkit-scrollbar {
        height: 8px;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #85909c;
        border-radius: 8px;
      }

      ::-webkit-scrollbar-track {
        background-color: #c0c7ce;
      }
    }
  }

  @media (max-width: 680px) {
    div {
      .scroll {
        padding: 0 24px;
      }
    }
  }
`;

export const FeedbackCard = styled.article<FeedbackCardProps>`
  width: 382px;
  height: 528px;
  max-height: 528px;
  padding: 32px 24px;
  background: var(--content-background);
  border: 2px solid #e1e5ec;
  box-shadow: 0px 4px 8px #cfe5f8;
  border-radius: 24px;

  ${(props) =>
    props.isReadMore &&
    css`
      height: auto;
      max-height: 1000px;
    `}

  transition: max-height 0.4s;

  display: flex;
  flex: none;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:last-child::after {
    content: '';
    position: absolute;
    width: 64px;
    height: 100%;
    right: -65px;
  }

  & + article {
    margin-left: 48px;
  }

  > img {
    margin-bottom: 24px;
  }

  h4 {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 8px;
    text-align: center;
  }

  h5 {
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 32px;
  }

  p {
    color: var(--text-gray);
    font-size: 16px;
    line-height: 22px;
    width: 100%;
    max-width: 100%;
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    ${(props) =>
      props.isReadMore &&
      css`
        display: block;
        padding-bottom: 40px;
      `}
  }

  span {
    display: flex;
    align-items: center;
    position: absolute;
    right: 24px;
    bottom: 24px;

    strong {
      margin-right: 16px;
      color: var(--primary);
      font-weight: 600;
      font-size: 18px;
      line-height: 27px;
      font-family: 'Inter', sans-serif;

      animation: transform 0.4s;

      &.more {
        ${(props) =>
          props.isReadMore &&
          css`
            display: none;
          `}
      }

      &.less {
        display: none;

        ${(props) =>
          props.isReadMore &&
          css`
            display: block;
          `}
      }
    }

    img {
      transform: rotate(90deg);
      transition: transform 0.4s;

      ${(props) =>
        props.isReadMore &&
        css`
          transform: rotate(270deg);
        `}
    }
  }

  @media (max-width: 680px) {
    width: 260px;
    padding: 24px 16px;

    & + article {
      margin-left: 16px;
    }

    p {
      width: 100%;
      max-width: 100%;
      min-width: 100%;
    }

    &:last-child::after {
      content: '';
      position: absolute;
      width: 24px;
      height: 100%;
      right: -25px;
    }
  }
`;

export const Ready = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  justify-content: center;
  margin: 140px 0;

  div {
    width: 100%;
    max-width: 1009px;
    margin: 0 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    aside {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      @media (max-width: 680px) {
        margin: 0 auto;
      }

      h2 {
        margin-bottom: 8px;
        max-width: 415px;
      }

      p {
        margin-bottom: 32px;
        max-width: 415px;
      }
    }

    @media (max-width: 800px) {
      justify-content: center;

      aside {
        align-items: center;
        text-align: center;
      }

      img {
        display: none;
      }
    }
  }
`;
