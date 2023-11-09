import { MsgEncoder, ElasticBuffer } from '../buffer'
import { FixDefinitions } from '../dictionary/definition'
import { Transform } from 'stream'
import { MsgPayload } from './msg-payload'
import { ILooseObject } from '../collections/collection'
import { ISessionDescription } from './session/session-description'
import * as events from 'events'

export abstract class MsgTransmitter extends events.EventEmitter {
  public readonly encodeStream: Transform
  public encoder: MsgEncoder

  protected constructor (public readonly buffer: ElasticBuffer,
    public readonly definitions: FixDefinitions,
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

  public abstract encodeMessage (msgType: string, obj: ILooseObject): (ILooseObject | null)

  // read fix messages from one side, encode buffers on other ready to pipe
  // to output stream, say a socket

  private encoderStream (): Transform {
    const transmitter = this
    return new Transform({
      writableObjectMode: true,
      transform (payload: MsgPayload, encoding, done: Function) {
        try {
          const msgType = payload.msgType
          transmitter.encoder.reset()
          const state = transmitter.encodeMessage(msgType, payload.obj)
          payload.encoded = transmitter.encoder.trim()
          this.push(payload.encoded)
          const encodedTxt = transmitter.buffer.toString()
          transmitter.emit('encoded', msgType, encodedTxt, state)
          done()
        } catch (e) {
          done(e)
        }
      }
    })
  }
}
