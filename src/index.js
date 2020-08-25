import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
   return (
    promiseInProgress &&
    <div className="loader">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );  
 }

ReactDOM.render(
  <React.StrictMode>
     <LoadingIndicator/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
