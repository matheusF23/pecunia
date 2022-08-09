import { makeCreateUserController } from '../factories'
import { adaptRoute } from '../adapters'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/users', adaptRoute(makeCreateUserController()))
}
