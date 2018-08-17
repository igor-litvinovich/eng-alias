import React from 'react';
import ReactDOM from 'react-dom';
import DictaphoneComponent from './DictaphoneComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DictaphoneComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
