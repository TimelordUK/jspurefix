import { IJsFixConfig } from '../../config'
import { IDynamicSessionParams, ISessionDescription } from './session-description'

export class DynamicSessionManager {
  constructor (public readonly config: IJsFixConfig) {

  }

  register (dynamicSession: IDynamicSessionParams): void {

  }

  match (dynamicSession: IDynamicSessionParams): (ISessionDescription | null) {
    return null
  }
}
