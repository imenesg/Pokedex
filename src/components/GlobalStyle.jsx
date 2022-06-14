// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
   background-color: #00000013;
    margin: 0;
    padding: 0;
     *{
        box-sizing: border-box;
     }
  }
`;
 
export default GlobalStyle;