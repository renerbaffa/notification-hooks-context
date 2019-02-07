import React from 'react';

function Alert({ content }) {
  return (
    <div className="alert alert-success" role="alert">
      {content}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default Alert;
