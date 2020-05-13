import React from 'react';
import {BrowserRouter } from 'react-router-dom'

import Routes from './routes'

import './Global.css'

import {GlobalStyles} from './Global'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
      
        <Routes />
      </BrowserRouter>

    </>
  );
}

export default App;
