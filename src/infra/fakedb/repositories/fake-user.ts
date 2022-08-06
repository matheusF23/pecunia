import fs from 'fs'

import { UserModel } from '../../../data/models'
import { UserRepository } from '../../../data/contracts'

export class FakeUserRepository implements UserRepository {
  async createUser(user: UserModel): Promise<void> {
    fs.writeFileSync(`${__dirname}/../data-sources/users.txt`, JSON.stringify(user))
  }

  async findUserByEmail(email: string): Promise<boolean> {
    // I will implement when add an real database
    email
    return false
  }
}
