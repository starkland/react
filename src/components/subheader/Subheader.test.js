import React from 'react';
import ReactDOM from 'react-dom';

import Subheader from './Subheader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Subheader />, div);
});
