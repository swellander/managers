import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row } from 'react-materialize';

export default ({ bannermen }) => {
  const styles = {
    display: 'inline',
    float: 'right'
  }
  return (
    <Row>
      <h3>
        <Link to="/bannermen">
          Bannermen({bannermen.length})
        </Link>
      </h3>
      <div style={styles}>
        <Link to="/create">
          <Button floating large className='red' waves='light' icon='add' />
        </Link>
      </div>
      <hr />
    </Row>
  )
}