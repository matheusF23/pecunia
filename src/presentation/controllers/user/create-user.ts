import { CreateUser } from '../../../domain/useCases'
import { Controller, HttpRequest, HttpResponse, handleError, success, Validation } from '../../contracts'
import { UserViewModel, MessageResponseViewModel } from '../../view-model'

export class CreateUserController implements Controller {
  constructor(private readonly createUser: CreateUser, private readonly createUserValidation: Validation) {}

  async handle(req: HttpRequest<UserViewModel>): Promise<HttpResponse<MessageResponseViewModel>> {
    try {
      await this.createUserValidation.validate(req.data)

      const { name, email, password } = req.data

      await this.createUser.execute({ name, email, password })

      return success({ message: 'User Created SuccessFully' })
    } catch (err) {
      return handleError(err as Error)
    }
  }
}
