import styled from 'styled-components';

export const WarningText = styled.div`
  font-family: 'EliceDigitalBaeum';
  font-size: 15px;
  line-height: 20px;
  color: #ff6b6b;
`;

export const RegisterText = styled.div`
  font-family: 'EliceDigitalBaeum';
  font-size: 1rem;
  line-height: 1.5rem;
  color: white;
`;

export const RegisterInput = styled.input`
  display: inline-flex;
  width: 30rem;
  height: 3rem;
  background: transparent;
  padding: 1rem;
  border: solid 1px white;
  border-radius: 1rem;
  outline: none;
  font-size: 1rem;
  cursor: text;
  :focus {
    border: 2px solid #339af0;
  }
`;
