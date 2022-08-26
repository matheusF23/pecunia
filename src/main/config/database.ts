import { PostgresDataSource } from '../../infra/repositories'
import { env } from './env'

const databaseSettings = {
  host: env.host,
  port: env.dbPort,
  username: env.username,
  password: env.password,
  database: env.database,
}
const postgresDataSource = new PostgresDataSource(databaseSettings)
const dataSource = postgresDataSource.getDataSource()
export default dataSource
