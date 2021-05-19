import styled from 'styled-components';

export const Container = styled.div`
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
  align-items: center;
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
  }

  > img {
    object-fit: contain;

    @media (max-width: 680px) {
      height: 233px;
      width: 243px;
      margin-top: -100px;
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

    img {
      height: 398px;
    }
  }

  @media (max-width: 680px) {
    margin-bottom: 80px;
    margin-top: 120px;
  }
`;

export const MoreThanMath = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 180px;

  .content {
    width: 100%;
    max-width: calc(936px + 128px);
    padding: 0 64px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    aside {
      max-width: calc(416px + 64px);
      text-align: right;
      padding-left: 64px;

      h2 {
        margin-bottom: 16px;
      }
    }

    svg {
      object-fit: contain;
    }

    @media (max-width: 890px) {
      flex-direction: column-reverse;
      justify-content: flex-start;

      aside {
        width: 80%;
        min-width: 272px;
        padding-left: 0px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
          margin-bottom: 80px;
        }
      }

      svg {
        height: 334px;
        width: 334px;
      }
    }

    @media (max-width: 680px) {
      aside p {
        margin-bottom: 40px;
      }

      svg {
        height: 230px;
        width: 230px;
      }
    }
  }
`;

export const OurMetodology = styled.section`
  width: 100%;
  background: var(--content-dividers);
  padding: 64px 64px 80px 64px;
  margin-bottom: 180px;
  box-shadow: 0px 0px 8px #e2e2e2;

  display: flex;
  justify-content: center;

  div {
    width: 100%;
    max-width: 1008px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      margin-bottom: 120px;
      text-align: center;
      width: 80%;
      max-width: 800px;
      min-width: 272px;
    }

    strong {
      color: var(--primary);
      font-family: 'Raleway', sans-serif;
      font-size: 32px;
      font-weight: 800;
      line-height: 48px;
      text-align: center;

      @media (max-width: 680px) {
        font-size: 20px;
        line-height: 30px;
      }
    }

    section {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      article {
        width: 100%;
        min-width: 272px;
        max-width: 416px;

        h4 {
          font-size: 24px;
          line-height: 31px;
          font-weight: 800;
          margin-bottom: 16px;

          @media (max-width: 680px) {
            font-size: 18px;
            line-height: 23.4px;
          }
        }
      }

      @media (max-width: 980px) {
        flex-direction: column;
        align-items: center;

        article {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;

          & + article {
            margin-top: 64px;
          }
        }
      }
    }
  }
`;

export const Checks = styled.section`
  width: 100%;
  padding: 0 64px;
  margin-bottom: 120px;

  display: flex;
  justify-content: center;

  div {
    width: 100%;
    max-width: 936px;

    h2 {
      margin: 0 auto;
      margin-bottom: 120px;
      max-width: 800px;
      text-align: center;

      @media (max-width: 980px) {
        margin-bottom: 64px;
      }
    }

    section {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      span {
        display: flex;
        align-items: center;
        max-width: 416px;

        & + span {
          margin-top: 32px;
        }

        img {
          margin-right: 24px;
        }
      }

      @media (max-width: 980px) {
        flex-direction: column;

        article + article {
          margin-top: 32px;
        }

        span {
          max-width: 100%;
        }
      }

      @media (max-width: 680px) {
        span {
          align-items: flex-start;
          min-width: 272px;

          img {
            object-fit: contain;
            height: 32px;
            width: 32px;
            margin-right: 16px;
          }

          p {
            text-align: left;
            width: 100%;
            min-width: auto;
          }
        }
      }
    }
  }

  @media (max-width: 680px) {
    padding: 0 24px;
  }
`;
