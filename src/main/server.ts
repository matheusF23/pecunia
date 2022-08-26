import app from './config/app'
import dataSource from './config/database'
import { env } from './config/env'

dataSource.initialize().then(() => {
  app.listen(env.port, () => console.log(`Server running at: http://localhost:${env.port}`))
})
