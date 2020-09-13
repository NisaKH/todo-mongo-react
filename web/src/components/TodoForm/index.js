import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { func, string } from 'prop-types'

class TodoForm extends React.Component {
  state = { value: '' }

  handleInputChange = (e) => {
    this.setState({ value: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.value !== '') {
      this.props.onSubmit(this.state.value)
      this.setState({ value: '' })
    }
  }

  render() {
    return (
      <Form className="todo-form" onSubmit={this.onSubmit}>
        <Form.Row>
          <Col xs={9}>
            <Form.Control 
              placeholder={this.props.placeHolder}
              value={this.state.value}
              onChange={this.handleInputChange}
            />
          </Col>
          <Col xs={3}>
            <Button type="submit" block>Add</Button>
          </Col>
        </Form.Row>
      </Form>
    )
  }
}

TodoForm.propTypes = {
  onSubmit: func.isRequired,
  placeHolder: string,
}

TodoForm.defaultProps = {
  placeHolder: ''
}

export default TodoForm