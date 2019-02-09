import { useReducer } from 'react';

import NotificationReducer from './NotificationReducer';

function useNotification() {
  const [notifications, dispatch] = useReducer(NotificationReducer, []);

  function addNotification(notification) {
    dispatch({ type: 'add', payload: { ...notification } });
  }

  function dismiss(notificationId) {
    dispatch({ type: 'remove', payload: notificationId });
  }

  function reset() {
    dispatch({ type: 'reset' });
  }

  return [notifications, addNotification, dismiss, reset];
}

export default useNotification;
