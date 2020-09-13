import React from 'react';

// services
import todoService from './services/todo.js'

// components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

// css
import './App.css';

class App extends React.Component {
  state = {
    items: [],
  }

  fetchItems = () => {
    todoService.listTodo()
      .then((response) => {
        this.setState(state => ({
          items: Object.values(response)
        }))
      })
  }

  getItems = (isDone) => {
    return this.state.items.filter(item => (isDone && item.isDone === isDone) || true)
  }

  onCreateItem = (item) => {
    todoService.createTodo({ name: item })
      .then(() => {
        this.fetchItems()
      })
  }

  onUpdateItem = (id, item) => {
    console.log(id, item)
    todoService.updateTodoById(id, {
      id: item.id,
      name: item.name,
      isDone: item.isDone,
    })
      .then(() => {
        this.fetchItems()
      })
  }

  onDeleteItem = (id) => {
    todoService.deleteTodoById(id)
      .then(() => {
        this.fetchItems()
      })
  }

  componentDidMount() {
    this.fetchItems()
  }

  render() {
    const todoItems = this.getItems()

    return (
      <div className="App">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
              <h4 className="todo-header">To-Do</h4>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
              <TodoForm
                placeHolder="Enter new to-do"
                onSubmit={this.onCreateItem}
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
              {
                todoItems.length !== 0 && (
                  <ListGroup>
                    {
                      todoItems.map((item) => {
                        return(
                          <TodoItem
                            key={item.id}
                            item={item}
                            onUpdateItem={this.onUpdateItem}
                            onDelete={this.onDeleteItem}
                          />
                        )
                        // return (<ListGroup.Item>{item.name}</ListGroup.Item>)
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
