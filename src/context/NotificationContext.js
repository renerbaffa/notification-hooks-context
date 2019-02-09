import { createContext } from 'react';

const noop = () => {};

const NotificationsContext = createContext([
  [], // list of notifications
  noop, // add function
  noop, // remove function
  noop, // reset function
]);

export default NotificationsContext;
