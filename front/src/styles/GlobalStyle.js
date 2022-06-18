import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
<<<<<<< HEAD
=======
import images from '../assets/images';
>>>>>>> origin/BE/test/HS

// css reset
const GlobalStyle = createGlobalStyle`
${reset}
*{
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
<<<<<<< HEAD
  position: relative;
=======
>>>>>>> origin/BE/test/HS
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

<<<<<<< HEAD
=======
button{
  border: none;
  background-color: transparent;
}

>>>>>>> origin/BE/test/HS
button:hover{
  cursor: pointer;
}
`;

export default GlobalStyle;
