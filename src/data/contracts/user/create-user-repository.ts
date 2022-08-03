import { UserModel } from '../../models'

export interface CreateUserRepository {
  createUser: (user: UserModel) => Promise<void>
}
