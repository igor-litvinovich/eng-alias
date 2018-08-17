import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Router from './router';
import './index.scss';

ReactDOM.render((
  <BrowserRouter basename="/">
    <Router/>
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
