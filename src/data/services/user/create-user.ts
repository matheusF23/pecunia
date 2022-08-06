import { User } from '../../../domain/entity'
import { CreateUser } from '../../../domain/useCases'
import { UserRepository } from '../../../data/contracts'

export class CreateUserService implements CreateUser {
  constructor(private readonly UserRepository: UserRepository) {}

  async execute(user: User): Promise<void> {
    // TODO criptografar a senha
    await this.UserRepository.createUser(user)
  }
}
