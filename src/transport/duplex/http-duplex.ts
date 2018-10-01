import { FixDuplex } from './fix-duplex'
import { Readable, Writable } from 'stream'
import * as requestPromise from 'request-promise'

export interface IHttpAdapter {
  getOptions (data: Buffer): requestPromise.OptionsWithUri
  onMessage (m: any): void
}

export class HttpDuplex extends FixDuplex {
  public constructor (public readonly adapter: IHttpAdapter) {
    super()
    this.readable = HttpDuplex.makeReadable()
    this.writable = this.makeWritable()
  }

  private static makeReadable (): Readable {
    const Readable = require('stream').Readable
    const reader = {
      read:  () => {
        // nothing
      }
    }
    return new Readable(reader)
  }

  private makeWritable (): Writable {
    const forward: Readable = this.readable
    const Writable = require('stream').Writable
    const writer = {
      write: async (data: Buffer, _: any, done: Function) => {
        try {
          requestPromise(this.adapter.getOptions(data)).then((message: any) => {
            this.adapter.onMessage(message)
            forward.push(message.body)
          }).catch((err: Error) => {
            receiver.emit('error', err)
          })
        } catch (e) {
          done(e)
        }
      }
    }
    const receiver = new Writable(writer)
    return receiver
  }

  public end (): void {
    this.readable.push(null)
  }
}
