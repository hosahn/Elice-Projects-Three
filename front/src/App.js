import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import UserMain from './pages/main/Main';
import UserInfo from './pages/UserInfo';
import Diary from './pages/diary/Diary';
import Challenge from './pages/challenge/Challenge';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Note from './pages/note/Note';
import View from './pages/note/View';
import Report from './pages/Report';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userMain" element={<UserMain />} />
        <Route path="/userInfo" element={<UserInfo />} />
        <Route path="/diaryEditor" element={<Diary />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/note" element={<Note />} />
        <Route path="/diary/:diaryId" element={<View />} />
        <Route path="/report" element={<Report />} />
        <Route path="*" exact element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
