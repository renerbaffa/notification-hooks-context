import React, { useEffect } from 'react';

function Alert({ content, dismiss, id }) {
  useEffect(() => {
    setTimeout(() => dismiss(id), 2000);
  }, []);

  return (
    <div className="alert alert-success" role="alert">
      {content}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={() => dismiss(id)}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default Alert;
