import React, { Component } from 'react';
import UpdateForm from './UpdateForm';
import { Modal, Col, Row } from 'react-materialize';
import axios from 'axios';

export default class extends Component {
  state = {
    bannermanName: '',
    house: '',
    imageLink: '',
    lordId: ''
  }

  componentDidMount = () => {
    console.log('mounting')
    axios.get(`/api/bannermen/${this.props.bannermanId}`)
      .then(response => response.data)
      .then(bannerman => {
        const { name, house, imageLink, lordId } = bannerman;
        this.setState({ bannermanName: name, house, imageLink, lordId })
      })
      .catch(err => {
        throw err;
      })
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
        <Col s={10}>
          <Modal
            id='error-modal'
            header='No such GOT character'>
            Check your spelling?
          </Modal>
          <UpdateForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            {...this.state}
          />

        </Col>
      </Row>
    )
  }
}