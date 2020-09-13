import React from 'react';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={6}>
            <h4 className="todo-header">To-Do</h4>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={6}>
            <Form className="todo-form">
              <Form.Row>
                <Col xs={9}>
                  <Form.Control placeholder="Enter new to-do" />
                </Col>
                <Col xs={3}>
                  <Button block>Add</Button>
                </Col>
              </Form.Row>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={6}>
            <ListGroup>
              <ListGroup.Item>test</ListGroup.Item>
              <ListGroup.Item>test</ListGroup.Item>
              <ListGroup.Item>test</ListGroup.Item>
              <ListGroup.Item>test</ListGroup.Item>
              <ListGroup.Item>test</ListGroup.Item>
              <ListGroup.Item>test</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
