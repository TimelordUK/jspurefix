import { FixDuplex } from './fix-duplex'
import { Readable, Writable } from 'stream'
import * as requestPromise from 'request-promise'

export class HttpDuplex extends FixDuplex {
  constructor (public readonly uri: string = '') {
    super()
    this.readable = HttpDuplex.makeReadable()
    this.writable = HttpDuplex.makeWritable(uri, this.readable)
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

  private static makeWritable (uri: string, forward: Readable): Writable {
    const Writable = require('stream').Writable
    const writer = {
      write: async (data: Buffer, _: any, done: Function) => {
        try {
          requestPromise({
            method: 'POST',
            uri: uri,
            body: {
              fixml : data.toString()
            },
            json: true
          }).then(function (parsedBody) {
            forward.push(parsedBody)
          })
            .catch((err: Error) => {
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
