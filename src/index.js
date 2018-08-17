import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import Router from './router';
import storeFactory from './helpers/storeFactory';
import  initialState from './constants/initialState';

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
