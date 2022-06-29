import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NavWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: end;
`;

const NavBtn = styled.button`
  font-family: 'EliceDigitalBaeum';
  color: black;
  font-size: 20px;
  margin-right: 40px;
  :hover {
    opacity: 0.7;
  }
`;

const LandingNav = () => {
  const navigate = useNavigate();
  return (
    <NavWrapper>
      <NavBtn onClick={() => navigate('/register')}>회원가입</NavBtn>
      <NavBtn onClick={() => navigate('/login')}>로그인</NavBtn>
    </NavWrapper>
  );
};

export default LandingNav;
