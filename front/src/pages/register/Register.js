import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Btn from '../../components/Btn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { ClassicSpinner } from 'react-spinners-kit';
import * as Api from '../../api';
import styled from 'styled-components';
import {
  RegisterInput,
  RegisterText,
  WarningText,
} from '../../styles/RegisterStyle';
import { validateEmail } from '../../utils/validation';
import LandingNav from '../../components/nav/LandingNav';
import snackBar from '../../components/snackBar';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const emailRef = useRef();
  const [checkState, setCheckState] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [openLoading, setOpenLoading] = useState(false);

  const isEmailValid = validateEmail(email);
  const isPasswordValid = password.length >= 4;
  const isPasswordSame = password === confirmPassword;
  const isNameValid = name.length >= 2;

  const isFormValid =
    isEmailValid &&
    isPasswordValid &&
    isPasswordSame &&
    isNameValid &&
    checkEmail;

  useEffect(() => {
    alert('이메일 먼저 작성 부탁드립니다.😊');
    emailRef.current.focus();
  }, []);

  const isEmailDuplicate = async (e) => {
    e.preventDefault();
    if (isEmailValid) {
      setOpenLoading(true);
      setTimeout(async () => {
        try {
          const post = await Api.post('user/signup/check', {
            email,
          });
          console.log(post.data);
          if (post.data === false) {
            setOpenLoading(false);
            setCheckState(true);
            setCheckEmail(true);
            alert('사용 가능한 이메일 입니다. ');
          } else {
            setOpenLoading(false);
            alert('중복된 이메일입니다. ');
          }
        } catch (error) {
          if (error.response) {
            setOpenLoading(false);
            alert('중복체크 중 에러가 발생했습니다..');
          }
        }
      }, 1500);
    } else {
      alert('올바른 이메일 형식 입력!');
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await Api.post('user/signup/', {
        email,
        pw: password,
        name,
      });
      console.log(response.data);
      if (response.data === 'true') {
        snackBar('sucess', '회원가입에 성공하였습니다.');
        navigate('/login');
      } else {
        snackBar('sucess', '회원가입에 성공하였습니다.');
      }
    } catch (err) {
      snackBar('sucess', '회원가입에 성공하였습니다.');
    }
  };

  return (
    <>
      <LandingNav />
      <RegisterContainer id="RC">
        <div onSubmit={handleSubmit}>
          <div style={{ marginBottom: '30px' }}>
            <RegisterText>📧 이메일 주소 </RegisterText>
            <RegisterInput
              type="email"
              autoComplete="off"
              value={email}
              ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
            />
            <IconWrapper onClick={isEmailDuplicate} color={checkState}>
              {openLoading ? (
                <ClassicSpinner size={20} color="pink" />
              ) : (
                <FontAwesomeIcon icon={faCircleCheck} className="user" />
              )}
            </IconWrapper>
            {!isEmailValid && (
              <WarningText>이메일 형식이 올바르지 않습니다.</WarningText>
            )}
          </div>

          <div style={{ marginBottom: '30px' }}>
            <RegisterText>🔑 비밀번호</RegisterText>
            <RegisterInput
              type="password"
              autoComplete="off"
              value={password}
              disabled={!checkEmail}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!isPasswordValid && (
              <WarningText>
                비밀번호는 4글자 이상으로 설정해 주세요.
              </WarningText>
            )}
          </div>

          <div style={{ marginBottom: '30px' }}>
            <RegisterText> ✅ 비밀번호 재확인</RegisterText>
            <RegisterInput
              type="password"
              autoComplete="off"
              value={confirmPassword}
              disabled={!checkEmail}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {!isPasswordSame && (
              <WarningText>비밀번호가 일치하지 않습니다.</WarningText>
            )}
          </div>

          <div style={{ marginBottom: '30px' }}>
            <RegisterText> 🔖 닉네임</RegisterText>
            <RegisterInput
              type="text"
              autoComplete="off"
              value={name}
              disabled={!checkEmail}
              onChange={(e) => setName(e.target.value)}
            />
            {!isNameValid && (
              <WarningText>닉네임은 2글자 이상으로 설정해 주세요.</WarningText>
            )}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Btn
              text={'회원가입'}
              type={'sub'}
              disabled={!isFormValid}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </RegisterContainer>
    </>
  );
};

export default Register;

const RegisterContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  height: 100vh;
`;

const IconWrapper = styled.div`
  color: ${(prop) => (prop.color ? 'pink' : '#808080')};
  font-size: 20px;
  position: absolute;
  top: 38px;
  right: 10px;
  left: 430px;
  width: 10px;
  cursor: pointer;
  :hover {
    color: pink;
  }
`;
