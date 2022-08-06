import { User } from '../../../domain/entity'
import { CreateUser } from '../../../domain/useCases'
import { UserRepository } from '../../../data/contracts'
import { UserExistsError } from '../../../domain/errors'

export class CreateUserService implements CreateUser {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(user: User): Promise<void> {
    const userExists = await this.userRepository.findUserByEmail(user.email)

    if (userExists) throw new UserExistsError()

    // TODO criptografar a senha
    await this.userRepository.createUser(user)
  }
}
