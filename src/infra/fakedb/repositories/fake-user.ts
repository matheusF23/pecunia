import fs from 'fs'

import { UserModel } from '../../../data/models'
import { CreateUserRepository } from '../../../data/contracts'

export class FakeUserRepository implements CreateUserRepository {
  async createUser(user: UserModel): Promise<void> {
    fs.writeFileSync(
      `${__dirname}/../data-sources/users.txt`,
      JSON.stringify(user)
    )
  }
}
