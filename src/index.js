import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './components/reducers';
import * as serviceWorker from './serviceWorker';
import './index.css';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <App /> 
  </BrowserRouter>
</Provider>,
document.getElementById('root'));

serviceWorker.unregister();