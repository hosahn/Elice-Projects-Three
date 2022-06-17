import { useState } from 'react';
import SocialLogin from './SocialLogin';
import { LoginText, LoginInput, SocialLoginContainer } from '../../styles/LoginStyle';
import images from '../../assets/images';
import styled from 'styled-components';
import Btn from '../../components/Btn';
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
  const [isValid, setIsValid] = useState(true);

  const validateEmail = email => {
    return email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };

  const clickLogin = async e => {
    const isValidResult = validateEmail(email);
    if (isValidResult === null || password.length === 0) {
      setIsValid(false);
      return;
    }

    const res = await Api.post('login/local', {
      email,
      password,
    });

    console.log(res);
    e.preventDefault();
  };

  return (
    <LoginMainContainer props={images}>
      <div>
        <div style={{ marginTop: '1rem' }}>
          <LoginText>이메일 주소</LoginText>
          <LoginInput
            type='email'
            autoComplete='on'
            id='email-input'
            label='email'
            variant='standard'
            color='secondary'
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <LoginText>비밀번호</LoginText>
          <LoginInput
            type='password'
            id='password-input'
            label='password'
            autoComplete='current-password'
            variant='standard'
            color='secondary'
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div style={{ margin: '0 auto', width: '100px' }}>
          <Btn text={'로그인'} type={'sub'} onClick={clickLogin} />
        </div>
        <SocialLoginContainer>
          <SocialLogin />
        </SocialLoginContainer>
      </div>
    </LoginMainContainer>
  );
};

export default Login;
