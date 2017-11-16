import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TraveRum from './containers/TraveRum';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <TraveRum />,
  document.getElementById('root')
);
registerServiceWorker();
