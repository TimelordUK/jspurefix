import { FixDefinitions, SimpleFieldDefinition } from '../../definition'
import { ElasticBuffer } from '../../../buffer'
import { FixVersion } from '../../fix-versions'
import { INumericKeyed } from '../../../collections/collection'
import {
  ContainedComponentField,
  ContainedField,
  ContainedGroupField,
  ContainedSimpleField,
  FieldsDispatch
} from '../../contained'
import { keys } from 'lodash'
const newLine = require('os').EOL
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
    this.elasticBuffer.reset()
    // <fix major='4' type='FIX' servicepack='0' minor='4'>
    this.elasticBuffer.writeString(`<fix major='${this.getMajor()}' type='FIX' servicepack='${this.getServicePack()}' minor=${this.getMinor()}>${newLine}`)
    const header = this.writeComponent('Heartbeat.StandardHeader', 'header')
    this.elasticBuffer.writeString(header)
    const trailer = this.writeComponent('Heartbeat.StandardTrailer', 'trailer')
    this.elasticBuffer.writeString(trailer)
    const fields = this.writeFieldDefinitions(this.indent)
    this.elasticBuffer.writeString(fields)
    this.elasticBuffer.writeString(`</fix>${newLine}`)
  }

  private writeFieldDefinitions (leadingIndent: number): string {
    const eb: ElasticBuffer = new ElasticBuffer(2 * 1024)
    const ws = ' '.repeat(leadingIndent)
    const indent = ' '.repeat(this.indent)
    const tags = keys(this.usedTags).map(s => parseInt(s))
    tags.sort(function (a, b) {
      return a - b
    })
    eb.writeString(`${ws}<fields>${newLine}`)
    tags.forEach(t => {
      const sf = this.definitions.tagToSimple[t]
      if (!sf) return
      //   <field number='1' name='Account' type='STRING' />
      eb.writeString(`${ws}${indent}<field number='${t} name='${sf.name} type='${sf.type}''>${newLine}`)
      if (sf.isEnum()) {
        const en = this.writeEnumDefinition(sf, leadingIndent + this.indent + this.indent)
        eb.writeString(en)
      }
    })
    eb.writeString(`${ws}</fields>${newLine}`)
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
    const ws = ' '.repeat(leadingIndent)
    const indent = ' '.repeat(this.indent)
    const keys = sf.enums.keys()
    keys.sort()
    keys.forEach(k => {
      eb.writeString(`${ws}<vaue enum='${k}' value='${sf.enums.get(k)?.val}'/>${newLine}`)
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

   <field name='LastMsgSeqNumProcessed' required='N' />
  <component name='Hop' required='N' />
 </header>
   */
  private writeFields (fields: ContainedField[], destName: string, leadingIndent: number): string {
    const eb: ElasticBuffer = new ElasticBuffer(2 * 1024)
    const ws = ' '.repeat(leadingIndent)
    const indent = ' '.repeat(this.indent)
    eb.writeString(`${ws}<${destName}>${newLine}`)
    this.dispatcher.dispatchFields(fields, {
      simple: (sf: ContainedSimpleField) => {
        eb.writeString(`${ws}${indent}<field name='${sf.name}' required='${sf.required ? 'Y' : 'N'}/>${newLine}`)
        this.usedTags[sf.definition.tag] = sf.name
      },
      component: (cf: ContainedComponentField) => {
        eb.writeString(`${ws}${indent}<component name='${cf.name}' required='${cf.required ? 'Y' : 'N'}/>${newLine}`)
      },
      group: (gf: ContainedGroupField) => {
        eb.writeString(`${ws}${indent}<group name='${gf.name}' required='${gf.required ? 'Y' : 'N'}>${newLine}`)
        const groupDef = this.writeFields(gf.definition.fields, gf.name, leadingIndent + this.indent)
        eb.writeString(`${groupDef}`)
        eb.writeString(`${ws}${indent}</group>${newLine}`)
      }
    })
    eb.writeString(`${ws}</${destName}>${newLine}`)
    return eb.toString()
  }

  getMajor (): number {
    switch (this.definitions.version) {
      case FixVersion.FIX50:
      case FixVersion.FIX50SP1:
      case FixVersion.FIX50SP2:
      case FixVersion.FIXML50SP2:
        return 5

      case FixVersion.FIX40:
      case FixVersion.FIX41:
      case FixVersion.FIX42:
      case FixVersion.FIX43:
      case FixVersion.FIX44:
        return 4
    }

    return 0
  }

  getMinor (): number {
    switch (this.definitions.version) {
      case FixVersion.FIX50:
      case FixVersion.FIX50SP1:
      case FixVersion.FIX50SP2:
      case FixVersion.FIXML50SP2:
        return 0

      case FixVersion.FIX40:
        return 0
      case FixVersion.FIX41:
        return 1
      case FixVersion.FIX42:
        return 2
      case FixVersion.FIX43:
        return 3
      case FixVersion.FIX44:
        return 4
    }

    return 0
  }

  getServicePack (): number {
    switch (this.definitions.version) {
      case FixVersion.FIX50SP1:
        return 1
      case FixVersion.FIX50SP2:
      case FixVersion.FIXML50SP2:
        return 2
    }

    return 0
  }
}
