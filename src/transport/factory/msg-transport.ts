import { MsgParser } from '../../buffer'
import { MsgTransmitter } from '../msg-transmitter'
import { FixDuplex } from '../duplex'
import { IJsFixConfig } from '../../config'
import { DITokens } from '../../runtime/di-tokens'
import { Readable } from 'stream'
import { inject, injectable } from 'tsyringe'

@injectable()
export class MsgTransport {
  public readonly transmitter: MsgTransmitter
  public readonly receiver: MsgParser

  constructor (@inject(DITokens.sessionId) public readonly id: number,
    @inject(DITokens.IJsFixConfig) public readonly config: IJsFixConfig,
    @inject(DITokens.FixDuplex) public readonly duplex: FixDuplex) {
    const delimiter = config.delimiter
    if (!delimiter) {
      throw new Error('no delimiter char given.')
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

  /**
   * Milliseconds to wait after a graceful end before dropping the connection.  A
   * half open socket never answers the FIN, so without this the handle - and the
   * memory behind its session - is held for the life of the process (issue #153).
   */
  public static lingerMs: number = 5000

  public end (): void {
    if (this.ended) return
    this.ended = true
    this.duplex.end()
    if (MsgTransport.lingerMs <= 0) {
      this.duplex.destroy()
      return
    }
    const linger = setTimeout(() => {
      this.duplex.destroy()
    }, MsgTransport.lingerMs)
    // never keep the process alive purely to time out a dead socket
    linger.unref?.()
  }

  private ended: boolean = false

  public async wait (): Promise<any> {
    return await new Promise<any>((resolve, reject) => {
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
