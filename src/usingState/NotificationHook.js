import { useState } from 'react';

function useNotification() {
  const [notifications, setNotifications] = useState([]);

  function addNotification(notification) {
    console.log('usingState');
    const lastNotification = notifications[notifications.length - 1];
    const newId = lastNotification
      ? lastNotification.id + 1
      : notifications.length;

    setNotifications(state => [...state, { ...notification, id: newId }]);
  }

  function dismiss(notificationId) {
    setNotifications(state =>
      state.filter(notification => notification.id !== notificationId),
    );
  }

  return [notifications, addNotification, dismiss];
}

export default useNotification;
