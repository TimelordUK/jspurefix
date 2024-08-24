import { MsgView } from '../msg-view'
import { FixDefinitions, SimpleFieldDefinition } from '../../dictionary/definition'
import { Structure } from '../structure'
import { SegmentDescription } from '../segment/segment-description'
import { AsciiChars } from '../ascii/'
import * as moment from 'moment'
import { TagType } from '../tag/tag-type'

export class FixmlView extends MsgView {
  constructor (public definitions: FixDefinitions, public readonly segment: SegmentDescription,
    public readonly values: string[],
    public readonly structure: Structure) {
    super(definitions, segment, structure)
  }

  private static getTimestamp (s: string, useUtc: boolean): Date {
    const m = moment(s)
    return useUtc ? m.utc(true).toDate() : m.toDate()
  }

  // 01:00:08.201
  private static getTimeOnly (s: string, useUtc: boolean): Date {
    const m = moment(s, [moment.HTML5_FMT.TIME_MS, moment.HTML5_FMT.TIME_SECONDS])
    return useUtc ? m.utc(true).toDate() : m.toDate()
  }

  private static getDateOnly (s: string, useUtc: boolean): Date {
    const m = moment(s)
    let d: Date
    if (useUtc) {
      d = m.utc(true).toDate()
    } else {
      d = m.toDate()
    }
    return d
  }

  // if the view is to be kept beyond the event on which it arrives, must be cloned
  public clone (): MsgView {
    return new FixmlView(this.definitions, this.segment, this.values, new Structure(this.structure.tags.clone(), this.structure.segments))
  }

  public checksum (): number {
    return 0
  }

  protected create (singleton: SegmentDescription): FixmlView {
    return new FixmlView(this.definitions, singleton,
      this.values,
      this.structure)
  }

  protected stringAtPosition (position: number): string {
    if (position < 0 || position >= this.values.length) {
      throw new Error(`illegal position ${position}`)
    }
    return this.values[position]
  }

  protected toTyped (field: SimpleFieldDefinition): any {
    const position: number = this.getPosition(field.tag)
    if (position >= 0) {
      const s: string = this.values[position]
      switch (field.tagType) {
        case TagType.String : {
          return this.stringAtPosition(position)
        }

        case TagType.Int:
        case TagType.Length: {
          return parseInt(s, 10)
        }

        case TagType.Float: {
          return parseFloat(s)
        }

        case TagType.Boolean: {
          return s && s.length > 0 && AsciiChars.firstChar(s) === AsciiChars.Y
        }

        case TagType.UtcTimestamp: {
          // 20150417-01:00:08.201
          return FixmlView.getTimestamp(s, true)
        }
        // 01:00:08.201
        case TagType.UtcTimeOnly: {
          return FixmlView.getTimeOnly(s, true)
        }

        case TagType.UtcDateOnly: {
          return FixmlView.getDateOnly(s, true)
        }

        case TagType.LocalDate: {
          return FixmlView.getDateOnly(s, true)
        }

        case TagType.RawData: {
          return Buffer.alloc(s.length, s, 'utf8')
        }

        default: {
          return this.stringAtPosition(position)
        }
      }
    }
    return this.stringAtPosition(position)
  }
}
