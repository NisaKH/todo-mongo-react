import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { number, string, bool, func } from 'prop-types'


const TodoItem = ({
  id,
  name,
  isDone,
  onToggle,
  onUpdateItem,
  onDelete,
}) => {
  const onChange = (e) => {
    onUpdateItem(id, e.target.value)
  }

  return (
    <ListGroup.Item>
      <Row>
        <Col xs="auto">
          <Form.Check
            checked={isDone}
            onChange={onToggle(id)}
          />
        </Col>
        <Col>
          <Form.Control
            value={name}
            onChange={onChange}
          />
        </Col>
        <Col xs="auto">
          <Button variant="outline-danger" onClick={() => onDelete(id)}>Delete</Button>
        </Col>
      </Row>
    </ListGroup.Item>
  )
}

TodoItem.propTypes = {
  id: number,
  name: string,
  isDone: bool,
  onToggle: func,
  onUpdateItem: func,
  onDelete: func,
}

export default TodoItem