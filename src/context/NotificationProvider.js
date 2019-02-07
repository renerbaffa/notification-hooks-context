import React from 'react';

import NotificationsContext from './NotificationContext';
import useNotification from '../Hooks/Notification';

function NotificationProvider(props) {
  const [notifications, setNotifications, dismiss] = useNotification();

  return (
    <NotificationsContext.Provider
      {...props}
      value={[notifications, setNotifications, dismiss]}
    />
  );
}

export default NotificationProvider;
