import { UserModel } from '@/data/models'

export interface CreateUserRepository {
  createUser: (user: UserModel) => Promise<void>
}
