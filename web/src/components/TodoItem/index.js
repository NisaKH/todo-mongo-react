import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { object, func } from 'prop-types'


const TodoItem = ({
  item,
  onUpdateItem,
  onDelete,
}) => {
  const onChange = (e) => {
    onUpdateItem(item.id, {...item, name: e.target.value})
  }

  const onToggle = () => {
    onUpdateItem(item.id, {...item, isDone: !item.isDone})
  }

  return (
    <ListGroup.Item>
      <Row>
        <Col xs="auto">
          <Form.Check
            checked={item.isDone}
            onChange={onToggle}
          />
        </Col>
        <Col>
          <Form.Control
            value={item.name}
            onChange={onChange}
          />
        </Col>
        <Col xs="auto">
          <Button variant="outline-danger" onClick={() => onDelete(item.id)}>Delete</Button>
        </Col>
      </Row>
    </ListGroup.Item>
  )
}

TodoItem.propTypes = {
  item: object,
  onUpdateItem: func,
  onDelete: func,
}

export default TodoItem