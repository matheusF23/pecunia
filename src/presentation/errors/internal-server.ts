import { Exception } from './exception'

export class InternalServerError extends Exception {
  constructor(message: string) {
    super(message)
    this.name = 'InternalServerError'
    this.statusCode = 500
  }
}
