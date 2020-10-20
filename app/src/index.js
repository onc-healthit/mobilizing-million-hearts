/* eslint-disable no-unused-vars, import/order */

// import order is diabled here because some literally need to go before others for polyfilling

import 'react-app-polyfill/ie9';
import 'core-js/stable';
import 'core-js/features/array/find';
import 'core-js/features/array/includes';
import 'core-js/features/number/is-nan';
import 'regenerator-runtime/runtime';
import './resources/cerner-smart-embeddable-lib-1.2.0.min';
import './resources/cerner-smart-embeddable-lib-1.2.0.min.css';
import 'f-twelve';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-slider/dist/css/bootstrap-slider.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'rc-slider/assets/index.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
