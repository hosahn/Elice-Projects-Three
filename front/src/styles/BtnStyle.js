import styled from 'styled-components';

export const CustomButton = styled.button`
  border-radius: 5rem;
  padding: 0.5rem 1rem;
  margin: 10px;
  font-size: 18px;
  white-space: nowrap;
  font-family: 'EliceDigitalBaeum';
  background-color: ${(props) =>
    props.type === 'main' ? '#3D2C8D' : '#EFF0F2'};
  color: ${(props) => (props.type === 'main' ? '#FFFFFF' : '#3D2C8D')};
`;

export const ArrowButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 35%;
  left: ${(props) => `${props.left}rem`};
  right: ${(props) => `${props.right}rem`};
  transform: translateY(-50%);
  padding: 5px;
  border-radius: 2rem;
  background-color: #eff0f2;
  opacity: 0.6;
  font-weight: 900;
  &:hover {
    background-color: #fcc2d7;
  }
`;
