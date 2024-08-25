import { AsciiChars, AsciiEncoder, TimeFormatter } from '../../buffer/ascii'
import { MsgTransmitter } from '../msg-transmitter'
import { ILooseObject } from '../../collections/collection'
import { IContainedSet } from '../../dictionary/contained'
import { MessageDefinition } from '../../dictionary/definition'
import { IJsFixConfig } from '../../config'
import { IStandardHeader } from '../../types/FIX4.4/repo'
import { inject, injectable } from 'tsyringe'
import { DITokens } from '../../runtime/di-tokens'
import { ElasticBuffer } from '../../buffer'

@injectable()
export class AsciiMsgTransmitter extends MsgTransmitter {
  public msgSeqNum: number
  public time: Date

  private readonly header: IContainedSet | undefined
  private readonly trailer: IContainedSet | undefined

  constructor (@inject(DITokens.IJsFixConfig) public readonly config: IJsFixConfig) {
    super(config.sessionContainer.resolve<ElasticBuffer>(DITokens.TransmitBuffer), config.definitions, config.description)
    this.msgSeqNum = (config.description.LastSentSeqNum ?? 0) + 1 // adding 1 as this the next sequence # to use.
    const buffer = this.buffer
    const tf: TimeFormatter = new TimeFormatter(buffer)
    this.encoder = new AsciiEncoder(buffer, config.definitions, tf,
      config.delimiter ?? AsciiChars.Soh,
      config.logDelimiter ?? AsciiChars.Pipe)
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

  public encodeMessage (msgType: string, obj: ILooseObject): (ILooseObject | null) {
    const encoder: AsciiEncoder = this.encoder as AsciiEncoder
    const factory = this.config.factory
    let headerProps: Partial<IStandardHeader> = {}
    const { StandardHeader, ...bodyProps } = obj
    if (StandardHeader) {
      const { BeginString, BodyLength, MsgType, SenderCompID, SendingTime, TargetCompID, TargetSubID, ...hp } = StandardHeader
      headerProps = hp // pick up any optional applied by application
      headerProps.OrigSendingTime = SendingTime // when first sent
    }

    const msgSeqNum = this.msgSeqNum
    const sendingTime = this.time || new Date()
    const hdr: ILooseObject | null = factory?.header(msgType, msgSeqNum, sendingTime, headerProps) ?? null
    // Only increment sequence number if this is not a duplicate message.
    if (!hdr) return null
    if (!headerProps.PossDupFlag) {
      this.msgSeqNum++
    }

    const buffer = this.buffer
    buffer.reset()
    const msgDef: MessageDefinition | undefined = this.definitions.message.get(msgType)
    if (!msgDef) {
      this.emit('error', new Error(`ascii transmitter cannot find definition for ${msgType}`))
      return null
    }
    const headerName: string = this.header?.name ?? 'header'
    const trailerName: string = this.trailer?.name ?? 'trailer'
    encoder.encode(hdr, headerName)
    encoder.encode(bodyProps, msgDef.name)
    const lenPos = encoder.bodyLengthPos
    const bodyLength: number = Math.max(4, this.config.description.BodyLengthChars ?? 7)
    const len = buffer.getPos() - encoder.msgTypePos
    buffer.patchPaddedNumberAtPos(lenPos, len, bodyLength)
    const checksum: number = this.checksum()
    const trl: ILooseObject | null = factory?.trailer(checksum) ?? null
    if (trl) {
      encoder.encode(trl, trailerName)
    }
    return hdr
  }
}
