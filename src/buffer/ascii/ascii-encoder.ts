import { ILooseObject } from '../../collections/collection'
import { ContainedGroupField, ContainedSimpleField, ContainedFieldSet, ContainedField, ContainedFieldType, ContainedComponentField, SimpleFieldDefinition, FixDefinitions, dispatchFields } from '../../dictionary'
import { MsgEncoder } from '../msg-encoder'
import { ElasticBuffer } from '../elastic-buffer'
import { TimeFormatter } from './time-formatter'
import { ITimeFormatter } from './itime-formatter'
import { AsciiChars } from '../ascii-chars'
import { Tags, TagType } from '../tags'

export class AsciiEncoder extends MsgEncoder {

  public bodyLengthPos: number
  public msgTypePos: number

  constructor (public readonly buffer: ElasticBuffer,
               public readonly definitions: FixDefinitions,
               public readonly timeFormatter: ITimeFormatter = new TimeFormatter(buffer),
               public readonly delimiter: number = AsciiChars.Soh) {
    super(definitions)
  }

  private static checkGroupInstanceHasDelimiter (gf: ContainedGroupField, instance: ILooseObject): boolean {
    const delimiterField: ContainedSimpleField = gf.definition.firstSimple
    if (!delimiterField) {
      throw new Error(`group definition has delimiter field ${delimiterField.definition.name}`)
    }
    // may have a group represented by a component where first simple field is further down.
    while (instance != null) {
      if (instance[delimiterField.definition.name] != null) {
        return true
      }
      const first = gf.definition.fields[0]
      switch (first.type) {
        case ContainedFieldType.Component: {
          const cf: ContainedComponentField = first as ContainedComponentField
          instance = instance[cf.definition.name]
          break
        }
        default:
          instance = null
      }
    }
  }

  public encodeSet (objectToEncode: ILooseObject, set: ContainedFieldSet): void {
    const fields: ContainedField[] = this.getFields(set, objectToEncode)
    dispatchFields(fields, {
      simple: (sf: ContainedSimpleField) => {
        const val: any = objectToEncode[sf.name]
        if (val != null) {
          this.encodeSimple(objectToEncode, set, sf, val)
        }
      },
      component: (cf: ContainedComponentField) => {
        const instance: ILooseObject = objectToEncode[cf.definition.name]
        if (instance) {
          this.encodeSet(instance, cf.definition)
        }
      },
      group: (gf: ContainedGroupField) => {
        this.encodeInstances(objectToEncode, gf)
      }
    })
  }

  private getFields (set: ContainedFieldSet, o: ILooseObject): ContainedField[] {
    const keys: string[] = Object.keys(o)
    let j: number = 0
    const fields: ContainedField[] = keys.reduce((a: ContainedField[], current: string) => {
      const field: ContainedField = set.localNameToField.get(current)
      if (field) {
        a[j++] = field
      }
      return a
    }, new Array(keys.length))
    fields.sort((a: ContainedField, b: ContainedField) => a.position - b.position)
    return fields
  }

  private encodeInstances (o: ILooseObject, gf: ContainedGroupField): void {
    const noOfField: SimpleFieldDefinition = gf.definition.noOfField
    const instances: ILooseObject[] = o[gf.name] || o[noOfField.name]
    const buffer = this.buffer
    if (!Array.isArray(instances)) {
      throw new Error(`expected array instance for group ${noOfField.name}`)
    }
    if (instances) {
      // a repeated group has number of instances at the start of group
      this.WriteTagEquals(noOfField.tag)
      buffer.writeWholeNumber(instances.length)
      buffer.writeChar(this.delimiter)
      instances.forEach((i: ILooseObject) => {
        if (AsciiEncoder.checkGroupInstanceHasDelimiter(gf, i)) {
          this.encodeSet(i, gf.definition)
        } else {
          const delimiter: ContainedSimpleField = gf.definition.firstSimple
          throw new Error(`group instance with no delimiter field ${delimiter.definition.name}`)
        }
      })
    }
  }

  private WriteTagEquals (tag: number): void {
    const buffer = this.buffer
    buffer.writeWholeNumber(tag)
    buffer.writeChar(AsciiChars.Equal)
  }

  private encodeSimple (o: ILooseObject, set: ContainedFieldSet, sf: ContainedSimpleField, val: any): void {
    const definition = sf.definition
    const tag: number = definition.tag
    const buffer = this.buffer
    const delimiter = this.delimiter
    const tf = this.timeFormatter
    const pos = buffer.getPos()

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
        break
      }

      default: {
        buffer.writeString(val as string)
        break
      }
    }

    buffer.writeChar(delimiter)

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
