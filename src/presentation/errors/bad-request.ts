import { Exception } from './exception'

export class BadRequestError extends Exception {
  constructor(message: string) {
    super(message)
    this.name = 'BadRequestError'
    this.statusCode = 400
  }
}
