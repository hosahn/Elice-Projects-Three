import { useState } from 'react';
import SocialLogin from './SocialLogin';
import {
  LoginText,
  LoginInput,
  SocialLoginContainer,
} from '../../styles/LoginStyle';
import images from '../../assets/images';
import styled from 'styled-components';
import Btn from '../../components/Btn';
import { validateEmail } from '../../utils/validation';
import * as Api from '../../api';

const LoginMainContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  height: 100vh;
  background-image: url(${images.Bg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = validateEmail(email);
  const isPasswordValid = password.length >= 4;
  const isFormValid = isEmailValid && isPasswordValid;

  const clickLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await Api.post('login/local', {
        email,
        password,
      });
      console.log(res);
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        console.error('data : ', data);
      }
    }
  };

  return (
    <LoginMainContainer props={images}>
      <div>
        <div style={{ marginTop: '1rem' }}>
          <LoginText>이메일 주소</LoginText>
          <LoginInput
            type="email"
            id="email-input"
            label="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <LoginText>비밀번호</LoginText>
          <LoginInput
            type="password"
            id="password-input"
            label="password"
            autoComplete="current-password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div style={{ margin: '0 auto', width: '100px' }}>
          <Btn
            text={'로그인'}
            type={'sub'}
            onClick={clickLogin}
            disabled={!isFormValid}
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
