import React from 'react';

// services
import todoService from './services/todo.js'

// components
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

// css
import './App.css';

class App extends React.Component {
  state = {
    items: [],
  }

  getItems = (isDone) => {
    return this.state.items.filter(item => (isDone && item.isDone === isDone) || true)
  }

  componentDidMount() {
    todoService.listTodo()
      .then((response) => {
        this.setState(state => ({
          items: Object.values(response)
        }))
      })
  }

  render() {
    const todoItems = this.getItems()

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
              {
                todoItems.length !== 0 && (
                  <ListGroup>
                    {
                      todoItems.map((item) => {
                        return (<ListGroup.Item>{item.name}</ListGroup.Item>)
                      })
                    }
                  </ListGroup>
                )
              }
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;
