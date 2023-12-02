import { FixDuplex } from './fix-duplex'
import { Readable, Writable } from 'stream'

export enum StringDuplexTraits {
  None = 0,
  Hunked = 1 << 0, // 0001 -- the bitshift is unnecessary, but done for consistency
  Terminate = 1 << 1, // 0010
  All = ~(~0 << 2) // 11
}

export class StringDuplexTraitsHelper {
  public static isTerminate (traits: StringDuplexTraits): boolean {
    return (traits & StringDuplexTraits.Terminate) === StringDuplexTraits.Terminate
  }

  public static isHunked (traits: StringDuplexTraits): boolean {
    return (traits & StringDuplexTraits.Hunked) === StringDuplexTraits.Hunked
  }
}

class StrHandler extends Readable {
  protected pos: number = 0
  protected remaining: number

  constructor (public readonly txt: string, public readonly traits: StringDuplexTraits) {
    super()
    this.remaining = txt.length
  }

  public isTerminate (): boolean {
    return StringDuplexTraitsHelper.isTerminate(this.traits)
  }

  public isHunked (): boolean {
    return StringDuplexTraitsHelper.isHunked(this.traits)
  }

  protected sendHunk (slice: string): void {
    this.push(slice)
    this.pos += slice.length
    this.remaining -= slice.length
    this.remaining = Math.max(0, this.remaining)
    if (this.isTerminate() && this.remaining === 0) {
      this.push(null)
    }
  }

  public _read (n: number): void {
    const len = this.txt.length
    const pos = this.pos
    const toSend = Math.min(n, len - pos)
    const slice = this.txt.slice(pos, pos + toSend)
    this.sendHunk(slice)
  }
}

class HunkedStrHandler extends StrHandler {
  private iteration = 0

  constructor (public readonly txt: string, public readonly traits: StringDuplexTraits) {
    super(txt, traits)
  }

  public _read (n: number): void {
    this.iteration++
    const want = (this.iteration % 10) + 1
    const chunk = Math.min(this.remaining, want)
    const snippet = this.txt.slice(this.pos, this.pos + chunk)
    this.sendHunk(snippet)
  }
}

export class StringDuplex extends FixDuplex {
  constructor (public readonly text: string = '', public readonly traits: StringDuplexTraits = StringDuplexTraits.Terminate) {
    super()
    this.readable = StringDuplexTraitsHelper.isHunked(traits)
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
