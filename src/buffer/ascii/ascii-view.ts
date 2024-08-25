import { FixDefinitions, SimpleFieldDefinition } from '../../dictionary/definition'
import { SegmentDescription } from '../segment/segment-description'
import { Structure } from '../structure'
import { MsgView } from '../msg-view'
import { ElasticBuffer } from '../elastic-buffer'
import { ITimeFormatter } from './itime-formatter'
import { TimeFormatter } from './time-formatter'
import { TagPos } from '../tag/tag-pos'
import { MsgTag } from '../../types'
import { TagType } from '../tag/tag-type'

export class AsciiView extends MsgView {
  private readonly timeFormatter: ITimeFormatter = new TimeFormatter(this.buffer)
  constructor (public readonly definitions: FixDefinitions, public readonly segment: SegmentDescription,
    public readonly buffer: ElasticBuffer,
    public readonly structure: Structure | null,
    public readonly ptr: number,
    public readonly delimiter: number,
    public readonly writeDelimiter: number) {
    super(definitions, segment, structure)
  }

  // if the view is to be kept beyond the event on which it arrives, must be cloned
  public clone (): MsgView {
    const structure = this.structure
    const buffer = this.buffer.clone()
    const segment = this.segment
    const delimiter = this.delimiter
    const definitions = this.definitions
    const writeDelimiter = this.writeDelimiter
    if (structure) {
      return new AsciiView(definitions, segment, buffer, new Structure(structure.tags.clone(), structure.segments), this.ptr, delimiter, writeDelimiter)
    }
    return new AsciiView(definitions, segment, buffer, null, this.ptr, delimiter, writeDelimiter)
  }

  private replaceDelimiter (viewBuffer: Buffer, replaceDelimiter?: number): void {
    if (this.structure == null) return
    const delimiter = replaceDelimiter ?? this.delimiter
    if (delimiter !== this.writeDelimiter) {
      const structure = this.structure
      const tags = structure.tags.tagPos
      for (let i = 0; i < structure.tags.nextTagPos; ++i) {
        const tag: TagPos = tags[i]
        const p: number = tag.start + tag.len
        viewBuffer.writeUInt8(delimiter, p)
      }
    }
  }

  // turn our view back to a raw msg
  public toBuffer (replaceDelimiter?: number): Buffer {
    const viewBuffer = this.buffer.slice()
    this.replaceDelimiter(viewBuffer, replaceDelimiter)
    return viewBuffer
  }

  public checksum (): number {
    if (this.structure == null) return -1
    const t = this.getPosition(MsgTag.CheckSum)
    const structure = this.structure
    const prev = structure.tags.tagPos[t - 1]
    const tp = prev.start + prev.len + 1
    let cs = this.buffer.sum(tp)
    const delimiter = this.delimiter
    const writeDelimiter = this.writeDelimiter
    if (writeDelimiter !== delimiter) {
      const changes = structure.tags.nextTagPos - 1
      cs -= changes * writeDelimiter
      cs += changes * delimiter
    }
    return cs % 256
  }

  protected toTyped (field: SimpleFieldDefinition): (boolean | string | number | Date | Buffer | null) {
    const position: number = this.getPosition(field.tag)
    if (position >= 0) {
      switch (field.tagType) {
        case TagType.String : {
          return this.stringAtPosition(position)
        }

        case TagType.Float: {
          return this.getNumber(position, true)
        }

        case TagType.Int:
        case TagType.Length: {
          return this.getNumber(position)
        }

        case TagType.Boolean: {
          return this.getBoolean(field.tag)
        }

        case TagType.UtcTimestamp: {
          return this.getDateTime(field.tag, true)
        }

        case TagType.UtcTimeOnly: {
          return this.getTime(field.tag, true)
        }

        case TagType.UtcDateOnly: {
          return this.getDate(field.tag, true)
        }

        case TagType.LocalDate: {
          return this.getDate(field.tag, true)
        }

        case TagType.RawData: {
          return this.getBuffer(position)
        }

        default: {
          return this.stringAtPosition(position)
        }
      }
    }
    return null
  }

  protected create (singleton: SegmentDescription): MsgView {
    return new AsciiView(this.definitions, singleton,
      this.buffer,
      this.structure,
      this.ptr,
      this.delimiter,
      this.writeDelimiter)
  }

  protected stringAtPosition (position: number): string | null {
    if (this.structure == null) return null
    const tags = this.structure.tags
    if (position < 0 || position >= tags.nextTagPos) {
      return null
    }
    const tag: TagPos = tags.tagPos[position]
    return this.buffer.getString(tag.start, tag.start + tag.len)
  }

  private getBuffer (position: number): Buffer | null {
    if (this.structure == null) return null
    const tag: TagPos = this.structure.tags.tagPos[position]
    return this.buffer.getBuffer(tag.start, tag.start + tag.len)
  }

  private getNumber (position: number, isFloat: boolean = false): number | null {
    if (this.structure == null) return null
    const buffer = this.buffer
    const tag: TagPos = this.structure.tags.tagPos[position]
    if (isFloat) {
      return buffer.getFloat(tag.start, tag.start + tag.len - 1)
    } else {
      return buffer.getWholeNumber(tag.start, tag.start + tag.len - 1)
    }
  }

  private getTime (tag: number, useUtc: boolean): Date | null {
    if (this.structure == null) return null
    const formatter = this.timeFormatter
    const position: number = this.getPosition(tag)
    const tagPos: TagPos = this.structure.tags.tagPos[position]
    if (position < 0) {
      return null
    }
    if (useUtc) {
      return formatter.getUtcTime(tagPos.start)
    } else {
      return formatter.getLocalTime(tagPos.start)
    }
  }

  private getDate (tag: number, useUtc: boolean): Date | null {
    if (this.structure == null) return null
    const formatter = this.timeFormatter
    const position: number = this.getPosition(tag)
    if (position < 0) {
      return null
    }
    const tagPos: TagPos = this.structure.tags.tagPos[position]
    // (SendingTime) = 20150417-01:00:08.201
    if (tagPos.len < 8) {
      return null
    }
    if (useUtc) {
      return formatter.getUtcDate(tagPos.start)
    } else {
      return formatter.getLocalDate(tagPos.start)
    }
  }

  private getDateTime (tag: number, useUtc: boolean): Date | null {
    if (this.structure == null) return null
    const position: number = this.getPosition(tag)
    const tagPos: TagPos = this.structure.tags.tagPos[position]
    const formatter = this.timeFormatter
    if (position < 0) {
      return null
    }
    // (SendingTime) = 20150417-01:00:08.201
    if (tagPos.len < 8) {
      return null
    }

    if (useUtc) {
      return formatter.getUtcTimestamp(tagPos.start, tagPos.start + tagPos.len)
    } else {
      return formatter.getLocalTimestamp(tagPos.start, tagPos.start + tagPos.len)
    }
  }

  private getBoolean (tag: number): boolean | null {
    if (this.structure == null) return null
    const position: number = this.getPosition(tag)
    if (position < 0) {
      return null
    }
    const tagPos: TagPos = this.structure.tags.tagPos[position]
    return this.buffer.getBoolean(tagPos.start)
  }

  public toString (): string {
    return super.toString()
  }
}
