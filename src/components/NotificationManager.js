import React, { useContext } from 'react';

import NotificationContext from '../context/NotificationContext';

function NotificationManager() {
  const [, addNotification, , reset] = useContext(NotificationContext);

  return (
    <div className="flex">
      <button
        onClick={() => addNotification({ content: 'Some text', type: 'error' })}
      >
        Dispatch an alert!
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default NotificationManager;
