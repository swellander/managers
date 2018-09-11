import React, { Component } from 'react';
import CreateUpdateForm from './CreateUpdateForm';
import { Modal, Col, Row } from 'react-materialize';

export default class extends Component {
  state = {
    bannermanName: '',
    lordId: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    const { bannermanName, lordId } = this.state;
    this.props.addCharacter(bannermanName, lordId)
      .catch(err => {
        console.log(err);
        $('#error-modal').modal('open')
      });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })

  }

  render() {
    const { bannermanName, lordId } = this.state;
    return (
      <Row>
        <Col s={4} />
        <Col s={5}>
          <Modal
            id='error-modal'
            header='No such GOT character'>
            Check your spelling?
          </Modal>
          <CreateUpdateForm
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            bannermanName={bannermanName}
            lordId={lordId}
            bannermen={this.props.bannermen}
          />
        </Col>
      </Row>
    )
  }
}