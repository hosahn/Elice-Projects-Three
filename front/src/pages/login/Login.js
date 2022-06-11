import SocialLogin from './SocialLogin';
import {
  LoginText,
  LoginInput,
  SocialLoginContainer,
} from '../../styles/LoginStyle';
import images from '../../assets/images';
import styled from 'styled-components';

const LoginMainContainer = styled.div`
  position: realtive;
  display: grid;
  place-items: center;
  height: 100vh;
  background-image: url(${images.Background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Login = () => {
  return (
    <LoginMainContainer props={images}>
      <div>
        <div style={{ marginTop: '1rem' }}>
          <LoginText>이메일 주소</LoginText>
          <LoginInput
            type="email"
            autoComplete="on"
            style={{
              border: 'solid 1px #DBC7FF',
            }}
          />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <LoginText>비밀번호</LoginText>
          <LoginInput
            type="email"
            autoComplete="on"
            style={{
              border: 'solid 1px #DBC7FF',
            }}
          />
        </div>
        <SocialLoginContainer>
          <SocialLogin />
        </SocialLoginContainer>
      </div>
    </LoginMainContainer>
  );
};

export default Login;
