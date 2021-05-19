import styled from 'styled-components';

export const Container = styled.footer`
  width: 100vw;
  max-width: 100%;
  background: var(--content-dividers);
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 8px #e2e2e2;
  min-height: 452px;

  > div {
    max-width: 1216px;
    width: 100%;
    margin: 0 64px;
    padding: 64px 0;
    position: relative;

    display: flex;
    justify-content: space-between;

    .mooney {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;

      div {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
      }

      .logo {
        > img {
          margin-bottom: 32px;
          height: 32px;
        }

        span {
          font-size: 16px;
          line-height: 22.4px;
          font-weight: 300;
        }
      }

      .email {
        strong {
          font-size: 20px;
          font-weight: 600;
          line-height: 30px;
          margin-bottom: 8px;
        }

        span {
          font-size: 16px;
          line-height: 22.4px;
          font-weight: 300;
        }
      }
    }

    .links {
      display: flex;
      justify-content: flex-end;

      article {
        strong {
          font-size: 20px;
          font-weight: 600;
          line-height: 30px;
        }

        ul {
          list-style: none;

          li {
            margin-top: 16px;
            font-size: 16px;
            line-height: 22.4px;
            font-weight: 300;
          }
        }

        & + article {
          margin-left: 64px;
        }
      }

      .social {
        ul {
          display: flex;
          margin-top: 16px;

          li {
            margin-top: 0px;

            & + li {
              margin-left: 8px;
            }
          }
        }
      }
    }

    .stores {
      position: absolute;
      bottom: 64px;
      right: 0;

      > img {
        margin-right: 16px;
      }
    }
  }

  @media (max-width: 950px) {
    > div {
      flex-direction: column-reverse;

      .mooney {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 120px;
      }

      .links {
        justify-content: space-between;
      }

      .stores {
        bottom: 156px;
      }
    }
  }

  @media (max-width: 680px) {
    min-height: 400px;

    > div {
      flex-direction: column;

      .mooney {
        margin-top: 0px;
        height: auto;

        flex-direction: column;
        width: 100%;
        align-items: center;
        text-align: center;

        div {
          align-items: center;

          & + div {
            margin-top: 32px;
          }
        }

        .logo {
          > img {
            margin-bottom: 8px;
          }
        }
      }

      .links {
        display: none;
      }

      .stores {
        width: 100%;
        display: flex;
        justify-content: center;
        bottom: 64px;
      }
    }
  }
`;
