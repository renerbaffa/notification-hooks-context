import React, { useContext } from 'react';
import { css } from 'emotion';

import Alert from './Alert';
import NotificationContext from './context/NotificationContext';

// @TODO: to use portal instead of position: fixed
const styles = css({
  position: 'fixed',
  bottom: 0,
  margin: '0 20px',
  width: 'calc(100% - 40px)',
});

function Alerts() {
  const [notifications, , dismiss] = useContext(NotificationContext);

  return (
    <div className={styles}>
      {notifications.map(notification => (
        <Alert key={notification.id} dismiss={dismiss} {...notification} />
      ))}
    </div>
  );
}

export default Alerts;
