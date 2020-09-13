import mongoose from 'mongoose'
import config from '../config/index.js'
import todo from './todo.js'

mongoose.Promise = global.Promise

const db = {
  mongoose: mongoose,
  url: config.url
}

db.todo = todo(mongoose)

export default db