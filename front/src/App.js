import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import * as Api from './api';
import Introduction from './pages/Introduction';
import UserMain from './pages/UserMain';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Introduction />} />
        <Route path="/userMain" element={<UserMain />} />
      </Routes>
    </Router>
  );
}

export default App;
