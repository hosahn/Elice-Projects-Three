import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Btn from './Btn';
import * as Api from '../api';
import styled from 'styled-components';
import images from '../assets/images';
import { LoginInput, LoginText } from '../styles/LoginStyle';

// const RegisterInput = styled.input`
//   display: inline-flex;
//   width: 30rem;
//   height: 3rem;
//   color: white;
//   background: transparent;
//   padding: 1rem;
//   border: solid 1px #dbc7ff;
//   border-radius: 1rem;
//   outline: none;
//   font-size: 1rem;
//   cursor: text;
// `;

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

// const RegisterLabel = styled.div`
//   font-family: 'EliceDigitalBaeum';
//   font-size: 1rem;
//   line-height: 1.5rem;
//   color: white;
// `;

function RegisterForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [duplicate, setDuplicate] = useState('');

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

      if (post.data === true) {
        alert('사용 가능한 이메일 입니다. ');
      } else {
        alert('중복된 이메일입니다. '); // 회원가입 버튼 disabled
      }
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        console.error('data : ', data);
      }
    }
  };
  const isFormValid = isEmailValid && isPasswordValid && isPasswordSame && isNameValid && isEmailDuplicate;
  // const emailCheck = (e) => {
  //   e.preventDefault();
  //   const { usableId } = this.state; // usableID state를 비구조화 할당!
  //   // ⬇︎은 백엔드로 fetch해서 입력된 값을 POST!
  //   fetch("http://10.58.6.197:8000/sign-up/check", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type" : "application/json"
  //     },
  //     body: JSON.stringify({user_id: this.state.user_id})
  //   })
  //   .then(response => {if(response.status === 200){
  //     alert("사용 가능한 아이디 입니다.");// 백엔드로 보낸 데이터 결과 200 일 경우
  //     this.setState({usable_id: true})//사용 가능한 아이디 일 경우 state상태에 true값으로 변경, 나중에 회원가입 버튼 클릭 이벤트핸들러에 필요!
  //   }else if(response.status === 409){
  //     alert("이미 사용중인 아이디 입니다.") // 이미 데이터베이스에 있는 아이디일 경우 409
  //   }else{ // 그 외에는 사용 불가한 아이디
  //     alert("사용 불가한 아이디입니다.")
  //   }
  //  })
  // }

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await Api.post('user/signup/', {
        email,
        pw: password,
        // name,
      });
      console.log(response);
      // navigate('/login');
    } catch (err) {
      console.log('회원가입 실패', err);
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

// css 수정 예정
// 이메일, 닉네임 중복 검사 추가 예정

export default RegisterForm;
