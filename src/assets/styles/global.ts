import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary: #4151D7;
    --secondary: #5E2EC4;
    --gradient-content: linear-gradient(154.75deg, #5E2EC4 19.28%, #3263E1 102.51%);
    --gradient-button: linear-gradient(238.5deg, #5E2EC4 -13.07%, #4150D7 112.57%);

    --text-black:#232931;
    --text-gray: #484F57;
    --text-white: #F0F3F7;
    --text-silver: #E1E5EC;

    --content-background:#F8F9FB;
    --content-contents: #E9E9EB;
    --content-dividers: #F2F4F7;

    --aux-green: #279473;
    --aux-yellow: #FDD547;
    --aux-pink: #EE1D8E;
    --aux-orange: #FF9100;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: var(--text-black);
    background: var(--content-background);
  }

  a {
    text-decoration: none;
    color: var(--text-black);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Raleway', sans-serif;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: var(--gradient-content);
  }

  input, button, textarea, p, strong, span, ul, li { 
    font-family: 'Inter', sans-serif;
  }

  button, li {
    cursor: pointer;
  }

  h2 {
    font-size: 32px;
    font-weight: 800;
    line-height: 48px;

    @media (max-width: 680px) {
      font-size: 20px;
      line-height: 30px;
      width: 80%;
      min-width: 272px;
    }
  }

  h3 {
    background: var(--gradient-content);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 24px;
    font-weight: 600;

    @media (max-width: 680px) {
      font-size: 16px;
      line-height: 20.8px;
      text-align: center;
      width: 80%;
      min-width: 272px;
    }
  }

  p {
    color: var(--text-gray);
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;

    @media (max-width: 680px) {
      font-size: 16px;
      line-height: 22.4px;
      text-align: center;
      width: 80%;
      min-width: 272px;
    }
  }
`;
