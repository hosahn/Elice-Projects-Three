import React, { useState, useEffect, useReducer, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduction from './pages/Introduction';
import UserMain from './pages/UserMain';
import Login from './pages/login/Login';
import './App.css';

export const UserStateContext = createContext(null);
export const DispatchContext = createContext(null);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Introduction />} />
        <Route path="/userMain" element={<UserMain />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
