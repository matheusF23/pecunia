import { UserModel } from '../models'

export interface UserRepository {
  createUser: (user: UserModel) => Promise<void>
}
