import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import GlobalStyles from './common/GlobalStyles'
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root')
ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  rootElement
)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
