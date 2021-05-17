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
    --content-contents: #F2F4F7;
    --content-dividers: #E9E9EB;

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
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Raleway', sans-serif;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: var(--gradient-content);
  }

  input, button, textarea, p { 
    font-family: 'Inter', sans-serif;
  }

  button, li {
    cursor: pointer;

  }
`;
