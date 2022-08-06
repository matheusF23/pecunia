import { CreateUser } from '../../../domain/useCases'
import { Controller, HttpRequest, HttpResponse, serverError, success } from '../../contracts'
import { UserViewModel, MessageResponseViewModel } from '../../view-model'

export class CreateUserController implements Controller {
  constructor(private readonly createUser: CreateUser) {}

  async handle(req: HttpRequest<UserViewModel>): Promise<HttpResponse<MessageResponseViewModel>> {
    // TODO add validations
    try {
      const { name, email, password } = req.data

      if (!name || !email || !password) throw new Error('name, email and password are required')

      await this.createUser.execute({ name, email, password })

      return success({ message: 'User Created SuccessFully' })
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
