import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { render } from 'react-dom';

import Home from './pages/Home';

render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>,
  document.getElementById('root')
);
