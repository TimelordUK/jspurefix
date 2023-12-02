import { FixDuplex } from './fix-duplex'
import { Readable, Writable } from 'stream'
import axios from 'axios'
import { IHttpAdapter } from '../http/http-adapter'

export class HttpDuplex extends FixDuplex {
  public constructor (public readonly adapter: IHttpAdapter) {
    super()
    this.readable = HttpDuplex.makeReadable()
    this.writable = this.makeWritable()
  }

  private static makeReadable (): Readable {
    const Readable = require('stream').Readable
    const reader = {
      read: () => {
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
          const adapter = this.adapter
          const options = adapter.getOptions(data)
          if (options) {
            axios(options).then((message: any) => {
              const body = adapter.endMessage(message)
              forward.push(body)
              done()
            }).catch((err: Error) => {
              receiver.emit('error', err)
            })
          }
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
