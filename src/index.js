import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import StateNotificationProvider from './usingState/NotificationProvider';
import ReducerNotificationProvider from './usingReducer/NotificationProvider';

import NotificationManager from './components/NotificationManager';
import ApproachSelector from './components/ApproachSelector';
import Alerts from './components/Alerts';

import { REDUCER } from './constants/approaches';
import './styles.css';

function App() {
  const [approach, setApproach] = useState(REDUCER);

  const Provider =
    approach === REDUCER
      ? ReducerNotificationProvider
      : StateNotificationProvider;

  return (
    <Provider>
      <div className="App">
        <ApproachSelector approach={approach} setApproach={setApproach} />
        <NotificationManager />
      </div>
      <Alerts />
    </Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
