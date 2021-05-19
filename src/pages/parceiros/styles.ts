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

export const Partners = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  justify-content: center;
  background: var(--content-dividers);
  box-shadow: 0px 0px 8px #e2e2e2;
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

export const Presence = styled.section`
  width: 100%;
  margin: 180px 0;
  padding: 0 64px;

  display: flex;
  justify-content: center;

  div {
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;

    h4 {
      margin-bottom: 140px;
    }

    strong {
      color: var(--primary);
    }

    h4,
    strong {
      font-size: 56px;
      font-weight: 800;
      line-height: 84px;
      text-align: center;
      font-family: 'Raleway', sans-serif;
      width: 100%;
      min-width: 272px;
    }

    article {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
      max-width: 1112px;

      aside {
        display: flex;
        flex-direction: column;

        div {
          display: flex;
          flex-direction: row;
          align-items: flex-start;

          section {
            display: flex;
            flex-direction: column;
            margin-left: 24px;
            width: 100%;
            max-width: 280px;

            h4 {
              width: auto;
              min-width: auto;
              font-size: 32px;
              line-height: 48px;
              font-weight: 800;
              color: var(--primary);
              text-align: left;
              margin-bottom: 8px;
            }
          }

          & + div {
            margin-top: 64px;
          }
        }
      }

      @media (max-width: 1090px) {
        flex-direction: column-reverse;
        justify-content: flex-start;

        aside {
          width: 100%;
          flex-direction: row;
          justify-content: space-evenly;
          margin-bottom: 80px;

          div {
            max-width: 320px;

            & + div {
              margin-top: 0;
            }
          }
        }
      }
    }
  }

  @media (max-width: 740px) {
    padding: 0 24px;

    div {
      h4,
      strong {
        font-size: 40px;
        line-height: 48px;
      }

      article {
        aside {
          flex-direction: column;

          div {
            width: 100%;
            max-width: 100%;

            section {
              max-width: 100%;
              margin-left: 0;
            }

            h4,
            p {
              width: auto;
              text-align: left;
            }

            & + div {
              margin-top: 32px;
            }

            img {
              height: 48px;
              width: 48px;
              margin-right: 16px;
            }

            @media (max-width: 540px) {
              img {
                display: none;
              }
            }
          }
        }

        img {
          height: 209px;
          object-fit: contain;
        }
      }
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
      overflow-x: auto;
      display: flex;
      justify-content: flex-start;

      aside {
        min-width: 2282px;
        padding-bottom: 64px;
        position: relative;
        display: flex;
        justify-content: center;
        flex: nowrap;

        @media (max-width: 680px) {
          min-width: 1670px;
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
    }
  }
`;

export const FeedbackCard = styled.article`
  height: 357px;
  width: 319px;
  background: var(--content-background);
  border-radius: 24px;
  box-shadow: 0px 4px 8px #cfe5f8;
  padding: 32px;
  text-align: left;
  flex: none;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 680px) {
    padding: 24px;
    height: 346px;
    width: 217px;

    & + article {
      margin-left: 16px;
    }

    p {
      font-size: 14px;
      line-height: 19.6px;
      text-align: left;
      min-width: 169px;
      max-height: 214px;
      display: -webkit-box;
      -webkit-line-clamp: 9;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    section {
      strong {
        margin-bottom: 4px;
      }

      span {
        font-size: 12px;
        line-height: 16.8px;
      }
    }
  }

  & + article {
    margin-left: 64px;
  }

  p {
    font-size: 16px;
    line-height: 22.4px;
  }

  section {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 8px;
      line-height: 20.8px;
      color: var(--text-black);
    }

    span {
      font-size: 14px;
      font-weight: 400;
      line-height: 19.6px;
      color: var(--text-gray);
    }
  }
`;
