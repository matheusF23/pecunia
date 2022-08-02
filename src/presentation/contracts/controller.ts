import { HttpRequest, HttpResponse } from '@/presentation/contracts'

export interface Controller {
  handle: (req: HttpRequest) => Promise<HttpResponse>
}
