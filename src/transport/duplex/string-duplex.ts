import { FixDuplex } from './fix-duplex'
import { Readable, Writable } from 'stream'

export enum StringDuplexTraits {
  None = 0,
  Hunked = 1 << 0, // 0001 -- the bitshift is unnecessary, but done for consistency
  Terminate = 1 << 1, // 0010
  All = ~(~0 << 2) // 11
}

class StrHandler extends Readable {
  private pos: number = 0

  constructor (public readonly txt: string, public readonly traits: StringDuplexTraits) {
    super()
  }

  public isTerminate (): boolean {
    return (this.traits & StringDuplexTraits.Terminate) === StringDuplexTraits.Terminate
  }

  public isHunked (): boolean {
    return (this.traits & StringDuplexTraits.Hunked) === StringDuplexTraits.Hunked
  }

  public _read (n: number): void {
    const len = this.txt.length
    const pos = this.pos
    const toSend = Math.min(n, len - pos)
    const slice = this.txt.slice(pos, pos + toSend)
    this.push(slice)
    this.pos += toSend
    if (this.isTerminate() && this.pos >= len) {
      this.push(null)
    }
  }
}

class HunkedStrHandler extends StrHandler {
  private start = 0
  private iteration = 0
  private remaining: number

  constructor (public readonly txt: string, public readonly traits: StringDuplexTraits) {
    super(txt, traits)
    this.remaining = this.txt.length
  }

  public _read (n: number): void {
    this.iteration++
    const want = (this.iteration % 10) + 1
    const chunk = Math.min(this.remaining, want)
    this.remaining -= chunk
    const end = this.start + chunk
    const snippet = this.txt.slice(this.start, end)
    this.push(snippet)
    this.start = end
    if (this.isTerminate() && this.remaining <= 0) {
      this.push(null)
    }
  }
}

export class StringDuplex extends FixDuplex {
  constructor (public readonly text: string = '', public readonly traits: StringDuplexTraits = StringDuplexTraits.Terminate) {
    super()
    this.readable = ((traits & StringDuplexTraits.Hunked) === StringDuplexTraits.Hunked)
      ? new HunkedStrHandler(text, traits)
      : new StrHandler(text, traits)
    this.writable = StringDuplex.makeWritable()
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

  public end (): void {
    this.readable.push(null)
  }
}
