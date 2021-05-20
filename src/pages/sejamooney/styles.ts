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

export const HeaderComponent = styled.section`
  width: 100%;
  max-width: 1216px;
  margin: 180px auto 140px;
  display: flex;
  padding: 0 64px;

  .content {
    width: 100%;
    max-width: 1144px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    aside {
      max-width: 488px;
      margin-right: 80px;

      .below {
        display: none;
      }

      h3 {
        margin-bottom: 8px;
      }

      h2 {
        margin-bottom: 16px;
      }

      p {
        margin-bottom: 48px;
      }

      img {
        margin-left: 48px;
      }
    }

    .form {
      position: relative;
      width: 100%;
      max-width: 464px;
      padding: 40px 40px 48px 40px;
      background: var(--content-background);
      box-shadow: -2px 8px 40px 8px rgba(35, 41, 49, 0.1);
      border-radius: 24px;

      display: flex;
      flex-direction: column;

      &:before {
        content: '';
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        left: -24px;

        background: #f8f9fb;
        opacity: 0.3;
        box-shadow: 0px 8px 32px 4px rgba(35, 41, 49, 0.15);
        border-radius: 24px;
      }

      h4 {
        font-weight: 800;
        font-size: 20px;
        line-height: 30%;
        margin-bottom: 32px;
      }

      input {
        width: 100%;
        max-width: 384px;
        min-width: 240px;
        box-shadow: 0px 4px 16px rgba(104, 114, 123, 0.25);
        border-radius: 24px;
        background: var(--content-background);
        border: 0;
        height: 48px;
        padding: 0 16px;
        outline: 0;

        & + input {
          margin-top: 24px;
        }

        &::placeholder {
          opacity: 0.7;
          color: var(--text-gray);
        }

        &:not(:placeholder-shown) {
          border: 1px solid var(--primary);
        }
      }

      button {
        cursor: pointer;
        width: 100%;
        max-width: 384px;
        min-width: 240px;
        margin-top: 40px;
        height: 40px;
        border-radius: 20px;
        border: 0;
        background: var(--gradient-button);
        color: var(--text-white);

        font-weight: 600;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: box-shadow 0.2s, transform 0.4s;
        outline: none;

        &:hover {
          box-shadow: 0px 0px 8px rgba(65, 81, 215, 0.5);
        }

        &:active {
          transform: scale(0.9);
          border: 0;
          background: var(--gradient-button);
          color: var(--text-silver);
        }
      }

      @media (max-width: 474px) {
        padding: 32px 16px 40px 16px;

        h4 {
          font-size: 18px;
          line-height: 23.4px;
        }
      }
    }
  }

  @media (max-width: 870px) {
    margin-top: 140px;
    padding: 0 24px;

    .content {
      flex-direction: column;
      position: relative;

      aside {
        margin-right: 0;
        text-align: center;

        .side {
          display: none;
        }

        .below {
          display: block;
        }

        h2,
        p,
        h3 {
          width: 100%;
          max-width: 100%;
        }

        img {
          position: absolute;
          top: 180px;
          left: -140px;
          transform: rotate(68deg);

          @media (max-width: 844px) {
            display: none;
          }
        }
      }

      .form {
        margin-top: 32px;
      }
    }
  }

  @media (max-width: 474px) {
    margin-top: 80px;
  }
`;

export const BePart = styled.section`
  margin-bottom: 140px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h2,
  strong {
    font-family: 'Raleway', sans-serif;
    font-size: 32px;
    font-weight: 800;
    line-height: 48px;
    text-align: center;
    width: 100%;
  }

  > h2 {
    padding: 0 64px;
    max-width: 800px;
    margin-bottom: 16px;
  }

  > p {
    max-width: 592px;
    text-align: center;
  }

  strong {
    color: var(--primary);
  }

  section {
    width: 100%;
    border-top: 1px solid #e1e5ec;
    border-bottom: 1px solid #e1e5ec;
    margin-top: 64px;
    display: flex;
    justify-content: center;

    .content {
      margin: 64px 64px;
      width: 100%;
      max-width: 1008px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      article {
        display: flex;
        flex-direction: column;
        align-items: center;

        strong {
          color: var(--text-black);
          text-align: center;
          font-feature-settings: 'pnum' on, 'lnum' on;
          font-weight: 800;
          font-size: 32px;
          line-height: 48px;
          margin-bottom: 8px;
        }
      }
    }
  }

  @media (max-width: 920px) {
    > h2,
    strong {
      font-size: 20px;
      line-height: 30px;
    }

    section {
      .content {
        flex-direction: column;

        article {
          & + article {
            margin-top: 64px;
          }
        }
      }
    }
  }
`;
