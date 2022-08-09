import { UserModel } from '../../../data/models'
import { UserRepository } from '../../../data/contracts'

const users: UserModel[] = []

export class FakeUserRepository implements UserRepository {
  async createUser(user: UserModel): Promise<void> {
    users.push(user)
    console.log(users)
  }

  async findUserByEmail(email: string): Promise<boolean> {
    return users.some(user => user.email === email)
  }
}
