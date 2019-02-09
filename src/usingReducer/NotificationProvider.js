import React, { useEffect } from 'react';

import NotificationsContext from '../context/NotificationContext';

import useNotification from './NotificationHook';

function NotificationProvider({ approach, ...props }) {
  const [notifications, setNotifications, dismiss, reset] = useNotification();

  return (
    <NotificationsContext.Provider
      {...props}
      value={[notifications, setNotifications, dismiss, reset]}
    />
  );
}

export default NotificationProvider;
