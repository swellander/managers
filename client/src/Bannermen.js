import React from 'react';
import axios from 'axios';
import { Row } from 'react-materialize';
import Bannerman from './Bannerman';

export default ({ remove, users }) => {
  return (
    <Row>
      { users.map(user => (
        <Bannerman remove={remove} key={user.id} user={user} />
      )) }
    </Row>
  )
}
