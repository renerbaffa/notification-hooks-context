import React from 'react';

import { REDUCER, STATE } from '../constants/approaches';

function ApproachSelector({ approach, setApproach }) {
  return (
    <div className="flex">
      {[REDUCER, STATE].map(app => (
        <div key={`radio-${app}`}>
          <input
            type="radio"
            id={app}
            checked={approach === app}
            onChange={() => setApproach(app)}
          />
          <label htmlFor={app}>{app}</label>
        </div>
      ))}
    </div>
  );
}

export default ApproachSelector;
