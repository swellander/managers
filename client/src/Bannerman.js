import React, { Component } from 'react';
import axios from 'axios';
import { Button, Col, Card, CardTitle } from 'react-materialize';

export default class User extends Component {
  state = {
    user: {}
  }

  render = () => {
    const { user, remove } = this.props;
    const reveal = (
      <div>
        <p>Here is some more information about this product that is only revealed once clicked on.</p>
        <Button className='blue' waves='light'>Update</Button>
        <br></br>
        <br></br>
        <Button className='red' waves='light' onClick={() => remove(user.id)}>Delete</Button>
      </div>
    )
    return (
      <Col s={3}>
        <Card header={<CardTitle reveal image={user.imageLink} waves='light' />}
          title={user.name}
          reveal={reveal}>
          <p><a href="#">This is a link</a></p>
        </Card>
      </Col>
    )
  }
}
