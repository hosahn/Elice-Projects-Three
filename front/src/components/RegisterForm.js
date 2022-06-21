import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Btn from './Btn';
import * as Api from '../api';
import styled from 'styled-components';
import images from '../assets/images';
import { LoginInput, LoginText } from '../styles/LoginStyle';

const RegisterContainer = styled.div`
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

function RegisterForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  c;

  const validateEmail = email => {
    return email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };

  const isEmailValid = validateEmail(email);

  const isPasswordValid = password.length >= 4;

  const isPasswordSame = password === confirmPassword;

  const isNameValid = name.length >= 2;

  const isEmailDuplicate = async e => {
    e.preventDefault();

    try {
      const post = await Api.post('user/signup/check', {
        email,
      });

      if (post.data === false) {
        alert('사용 가능한 이메일 입니다. ');
      } else {
        alert('중복된 이메일입니다. '); // 회원가입 버튼 disabled
      }
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        console.error('data : ', data);
        alert('중복체크 중 에러가 발생했습니다..');
      }
    }
  };
  const isFormValid = isEmailValid && isPasswordValid && isPasswordSame && isNameValid && isEmailDuplicate;

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await Api.post('user/signup/', {
        email,
        pw: password,
        name,
      });
      console.log(response);
      navigate('/login');
    } catch (err) {
      console.log('회원가입 실패', err);
      alert('회원가입 중 에러가 발생했습니다.');
    }
  };

  return (
    <RegisterContainer id='RC'>
      <div onSubmit={handleSubmit}>
        <div style={{ marginBottom: '30px' }}>
          <LoginText>이메일 주소</LoginText>
          <LoginInput type='email' autoComplete='off' value={email} onChange={e => setEmail(e.target.value)} />

          <Btn text={'중복체크'} type={'sub'} onClick={isEmailDuplicate} />

          {!isEmailValid && <LoginText className='text-success'>이메일 형식이 올바르지 않습니다.</LoginText>}
        </div>

        <div style={{ marginBottom: '30px' }}>
          <LoginText>비밀번호</LoginText>
          <LoginInput type='password' autoComplete='off' value={password} onChange={e => setPassword(e.target.value)} />
          {!isPasswordValid && <LoginText className='text-success'>비밀번호는 4글자 이상으로 설정해 주세요.</LoginText>}
        </div>

        <div style={{ marginBottom: '30px' }}>
          <LoginText>비밀번호 재확인</LoginText>
          <LoginInput type='password' autoComplete='off' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          {!isPasswordSame && <LoginText className='text-success'>비밀번호가 일치하지 않습니다.</LoginText>}
        </div>

        <div style={{ marginBottom: '30px' }}>
          <LoginText>닉네임</LoginText>
          <LoginInput type='text' autoComplete='off' value={name} onChange={e => setName(e.target.value)} />
          {!isNameValid && <LoginText className='text-success'>닉네임은 2글자 이상으로 설정해 주세요.</LoginText>}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Btn text={'회원가입'} type={'sub'} disabled={!isFormValid} onClick={handleSubmit} />
        </div>
      </div>
    </RegisterContainer>
  );
}

export default RegisterForm;
