import React from 'react';
import ReactDOM from 'react-dom';
import CVApplication from './components/CVApplication'
import './styles/styles.scss';

ReactDOM.render(<CVApplication />, document.getElementById('app'));
// yarn run webpack serve --mode development