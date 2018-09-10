import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize';

export default ({ bannermen }) => {
  return (
    <div>
      <h3>
        <Link to="/bannermen">
          Bannermen({bannermen.length})
      </Link>
      </h3>
      <Button></Button>
      <hr />
    </div>
  )
}