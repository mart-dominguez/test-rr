import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import restoApp from './reducers'

let store = createStore(restoApp);


ReactDOM.render(  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
