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
import { QuickFixXmlFormatter } from './quick-fix-xml-formatter'

export class QuickFixXmlFileBuilder {
  private readonly usedTags: INumericKeyed<string> = {}
  private readonly requiredComponents: string[] = []
  private readonly seenComponents: Map<string, boolean> = new Map<string, boolean>()
  private readonly indent: number = 2
  private readonly dispatcher: FieldsDispatch = new FieldsDispatch()
  public readonly elasticBuffer: ElasticBuffer = new ElasticBuffer(10 * 1024)

  /**
   * given an input parsed dictionary, build a new file based on only the input set of message types
   * providing a way of producing a fix file containing only those needed messages.
   * @param definitions parsed definitions from existing quick fix file
   */
  constructor (public readonly definitions: FixDefinitions) {
  }

  /**
   *
   * @param msgTypes the required message types represented in the new file
   */
  public write (msgTypes: string[]): void {
    const eb = this.elasticBuffer
    if (msgTypes == null || msgTypes.length === 0) return
    eb.reset()
    const m0def = this.definitions.message.get(msgTypes[0])
    // <fix major='4' type='FIX' servicepack='0' minor='4'>
    eb.writeString(QuickFixXmlFormatter.startFix(this.definitions.getMajor(), this.definitions.getMinor(), this.definitions.getServicePack()))
    const header = this.writeComponent(`${m0def?.name}.StandardHeader`, 'header')
    eb.writeString(header)
    const trailer = this.writeComponent(`${m0def?.name}.StandardTrailer`, 'trailer')
    eb.writeString(trailer)
    const messages = this.writeMessages(msgTypes, this.indent)
    eb.writeString(messages)
    const components = this.writeComponents(this.indent)
    eb.writeString(components)
    const fields = this.writeFieldDefinitions(this.indent)
    eb.writeString(fields)
    eb.writeString(QuickFixXmlFormatter.endFix())
  }

  private writeComponents (leadingIndent: number): string {
    const eb: ElasticBuffer = new ElasticBuffer(2 * 1024)
    eb.writeString(QuickFixXmlFormatter.startEntity('components', leadingIndent))
    const components = this.requiredComponents
    while (components.length > 0) {
      const k = components.pop()
      if (!k) continue
      const component = this.definitions.component.get(k)
      if (!component) continue
      eb.writeString(QuickFixXmlFormatter.startComponent(component.name, leadingIndent + this.indent))
      const def = this.writeFields(component.fields, leadingIndent + this.indent + this.indent)
      eb.writeString(def)
      eb.writeString(QuickFixXmlFormatter.endComponent(leadingIndent + this.indent))
    }
    eb.writeString(QuickFixXmlFormatter.endEntity('components', leadingIndent))
    return eb.toString()
  }

  /*
   <message name='Heartbeat' msgcat='admin' msgtype='0'>
   <field name='TestReqID' required='N' />
  </message>
   */
  private writeMessages (msgTypes: string[], leadingIndent: number): string {
    const eb: ElasticBuffer = new ElasticBuffer(2 * 1024)
    eb.writeString(QuickFixXmlFormatter.startEntity('messages', leadingIndent))
    msgTypes.forEach(mt => {
      const md = this.definitions.message.get(mt)
      if (!md) return
      eb.writeString(QuickFixXmlFormatter.defineMessage(md, leadingIndent + this.indent))
      const fields = this.writeFields(md.fields.slice(1, md.fields.length - 1), leadingIndent + this.indent + this.indent)
      eb.writeString(fields)
      eb.writeString(QuickFixXmlFormatter.endEntity('message', leadingIndent + this.indent))
    })
    eb.writeString(QuickFixXmlFormatter.endEntity('messages', leadingIndent))
    return eb.toString()
  }

  private writeFieldDefinitions (leadingIndent: number): string {
    const eb: ElasticBuffer = new ElasticBuffer(2 * 1024)

    const tags = keys(this.usedTags).map(s => parseInt(s))
    tags.sort(function (a, b) {
      return a - b
    })
    eb.writeString(QuickFixXmlFormatter.startEntity('fields', leadingIndent))
    tags.forEach(t => {
      const sf = this.definitions.tagToSimple[t]
      if (!sf) return
      //   <field number='1' name='Account' type='STRING' />
      eb.writeString(QuickFixXmlFormatter.defineField(sf, leadingIndent + this.indent))
      if (sf.isEnum()) {
        const en = this.writeEnumDefinition(sf, leadingIndent + this.indent + this.indent)
        eb.writeString(en)
        eb.writeString(QuickFixXmlFormatter.endEntity('field', leadingIndent + this.indent))
      }
    })
    eb.writeString(QuickFixXmlFormatter.endEntity('fields', leadingIndent))
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
    const keys = Array.from(sf.enums.keys())
    keys.sort()
    keys.forEach(k => {
      eb.writeString(QuickFixXmlFormatter.addEnum(sf.enums.get(k), leadingIndent))
    })
    return eb.toString()
  }

  private writeComponent (name: string, destName: string): string {
    const eb: ElasticBuffer = new ElasticBuffer(2 * 1024)
    const set = this.definitions.getSet(name)
    if (set == null) return ''
    eb.writeString(QuickFixXmlFormatter.startEntity(destName, this.indent))
    eb.writeString(this.writeFields(set.fields, this.indent + this.indent))
    eb.writeString(QuickFixXmlFormatter.endEntity(destName, this.indent))
    return eb.toString()
  }

  private writeSimpleField (sf: ContainedSimpleField, eb: ElasticBuffer, leadingIndent: number): void {
    eb.writeString(QuickFixXmlFormatter.addField(sf, leadingIndent))
    this.usedTags[sf.definition.tag] = sf.name
  }

  private writeComponentField (cf: ContainedComponentField, eb: ElasticBuffer, leadingIndent: number): void {
    eb.writeString(QuickFixXmlFormatter.addComponent(cf, leadingIndent))
    if (!this.seenComponents.has(cf.name)) {
      this.seenComponents.set(cf.name, true)
      this.requiredComponents.push(cf.name)
    }
  }

  private writeGroupField (gf: ContainedGroupField, eb: ElasticBuffer, leadingIndent: number): void {
    this.usedTags[gf.definition.noOfField?.tag ?? 0] = gf.name
    eb.writeString(QuickFixXmlFormatter.addGroup(gf, leadingIndent))
    const groupDef = this.writeFields(gf.definition.fields, leadingIndent + this.indent)
    eb.writeString(groupDef)
    eb.writeString(QuickFixXmlFormatter.endGroup(leadingIndent))
  }

  /*
  <trailer>
    <field name='SignatureLength' required='N' />
    <field name='Signature' required='N' />
    <field name='CheckSum' required='Y' />
 </trailer>
   */
  private writeFields (fields: ContainedField[], leadingIndent: number): string {
    const eb: ElasticBuffer = new ElasticBuffer(2 * 1024)
    this.dispatcher.dispatchFields(fields, {
      simple: (sf: ContainedSimpleField) => { this.writeSimpleField(sf, eb, leadingIndent) },
      component: (cf: ContainedComponentField) => { this.writeComponentField(cf, eb, leadingIndent) },
      group: (gf: ContainedGroupField) => { this.writeGroupField(gf, eb, leadingIndent) }
    })
    return eb.toString()
  }
}
