import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './containers/Calculator';
import Credits from './components/Credits';

ReactDOM.render(
  <React.StrictMode>
  	<React.Fragment>
    <Calculator />
    <Credits />
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);