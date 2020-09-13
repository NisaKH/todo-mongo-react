import axios from 'axios'
// const host = 'localhost:3333'

// axios.defaults.baseURL = 'localhost'
// axios.defaults.port = 3333

const listTodo = async () => {
  return await axios.get('http://localhost:3333/todos')
    .then((response) => {
      console.log('response', response)
      return response.data
    })
    .catch((error) => {
      // todo: handle error
    })
}

const createTodo = async (data) => {
  return await axios.post('http://localhost:3333/todos', data)
    .then((response) => {
      console.log('response', response)
      return response.data
    })
    .catch((error) => {
      // todo: handle error
    })
}

const updateTodoById = (id, data) => {

}

const deleteTodoById = (id, data) => {

}

export default {
  listTodo,
  createTodo,
  updateTodoById,
  deleteTodoById,
}