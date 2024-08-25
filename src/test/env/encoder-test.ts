import { ILooseObject } from '../../collections/collection'
import { IContainedSet } from '../../dictionary/contained'
import { AsciiEncoder } from '../../buffer/ascii'
import { FixDefinitions, MessageDefinition } from '../../dictionary/definition'
import { AsciiMsgTransmitter } from '../../transport/ascii/ascii-msg-transmitter'
import { Setup } from './setup'

export class EncoderTest {
  public definitions: FixDefinitions
  public session: AsciiMsgTransmitter
  public encoder: AsciiEncoder
  public nos: MessageDefinition | undefined
  public er: MessageDefinition

  public localDate: Date = new Date(2018, 6, 25)
  public utcTimeStamp: Date = new Date(Date.UTC(2018, 5, 10, 16, 35, 0, 246))
  public utcDate: Date = new Date(Date.UTC(2018, 5, 10, 0, 0, 0, 0))
  public utcTime: Date = new Date(Date.UTC(2018, 0, 1, 16, 35, 0, 246))
  public setup: Setup

  public async init (sessionConfig: string): Promise<void> {
    this.setup = new Setup(sessionConfig, null)
    await this.setup.init()
    this.definitions = this.setup.definitions
    const config = this.setup.clientConfig
    this.definitions = config.definitions
    this.session = this.setup.client.transmitter as AsciiMsgTransmitter
    this.encoder = this.session.encoder as AsciiEncoder
    this.nos = this.definitions.message.get('NewOrderSingle')
    const erd = this.definitions.message.get('ExecutionReport')
    if (erd) {
      this.er = erd
    }
  }

  public toFix (o: ILooseObject, set?: IContainedSet, enc?: AsciiEncoder): string {
    const theEncode = enc ?? this.encoder
    this.session.buffer.reset()
    if (set) {
      theEncode.encode(o, set.name)
    } else {
      theEncode.encode(o, this.nos?.name ?? '')
    }
    return this.session.buffer.toString()
  }

  public toFixMessage (o: ILooseObject, msg: MessageDefinition): string {
    this.session.encodeMessage(msg.msgType, o)
    return this.session.buffer.toString()
  }
}
