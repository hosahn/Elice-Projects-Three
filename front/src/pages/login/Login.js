import styled from 'styled-components';
import SocialLogin from './SocialLogin';

const LoginInput = styled.input`
  display: inline-flex;
  width: 30rem;
  height: 3rem;
  background: transparent;
  border-radius: 1rem;
  outline: none;
  cursor: text;
  &:focus::-webkit-input-placeholder {
    color: #748ffc;
  }
`;

const SocialLoginContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Login = () => {
  return (
    <div style={{}}>
      <div>
        <div>
          <div style={{ marginTop: '1rem' }}>
            <div>이메일 주소</div>
            <LoginInput
              type="email"
              autoComplete="on"
              style={{
                border: 'solid 1px #DBC7FF',
              }}
            />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <div>비밀번호</div>
            <LoginInput
              type="email"
              autoComplete="on"
              style={{
                border: 'solid 1px #DBC7FF',
              }}
            />
          </div>
        </div>
      </div>
      <SocialLoginContainer>
        <SocialLogin />
      </SocialLoginContainer>
    </div>
  );
};

export default Login;
