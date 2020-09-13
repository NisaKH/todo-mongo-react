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

  Todo.findByIdAndUpdate(id, req.body, { new: true, useFindAndModify: false })
    .then((result) => {
      if (!result) {
        return res.status(404).json({ message: `Todo with id=${id} does not exist.` })
      }
      res.json(result)
    }).catch((err) => {
      res.status(500).json({ message: 'An error occured.' })
    })
}

const deleteTodo = (req, res) => {
  const id = req.params.id

  Todo.findByIdAndRemove(id, { useFindAndModify: false })
    .then((result) => {
      if (!result) {
        return res.status(404).json({ message: `Todo with id=${id} does not exist.` })
      }
      res.json({ message: `Todo with id=${id} was deleted successfully.` })
    }).catch((err) => {
      res.status(500).json({ message: 'An error occured.' })
    })
}

export default {
  listTodo,
  createTodo,
  updateTodo,
  deleteTodo,
}