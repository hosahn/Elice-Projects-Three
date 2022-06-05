import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

import './style.css';

const Nav = () => {
  return (
    <header>
      <button className="navBtn">
        <div className="highLight">챌린지</div>
      </button>
      <button className="navBtn">
        <div className="highLight">리포트</div>
      </button>
      <button className="navBtn">
        <div className="highLight">전체 일기</div>
      </button>
      <button className="navUserBtn">
        <FontAwesomeIcon icon={faCircleUser} className="user" />
      </button>
    </header>
  );
};

export default Nav;
