import { FixDuplex } from './fix-duplex'
import { Readable, Writable } from 'stream'

export class StringDuplex extends FixDuplex {
  constructor (public readonly text: string = '', public chunks: boolean = false) {
    super()
    this.readable = StringDuplex.makeReadable(text, chunks)
    this.writable = StringDuplex.makeWritable()
  }

  private static makeReadable (text: string, chunks: boolean): Readable {
    const Readable = require('stream').Readable
    let total: number = 0
    const reader = {
      read: (size: number) => {
        total += size
        if (text.length > 0 && total > text.length) {
          readable.push(null)
        }
      }
    }
    const readable = new Readable(reader)
    if (!chunks) {
      readable.push(text)
    } else {
      // simulate a set of chunks sent to parser
      StringDuplex.sendReaderChunks(text, readable)
    }

    return readable
  }

  private static makeWritable (): Writable {
    const Writable = require('stream').Writable
    const writer = {
      write: (data: Buffer, _: any, done: Function) => {
        try {
          receiver.emit('data', data)
          done()
        } catch (e) {
          done(e)
        }
      }
    }
    const receiver = new Writable(writer)
    return receiver
  }

  private static sendReaderChunks (text: string, readable: Readable): void {
    // simulate a set of chunks sent to parser
    let start = 0
    let iteration = 0
    let remaining = text.length
    while (remaining > 0) {
      iteration++
      const chunk = Math.min(remaining, iteration % 10)
      remaining -= chunk
      const end = start + chunk
      const snippet = text.slice(start, end)
      readable.push(snippet)
      start = end
    }
  }

  public end (): void {
    this.readable.push(null)
  }
}
