import { User } from '@/domain/entity'

export interface CreateUser {
  execute: (user: User) => Promise<string>
}
