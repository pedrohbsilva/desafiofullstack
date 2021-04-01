import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #ffffff;
    color: #333333;
    -webkit-font-smoothing: antialiased;
  }
  body,input,button{
    font-size: 1.6rem;
  }
  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 500;
    font-family: 'Ubuntu';
  }
  button{
    cursor: pointer;
  }
`;
