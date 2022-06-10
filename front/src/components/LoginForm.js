import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Btn from './Btn';
import { KAKAO_AUTH_URL } from './OAuth.js';

// import { Container, Col, Row, Form, Button } from 'react-bootstrap';

import * as Api from '.././api';
import { DispatchContext } from '.././App';

const LoginInput = styled.input`
  display: inline-flex;
  min-width: 20rem;
  background: transparent;
  border: none;
  outline: none;
  cursor: text;
  &:focus::-webkit-input-placeholder {
    color: #748ffc;
  }
`;

const LoginContainer = styled.div`
  justify-content: center;
  margint-top: 2rem;
`;

function LoginForm() {
  const navigate = useNavigate();
  const userDispatch = useContext(DispatchContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = email => {
    return email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };

  const isEmailValid = validateEmail(email);
  const isPasswordValid = password.length >= 4;

  const isFormValid = isEmailValid && isPasswordValid;

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await Api.post('user/login', {
        email,
        password,
      });
      const user = res.data;
      const jwtToken = user.token;
      sessionStorage.setItem('userToken', jwtToken);

      userDispatch({
        type: 'LOGIN_SUCCESS',
        payload: user,
      });

      navigate('/', { replace: true });
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <>
      <LoginContainer>
        <div lg={12}>
          <div onSubmit={handleSubmit}>
            <div controlId='loginEmail'>
              <div>이메일 주소</div>
              <LoginInput
                type='email'
                autoComplete='on'
                value={email}
                style={{
                  border: 'solid 2px #DBC7FF',
                }}
                onChange={e => setEmail(e.target.value)}
              />
              {!isEmailValid && <div className='text-success'>이메일 형식이 올바르지 않습니다.</div>}
            </div>

            <div controlId='loginPassword' className='mt-3'>
              <div>비밀번호</div>
              <LoginInput
                type='password'
                autoComplete='on'
                value={password}
                style={{
                  border: 'solid 2px #DBC7FF',
                }}
                onChange={e => setPassword(e.target.value)}
              />
              {!isPasswordValid && <div className='text-success'>비밀번호는 4글자 이상입니다.</div>}
            </div>

            <div className='mt-3 text-center'>
              <div sm={{ span: 20 }}>
                <Btn text={'로그인'} type={'sub'} />

                <Btn text={'회원가입'} type={'sub'} onClick={() => navigate('/register')} />
              </div>
            </div>
          </div>
        </div>
        <div sm={{ span: 20 }}>
          <img src={process.env.PUBLIC_URL + '/google.png'} alt='구글' style={{ width: '30px', height: '30pxt', marginRight: '30px' }} />
          <a href={KAKAO_AUTH_URL}>
            <img src={process.env.PUBLIC_URL + '/kakao.png'} style={{ width: '30px', height: '30px', marginRight: '30px' }} />
          </a>
          <img src={process.env.PUBLIC_URL + '/naver2.png'} style={{ width: '30px', height: '30px', marginRight: '30px' }} />
        </div>
      </LoginContainer>
    </>
  );
}

export default LoginForm;
