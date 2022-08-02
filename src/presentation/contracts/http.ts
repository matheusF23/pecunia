/* eslint-disable @typescript-eslint/no-explicit-any */
export type HttpResponse<T = any> = {
  statusCode: number
  data: T
}

export type HttpRequest<ReqBody = any, ReqQuery = any, ReqParam = any> = {
  body: ReqBody
  query: ReqQuery
  params: ReqParam
}

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  data: { message: error.message },
})

export const success = (data: any): HttpResponse => ({
  statusCode: 200,
  data,
})
