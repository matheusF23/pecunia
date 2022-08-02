import { CreateUser } from '@/domain/useCases'
import {
  Controller,
  HttpRequest,
  HttpResponse,
  serverError,
  success,
} from '@/presentation/contracts'
import {
  UserViewModel,
  MessageResponseViewModel,
} from '@/presentation/view-model'

export class CreateUserController implements Controller {
  constructor(private readonly createUser: CreateUser) {}

  async handle(
    req: HttpRequest<UserViewModel>
  ): Promise<HttpResponse<MessageResponseViewModel>> {
    // TODO add validations
    try {
      const user = req.body

      await this.createUser.execute(user)

      return success({ message: 'User Created SuccessFully' })
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
