import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default ({ users }) => {
  return (
    <ul>
      { Object.keys(users).map(userId => (
        <Link key={userId} to={`/users/${userId}`}>
          <li>{users[userId].name}</li>
        </Link>
      )) }
    </ul>
  )
}
