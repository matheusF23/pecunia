/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Validation {
  validate: (params: any) => Promise<void>
}
