export interface CryptoRepository {
  encryptPassword: (password: string) => Promise<string>
}
