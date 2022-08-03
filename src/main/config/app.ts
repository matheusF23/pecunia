import { setupRoutes } from '../config/routes'

import express from 'express'

const app = express()
app.use(express.json())

setupRoutes(app)

export default app
