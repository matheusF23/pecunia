import { CreateUserService } from '../../data/services'
import { FakeUserRepository } from '../../infra/fakedb/repositories'
import { CreateUserController } from '../../presentation/controllers'
import { Controller } from '../../presentation/contracts'
import { CreateUserValidation } from '../../presentation/validations/user/create-user'

export const makeCreateUserController = (): Controller => {
  const repo = new FakeUserRepository()
  const createUser = new CreateUserService(repo)
  const createUserValidation = new CreateUserValidation()
  return new CreateUserController(createUser, createUserValidation)
}
