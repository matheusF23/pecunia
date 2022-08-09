import { Exception } from '../errors'

/* eslint-disable @typescript-eslint/no-explicit-any */
export type HttpResponse<T = any> = {
  statusCode: number
  data: T
}

export type HttpRequest<T = any> = {
  data: T
}

export const success = (data: any): HttpResponse => ({
  statusCode: 200,
  data,
})

export const handleError = (err: Error): HttpResponse => {
  let statusCode = 500

  if (err instanceof Exception) statusCode = err.statusCode
  if (err.name === 'UserExistsError') statusCode = 400

  return {
    statusCode: statusCode,
    data: { message: err.message },
  }
}
