import React from 'react';
import {  Switch, Route, Redirect } from 'react-router-dom';
import {Home} from './views/pages';

export default () => {

  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Redirect to="/"/>
    </Switch>
  );
};