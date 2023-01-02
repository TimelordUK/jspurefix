import { AsciiChars } from './ascii/ascii-chars'
import { format } from 'mathjs'
import { inject, injectable } from 'tsyringe'
import { DITokens } from '../runtime/di-tokens'

@injectable()
export class ElasticBuffer {
  private buffer: Buffer
  private ptr: number = 0
  private stretched: number

  constructor (@inject(DITokens.elasticBufferSize) public readonly size: number = 6 * 1024,
    @inject(DITokens.elasticBufferReturnSize) public readonly returnTo: number = 6 * 1024) {
    this.size = Math.max(1, this.size)
    this.buffer = Buffer.allocUnsafe(this.size)
    this.returnTo = Math.max(this.size, this.returnTo)
    this.stretched = this.size
  }

  private static precisionRound (n: number, precision: number): number {
    const factor: number = Math.pow(10, precision)
    return Math.round(n * factor) / factor
  }

  private static HowManyDigits (v: number): number {
    v = Math.abs(v)
    let digits: number = 0
    let w: number = v
    while (w > 0) {
      ++digits
      w = Math.floor(w / 10)
    }
    return Math.max(digits, 1)
  }

  public currentSize (): number {
    return this.stretched
  }

  public getPos (): number {
    return this.ptr
  }

  public setPos (ptr: number): number {
    const r = this.ptr
    if (ptr >= 0 && ptr <= this.size) {
      this.ptr = ptr
    }
    return r
  }

  public get (pos: number): number {
    return this.buffer[pos]
  }

  public writeBoolean (v: boolean): number {
    this.writeChar(v ? AsciiChars.Y : AsciiChars.N)
    return this.ptr
  }

  public switchChar (c: number): number {
    this.buffer[this.ptr - 1] = c
    return this.ptr
  }

  public saveChar (c: number): number {
    this.buffer[this.ptr++] = c
    return this.ptr
  }

  public writeChar (c: number): number {
    if (c > 255) throw new Error(`can't write ${c} to a byte`)
    this.checkGrowBuffer(1)
    this.buffer[this.ptr++] = c
    return this.ptr
  }

  public writeString (s: string): number {
    const begin = this.ptr
    this.checkGrowBuffer(s.length)
    const buffer = this.buffer
    this.ptr += buffer.write(s, begin, s.length, 'ascii')
    return this.ptr
  }

  public writeBuffer (v: Buffer): number {
    const begin = this.ptr
    this.checkGrowBuffer(v.length)
    const buffer = this.buffer
    const srcLen: number = v.length
    this.ptr += v.copy(buffer, begin, 0, srcLen)
    return this.ptr
  }

  public writeWholeNumber (n: number): number {
    const digits: number = ElasticBuffer.HowManyDigits(n)
    let reserve = digits
    const sign: number = Math.sign(n)
    let p: number = Math.pow(10, digits - 1)
    let v: number = Math.abs(n)
    if (sign < 0) {
      reserve++
    }
    this.checkGrowBuffer(reserve)
    const buffer = this.buffer
    if (sign < 0) {
      buffer[this.ptr++] = AsciiChars.Minus
    }
    while (p >= 1) {
      const d: number = Math.floor(v / p)
      v -= d * p
      p /= 10
      buffer[this.ptr++] = AsciiChars.Zero + d
    }

    return this.ptr
  }

  public writeNumber (v: number, places: number = 13): number {
    const rounded: number = Math.floor(v)
    const fraction: number = ElasticBuffer.precisionRound(v - rounded, places)
    if (fraction === 0) {
      // integer
      return this.writeWholeNumber(v)
    } else {
      // decimal with fraction turn to string
      const s: string = format(v, { notation: 'fixed' })
      return this.writeString(s)
    }
  }

  public reset (): boolean {
    this.ptr = 0
    const shrink = this.stretched > this.returnTo
    if (shrink) {
      this.buffer = Buffer.allocUnsafe(this.returnTo)
      this.stretched = this.size
    }
    return shrink
  }

  public slice (): Buffer {
    return this.buffer.subarray(0, this.ptr)
  }

  public copy (): Buffer {
    const m = Buffer.alloc(this.ptr)
    this.buffer.copy(m, 0, 0, this.ptr)
    return m
  }

  public clone (): ElasticBuffer {
    const cloned = new ElasticBuffer(this.ptr)
    this.buffer.copy(cloned.buffer, 0, 0, this.ptr)
    cloned.setPos(this.ptr)
    return cloned
  }

  public writePaddedHundreds (v: number): number {
    if (v > 999) throw new Error(`can't write ${v} as hundreds padding`)
    this.checkGrowBuffer(3)
    const buffer = this.buffer
    const zero: number = AsciiChars.Zero
    const units: number = v % 10 + zero
    v = v / 10
    const tens: number = v % 10 + zero
    v = v / 10
    buffer[this.ptr++] = v % 10 + zero
    buffer[this.ptr++] = tens
    buffer[this.ptr++] = units
    return this.ptr
  }

  public writePaddedTensUnits (v: number): number {
    if (v > 99) throw new Error(`can't write ${v} as hundreds padding`)
    this.checkGrowBuffer(2)
    const buffer = this.buffer
    const zero: number = AsciiChars.Zero
    const units: number = v % 10 + zero
    v = v / 10
    buffer[this.ptr++] = v % 10 + zero
    buffer[this.ptr++] = units
    return this.ptr
  }

  public patchPaddedNumberAtPos (ptr: number, numToWrite: number, padding: number): void {
    let digits: number = ElasticBuffer.HowManyDigits(numToWrite)
    const saved: number = this.ptr
    this.ptr = ptr
    const buffer = this.buffer
    while (digits++ < padding) {
      buffer[this.ptr++] = AsciiChars.Zero
    }
    this.writeWholeNumber(numToWrite)
    this.ptr = saved
  }

  public toString (ptr: number = this.ptr): string {
    return this.buffer.toString('ascii', 0, ptr)
  }

  public checksum (ptr: number = this.ptr): number {
    const cks: number = this.sum(ptr)
    return cks % 256
  }

  public sum (ptr: number = this.ptr): number {
    let total: number = 0
    ptr = Math.min(ptr, this.ptr)
    const buffer = this.buffer
    for (let idx: number = 0; idx < ptr; idx++) {
      total += buffer[idx]
    }
    return total
  }

  public getWholeNumber (start: number, vend: number): number {
    const buffer = this.buffer
    let sign = 1
    let raised = vend - start
    switch (buffer[start]) {
      case AsciiChars.Minus: {
        --raised
        sign = -1
        ++start
        break
      }
      case AsciiChars.Plus: {
        --raised
        ++start
        break
      }
    }
    let i: number = Math.pow(10, raised)
    let num: number = 0
    let scan: number = start

    while (scan <= vend) {
      const p: number = buffer[scan++]
      const d: number = p - AsciiChars.Zero
      num += d * i
      i /= 10
    }

    return num * sign
  }

  public getString (start: number, end: number): string {
    return this.buffer.toString('ascii', start, end)
  }

  public getBuffer (start: number, end: number): Buffer {
    return this.buffer.subarray(start, end)
  }

  public getBoolean (start: number): boolean {
    const b: number = this.buffer[start]
    return b === AsciiChars.Y
  }

  public getFloat (start: number, vend: number): number | null {
    let n: number = 0
    let digits: number = 0
    let dotPosition: number = 0
    const buffer = this.buffer
    let sign = 1
    switch (buffer[start]) {
      case AsciiChars.Minus: {
        sign = -1
        start++
        break
      }
      case AsciiChars.Plus: {
        start++
        break
      }
    }
    const len = vend - start
    let i: number = Math.pow(10, len - 1)
    for (let j: number = start; j <= vend; ++j) {
      const p: number = buffer[j]
      if (p >= AsciiChars.Zero && p <= AsciiChars.Nine) {
        const d: number = p - AsciiChars.Zero
        ++digits
        n += d * i
        i /= 10
      } else if (p === AsciiChars.Dot) {
        if (dotPosition > 0) {
          return null
        }
        dotPosition = j - start
      } else if (digits > 0) {
        return null
      }
    }
    const power: number = dotPosition === 0 ? 0 : len - dotPosition
    const raised = dotPosition === 0 ? 10 : Math.pow(10, -1 * power)
    const round = dotPosition === 0 ? 1 : Math.pow(10, power)
    const val = n * raised * sign
    return Math.round(val * round) / round
  }

  public checkGrowBuffer (required: number): void {
    let buffer = this.buffer
    let size = buffer.length
    const ptr = this.ptr
    if (size - ptr >= required) {
      return
    }
    while (size - ptr < required) {
      size *= 2
    }
    const old = buffer
    buffer = Buffer.allocUnsafe(size)
    old.copy(buffer, 0, 0, this.ptr)
    this.buffer = buffer
    this.stretched = size
  }
}
