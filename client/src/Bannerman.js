import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Card, CardTitle } from 'react-materialize';
import uuid from 'uuid';

export default class User extends Component {
  render = () => {
    const { bannerman, lord, remove } = this.props;
    const { house, titles } = bannerman;
    const reveal = (
      <div>
        <p><strong>House:</strong> <br />{house}</p>
        <p><strong>Known as: </strong><br />
          {titles.length > 0 ?
            titles.map(title => <em key={uuid()}>{title}, </em>)
            : 'A genuine dude'}
        </p>

        <Link to={`/update/${bannerman.id}`}>
          <Button
            className='blue'
            waves='light'
          >
            Update
          </Button>
        </Link>
        <br></br>
        <br></br>
        <Button className='red' waves='light' onClick={() => remove(bannerman.id)}>Delete</Button>
      </div>
    )
    return (
      <Col s={3}>
        <Card header={<CardTitle reveal image={bannerman.imageLink} waves='light' />}
          title={bannerman.name}
          reveal={reveal}>
          <p>Ruled by {lord.name}</p>
        </Card>
      </Col>
    )
  }
}
