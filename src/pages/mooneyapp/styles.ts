import styled, { css } from 'styled-components';

interface MokcupProps {
  side: 'left' | 'right';
}

export const Container = styled.main`
  width: 100vw;
  max-width: 100%;
  overflow-y: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderContent = styled.header`
  margin-top: 160px;
  width: 100%;
  max-width: 1216px;
  padding: 0 64px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 160px;

  aside {
    h3 {
      margin-bottom: 8px;

      @media (max-width: 680px) {
        width: 80%;
        min-width: 272px;
      }
    }

    h1 {
      font-size: 40px;
      font-weight: 800;
      width: 520px;
      line-height: 60px;
      margin-bottom: 16px;

      @media (max-width: 680px) {
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        width: 80%;
        min-width: 272px;
      }
    }

    p {
      margin-bottom: 32px;
      max-width: 520px;
      min-width: 272px;
      width: 80%;
    }

    span {
      display: flex;

      a {
        background: var(--text-black);
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

      @media (max-width: 984px) {
        a {
          width: 128px;

          img {
            width: 100px;
          }
        }
      }
    }
  }

  > img {
    object-fit: contain;
    margin-left: -80px;

    @media (max-width: 680px) {
      width: 300px;
      margin-top: -100px;
      margin-right: -40px;
    }
  }

  @media (max-width: 1180px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 120px;

    aside {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 88px;
    }

    > img {
      height: 398px;
    }
  }

  @media (max-width: 680px) {
    margin-bottom: 80px;
    margin-top: 120px;
  }
`;

export const BePart = styled.section`
  width: 100%;
  background: var(--content-dividers);
  height: 100vh;
  margin-bottom: 160px;
  padding: 0 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    width: 100%;
    max-width: 864px;
    min-width: 272px;
  }

  h2,
  strong {
    font-size: 56px;
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
    line-height: 84px;
    text-align: center;

    @media (max-width: 770px) {
      font-size: 32px;
      line-height: 48px;
    }
  }

  strong {
    color: var(--primary);
  }

  @media (max-width: 770px) {
    height: 568px;
  }
`;

export const Mockups = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 48px;

  @media (max-width: 770px) {
    margin-bottom: 100px;
    padding: 0px 24px;
  }
`;

export const Mockup = styled.article<MokcupProps>`
  width: 100%;
  max-width: 1031px;
  margin-bottom: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.side === 'left'
      ? css`
          flex-direction: row;
        `
      : css`
          flex-direction: row-reverse;
        `}

  img {
    ${(props) =>
      props.side === 'left'
        ? css`
            margin-right: 172px;
          `
        : css`
            margin-left: 172px;
          `}
  }

  aside {
    width: 100%;
    max-width: 392px;
    ${(props) =>
      props.side === 'left'
        ? css`
            text-align: left;
          `
        : css`
            text-align: right;
          `}

    h2 {
      margin-bottom: 16px;
    }
  }

  @media (max-width: 1016px) {
    max-width: 770px;

    img {
      ${(props) =>
        props.side === 'left'
          ? css`
              margin-right: 48px;
            `
          : css`
              margin-left: 48px;
            `}
    }
  }

  @media (max-width: 770px) {
    margin-bottom: 100px;
    ${(props) =>
      props.side === 'left'
        ? css`
            justify-content: left;
          `
        : css`
            justify-content: right;
          `}

    img {
      display: none;
    }

    aside {
      h2,
      p {
        ${(props) =>
          props.side === 'left'
            ? css`
                text-align: left;
              `
            : css`
                text-align: right;
              `}
      }
    }
  }
`;

export const Ready = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 140px;

  div {
    width: 100%;
    max-width: 1009px;
    margin: 0 64px;
    display: flex;
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
      }

      p {
        margin-bottom: 32px;
      }
    }

    @media (max-width: 800px) {
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
