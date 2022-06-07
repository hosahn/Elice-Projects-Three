import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import * as Api from './api';
import Introduction from './pages/Introduction';
import UserMain from './pages/UserMain';
import UserInfo from './pages/UserInfo';
import Nav from './components/nav/Nav';
import Write from './pages/Write';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Introduction />} />
        <Route path="/userMain" element={<UserMain />} />
        <Route path="/userInfo" element={<UserInfo />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </Router>
  );
}

export default App;
