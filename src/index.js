
import React from 'react';
import ReactDOM from 'react-dom';
import "./firebase";
import { Provider } from 'react-redux';
import store from "./redux/store";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
