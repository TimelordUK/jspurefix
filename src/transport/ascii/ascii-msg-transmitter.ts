import { AsciiEncoder } from '../../buffer/ascii/ascii-encoder'
import { ILooseObject } from '../../collections/collection'
import { ContainedFieldSet } from '../../dictionary/contained/contained-field-set'
import { MessageDefinition } from '../../dictionary/definition/message-definition'
import { MsgTransmitter } from '../msg-transmitter'
import { TimeFormatter } from '../../buffer/ascii/time-formatter'
import { IJsFixConfig } from '../../config/js-fix-config'

export class AsciiMsgTransmitter extends MsgTransmitter {
  public msgSeqNum: number = 1
  public time: Date

  private readonly header: ContainedFieldSet
  private readonly trailer: ContainedFieldSet

  constructor (public readonly config: IJsFixConfig) {

    super(config.definitions, config.description)
    const buffer = this.buffer
    this.encoder = new AsciiEncoder(buffer, config.definitions, new TimeFormatter(buffer), config.delimiter)
    this.header = config.definitions.component.get('header')
    this.trailer = config.definitions.component.get('trailer')
  }

  public encodeMessage (msgType: string, obj: ILooseObject): void {
    const encoder: AsciiEncoder = this.encoder as AsciiEncoder
    const factory = this.config.factory
    const hdr: ILooseObject = factory.header(msgType, this.msgSeqNum++,this.time || new Date())
    const buffer = this.buffer
    buffer.reset()
    const msgDef: MessageDefinition = this.definitions.message.get(msgType)
    if (!msgDef) {
      return
    }
    encoder.encode(hdr, this.header.name)
    encoder.encode(obj, msgDef.name)
    const lenPos = encoder.bodyLengthPos
    const len = buffer.getPos()
    buffer.patchPaddedNumberAtPos(lenPos, len, 7)
    const checksum: number = buffer.checksum()
    const trl: ILooseObject = factory.trailer(checksum)
    encoder.encode(trl, this.trailer.name)
  }
}
