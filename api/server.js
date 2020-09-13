import express from 'express'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import cors from 'cors'

import routes from './src/routes/index.js'
import db from './src/models/index.js'

const app = express()
app.use(cors())
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

// mount all available routes
app.use('/', routes)

// default error handling
app.use(methodOverride())
app.use((err,req, res, next) => {
  if (err) {
    res.status(500).json({ message: 'An error occured.' })
  }
})

const server = app.listen(3333, () => {})
export default server
