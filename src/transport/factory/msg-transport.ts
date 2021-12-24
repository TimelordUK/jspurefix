import { MsgParser } from '../../buffer'
import { MsgTransmitter } from '../msg-transmitter'
import { FixDuplex } from '../duplex'
import { IJsFixConfig } from '../../config'
import { DITokens } from '../../runtime/DITokens'
import { Readable } from 'stream'

export class MsgTransport {
  public readonly transmitter: MsgTransmitter
  public readonly receiver: MsgParser

  constructor (public readonly id: number,
               public readonly config: IJsFixConfig,
               public readonly duplex: FixDuplex) {

    const delimiter = config.delimiter
    if (!delimiter) {
      throw new Error(`no delimiter char given.`)
    }

    const sessionContainer = this.config.sessionContainer
    sessionContainer.registerInstance<Readable>(DITokens.readStream, this.duplex.readable)

    // let parser replace delimiter with Pipe so fix log does not require
    // expensive replace

    this.transmitter = sessionContainer.resolve<MsgTransmitter>(DITokens.MsgTransmitter)
    this.receiver = sessionContainer.resolve<MsgParser>(DITokens.MsgParser)

    // pipe the encoder to say a socket.
    if (duplex.writable) {
      this.transmitter.encodeStream.pipe(duplex.writable)
    }
  }

  public end (): void {
    this.duplex.end()
  }

  public wait (): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.receiver.on('end', () => {
        resolve(this.id)
      })
      this.receiver.on('error', (e) => {
        reject(e)
      })
      this.transmitter.on('error', (e) => {
        reject(e)
      })
    })
  }
}
