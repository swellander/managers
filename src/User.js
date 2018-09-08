import React from 'react';
import { Link } from 'react-router-dom';

export default ({ user }) => {
  return (
    <div>
      <Link key={user.id} to={`/users/${user.id}`}>
        <h3>{user.name}</h3>
      </Link>
    </div> 
  )
}
