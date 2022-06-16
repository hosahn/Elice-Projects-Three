import SocialLogin from './SocialLogin';
import { LoginText, LoginInput, SocialLoginContainer } from '../../styles/LoginStyle';
import images from '../../assets/images';
import styled from 'styled-components';

const LoginMainContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;

  ::after {
    width: 100%;
    height: 100%;
    content: '';
    background: url(${images.Bg});
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.7;
  }
`;
const Login = () => {
  return (
    <LoginMainContainer props={images}>
      <div>
        <div style={{ marginTop: '1rem' }}>
          <LoginText>이메일 주소</LoginText>
          <LoginInput type='email' autoComplete='on' />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <LoginText>비밀번호</LoginText>
          <LoginInput type='email' autoComplete='on' />
        </div>
        <SocialLoginContainer>
          <SocialLogin />
        </SocialLoginContainer>
      </div>
    </LoginMainContainer>
  );
};

export default Login;
