import axios from 'axios'
// const host = 'localhost:3333'

// axios.defaults.baseURL = 'localhost'
// axios.defaults.port = 3333

const listTodo = async () => {
  return await axios.get('http://localhost:3333/todos')
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      // todo: handle error
    })
}

const createTodo = async (data) => {
  return await axios.post('http://localhost:3333/todos', data)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      // todo: handle error
    })
}

const updateTodoById = async (id, data) => {
  return await axios.put(`http://localhost:3333/todos/${id}`, data)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      // todo: handle error
    })
}

const deleteTodoById = async (id) => {
  return await axios.delete(`http://localhost:3333/todos/${id}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      // todo: handle error
    })
}

export default {
  listTodo,
  createTodo,
  updateTodoById,
  deleteTodoById,
}