import { FixDefinitions } from './definition/fix-definitions'
import * as events from 'events'

export abstract class FixParser extends events.EventEmitter {
  public abstract parse (): Promise<FixDefinitions>
}
