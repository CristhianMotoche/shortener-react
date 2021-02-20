import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { render } from 'react-dom';

import Main from './components/Main';

render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('root')
);
