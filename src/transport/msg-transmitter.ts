import { MsgEncoder, ElasticBuffer } from '../buffer'
import { FixDefinitions } from '../dictionary'
import { Transform } from 'stream'
import { MsgPayload } from './msg-payload'
import { ILooseObject } from '../collections/collection'
import { ISessionDescription } from './session-description'
import * as events from 'events'

export abstract class MsgTransmitter extends events.EventEmitter {
  public readonly encodeStream: Transform
  public readonly buffer: ElasticBuffer = new ElasticBuffer(10 * 1024)
  protected encoder: MsgEncoder

  protected constructor (public readonly definitions: FixDefinitions,
                         public readonly session: ISessionDescription) {
    super()
    this.encodeStream = this.encoderStream()
    this.encodeStream.on('error', (e: Error) => {
      this.emit('error', e)
    })
    this.encodeStream.on('done', () => {
      this.emit('done')
    })
  }

  // messages at front, byte stream at back
  public send (msgType: string, obj: ILooseObject): void {
    this.encodeStream.write(new MsgPayload(msgType, obj))
  }

  public abstract encodeMessage (msgType: string, obj: ILooseObject): void

  // read fix messages from one side, encode buffers on other ready to pipe
  // to output stream, say a socket

  private encoderStream (): Transform {
    const transmitter = this
    return new Transform({
      writableObjectMode: true,
      transform (payload: MsgPayload, encoding, done: Function) {
        try {
          const msgType = payload.msgType
          transmitter.buffer.reset()
          transmitter.encodeMessage(msgType, payload.obj)
          payload.encoded = transmitter.buffer.copy()
          this.push(payload.encoded)
          transmitter.emit('encoded', msgType, payload.encoded)
          done()
        } catch (e) {
          done(e)
        }
      }
    })
  }
}
