import { ILooseObject } from '../../collections/collection'
import {
  ContainedGroupField, ContainedSimpleField,
  IContainedSet, ContainedField,
  ContainedComponentField, FieldsDispatch
} from '../../dictionary/contained'
import { SimpleFieldDefinition, FixDefinitions } from '../../dictionary/definition'
import { MsgEncoder } from '../msg-encoder'
import { ElasticBuffer } from '../elastic-buffer'
import { TimeFormatter } from './time-formatter'
import { ITimeFormatter } from './itime-formatter'
import { AsciiChars } from './ascii-chars'
import { Tags } from '../tag/tags'
import { TagType } from '../tag/tag-type'

export class AsciiEncoder extends MsgEncoder {
  public bodyLengthPos: number
  public msgTypePos: number
  public tags: Tags
  public checkGroups: boolean = true
  readonly dispatcher: FieldsDispatch = new FieldsDispatch()

  constructor (public readonly buffer: ElasticBuffer,
    public readonly definitions: FixDefinitions,
    public readonly timeFormatter: ITimeFormatter = new TimeFormatter(buffer),
    public readonly delimiter: number = AsciiChars.Soh,
    public readonly logDelimiter: number = AsciiChars.Pipe) {
    super(definitions)
    this.tags = new Tags()
  }

  public trim (): Buffer {
    const b = this.buffer.copy()
    const delimiter = this.delimiter
    const logDelimiter = this.logDelimiter
    const tags = this.tags
    if (delimiter !== logDelimiter) {
      for (let p = 0; p < tags.nextTagPos; ++p) {
        const tagPos = tags.tagPos[p]
        b.writeUInt8(delimiter, tagPos.start + tagPos.len)
      }
    }

    return b
  }

  // only reset tags after entire message is encoded - <hdr>body<trl>

  public reset (): void {
    this.buffer.reset()
    this.tags.reset()
  }

  public encodeSet (objectToEncode: ILooseObject, set: IContainedSet): void {
    const summary: AsciiEncodeSetSummary = new AsciiEncodeSetSummary()
    this.encodeObject(objectToEncode, set, summary)
  }

  private encodeObject (objectToEncode: ILooseObject, set: IContainedSet, state: AsciiEncodeSetSummary): void {
    const fields: ContainedField[] = this.getFields(set, objectToEncode)
    this.dispatcher.dispatchFields(fields, {
      simple: (sf: ContainedSimpleField) => {
        const val: any = objectToEncode[sf.name]
        // Empty strings are omitted as they result in empty values for tags, which are considered malformed.
        if (val != null && val !== '') {
          if (state.count === 0) {
            state.firstSimple = sf
          }
          state.lastSimple = sf
          state.count++
          this.encodeSimple(objectToEncode, set, sf, val)
        }
      },
      component: (cf: ContainedComponentField) => {
        const instance: ILooseObject = objectToEncode[cf.definition.name]
        if (instance) {
          this.encodeObject(instance, cf.definition, state)
        }
      },
      group: (gf: ContainedGroupField) => {
        this.encodeInstances(objectToEncode, gf)
      }
    })
  }

  private getFields (set: IContainedSet, o: ILooseObject): ContainedField[] {
    const keys: string[] = Object.keys(o)
    let j: number = 0
    const fields: ContainedField[] = keys.reduce((a: ContainedField[], current: string) => {
      const field = set.localNameToField.get(current)
      if (field) {
        a[j++] = field
      }
      return a
    }, new Array(keys.length))
    fields.sort((a: ContainedField, b: ContainedField) => a.position - b.position)
    return fields
  }

  private encodeInstances (o: ILooseObject, gf: ContainedGroupField): void {
    const noOfField: SimpleFieldDefinition | null = gf.definition.noOfField
    if (!noOfField) return
    const instances: ILooseObject[] = o[gf.name] || o[noOfField.name]

    const buffer = this.buffer
    if (!Array.isArray(instances)) {
      throw new Error(`expected array instance for group ${noOfField.name}`)
    }
    if (instances) {
      const validator = new GroupValidator(gf)
      const test: AsciiEncodeSetSummary = validator.test

      // a repeated group has number of instances at the start of group
      this.WriteTagEquals(noOfField.tag)
      const posValBegin = buffer.getPos()
      buffer.writeWholeNumber(instances.length)
      this.writeDelimiter(posValBegin, noOfField.tag)
      for (let field = 0; field < instances.length; ++field) {
        const instance: ILooseObject = instances[field]
        test.reset()
        const summary = validator.getSummary(field)
        this.encodeObject(instance, gf.definition, summary)
        if (this.checkGroups) {
          validator.assertInstanceValid(field)
        }
      }
    }
  }

  private WriteTagEquals (tag: number): void {
    const buffer = this.buffer
    buffer.writeWholeNumber(tag)
    buffer.writeChar(AsciiChars.Equal)
  }

  private writeDelimiter (posValBegin: number, tag: number): void {
    const delimiter = this.logDelimiter
    const buffer = this.buffer
    this.tags.store(posValBegin, buffer.getPos() - posValBegin, tag)
    buffer.writeChar(delimiter)
  }

  private encodeSimple (o: ILooseObject, set: IContainedSet, sf: ContainedSimpleField, val: any): void {
    const definition = sf.definition
    const tag: number = definition.tag
    const buffer = this.buffer
    const delimiter = this.logDelimiter
    const tf = this.timeFormatter
    const pos = buffer.getPos()
    let posValBegin = 0

    let tagType: TagType
    if (typeof val === 'string') {
      switch (definition.tagType) {
        case TagType.Boolean: {
          tagType = definition.tagType
          const vs: string = val
          const first: string = vs.length > 0 ? vs.charAt(0) : 'N'
          val = first === 'Y' || first === 'T'
          break
        }
        default: {
          tagType = TagType.String
        }
      }
    } else {
      tagType = definition.tagType
    }

    switch (tagType) {
      case TagType.RawData: {
        // may need to first write raw message length (see below)
        break
      }

      default: {
        this.WriteTagEquals(tag)
        posValBegin = buffer.getPos()
        break
      }
    }

    switch (tagType) {
      case TagType.String: {
        buffer.writeString(val as string)
        break
      }

      case TagType.Float: {
        buffer.writeNumber(val as number)
        break
      }

      case TagType.Int:
      case TagType.Length: {
        buffer.writeWholeNumber(val as number)
        break
      }

      case TagType.Boolean: {
        buffer.writeBoolean(val as boolean)
        break
      }

      case TagType.UtcTimestamp: {
        tf.writeUtcTimestamp(val as Date)
        break
      }

      case TagType.UtcTimeOnly: {
        tf.writeUtcTime(val as Date)
        break
      }

      case TagType.UtcDateOnly: {
        tf.writeUtcDate(val as Date)
        break
      }

      case TagType.LocalDate: {
        tf.writeLocalDate(val as Date)
        break
      }

      case TagType.RawData: {
        const b = val as Buffer
        const lenField: ContainedSimpleField = set.fields[sf.position - 1] as ContainedSimpleField
        if (o[lenField.name] == null) {
          this.WriteTagEquals(lenField.definition.tag)
          buffer.writeWholeNumber(b.length)
          buffer.writeChar(delimiter)
        }
        this.WriteTagEquals(tag)
        buffer.writeBuffer(b)
        posValBegin = buffer.getPos()
        break
      }

      default: {
        buffer.writeString(val as string)
        break
      }
    }

    this.writeDelimiter(posValBegin, tag)

    switch (tag) {
      case Tags.BodyLengthTag:
        this.bodyLengthPos = pos + 2
        break

      case Tags.MsgTag:
        this.msgTypePos = pos
        break
    }
  }
}

class GroupValidator {
  constructor (public readonly gf: ContainedGroupField,
    public readonly first: AsciiEncodeSetSummary = new AsciiEncodeSetSummary(),
    public readonly test: AsciiEncodeSetSummary = new AsciiEncodeSetSummary()) {
  }

  getSummary (field: number): AsciiEncodeSetSummary {
    return field === 0 ? this.first : this.test
  }

  assertInstanceValid (field: number): void {
    const first = this.first
    const test = this.test
    if (field === 0 && first.empty()) {
      throw new Error(`first group instance has no delimiter present ${this.gf.name}`)
    }
    if (field > 0 && test.empty()) {
      throw new Error(`group instance [${field}] has no delimiter present ${this.gf.name}`)
    }
    if (field > 0) {
      const firstTag = first.firstSimple?.definition.tag
      const tag = test.firstSimple?.definition.tag
      if (firstTag !== tag) {
        const msg = `group instance [${field}] inconsistent delimiter ${tag} expected tag ${firstTag}`
        throw new Error(msg)
      }
    }
  }
}

class AsciiEncodeSetSummary {
  constructor (public firstSimple: ContainedSimpleField | null = null,
    public lastSimple: ContainedSimpleField | null = null,
    public count: number = 0) {
  }

  public reset (): void {
    this.firstSimple = null
    this.lastSimple = null
    this.count = 0
  }

  public empty (): boolean {
    return this.firstSimple === null || this.count === 0
  }
}
