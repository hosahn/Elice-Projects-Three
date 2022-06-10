import styled from 'styled-components';

const CustomButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5rem;
  padding: 0.5rem 1rem;
  font-size: 18px;
  white-space: nowrap;
  font-family: 'EliceDigitalBaeum';
  background-color: ${props => (props.type === 'main' ? '#3D2C8D' : '#EFF0F2')};
  color: ${props => (props.type === 'main' ? '#FFFFFF' : '#3D2C8D')};
`;

const Btn = ({ text, type, onClick, disabled }) => {
  const btnType = ['main', 'sub'].includes(type) ? type : 'main';
  console.log(btnType);
  return (
    <CustomButton type={btnType} onClick={onClick} disabled={disabled}>
      {text}
    </CustomButton>
  );
};

Btn.defaultProps = {
  type: 'default',
};

export default Btn;
