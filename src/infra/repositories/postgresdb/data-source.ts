import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'

type DataBaseSettings = {
  host: string | undefined
  port: number | undefined
  username: string | undefined
  password: string | undefined
  database: string | undefined
}

export class PostgresDataSource {
  constructor(private readonly databaseSettings: DataBaseSettings) {}
  getDataSource() {
    return new DataSource({
      type: 'postgres',
      host: this.databaseSettings.host,
      port: this.databaseSettings.port,
      username: this.databaseSettings.username,
      password: this.databaseSettings.password,
      database: this.databaseSettings.database,
      entities: [`${__dirname}/**/entities/*.{ts, js}`],
      migrations: [`${__dirname}/**/migrations/*.{ts, js}`],
    })
  }
}
