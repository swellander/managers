import React, { Component } from 'react';
import CreateUpdateForm from './CreateUpdateForm';
import { Modal, Col, Row } from 'react-materialize';
import axios from 'axios';

export default class extends Component {
  state = {
    name: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    this.props.addCharacter(name)
      .catch(err => {
        console.log(err);
        $('#error-modal').modal('open')
      });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { name } = this.state;
    return (
      <Row>
        <Col s={4} />
        <Col s={3}>
          <Modal
            id='error-modal'
            header='No such GOT character'>
            Check your spelling?
          </Modal>
          <CreateUpdateForm
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            name={name}
          />
        </Col>
      </Row>
    )
  }
}