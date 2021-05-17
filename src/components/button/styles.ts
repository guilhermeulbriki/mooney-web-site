import styled, { css } from 'styled-components';

interface ButtonProps {
  category: 'primary' | 'ghost' | 'white';
}

export const ButtonComponent = styled.button<ButtonProps>`
  cursor: pointer;
  width: 185px;
  height: 40px;
  border-radius: 20px;
  ${(props) =>
    props.category === 'primary' &&
    css`
      border: 0;
      background: var(--gradient-button);
      color: var(--text-white);
    `};
  ${(props) =>
    props.category === 'ghost' &&
    css`
      border: 2px solid var(--primary);
      background: transparent;
      color: var(--gradient-button);
    `};
  ${(props) =>
    props.category === 'white' &&
    css`
      border: 2px solid var(--text-white);
      background: transparent;
      color: var(--text-white);
    `};
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
    ${(props) =>
      props.category === 'primary' &&
      css`
        border: 0;
        background: var(--gradient-button);
        color: var(--text-silver);
      `};
    ${(props) =>
      props.category === 'ghost' &&
      css`
        border: 2px solid var(--gradient-button);
        background: transparent;
        color: var(--primary);
      `};
    ${(props) =>
      props.category === 'white' &&
      css`
        border: 2px solid var(--text-white);
        background: transparent;
        color: var(--text-silver);
      `};
  }
`;
