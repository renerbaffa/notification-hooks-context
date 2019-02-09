const INITIAL_STATE = [];

export default function NotificationReducer(
  notifications = INITIAL_STATE,
  action,
) {
  switch (action.type) {
    case 'add':
      const lastNotification = notifications[notifications.length - 1];
      const newId = lastNotification
        ? lastNotification.id + 1
        : notifications.length;

      return [...notifications, { ...action.payload, id: newId }];
    case 'remove':
      return notifications.filter(
        notification => notification.id !== action.payload,
      );
    case 'reset':
      return INITIAL_STATE;
    default:
      return notifications;
  }
}
