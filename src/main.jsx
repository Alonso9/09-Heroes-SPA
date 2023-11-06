import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { HoreosApp } from './HoreosApp';

import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HoreosApp />
    </BrowserRouter>
  </React.StrictMode>
);
