import styled, { keyframes } from 'styled-components';

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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderContent = styled.header`
  padding-top: 120px;
  width: 100%;
  max-width: 1216px;
  display: flex;
  justify-content: space-between;

  aside {
    h3 {
      background: var(--gradient-content);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 8px;
      margin-top: 64px;
    }

    h1 {
      font-size: 40px;
      font-weight: 800;
      width: 654px;
      margin-bottom: 32px;
    }

    img {
      margin-top: 120px;
      animation: ${scrollIconAnimation} infinite 1.5s ease-in-out;
    }
  }
`;

export const Partners = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background: var(--content-dividers);
  box-shadow: 0px 0px 8px #e2e2e2;
  margin-top: 120px;
  padding: 40px 0;

  div {
    width: 100%;
    max-width: 1216px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      margin-bottom: 40px;
      font-size: 32px;
      font-weight: 600;
    }

    span {
      display: flex;
      justify-content: space-around;
      width: 100%;

      img {
        filter: grayscale(1);
        transition: filter 0.4s;
        cursor: pointer;

        &:hover {
          filter: grayscale(0);
        }
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
  display: flex;
  justify-content: center;
  margin-top: 140px;

  div {
    width: 100%;
    max-width: 1016px;
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
      }

      .pig {
        right: 0;
        top: 55px;
        animation: ${pigAnimation} linear 3s infinite;
      }

      .bag {
        left: 29px;
      }
    }

    aside {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      h3 {
        background: var(--gradient-content);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 8px;
      }

      h2 {
        font-size: 32px;
        font-weight: 800;
        line-height: 48px;
        margin-bottom: 16px;
      }

      p {
        width: 416px;
        font-size: 18px;
        font-weight: 400;
        line-height: 27px;
        text-align: right;
        color: var(--text-gray);
        margin-bottom: 32px;
      }
    }
  }
`;
