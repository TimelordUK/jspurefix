import { ILooseObject } from '../../collections/collection'
import { ContainedFieldSet } from '../../dictionary/contained/contained-field-set'
import { MsgTransmitter } from '../msg-transmitter'
import { FixmlEncoder } from '../../buffer/fixml/fixml-encoder'
import { IJsFixConfig } from '../../config/js-fix-config'

export class FixmlMsgTransmitter extends MsgTransmitter {
  public time: Date

  private readonly header: ContainedFieldSet

  constructor (public readonly config: IJsFixConfig) {
    super(config.definitions, config.description)
    this.encoder = new FixmlEncoder(this.buffer, config.definitions)
    this.header = this.definitions.component.get('header')
  }

  public encodeMessage (msgType: string, obj: ILooseObject): void {
    const fe = this.encoder as FixmlEncoder
    const factory = this.config.factory
    obj.StandardHeader = factory.header()
    fe.encode(obj, msgType)
  }
}
