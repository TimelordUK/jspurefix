import { AsciiChars, AsciiEncoder, TimeFormatter } from '../../buffer/ascii'
import { MsgTransmitter } from '../msg-transmitter'
import { ILooseObject } from '../../collections/collection'
import { ContainedFieldSet } from '../../dictionary/contained'
import { MessageDefinition } from '../../dictionary/definition'
import { IJsFixConfig } from '../../config'
import { IStandardHeader } from '../../types/FIX4.4/repo'
import { inject, injectable } from 'tsyringe'
import { DITokens } from '../../runtime/di-tokens'

@injectable()
export class AsciiMsgTransmitter extends MsgTransmitter {
  public msgSeqNum: number
  public time: Date

  private readonly header: ContainedFieldSet
  private readonly trailer: ContainedFieldSet

  constructor (@inject(DITokens.IJsFixConfig) public readonly config: IJsFixConfig) {

    super(config.definitions, config.description)
    this.msgSeqNum = (config.description.LastSentSeqNum || 0) + 1 // adding 1 as this the next sequence # to use.
    const buffer = this.buffer
    const tf: TimeFormatter = new TimeFormatter(buffer)
    this.encoder = new AsciiEncoder(buffer, config.definitions, tf,
      config.delimiter || AsciiChars.Soh,
      config.logDelimiter || AsciiChars.Pipe)
    const components = config.definitions.component
    this.header = components.get('StandardHeader')
    this.trailer = components.get('StandardTrailer')
  }

  private checksum (): number {
    const buffer = this.buffer
    const encoder: AsciiEncoder = this.encoder as AsciiEncoder
    let checksum: number = buffer.sum()
    if (encoder.delimiter !== encoder.logDelimiter) {
      const changes = encoder.tags.nextTagPos
      checksum -= changes * encoder.logDelimiter
      checksum += changes * encoder.delimiter
    }
    checksum = checksum % 256
    return checksum
  }

  public encodeMessage (msgType: string, obj: ILooseObject): void {
    const encoder: AsciiEncoder = this.encoder as AsciiEncoder
    const factory = this.config.factory
    let headerProps: Partial<IStandardHeader> = {}
    const { StandardHeader, ...bodyProps } = obj
    if (StandardHeader) {
      const { BeginString, BodyLength, MsgType, SenderCompID, SendingTime, TargetCompID, TargetSubID, ...hp } = StandardHeader
      headerProps = hp // pick up any optional applied by application
      headerProps.OrigSendingTime = SendingTime // when first sent
    }

    const sendingTime = this.time || new Date()
    const hdr: ILooseObject = factory.header(msgType, this.msgSeqNum, sendingTime, headerProps)

    // Only increment sequence number if this is not a duplicate message.
    if (!headerProps.PossDupFlag) {
      this.msgSeqNum++
    }

    const buffer = this.buffer
    buffer.reset()
    const msgDef: MessageDefinition = this.definitions.message.get(msgType)
    if (!msgDef) {
      this.emit('error', new Error(`ascii transmitter cannot find definition for ${msgType}`))
      return
    }
    encoder.encode(hdr, this.header.name)
    encoder.encode(bodyProps, msgDef.name)
    const lenPos = encoder.bodyLengthPos
    const bodyLength: number = Math.max(4, this.config.description.BodyLengthChars || 7)
    const len = buffer.getPos() - encoder.msgTypePos
    buffer.patchPaddedNumberAtPos(lenPos, len, bodyLength)
    let checksum: number = this.checksum()
    const trl: ILooseObject = factory.trailer(checksum)
    encoder.encode(trl, this.trailer.name)
  }
}
