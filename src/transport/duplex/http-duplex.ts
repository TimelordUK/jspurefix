import { FixDuplex } from './fix-duplex'
import { Readable, Writable } from 'stream'
import type { IHttpAdapter } from '../http/http-adapter'

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
            // resolved here rather than at module scope - this file is on the barrel
            // export, and an ascii application should not load axios to reach it
            const axios = require('axios').default
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
