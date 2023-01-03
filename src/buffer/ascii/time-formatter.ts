import { AsciiChars } from './ascii-chars'
import { ElasticBuffer } from '../elastic-buffer'
import { ITimeFormatter } from './itime-formatter'

export class TimeFormatter implements ITimeFormatter {
  constructor (public readonly buffer: ElasticBuffer, public readonly adjustLocal: boolean = false) {
  }

  public writeLocalDate (v: Date): void {
    const buffer = this.buffer
    buffer.writeWholeNumber(v.getFullYear())
    buffer.writePaddedTensUnits(v.getMonth() + 1)
    buffer.writePaddedTensUnits(v.getDate())
  }

  public writeUtcDate (v: Date): void {
    const buffer = this.buffer
    buffer.writeWholeNumber(v.getUTCFullYear())
    buffer.writePaddedTensUnits(v.getUTCMonth() + 1)
    buffer.writePaddedTensUnits(v.getUTCDate())
  }

  public writeUtcTimestamp (v: Date): void {
    this.writeUtcDate(v)
    this.buffer.writeChar(AsciiChars.Hyphen)
    this.writeUtcTime(v)
  }

  public writeLocalTimestamp (v: Date): void {
    this.writeLocalDate(v)
    this.buffer.writeChar(AsciiChars.Hyphen)
    this.writeLocalTime(v)
  }

  public writeUtcTime (v: Date): void {
    const buffer = this.buffer
    buffer.writePaddedTensUnits(v.getUTCHours())
    buffer.writeChar(AsciiChars.Colon)
    buffer.writePaddedTensUnits(v.getUTCMinutes())
    buffer.writeChar(AsciiChars.Colon)
    buffer.writePaddedTensUnits(v.getUTCSeconds())
    const ms: number = v.getUTCMilliseconds()
    buffer.writeChar(AsciiChars.Dot)
    buffer.writePaddedHundreds(ms)
  }

  public writeLocalTime (v: Date): void {
    const buffer = this.buffer
    buffer.writePaddedTensUnits(v.getHours())
    buffer.writeChar(AsciiChars.Colon)
    buffer.writePaddedTensUnits(v.getMinutes())
    buffer.writeChar(AsciiChars.Colon)
    buffer.writePaddedTensUnits(v.getSeconds())
    const ms: number = v.getMilliseconds()
    buffer.writeChar(AsciiChars.Dot)
    buffer.writePaddedHundreds(ms)
  }

  public getLocalTime (start: number): Date | null {
    return this.getTime(start, false)
  }

  public getUtcTime (start: number): Date | null {
    return this.getTime(start, true)
  }

  public getUtcDate (start: number): Date | null {
    return this.getDate(start, true)
  }

  public getLocalDate (start: number): Date | null {
    return this.getDate(start, false)
  }

  public getUtcTimestamp (start: number, end: number): Date | null {
    return this.getTimestamp(start, end, true)
  }

  public getLocalTimestamp (start: number, end: number): Date | null {
    return this.getTimestamp(start, end, false)
  }

  private getTimestamp (start: number, end: number, useUtc: boolean): Date | null {
    const buffer = this.buffer
    const n: number = buffer.getWholeNumber(start, start + 7)
    if (n == null) {
      return null
    }
    const monthDay: number = n % 10000
    const month: number = Math.round(monthDay / 100)
    const day: number = monthDay % 100
    const year: number = Math.round(n / 10000)
    const len = end - start
    if (len === 8) {
      let t: Date
      if (useUtc) {
        t = new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0))
      } else {
        t = new Date(year, month - 1, day, 0, 0, 0, 0)
      }
      if (this.adjustLocal) {
        t = new Date(t.getTime() - t.getTimezoneOffset() * -60000)
      }
      return t
    }

    let offset: number = 8
    if (buffer.get(start + offset) !== AsciiChars.Hyphen) {
      return null
    }

    if (len < 17) {
      return null
    }

    offset += 1
    const hh: number = buffer.getWholeNumber(start + offset, start + offset + 1)
    offset += 2
    if (buffer.get(start + offset) !== AsciiChars.Colon) {
      return null
    }
    offset += 1
    const mm: number = buffer.getWholeNumber(start + offset, start + offset + 1)
    offset += 2
    if (buffer.get(start + offset) !== AsciiChars.Colon) {
      return null
    }
    offset += 1
    const ss: number = buffer.getWholeNumber(start + offset, start + offset + 1)
    offset += 2
    let ms: number = 0
    if (buffer.get(start + offset) === AsciiChars.Dot) {
      offset += 1
      ms = buffer.getWholeNumber(start + offset, start + offset + 2)
    }
    let t: Date
    if (useUtc) {
      t = new Date(Date.UTC(year, month - 1, day, hh, mm, ss, ms))
    } else {
      t = new Date(year, month - 1, day, hh, mm, ss, ms)
      if (this.adjustLocal) {
        t = new Date(t.getTime() - t.getTimezoneOffset() * -60000)
      }
    }
    return t
  }

  private getTime (start: number, useUtc: boolean): Date | null {
    const buffer = this.buffer
    let offset = 0
    const hh: number = buffer.getWholeNumber(start + offset, start + offset + 1)
    offset += 2
    if (buffer.get(start + offset) !== AsciiChars.Colon) {
      return null
    }
    offset += 1
    const mm: number = buffer.getWholeNumber(start + offset, start + offset + 1)
    offset += 2
    if (buffer.get(start + offset) !== AsciiChars.Colon) {
      return null
    }
    offset += 1
    const ss: number = buffer.getWholeNumber(start + offset, start + offset + 1)
    offset += 2
    let ms: number = 0
    if (buffer.get(start + offset) === AsciiChars.Dot) {
      offset += 1
      ms = buffer.getWholeNumber(start + offset, start + offset + 2)
    }
    let t: Date
    if (useUtc) {
      t = new Date(Date.UTC(0, 0, 0, hh, mm, ss, ms))
    } else {
      t = new Date(0, 0, 0, hh, mm, ss, ms)
      if (this.adjustLocal) {
        t = new Date(t.getTime() - t.getTimezoneOffset() * -60000)
      }
    }
    return t
  }

  private getDate (start: number, useUtc: boolean): Date | null {
    // = 20150417

    const n: number = this.buffer.getWholeNumber(start, start + 7)
    if (n == null) {
      return null
    }
    const monthDay: number = n % 10000
    const month: number = Math.round(monthDay / 100)
    const day: number = monthDay % 100
    const year: number = Math.round(n / 10000)
    let t: Date
    if (useUtc) {
      t = new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0))
    } else {
      t = new Date(year, month - 1, day, 0, 0, 0, 0)
      if (this.adjustLocal) {
        t = new Date(t.getTime() - t.getTimezoneOffset() * -60000)
      }
    }
    return t
  }
}
