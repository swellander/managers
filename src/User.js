import React from 'react';

export default ({ user, deleteUser }) => {
  return (
    <div>
      <h3>{ user.name }</h3>
      <button>Delete</button>
    </div> 
  )
}
