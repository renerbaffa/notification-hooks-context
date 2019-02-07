import React from 'react';
import ReactDOM from 'react-dom';

import NotificationProvider from './context/NotificationProvider';
import NotificationManager from './NotificationManager';
import Alerts from './Alerts';

import './styles.css';

function App() {
  return (
    <NotificationProvider>
      <NotificationManager />
      <Alerts />
    </NotificationProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
