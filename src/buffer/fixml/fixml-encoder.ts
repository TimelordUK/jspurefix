import { ILooseObject } from '../../collections/collection'
import {
  ContainedFieldSet, ContainedField, ContainedGroupField,
  ContainedComponentField, ContainedSimpleField, FieldsDispatch
} from '../../dictionary/contained'
import { AsciiChars } from '../ascii'
import { MsgEncoder } from '../msg-encoder'
import { ElasticBuffer } from '../elastic-buffer'
import moment = require('moment')
import { FixDefinitions } from '../../dictionary/definition'
import { IFieldDispatcher } from '../../dictionary/contained/field-dispatcher'
import { TagType } from '../tag-type'

interface IPopulatedAttributes {
  fields: ContainedSimpleField[],
  values: any[]
}

export class FixmlEncoder extends MsgEncoder {
  public attributePerLine: boolean = false
  public readonly eol: string = require('os').EOL
  private readonly beginDoc: string = `<FIXML>${this.eol}`
  private readonly endDoc: string = '</FIXML>'
  private readonly beginBatch: string = `<Batch>${this.eol}`
  private readonly endBatch: string = '</Batch>'

  public constructor (public readonly buffer: ElasticBuffer, public readonly definitions: FixDefinitions) {
    super(definitions)
  }

  private static asString (sf: ContainedSimpleField, v: any): string {
    switch (sf.definition.tagType) {
      case TagType.String: {
        return v as string
      }

      case TagType.Int:
      case TagType.Float:
      case TagType.Length: {
        return v.toString()
      }

      case TagType.Boolean: {
        return v ? 'Y' : 'N'
      }

      case TagType.UtcTimestamp: {
        const d: Date = v as Date
        return moment(d).utc().format('YYYY-MM-DDTHH:mm:ss.SSS')
      }

      case TagType.UtcTimeOnly: {
        const d: Date = v as Date
        return moment.utc(d).format('HH:mm:ss.SSS')
      }

      case TagType.LocalDate: {
        const d: Date = v as Date
        return moment(d).format('YYYY-MM-DD')
      }

      case TagType.UtcDateOnly: {
        const d: Date = v as Date
        return moment(d).utc(true).format('YYYY-MM-DD')
      }
    }
  }

  public encodeSet (o: ILooseObject, set: ContainedFieldSet): void {
    const batch: ILooseObject[] = o.Batch
    const toWrite: ILooseObject[] = batch || [o]
    let depth = batch ? 1 : 0
    const buffer = this.buffer
    const begin = this.beginDoc
    const indent: string = '\t'
    const endBatch = batch ? this.endBatch : ''
    const eol = this.eol
    buffer.reset()
    buffer.writeString(begin)
    if (batch) {
      this.batchStart(o, set, depth)
    }
    toWrite.forEach((next: ILooseObject) => {
      this.toXml(next, set.abbreviation, set, depth + 1)
      buffer.writeString(eol)
    })
    if (batch) {
      buffer.writeString(`${indent}${endBatch}`)
    }

    buffer.writeString(this.endDoc)
  }

  private batchStart (o: ILooseObject, set: ContainedFieldSet, depth: number) {
    const buffer = this.buffer
    const indent: string = '\t'
    const beginBatch = this.beginBatch
    const hdr = o.StandardHeader
    const eol = this.eol
    buffer.writeString(`${indent}${beginBatch}`)
    if (hdr) {
      const h = set.fields[0] as ContainedComponentField
      this.toXml(hdr, h.name, h.definition, depth + 1)
      buffer.writeString(eol)
    }
  }

  private toXml (o: ILooseObject, name: string, set: ContainedFieldSet, depth: number): void {

    const buffer = this.buffer
    const selfClose: string = '/>'
    const close: string = '>'
    const open: string = '<'
    const indent: string = '\t'.repeat(depth)
    const newLine = this.eol
    const fields: ContainedField[] = this.getPopulatedFields(set, o)
    const eol: string = fields.length === 0 ? selfClose : close
    buffer.writeString(`${indent}${open}`)
    buffer.writeString(`${name} `)
    this.attributes(o, set, depth, this.attributePerLine)
    buffer.writeString(`${eol}`)
    new FieldsDispatch().dispatchFields(fields, {
      group: (g: ContainedGroupField) => this.complexGroup(o, g, depth),
      component: (c: ContainedComponentField) => this.complexComponent(o, c, depth)
    } as IFieldDispatcher)
    if (fields.length) {
      const end: string = `${newLine}${indent}</${name}>`
      buffer.writeString(`${end}`)
    }
  }

  private getPopulatedFields (set: ContainedFieldSet, o: ILooseObject): ContainedField[] {
    const keys: string[] = Object.keys(o)
    const fields: ContainedField[] = keys.reduce((a: ContainedField[], current: string) => {
      const field: ContainedField = set.localNameToField.get(current)
      if (field && !set.nameToLocalAttribute.containsKey(current)) {
        a.push(field)
      }
      return a
    }, [])
    fields.sort((a: ContainedField, b: ContainedField) => a.position - b.position)
    return fields
  }

  private encodeAttribute (name: string, val: string): void {
    if (val == null) {
      return
    }
    const buffer = this.buffer
    buffer.writeString(name)
    buffer.writeChar(AsciiChars.Equal)
    buffer.writeChar(AsciiChars.Dq)
    buffer.writeString(val)
    buffer.writeChar(AsciiChars.Dq)
  }

  private attributes (o: ILooseObject, set: ContainedFieldSet, depth: number, attributePerLine: boolean): void {
    const newLine = this.eol
    const indent: string = '\t'.repeat(depth + 1)
    const attributes = set.localAttribute
    const buffer = this.buffer
    if (attributes.length && attributePerLine) {
      buffer.writeString(newLine)
      buffer.writeString(indent)
    }
    const populatedAttributes: IPopulatedAttributes = this.getPopulatedAttributes(o, attributes)
    for (let a = 0; a < populatedAttributes.values.length; ++a) {
      const last = a === populatedAttributes.values.length - 1
      const f = populatedAttributes.fields[a]
      if (a || this.attributePerLine) buffer.writeChar(AsciiChars.Space)
      this.encodeAttribute(f.name, FixmlEncoder.asString(f, populatedAttributes.values[a]))
      if (!last && attributePerLine) {
        buffer.writeString(newLine)
        buffer.writeString(indent)
      }
    }
  }

  private getPopulatedAttributes (o: ILooseObject, attributes: ContainedSimpleField[]): IPopulatedAttributes {
    return attributes.reduce((a: IPopulatedAttributes, f: ContainedSimpleField) => {
      let v: any = o[f.definition.name]
      if (v == null) {
        v = o[f.name]
      }
      if (v != null) {
        a.values.push(v)
        a.fields.push(f)
      }
      return a
    }, {
      values: [],
      fields: []
    } as IPopulatedAttributes)
  }

  private complexGroup (o: ILooseObject, field: ContainedField, depth: number) {
    const gf: ContainedGroupField = field as ContainedGroupField
    const elements: ILooseObject[] = o[gf.definition.name]
    if (elements) {
      if (Array.isArray(elements)) {
        for (const e of elements) {
          this.buffer.writeString(this.eol)
          this.toXml(e, gf.name, gf.definition,depth + 1)
        }
      } else {
        throw new Error(`expected array for member ${gf.definition.name}`)
      }
    }
  }

  private complexComponent (o: ILooseObject, field: ContainedField, depth: number) {
    const cf: ContainedComponentField = field as ContainedComponentField
    const def = cf.definition
    const instance: ILooseObject = o[def.name]
    if (instance) {
      this.buffer.writeString(this.eol)
      this.toXml(instance, cf.name, def, depth + 1)
    }
  }

  reset (): void {
    this.buffer.reset()
  }

  trim (): Buffer {
    return this.buffer.copy()
  }
}
