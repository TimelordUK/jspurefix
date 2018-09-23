import { EncodedStatus } from '../buffer/encoder-state'
import { ILooseObject } from '../collections/collection'
import { ContainedFieldSet } from '../dictionary/contained/contained-field-set'
import { FixDefinitions } from '../dictionary/definition/fix-definitions'
import { ISessionDescription } from './session-description'
import { MsgTransmitter } from './msg-transmitter'
import { FixmlEncoder } from '../buffer/fixml/fixml-encoder'
import { ElasticBuffer } from '../buffer/elastic-buffer'

export class FixmlMsgTransmitter extends MsgTransmitter {
  public time: Date

  private readonly header: ContainedFieldSet

  constructor (public readonly definitions: FixDefinitions,
               public readonly description: ISessionDescription) {

    super(definitions, description)
    this.encoder = new FixmlEncoder(new ElasticBuffer(), definitions)
    this.header = this.definitions.component.get('header')
  }

  public encodeMessage (msgType: string, obj: ILooseObject): EncodedStatus {
    return null
  }
}
