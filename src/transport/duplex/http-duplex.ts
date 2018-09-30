import { FixDuplex } from './fix-duplex'
import { Readable, Writable } from 'stream'
import * as requestPromise from 'request-promise'

export abstract class HttpDuplex extends FixDuplex {
  protected constructor () {
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

  protected abstract getOptions (data: Buffer): requestPromise.OptionsWithUri

  private makeWritable (): Writable {
    const forward: Readable = this.readable
    const Writable = require('stream').Writable
    const writer = {
      write: async (data: Buffer, _: any, done: Function) => {
        try {
          requestPromise(this.getOptions(data)).then((parsedBody) => {
            forward.push(parsedBody)
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
