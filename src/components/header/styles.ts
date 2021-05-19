import styled, { css } from 'styled-components';

interface SideMenuProps {
  isHidden: boolean;
}

interface HamburguerMenuProps {
  doRotation: boolean;
}

export const HeaderComponent = styled.header`
  width: 100vw;
  max-width: 100%;
  position: fixed;
  z-index: 10;
  height: 72px;
  box-shadow: 0px 2px 6px #e0e5ef;
  background: var(--content-background);

  display: flex;
  justify-content: center;

  div {
    width: 100%;
    margin: 0 64px;
    max-width: 1216px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      display: flex;
      list-style: none;
      font-family: 'Inter', sans-serif;
      height: 100%;

      li {
        font-size: 16px;
        font-weight: 300;
        position: relative;
        display: flex;
        align-items: center;
        height: 100%;

        &.active {
          font-weight: 500;
        }

        & + li {
          margin-left: 48px;
        }

        &#dropdown ul {
          display: none;
          flex-direction: column;
          position: absolute;
          top: 64px;
          background: var(--content-background);
          padding: 24px;
          height: auto;
          box-shadow: 0px 2px 8px #cacbcd;
          border-radius: 16px;

          li {
            margin-left: 0;

            span {
              display: flex;
              align-items: center;

              img {
                height: 40px;
                width: 40px;
                margin-right: 16px;
              }
            }
          }

          hr {
            margin: 16px 0 16px 0;
            border: 1px solid var(--text-silver);
          }
        }

        &#dropdown:hover ul {
          display: block;
        }
      }
    }
  }

  @media (max-width: 950px) {
    div {
      margin: 0 48px;
      width: 100%;

      ul {
        display: none;
      }

      .became-partner {
        display: none;
      }

      .menu {
        display: flex;
        border: 0;
        background: transparent;
      }
    }
  }

  @media (max-width: 425px) {
    height: 56px;

    div {
      margin: 0 24px;

      > img {
        height: 16px;
      }
    }
  }
`;

export const HamburguerMenu = styled.button<HamburguerMenuProps>`
  display: none;

  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    width: 40px;
    height: 40px;

    hr.one {
      height: 2px;
      width: 32px;
      margin-bottom: 8px;
      background: var(--primary);
      border: 1.5px solid var(--primary);
      border-radius: 2px;
      transition: transform 0.4s;
      ${(props) =>
        props.doRotation
          ? css`
              transform: rotate(45deg);
              position: absolute;
              width: 24px;
            `
          : ''};
    }

    hr.two {
      height: 1px;
      width: 16px;
      background: var(--primary);
      border: 1.5px solid var(--primary);
      border-radius: 2px;
      transition: transform 0.4s;
      ${(props) =>
        props.doRotation
          ? css`
              transform: rotate(-45deg);
              width: 24px;
            `
          : ''}
    }
  }
`;

export const SideMenu = styled.aside<SideMenuProps>`
  position: fixed;
  z-index: 10;
  right: 0px;
  top: 80px;
  background: var(--primary);
  height: calc(100% - 80px);
  border-radius: 24px 0 0 0;
  padding: 24px;
  min-width: 233px;
  transition: transform 0.5s;
  ${(props) =>
    props.isHidden
      ? css`
          transform: translateX(350px);
        `
      : css`
          transform: translateX(0px);
        `}

  ul {
    list-style: none;
    width: 100%;
    padding: 8px 0 0 8px;

    li {
      font-size: 16px;
      font-weight: 300;
      font-family: 'Inter', sans-serif;
      width: 100%;
      color: var(--text-white);

      &.active {
        font-weight: 500;
      }

      & + li {
        margin-top: 24px;
      }

      ul {
        margin-top: 24px;
        margin-left: 16px;

        li {
          border: 0;

          & + li {
            margin-bottom: 24px;
          }
        }
      }
    }

    hr {
      display: none;
    }
  }

  a {
    position: absolute;
    bottom: 24px;
  }
`;
