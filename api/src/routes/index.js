import express from 'express'
import todoRoutes from './todos.js'

const router = express.Router()

router.use('/todos', todoRoutes)

export default router