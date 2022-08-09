import bcrypt from 'bcrypt'

import { CryptoRepository } from '../../../data/contracts/crypto-repository'

export class BcryptCryptoRepository implements CryptoRepository {
  async encryptPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 8)
  }
}
