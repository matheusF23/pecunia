import { UserModel } from '../../../data/models'
import { UserRepository } from '../../../data/contracts'
import PostgresDataSource from './data-source'
import { User } from './entities/user'

const postgresUserRepository = PostgresDataSource.getRepository(User)

export class PostgresUserRepository implements UserRepository {
  async createUser(user: UserModel): Promise<void> {
    await postgresUserRepository.insert(user)
    console.log('User created successfully')
  }

  async findUserByEmail(email: string): Promise<UserModel | null> {
    return postgresUserRepository.findOne({ where: { email } })
  }
}
