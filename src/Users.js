import React from 'react';
import axios from 'axios';

export default ({ users }) => {
  return (
    <ul>
      { users.map(user => (
        <li key={user.id}>{user.name}</li>
      )) }
    </ul>
  )
}
