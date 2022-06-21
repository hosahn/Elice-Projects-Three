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
import LandingNav from '../../components/nav/LandingNav';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  height: 100vh;
`;

const LoginMainContainer = styled.div`
  display: grid;
  place-items: center;
  align-items: center;
  margin-top: 150px;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isEmailValid = validateEmail(email);
  const isPasswordValid = password.length >= 4;
  const isFormValid = isEmailValid && isPasswordValid;

  const navigate = useNavigate();

  const clickLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await Api.post('login/local', {
        email,
        pw: password,
      });
      console.log(res);
      if (res.data === true) {
        navigate('/usermain');
      } else {
        alert('로그인을 실패하였습니다.');
      }
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        console.error('data : ', data);
        alert('로그인을 실패하였습니다.');
      }
    }
  };

  return (
    <Container>
      <LandingNav />
      <div>
        <LoginMainContainer>
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
        </LoginMainContainer>
      </div>
    </Container>
  );
};

export default Login;
