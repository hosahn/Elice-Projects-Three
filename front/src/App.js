import React, { useState, useEffect, useReducer, createContext } from 'react';
import { userReducer } from './reducer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import * as Api from './api';
import Introduction from './pages/Introduction';
import UserMain from './pages/UserMain';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

export const UserStateContext = createContext(null);
export const DispatchContext = createContext(null);

function App() {
  const [userState, userDispatch] = useReducer(userReducer, {
    user: null,
  });

  const [isFetchCompleted, setIsFetchCompleted] = useState(false);

  const fetchCurrentUser = async () => {
    try {
      const res = await Api.get('user/current');
      const currentUser = res.data;

      userDispatch({
        type: 'LOGIN_SUCCESS',
        payload: currentUser,
      });

      console.log('%c sessionStorage에 토큰 있음.', 'color: #d93d1a;');
    } catch {
      console.log('%c SessionStorage에 토큰 없음.', 'color: #d93d1a;');
    }
    setIsFetchCompleted(true);
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  if (!isFetchCompleted) {
    return 'loading...';
  }

  return (
    <DispatchContext.Provider value={userDispatch}>
      <UserStateContext.Provider value={userState}>
        <Router>
          <Routes>
            <Route path='/' exact element={<Introduction />} />
            <Route path='/userMain' element={<UserMain />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/register' element={<RegisterForm />} />
          </Routes>
        </Router>
      </UserStateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
