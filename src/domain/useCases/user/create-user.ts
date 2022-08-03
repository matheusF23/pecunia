import { User } from '../../entity'

export interface CreateUser {
  execute: (user: User) => Promise<string>
}
