import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';

export function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>

      <button
        style={{ float: 'right', marginBottom: 10 }}
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
      >
        <img src="close-icon.png" alt="Close" />
      </button>

      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}