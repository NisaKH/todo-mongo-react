import express from 'express'
import bodyParser from 'body-parser'
import db from './src/models/index.js'
import todo from './src/controllers/todo.js'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const router = express.Router()

db.mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection established..")
  }).catch(err => {
    console.log("Cannot connect to the database..", err)
    process.exit()
  })

router.get('/', (req, res) => {
  res.send('hello world!')
})

router.post('/', todo.createTodo)

app.use('/todos', router)
const server = app.listen(3000, () => {})

export default server