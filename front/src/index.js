import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';
import App from './App';
import './index.css';
import GlobalStyle from './styles/GlobalStyle';
import { CookiesProvider } from 'react-cookie';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <CookiesProvider>
      <ThemeProvider theme={Theme}>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </ThemeProvider>
    </CookiesProvider>
  </>
);
