import React from 'react';
import {  Switch, Route, Redirect } from 'react-router-dom';
import {HomePage} from './views/pages';

export default () => {

  return (
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Redirect to="/"/>
    </Switch>
  );
};