import React, { useContext } from 'react';
import { createPortal } from 'react-dom';

import Alert from './Alert';
import NotificationContext from './context/NotificationContext';

function Alerts() {
  const [notifications, , dismiss] = useContext(NotificationContext);

  return createPortal(
    <>
      {notifications.map(notification => (
        <Alert key={notification.id} dismiss={dismiss} {...notification} />
      ))}
    </>,
    document.getElementById('modal'),
  );
}

export default Alerts;
