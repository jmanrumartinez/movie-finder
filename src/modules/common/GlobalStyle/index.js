import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0; 
    background-color: ${(props) => props.theme.secondaryColor}; 
    font-family: 'Montserrat', sans-serif;
  }
`;
