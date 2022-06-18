import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import UserMain from './pages/main/Main';
import UserInfo from './pages/UserInfo';
import Diary from './pages/diary/Diary';
import Challenge from './pages/challenge/Challenge';
import Login from './pages/login/Login';
import RegisterForm from './components/RegisterForm';
import Note from './pages/note/Note';
import View from './pages/note/View';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/userMain" element={<UserMain />} />
        <Route path="/userInfo" element={<UserInfo />} />
        <Route path="/diaryEditor" element={<Diary />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/note" element={<Note />} />
        <Route path="/diary/:diaryId" element={<View />} />
        <Route path="*" exact element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
