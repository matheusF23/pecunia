import { CreateUserService } from '../../data/services'
import { FakeUserRepository } from '../../infra/fakedb/repositories'
import { CreateUserController } from '../../presentation/controllers'
import { Controller } from '../../presentation/contracts'

export const makeCreateUserController = (): Controller => {
  const repo = new FakeUserRepository()
  const createUser = new CreateUserService(repo)
  return new CreateUserController(createUser)
}
