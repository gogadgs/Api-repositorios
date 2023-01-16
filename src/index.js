import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { HashRouter } from "react-router-dom";



import GlobalStyles from './global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <GlobalStyles />
    <App />
  </HashRouter>
);