import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import rootReducer from './rootReducer';
import storeFactory from './helpers/storeFactory';
import  initialState from './constants/initialState';
import registerServiceWorker from './registerServiceWorker';

import './index.scss';

const immutableInitialState = Immutable.fromJS(initialState);
const store = storeFactory.create(immutableInitialState, rootReducer);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter basename="/">
      <Router/>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
