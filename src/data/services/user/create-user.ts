import { User } from '@/domain/entity'
import { CreateUser } from '@/domain/useCases'
import { CreateUserRepository } from '@/data/contracts'

export class CreateUserService implements CreateUser {
  constructor(private readonly createUserRepository: CreateUserRepository) {}

  async execute(user: User): Promise<string> {
    // TODO criptografar a senha
    await this.createUserRepository.createUser(user)
    return 'User created successfully'
  }
}
