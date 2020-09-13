import express from 'express'
import db from './src/models/index.js'

const app = express()

db.mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection established..")
  }).catch(err => {
    console.log("Cannot connect to the database..", err)
    process.exit()
  })

app.get('/', (req, res) => {
  res.send('hello world!')
})

const server = app.listen(3000, () => {})

export default server