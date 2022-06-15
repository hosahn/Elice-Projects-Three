import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import images from '../assets/images';

// css reset
const GlobalStyle = createGlobalStyle`
${reset}
*{
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
margin: 0;
  padding: 0;
}

body{
  font-family: 'Noto Sans KR', 'Apple SD Gothic Neo', 'Nanum Gothic', 'Malgun Gothic', sans-serif;
  box-sizing: border-box;
  position: relative;
}

button{
  border: none;
  background-color: transparent;
}

button:hover{
  cursor: pointer;
}
`;

export default GlobalStyle;
