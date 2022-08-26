const dbPort = process.env.DB_PORT as number | undefined

export const env = {
  port: process.env.PORT || 3333,
  host: process.env.DB_HOST,
  dbPort,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
}
