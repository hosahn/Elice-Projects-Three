import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Introduction from './pages/Introduction';
import UserMain from './pages/main/Main';
import UserInfo from './pages/UserInfo';
import Nav from './components/nav/Nav';
import Diary from './pages/diary/Diary';
import Challenge from './pages/challenge/Challenge';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Introduction />} />
        <Route path="/userMain" element={<UserMain />} />
        <Route path="/userInfo" element={<UserInfo />} />
        <Route path="/diaryEditor" element={<Diary />} />
        <Route path="/challenge" element={<Challenge />} />
      </Routes>
    </Router>
  );
}

export default App;
