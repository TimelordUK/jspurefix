import { MsgEncoder, ElasticBuffer } from '../buffer'
import { FixDefinitions } from '../dictionary/definition'
import { Transform } from 'stream'
import { MsgPayload } from './msg-payload'
import { ILooseObject } from '../collections/collection'
import { ISessionDescription } from './session/session-description'
import { SendCallback } from './send-callback'
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
  public send (msgType: string, obj: ILooseObject, callback: SendCallback | null = null): void {
    this.encodeStream.write(new MsgPayload(msgType, obj, callback))
  }

  /**
   * Report a send outcome to whoever asked for one, without letting their code break
   * the encode stream - a throwing callback would otherwise surface as a transform
   * failure and be indistinguishable from an encoding fault.
   */
  protected settle (payload: MsgPayload, error: Error | null, header: ILooseObject | null): void {
    const callback = payload.callback
    if (!callback) return
    try {
      callback(error, { msgType: payload.msgType, header, encoded: payload.encoded ?? null })
    } catch (e) {
      this.emit('error', e)
    }
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
          // encodeMessage returns null when it could not build the message - an
          // unknown msgType, or a factory that produced no header.  It reports that
          // on the error channel and carries on, so without this the callback would
          // announce success for a message that never formed.
          state
            ? transmitter.settle(payload, null, state)
            : transmitter.settle(payload, new Error(`could not encode ${msgType}`), null)
          // note: the second argument to a Transform callback is *pushed to the
          // readable side*, and this readable side is piped to the socket - so a
          // result cannot be returned that way without corrupting the byte stream.
          // Hence the per-payload callback above.
          done()
        } catch (e) {
          transmitter.settle(payload, e as Error, null)
          // still fail the stream, so the session's error handling is unchanged
          done(e)
        }
      }
    })
  }
}
