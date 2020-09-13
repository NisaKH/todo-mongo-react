import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('hello world!')
})

const server = app.listen(3000, () => {})

export default server