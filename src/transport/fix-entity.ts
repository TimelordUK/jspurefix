import { IJsFixConfig } from '../config'
import * as events from 'events'

export abstract class FixEntity extends events.EventEmitter {
  abstract start (): Promise<any>
  protected constructor (public readonly config: IJsFixConfig) {
    super()
  }
}
