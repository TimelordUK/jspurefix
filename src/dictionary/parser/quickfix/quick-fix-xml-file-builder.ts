import { FixDefinitions, SimpleFieldDefinition } from '../../definition'
import { ElasticBuffer } from '../../../buffer'
import { INumericKeyed } from '../../../collections/collection'
import {
  ContainedComponentField,
  ContainedField,
  ContainedGroupField,
  ContainedSimpleField,
  FieldsDispatch
} from '../../contained'
import { keys } from 'lodash'
import { FieldEnum } from '../../field-enum'
const newLine = require('os').EOL

export class QuicfixFormmatter {
  private static isRequired (r: boolean): string {
    return r ? 'Y' : 'N'
  }

  private static whitespace (n: number): string {
    return ' '.repeat(n)
  }

  public static startEntity (name: string, ws: number): string {
    return `${QuicfixFormmatter.whitespace(ws)}<${name}>${newLine}`
  }

  public static endEntity (name: string, ws: number): string {
    return `${QuicfixFormmatter.whitespace(ws)}</${name}>${newLine}`
  }

  public static addField (sf: ContainedSimpleField, ws: number): string {
    return `${QuicfixFormmatter.whitespace(ws)}<field name='${sf.name}' required='${QuicfixFormmatter.isRequired(sf.required)}/>${newLine}`
  }

  public static addComponent (cf: ContainedComponentField, ws: number): string {
    return `${QuicfixFormmatter.whitespace(ws)}<component name='${cf.name}' required='${QuicfixFormmatter.isRequired(cf.required)}/>${newLine}`
  }

  public static addGroup (gf: ContainedGroupField, ws: number): string {
    return `${QuicfixFormmatter.whitespace(ws)}<group name='${gf.name}' required='${QuicfixFormmatter.isRequired(gf.required)}>${newLine}`
  }

  public static endGroup (ws: number): string {
    return `${QuicfixFormmatter.whitespace(ws)}</group>${newLine}`
  }

  public static addEnum (fe: (FieldEnum | null), ws: number): string {
    return `${QuicfixFormmatter.whitespace(ws)}<vaue enum='${fe?.key}' value='${fe?.val}'/>${newLine}`
  }
}

export class QuickFixXmlFileBuilder {
  private readonly usedTags: INumericKeyed<string> = {}
  private readonly indent: number = 2
  private readonly dispatcher: FieldsDispatch = new FieldsDispatch()
  public readonly elasticBuffer: ElasticBuffer = new ElasticBuffer(10 * 1024)

  /**
   * given an input parsed dictionary, build a new file based on only the input set of message types
   * providing a way of producing a fix file containing only those needed messages.
   * @param definitions parsed definitions from existing quick fix file
   * @param msgTypes the required message types represented in the new file
   */
  constructor (public readonly definitions: FixDefinitions, public readonly msgTypes: string[]) {
  }

  public write (): void {
    const eb = this.elasticBuffer
    if (this.msgTypes == null || this.msgTypes.length === 0) return
    eb.reset()
    const m0def = this.definitions.message.get(this.msgTypes[0])
    // <fix major='4' type='FIX' servicepack='0' minor='4'>
    eb.writeString(`<fix major='${this.definitions.getMajor()}' type='FIX' servicepack='${this.definitions.getServicePack()}' minor=${this.definitions.getMinor()}>${newLine}`)
    const header = this.writeComponent(`${m0def?.name}.StandardHeader`, 'header')
    eb.writeString(header)
    const trailer = this.writeComponent(`${m0def?.name}.StandardTrailer`, 'trailer')
    eb.writeString(trailer)
    const fields = this.writeFieldDefinitions(this.indent)
    eb.writeString(fields)
    eb.writeString(`</fix>${newLine}`)
  }

  private writeFieldDefinitions (leadingIndent: number): string {
    const eb: ElasticBuffer = new ElasticBuffer(2 * 1024)

    const tags = keys(this.usedTags).map(s => parseInt(s))
    tags.sort(function (a, b) {
      return a - b
    })
    QuicfixFormmatter.startEntity('fields', leadingIndent)
    tags.forEach(t => {
      const sf = this.definitions.tagToSimple[t]
      if (!sf) return
      const term = sf.isEnum() ? '>' : '/>'
      const ws = ' '.repeat(leadingIndent + this.indent)
      //   <field number='1' name='Account' type='STRING' />
      eb.writeString(`${ws}<field number='${t} name='${sf.name} type='${sf.type}'${term}${newLine}`)
      if (sf.isEnum()) {
        const en = this.writeEnumDefinition(sf, leadingIndent + this.indent + this.indent)
        eb.writeString(en)
        eb.writeString(QuicfixFormmatter.endEntity('field', leadingIndent + this.indent))
      }
    })
    QuicfixFormmatter.endEntity('fields', leadingIndent)
    return eb.toString()
  }

  /*
   <value enum='B' description='BUY' />
   <value enum='S' description='SELL' />
   <value enum='X' description='CROSS' />
   <value enum='T' description='TRADE' />
   */
  private writeEnumDefinition (sf: SimpleFieldDefinition, leadingIndent: number): string {
    const eb: ElasticBuffer = new ElasticBuffer(2 * 1024)
    const keys = sf.enums.keys()
    keys.sort()
    keys.forEach(k => {
      eb.writeString(QuicfixFormmatter.addEnum(sf.enums.get(k), leadingIndent))
    })
    return eb.toString()
  }

  private writeComponent (name: string, destName: string): string {
    const set = this.definitions.getSet(name)
    if (set == null) return ''
    return this.writeFields(set.fields, destName, this.indent)
  }

  /*
  <trailer>
    <field name='SignatureLength' required='N' />
    <field name='Signature' required='N' />
    <field name='CheckSum' required='Y' />
 </trailer>
   */
  private writeFields (fields: ContainedField[], destName: string, leadingIndent: number): string {
    const eb: ElasticBuffer = new ElasticBuffer(2 * 1024)
    const ws = ' '.repeat(leadingIndent)
    const indent = ' '.repeat(this.indent)
    eb.writeString(QuicfixFormmatter.startEntity(destName, leadingIndent))
    this.dispatcher.dispatchFields(fields, {
      simple: (sf: ContainedSimpleField) => {
        eb.writeString(QuicfixFormmatter.addField(sf, leadingIndent + this.indent))
        this.usedTags[sf.definition.tag] = sf.name
      },
      component: (cf: ContainedComponentField) => {
        eb.writeString(QuicfixFormmatter.addComponent(cf, leadingIndent + this.indent))
      },
      group: (gf: ContainedGroupField) => {
        eb.writeString(QuicfixFormmatter.addGroup(gf, leadingIndent + this.indent))
        const groupDef = this.writeFields(gf.definition.fields, gf.name, leadingIndent + this.indent)
        eb.writeString(`${groupDef}`)
        eb.writeString(QuicfixFormmatter.endGroup(leadingIndent + this.indent))
      }
    })
    eb.writeString(QuicfixFormmatter.endEntity(destName, leadingIndent))
    return eb.toString()
  }
}
