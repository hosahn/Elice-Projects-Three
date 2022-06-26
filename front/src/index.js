import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';
import App from './App';
import './index.css';
import GlobalStyle from './styles/GlobalStyle';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <RecoilRoot>
        <Suspense fallback={<div>Loading....</div>}>
          <App />
        </Suspense>
      </RecoilRoot>
    </ThemeProvider>
  </>
);
