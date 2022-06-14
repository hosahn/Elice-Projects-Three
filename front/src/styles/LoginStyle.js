import styled from 'styled-components';

export const SocialBtn = styled.button`
  position: relative;
  width: 4rem;
  height: 4rem;
  border: none;
  background-color: transparent;
`;

export const Img = styled.img`
  position: absolute;
  width: 4rem;
  height: 4rem;
  border-radius: 10rem;
`;

export const SocialLoginContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.3rem;
`;

export const LoginText = styled.div`
  font-family: 'EliceDigitalBaeum';
  font-size: 1rem;
  line-height: 1.5rem;
  color: white;
`;

export const LoginInput = styled.input`
  display: inline-flex;
  width: 30rem;
  height: 3rem;
  color: white;
  background: transparent;
  padding: 1rem;
  border: solid 1px #dbc7ff;
  border-radius: 1rem;
  outline: none;
  font-size: 1rem;
  cursor: text;
  &:focus::-webkit-input-placeholder {
    color: #748ffc;
  }
`;
