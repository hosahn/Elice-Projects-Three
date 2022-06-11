import styled from 'styled-components';
import SocialLogin from './SocialLogin';
import images from '../../assets/images';

const LoginMainContainer = styled.div`
  position: realtive;
  display: grid;
  place-items: center;
  height: 100vh;
  background-image: url(${images.Background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const LoginText = styled.div`
  font-family: 'EliceDigitalBaeum';
  font-size: 1rem;
  line-height: 1.5rem;
  color: white;
`;

const LoginInput = styled.input`
  display: inline-flex;
  width: 30rem;
  height: 3rem;
  color: white;
  background: transparent;
  padding: 1rem;
  border-radius: 1rem;
  outline: none;
  font-size: 1rem;
  cursor: text;
  &:focus::-webkit-input-placeholder {
    color: #748ffc;
  }
`;

const SocialLoginContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.3rem;
`;

const Login = () => {
  return (
    <LoginMainContainer>
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
