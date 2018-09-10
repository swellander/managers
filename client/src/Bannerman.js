import React, { Component } from 'react';
import { Button, Col, Card, CardTitle } from 'react-materialize';

export default class User extends Component {
  render = () => {
    const { bannerman, lord, remove } = this.props;
    const reveal = (
      <div>
        <p>Here is some more information about this product that is only revealed once clicked on.</p>
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
