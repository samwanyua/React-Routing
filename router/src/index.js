import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {unstable_HistoryRouter} from 'react-router-dom'
// You have direct access to browser history

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

