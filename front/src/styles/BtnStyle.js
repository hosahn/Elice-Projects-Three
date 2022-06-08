import styled from 'styled-components';

export const CustomButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5rem;
  padding: 0.5rem 1rem;
  font-size: 18px;
  white-space: nowrap;
  font-family: 'EliceDigitalBaeum';
  background-color: ${(props) =>
    props.type === 'main' ? '#3D2C8D' : '#EFF0F2'};
  color: ${(props) => (props.type === 'main' ? '#FFFFFF' : '#3D2C8D')};
`;
