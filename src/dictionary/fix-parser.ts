import { FixDefinitions } from './definition'
import * as events from 'events'

export abstract class FixParser extends events.EventEmitter {
  public abstract parse (): Promise<FixDefinitions>
}
