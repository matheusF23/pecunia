import { HttpRequest, HttpResponse } from '../contracts'

export interface Controller {
  handle: (req: HttpRequest) => Promise<HttpResponse>
}
