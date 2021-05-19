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
  margin-top: 180px;
  width: 100%;
  max-width: 1216px;
  padding: 0 64px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 160px;

  aside {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

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

    section {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 24px;
      margin-bottom: 32px;

      input {
        width: 100%;
        max-width: 350px;
        min-width: 272px;
        height: 48px;
        margin-bottom: 16px;
        padding: 0 16px;

        background: #f8f9fb;
        box-shadow: 0px 4px 8px #cfe5f8;
        border-radius: 24px;
        border: 1px solid #cfe5f8;

        &::placeholder {
          opacity: 0.5;
        }
      }

      textarea {
        width: 100%;
        max-width: 350px;
        min-width: 272px;
        height: 160px;
        resize: none;
        margin-bottom: 16px;
        padding: 16px;

        background: #f8f9fb;
        box-shadow: 0px 4px 8px #cfe5f8;
        border-radius: 24px;
        border: 1px solid #cfe5f8;

        &::placeholder {
          opacity: 0.5;
        }
      }
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

      section {
        align-items: center;
      }
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

export const Questions = styled.section`
  width: 100%;
  background: var(--content-dividers);
  padding: 64px 0 80px;
  box-shadow: 0px 0px 8px #e2e2e2;

  display: flex;
  justify-content: center;

  > div {
    width: 100%;
    max-width: 1216px;
    padding: 0 64px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    header {
      width: 100%;

      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      section {
        h4 {
          font-weight: 800;
          font-size: 32px;
          line-height: 48px;
          margin-bottom: 16px;
        }

        p {
          max-width: 488px;
          width: 100%;
        }
      }

      > h4 {
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        color: var(--text-gray);
        text-align: right;
      }
    }

    hr {
      border: 2px solid #e1e5ec;
      border-radius: 2px;
      margin: 24px 0;
    }

    .questions {
      width: 100%;

      display: flex;
      flex-direction: column;

      section {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        & + section {
          margin-top: 32px;
        }

        article {
          width: 30%;
          max-width: 384px;

          h4 {
            font-weight: 800;
            font-size: 16px;
            line-height: 21px;
            margin-bottom: 8px;
            font-family: 'Inter', sans-serif;
          }

          p {
            font-size: 16px;
            line-height: 22px;
            font-weight: 300;
            color: var(--text-gray);
          }
        }
      }
    }

    @media (max-width: 976px) {
      padding: 0 24px;

      header {
        flex-direction: column;

        section {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;

          h4,
          p {
            width: 100%;
            text-align: center;
          }

          h4 {
            font-size: 20px;
            line-height: 30px;
          }
        }

        > h4 {
          display: none;
        }
      }

      .questions {
        section {
          flex-direction: column;

          article {
            width: 100%;
            max-width: 100%;

            & + article {
              margin-top: 32px;
            }

            h4,
            p {
              text-align: left;
              width: 100%;
              max-width: 100%;
            }
          }
        }
      }
    }
  }
`;
