import db from '../models/index.js'
const Todo = db.todo

const createTodo = (req, res) => {
  // validation
  if (!req.body.name) {
    res.status(400).json({ message: 'name is required.' })
    return
  }

  // create todo in database
  const todo = new Todo({
    name: req.body.name,
  })

  todo.save(todo)
    .then((result) => {
      res.json(result)
    }).catch((err) => {
      res.status(500).json({ message: 'An error occured.' })
    })
}

const listTodo = (req, res) => {
  Todo.find()
    .then((result) => {
      res.json(result)
    }).catch((err) => {
      res.status(500).json({ message: 'An error occured.' })
    })
}

export default {
  createTodo,
  listTodo
}