import * as yup from 'yup'
import { BadRequestError, InternalServerError } from '../errors'

const validateSchema = async (schema: yup.BaseSchema, data: object | string): Promise<void> => {
  try {
    await schema.validate(data, { abortEarly: false, strict: true })
  } catch (err) {
    if (err instanceof yup.ValidationError) throw new BadRequestError(err.message)
    throw new InternalServerError(String(err))
  }
}

export default { ...yup, validateSchema }
