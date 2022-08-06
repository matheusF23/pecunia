import yup from '../yup'

import { Validation } from '../../contracts'
import { UserViewModel } from '../../view-model'

export class CreateUserValidation implements Validation {
  async validate(params: UserViewModel): Promise<void> {
    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required(),
    })

    await yup.validateSchema(schema, params)
  }
}
