import { User } from '../../../domain/entity'
import { CreateUser } from '../../../domain/useCases'
import { UserRepository, CryptoRepository } from '../../../data/contracts'
import { UserExistsError } from '../../../domain/errors'

export class CreateUserService implements CreateUser {
  constructor(private readonly userRepository: UserRepository, private readonly cryptoRepository: CryptoRepository) {}

  async execute(user: User): Promise<void> {
    const userExists = await this.userRepository.findUserByEmail(user.email)
    if (userExists) throw new UserExistsError()
    user.password = await this.cryptoRepository.encryptPassword(user.password)
    await this.userRepository.createUser(user)
  }
}
