import express from 'express'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import db from './src/models/index.js'
import todo from './src/controllers/todo.js'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// connect to database
db.mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection established..")
  }).catch(err => {
    console.log("Cannot connect to the database..", err)
    process.exit()
  })

const router = express.Router()
router.post('/', todo.createTodo)
router.get('/', todo.listTodo)
app.use('/todos', router)

// default error handling
app.use(methodOverride())
app.use((err,req, res, next) => {
  if (err) {
    res.status(500).json({ message: 'An error occured.' })
  }
})

const server = app.listen(3000, () => {})

export default server