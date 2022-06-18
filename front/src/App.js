<<<<<<< HEAD
import React, { useState, useEffect, useReducer, createContext } from 'react';
=======
import React from 'react';
>>>>>>> origin/BE/test/HS
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Introduction from './pages/Introduction';
import UserMain from './pages/main/Main';
import UserInfo from './pages/UserInfo';
<<<<<<< HEAD
import Nav from './components/nav/Nav';
=======
>>>>>>> origin/BE/test/HS
import Diary from './pages/diary/Diary';
import Challenge from './pages/challenge/Challenge';
import Login from './pages/login/Login';
import RegisterForm from './components/RegisterForm';
<<<<<<< HEAD
import './App.css';

export const UserStateContext = createContext(null);
export const DispatchContext = createContext(null);
=======
import Note from './pages/note/Note';
import View from './pages/note/View';

import './App.css';
>>>>>>> origin/BE/test/HS

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Nav />
      <Routes>
        <Route path="/" exact element={<Introduction />} />
=======
      <Routes>
        <Route path="/" exact element={<Introduction />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
>>>>>>> origin/BE/test/HS
        <Route path="/userMain" element={<UserMain />} />
        <Route path="/userInfo" element={<UserInfo />} />
        <Route path="/diaryEditor" element={<Diary />} />
        <Route path="/challenge" element={<Challenge />} />
<<<<<<< HEAD
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
=======
        <Route path="/note" element={<Note />} />
        <Route path="/diary/:diaryId" element={<View />} />
        <Route path="*" exact element={<Introduction />} />
>>>>>>> origin/BE/test/HS
      </Routes>
    </Router>
  );
}

export default App;
