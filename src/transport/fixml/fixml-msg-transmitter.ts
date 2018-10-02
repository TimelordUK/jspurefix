import { ILooseObject } from '../../collections/collection'
import { MsgTransmitter } from '../msg-transmitter'
import { FixmlEncoder } from '../../buffer/fixml/fixml-encoder'
import { IJsFixConfig } from '../../config/js-fix-config'

export class FixmlMsgTransmitter extends MsgTransmitter {
  public time: Date

  constructor (public readonly config: IJsFixConfig) {
    super(config.definitions, config.description)
    this.encoder = new FixmlEncoder(this.buffer, config.definitions)
  }

  public encodeMessage (msgType: string, obj: ILooseObject): void {
    const adapter = this.config.description.application.http.adapter
    if (adapter) {
      adapter.beginMessage(msgType)
    }
    const fe = this.encoder as FixmlEncoder
    const factory = this.config.factory
    obj.StandardHeader = factory.header()
    fe.encode(obj, msgType)
  }
}
