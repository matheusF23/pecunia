import { CreateUserService } from '../../data/services'
import { PostgresUserRepository, BcryptCryptoRepository } from '../../infra/repositories'
import { CreateUserController } from '../../presentation/controllers'
import { Controller } from '../../presentation/contracts'
import { CreateUserValidation } from '../../presentation/validations/user'

export const makeCreateUserController = (): Controller => {
  const userRepository = new PostgresUserRepository()
  const cryptoRepository = new BcryptCryptoRepository()
  const createUser = new CreateUserService(userRepository, cryptoRepository)
  const createUserValidation = new CreateUserValidation()
  return new CreateUserController(createUser, createUserValidation)
}
