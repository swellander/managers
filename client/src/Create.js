import React, { Component } from 'react';
import CreateUpdateForm from './CreateUpdateForm';
import { Modal, Col, Row } from 'react-materialize';
import { connect } from 'react-redux';

class Create extends Component {
  //state for form changes only
  state = {
    bannermanName: '',
    lordId: ''
  }

  static defaultProps = {
    gotErr: false
  }

  handleSubmit = e => {
    e.preventDefault();
    const { bannermanName, lordId } = this.state;
    this.props.addCharacter(bannermanName, lordId)
  }

  //GOT API error handling
  componentDidUpdate = (prevProps) => {
    console.log('prev', prevProps.gotErr)
    console.log('curr', this.props.gotErr)
    if (prevProps.gotErr !== this.props.gotErr) $('#error-modal').modal('open')
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

const mapStateToProps = state => (
  {
    gotErr: state.gotErr
  }
)

export default connect(mapStateToProps)(Create);