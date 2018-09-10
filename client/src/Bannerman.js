import React, { Component } from 'react';
import { Button, Col, Card, CardTitle } from 'react-materialize';
import uuid from 'uuid';

export default class User extends Component {
  render = () => {
    const { bannerman, lord, remove } = this.props;
    const { father, mother, house, titles } = bannerman;
    const reveal = (
      <div>
        <p>{house}</p>
        <p><strong>Known as:</strong> {titles.length > 0 ? titles.map(title => <em key={uuid()}>{title}</em>) : 'A genuine dude'}</p>

        <Button className='blue' waves='light'>Update</Button>
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
