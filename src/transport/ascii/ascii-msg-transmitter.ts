import { TimeFormatter, AsciiEncoder } from '../../buffer'
import { MsgTransmitter } from '../msg-transmitter'
import { ILooseObject } from '../../collections/collection'
import { MessageDefinition, ContainedFieldSet } from '../../dictionary'
import { IJsFixConfig } from '../../config'

export class AsciiMsgTransmitter extends MsgTransmitter {
  public msgSeqNum: number = 1
  public time: Date

  private readonly header: ContainedFieldSet
  private readonly trailer: ContainedFieldSet

  constructor (public readonly config: IJsFixConfig) {

    super(config.definitions, config.description)
    const buffer = this.buffer
    const tf: TimeFormatter = new TimeFormatter(buffer)
    this.encoder = new AsciiEncoder(buffer, config.definitions, tf, config.delimiter)
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
    const bodyLength: number = Math.max(4, this.config.description.BodyLengthChars || 7)
    const len = buffer.getPos() - encoder.msgTypePos
    buffer.patchPaddedNumberAtPos(lenPos, len, bodyLength)
    const checksum: number = buffer.checksum()
    const trl: ILooseObject = factory.trailer(checksum)
    encoder.encode(trl, this.trailer.name)
  }
}
