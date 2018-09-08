import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import User from './User';

export default ({ users }) => {
  return (
    <ul>
      { users.map(user => (
        <User key={user.id} user={user} />
      )) }
    </ul>
  )
}
