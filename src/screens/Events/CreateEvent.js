import React, {Component} from 'react';
import {BodyContainer} from '../../components/containers/BodyContainer';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import {connect} from 'react-redux';
import {createEvent} from '../../store/actions/eventActions';
import Form from 'react-bootstrap/Form';
import {ScreenContainer} from '../../components/containers/ScreenContainer';

class CreateEvent extends Component {
  state = {
    title: '',
    date: '',
    day: '',
    month: '',
    start: '',
    end: '',
  };
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
    console.log(this.state);
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.createEvent(this.state);
  }
  render() {
    return (
      <BodyContainer>
        <ScreenContainer>
          <h5>Create New Event</h5>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId='title'>
              <Form.Label>Event Title</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                type='text'
                placeholder='Event Title' />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId='month'>
                <Form.Label>Month</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  type='text'
                  placeholder='Month' />
              </Form.Group>
              <Form.Group as={Col} controlId='date'>
                <Form.Label>Date</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  type='text'
                  placeholder='Date of Month' />
              </Form.Group>
              <Form.Group as={Col} controlId='day'>
                <Form.Label>Day</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  type='text'
                  placeholder='Day' />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId='start'>
                <Form.Label>Start Time</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  type='text'
                  placeholder='Start Time' />
              </Form.Group>
              <Form.Group as={Col} controlId='end'>
                <Form.Label>End Time</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  type='text'
                  placeholder='End Time' />
              </Form.Group>
            </Form.Row>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </ScreenContainer>
      </BodyContainer>
    );
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (event) => dispatch(createEvent(event)),
  };
};

export default connect(null, mapDispatchToProps)(CreateEvent);
