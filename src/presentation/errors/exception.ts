export class Exception extends Error {
  statusCode: number

  constructor(message: string, statusCode?: number) {
    super(message)
    this.name = 'Exception'
    this.statusCode = statusCode || 500
  }
}
