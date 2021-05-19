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
  margin-top: 120px;
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
