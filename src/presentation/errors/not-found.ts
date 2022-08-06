import { Exception } from './exception'

export class NotFoundError extends Exception {
  constructor(message: string) {
    super(message)
    this.name = 'NotFoundError'
    this.statusCode = 404
  }
}
