import app from './config/app'
import PostgresDataSource from '../infra/repositories/postgresdb/data-source'
import { env } from './config/env'

PostgresDataSource.initialize().then(() => {
  app.listen(env.port, () => console.log(`Server running at: http://localhost:${env.port}`))
})
