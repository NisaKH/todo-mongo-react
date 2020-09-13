import mongoose from 'mongoose'
import config from '../config/index.js'

mongoose.Promise = global.Promise

const db = {
  mongoose: mongoose,
  url: config.url
}

export default db