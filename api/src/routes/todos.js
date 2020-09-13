import express from 'express'
import todo from '../controllers/todo.js'

const router = express.Router()

/** GET /todos - Get list of todo items */
router.get('/', todo.listTodo)

/** POST /todos - Create a new todo item */
router.post('/', todo.createTodo)

/** PUT /todos/:id - Update a todo item by id */
router.put('/:id', todo.updateTodo)

/** DELETE /todos/:id - Delete a todo item by id */
router.delete('/:id', todo.deleteTodo)

export default router