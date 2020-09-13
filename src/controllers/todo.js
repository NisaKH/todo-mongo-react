import db from '../models/index.js'
const Todo = db.todo

const listTodo = (req, res) => {
  Todo.find()
    .then((result) => {
      res.json(result)
    }).catch((err) => {
      res.status(500).json({ message: 'An error occured.' })
    })
}

const createTodo = (req, res) => {
  // validation
  if (!req.body.name || req.body.name === '') {
    return res.status(400).json({ message: 'name is required.' })
  }

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

const updateTodo = (req, res) => {
  // validation
  if (!req.body.name || req.body.name === '') {
    return res.status(400).json({ message: 'name is required.' })
  }

  const id = req.params.id

  Todo.findByIdAndUpdate(id, req.body, { new: true })
    .then((result) => {
      res.json(result)
    }).catch((err) => {
      res.status(500).json({ message: 'An error occured.' })
    })
}

export default {
  listTodo,
  createTodo,
  updateTodo,
}