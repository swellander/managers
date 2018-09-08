import React from 'react';
import axios from 'axios';

export default ({ users }) => {
  return (
    <ul>
      { Object.keys(users).map(userId => (
        <li key={userId}>{users[userId].name}</li>
      )) }
    </ul>
  )
}
