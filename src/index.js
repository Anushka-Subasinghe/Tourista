import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom'
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
