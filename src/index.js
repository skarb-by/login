
import React from 'react';
import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
import './firebase';
import App from 'App';

const rootNode = document.getElementById('container')
const root = ReactDOMClient.createRoot(rootNode)

root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
)

