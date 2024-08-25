import { TagPos } from './tag/tag-pos'
import { SegmentDescription } from './segment/segment-description'
import { Structure } from './structure'
import { Tags } from './tag/tags'
import {
  ContainedComponentField,
  ContainedField,
  IContainedSet,
  ContainedGroupField,
  ContainedSimpleField
} from '../dictionary/contained'
import { SetReduce } from '../dictionary'
import { ILooseObject } from '../collections/collection'
import { ElasticBuffer } from './elastic-buffer'
import { FixDefinitions, GroupFieldDefinition, SimpleFieldDefinition } from '../dictionary/definition'
import { ITypeDispatcher } from '../dictionary/type-dispatcher'
import { ContainedSetType } from '../dictionary/contained-set-type'

export abstract class MsgView {
  protected sortedTagPosForwards: TagPos[]
  protected sortedTagPosBackwards: TagPos[]
  private readonly reducer: SetReduce<ILooseObject> = new SetReduce<ILooseObject>()

  protected constructor (public readonly definitions: FixDefinitions, public readonly segment: SegmentDescription, public readonly structure: Structure | null) {
  }

  protected static asVerbose = (field: SimpleFieldDefinition, val: string, i: number, count: number, tp: TagPos): string => {
    const newLine = require('os').EOL
    let desc: string
    let name: string
    if (field) {
      name = field.name || 'unknown'
      if (field.isEnum()) {
        desc = `${val}[${field.resolveEnum(val)}]${newLine}\t${field.description ?? ''}${newLine}${newLine}`
      } else {
        desc = `${val}${newLine}t${field.description ?? ''}${newLine}${newLine}`
      }
    } else {
      name = 'unknown'
      desc = 'na'
    }
    return `[${i}] ${tp.tag} (${name}) = ${desc}`
  }

  protected static asToken = (field: SimpleFieldDefinition, val: string, i: number, count: number, tp: TagPos): string => {
    const perLine: number = 2
    const newLine = require('os').EOL
    // [280] 814 (ApplQueueResolution) = 2[OverlayLast][281] 10 (CheckSum) = 80
    let desc: string
    let name: string
    if (field) {
      name = field.name || 'unknown'
      if (field.isEnum()) {
        desc = `${val}[${field.resolveEnum(val)}]`
      } else {
        desc = `${val}`
      }
    } else {
      desc = `${val}`
      name = 'unknown'
    }
    let delimiter: string
    if (i === 1 || (i < count && i % perLine - 1 === 0)) {
      delimiter = newLine
    } else {
      delimiter = i < count ? ', ' : ''
    }
    return `[${i}] ${tp.tag} (${name}) = ${desc}${delimiter}`
  }

  // return list of any tags parsed that are not valid
  public invalid (): number[] {
    const invalidTags: number[] = []
    const set = this.segment.set
    if (set == null) return []
    const tags = this.structure?.tags ?? null
    if (tags == null) return []
    for (let i = 0; i < tags.nextTagPos; ++i) {
      const tag = tags.tagPos[i].tag
      if (tag <= 0 || !set.containedTag[tag]) {
        invalidTags[invalidTags.length] = tag
      }
    }
    return invalidTags
  }

  // list of tags that must be present
  public missing (): number[] {
    if (this.segment == null) return []
    if (this.segment.set == null) return []
    return this.missingRequired(this.segment.set, [])
  }

  /**
   * does this view contain this tag
   * @param tagOrName the name or tag of field to check 8 or BeginString
   */
  public contains (tagOrName: number | string): boolean {
    const tag: number = this.resolveTag(tagOrName)
    const position: number = this.getPosition(tag)
    return position >= 0
  }

  /**
   * if this view represents a repeated group then return a sub view representing
   * this instance of repeated group.
   * @param i the index to return i.e. 0 is first within repeated group
   */
  public getGroupInstance (i: number): MsgView | null {
    const instance: SegmentDescription | null = this.segment?.getInstance(i)
    if (!instance) {
      return null
    }
    return this.create(instance)
  }

  public getUndefined (): SegmentDescription | SegmentDescription[] | null {
    return this.structure?.layout['.undefined']
  }

  public undefinedForMsg (): string | null {
    let msg: string | null = null
    const undefinedTags = this.getUndefined()
    if (undefinedTags) {
      if (Array.isArray(undefinedTags)) {
        msg = 'undefined tags = ' + undefinedTags.map((e: SegmentDescription) => e.startTag.toString()).join(', ')
      } else {
        msg = `undefined tag = ${undefinedTags.startTag}`
      }
    }
    return msg
  }

  /**
   * if this view represents a repeated group then return number
   * of repeated instances within this view
   */
  public groupCount (): number {
    const positions = this.segment.delimiterPositions
    return positions ? positions.length : 0
  }

  /**
   * regardless of how this type is represented in data dictionary,
   * return its value as a string.
   * @param tagOrName name or tag to return 8 or BeginString
   */
  public getString (tagOrName: number | string): string | null {
    const tag: number = this.resolveTag(tagOrName)
    if (tag == null) {
      return null
    }
    const position: number = this.getPosition(tag)
    if (position < 0) {
      return null
    }
    return this.stringAtPosition(position)
  }

  /**
   * for a repeated group, one field may be repeted across each instance of a component
   * return all values for a specified field as array of strings
   * @param tagOrName the name of the repeated field to fetch
   */
  public getStrings (tagOrName: number | string | null = null): Array<(string | null)> | null {
    if (!tagOrName) {
      return this.allStrings()
    }
    tagOrName = tagOrName || -1
    const tag: number = this.resolveTag(tagOrName)
    if (tag == null) {
      return null
    }
    const positions: number[] = this.getPositions(tag)
    if (positions == null) {
      return null
    }
    return positions.map((position: number) => {
      return this.stringAtPosition(position)
    })
  }

  /**
   * returns typed value of a sinple field within this view
   * @param tagOrName the name or tag of required field e.g. 8, BeginString
   */
  public getTyped (tagOrName: number | string): (boolean | string | number | Date | Buffer | null) {
    const tag: number = this.resolveTag(tagOrName)
    if (tag == null) {
      return null
    }
    const field: SimpleFieldDefinition | null = this.definitions.tagToSimple[tag] ?? null
    if (field == null) {
      return null
    }
    return this.toTyped(field)
  }

  /**
   * use a varargs list of tags or tag names to fetch typed values for those fields within this view.
   * @param tagOrNames list of tags e.g. 'BeginString', 'BodyLength', ...
   */
  public getTypedList (...tagOrNames: Array<number | string>): Array<boolean | string | number | Date | Buffer | null> {
    return tagOrNames.map((s) => this.getTyped(s))
  }

  /**
   * use an array of tags or tag names to fetch typed values for those fields within this view.
   * @param tagOrName the list of params as array ['BeginString','BodyLength', 'MsgType']
   */
  public getTypedTags (tagOrName: Array<string | number>): Array<boolean | string | number | Date | Buffer | null> {
    return tagOrName.map((s) => this.getTyped(s))
  }

  /**
   * produce an object representation of the view which when coupled with its
   * interface (generated against the same dictionary source) will allow easy
   * navigation of the object where a group is resolved to an array and simple
   * fields are properties. This is relatively expensive operation as every
   * field is fully resolved regardless of depth i.e. all groups and compoennts
   * are fully resolved.
   */
  public toObject (): ILooseObject | ILooseObject[] | null {
    const segment: SegmentDescription = this.segment
    if (segment.set == null) return null
    if (segment.delimiterTag) {
      switch (segment.set.type) {
        case ContainedSetType.Group: {
          return this.asInstances((segment.set as GroupFieldDefinition).name)
        }
        case ContainedSetType.Msg: {
          // this is a batch of messages
          const hdrView = this.getView('Hdr')
          const batch: ILooseObject = {}
          if (hdrView) {
            const name = hdrView.segment.set?.name ?? 'na'
            batch[name] = hdrView.toObject()
          }
          batch[segment.name] = this.asInstances(segment.name)
          return batch
        }
      }
    }
    return this.asLoose(segment.set)
  }

  /**
   * easy human-readable format showing each field, its position, value and resolved
   * enum.
   */
  public toString (): string {
    return this.stringify(MsgView.asToken)
  }

  public toVerbose (): string {
    return this.stringify(MsgView.asVerbose)
  }

  /**
   * a string in JSON format representing this view as an object
   */
  public toJson (): string {
    return JSON.stringify(this.toObject(), null, 4)
  }

  public getView (name: string): MsgView | null {
    const parts: string[] = name.split('.')
    const reducer = (a: MsgView, current: string): MsgView | null => {
      if (!a) {
        return a
      }
      const structure = a.structure
      const singleton: SegmentDescription | null = structure?.firstContainedWithin(current, a.segment) ?? null
      if (singleton) {
        return a.create(singleton)
      }
      // is this a full name where abbreviation exists
      const component: ContainedField | null = a.segment.set?.localNameToField.get(current) ?? null
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (component) {
        const abbreviated: SegmentDescription | null = structure?.firstContainedWithin(component.name, a.segment) ?? null
        if (abbreviated) {
          return a.create(abbreviated)
        }
      }
      return null
    }
    return parts.reduce<MsgView | null>(reducer, this)
  }

  public abstract checksum (): number

  public abstract clone (): MsgView

  protected abstract create (singleton: SegmentDescription): MsgView

  protected abstract stringAtPosition (position: number): string | null

  protected abstract toTyped (field: SimpleFieldDefinition): boolean | string | number | Date | Buffer | null

  protected resolveTag (tagOrName: number | string): number {
    let tag: number
    const set = this.segment.set
    if (typeof (tagOrName) === 'string') {
      if (set == null) return 0
      const cf = set.simple.get(tagOrName)
      const f: SimpleFieldDefinition | null = cf ? cf.definition : this.definitions.simple.get(tagOrName) ?? null
      if (f == null) {
        return -1
      }
      tag = f.tag
    } else {
      tag = tagOrName
    }
    return tag
  }

  // fetch all positions of a particular tag.
  protected getPositions (tag: number): number[] {
    const forwards: TagPos[] = this.sortedTagPosForwards
    const backwards: TagPos[] = this.sortedTagPosBackwards
    const position: number = this.binarySearch(tag)
    if (position < 0) {
      return []
    }

    const count: number = forwards.length
    const last: number = count - 1
    let end: number = position
    while (end <= last) {
      if (tag !== forwards[end].tag) {
        break
      }
      ++end
    }
    // avoid backtracking over an array by scan forwards on a reversed copy
    let start: number = last - position
    while (start <= last) {
      if (tag !== backwards[start].tag) {
        break
      }
      ++start
    }
    const begin: number = last - (start - 1)
    const len: number = end - begin
    const positions: number[] = new Array(len)
    for (let i: number = begin; i < end; ++i) {
      positions[i - begin] = forwards[i].position
    }
    return positions
  }

  protected getPosition (tag: number): number {
    const pos: number = this.binarySearch(tag)
    if (pos >= 0) {
      return this.sortedTagPosForwards[pos].position
    } else {
      return -1
    }
  }

  private allStrings (): Array<(string | null)> {
    const segment: SegmentDescription = this.segment
    const range: number[] = []
    for (let i: number = segment.startPosition; i <= segment.endPosition; ++i) {
      range[range.length] = i
    }
    return range.map((i: number) => this.stringAtPosition(i))
  }

  private asInstances (name: string): Array<ILooseObject | null> | null {
    const groupView: MsgView | null = this.getView(name)
    if (groupView == null) {
      return null
    }
    const groupArray = new Array<ILooseObject | null>(groupView.groupCount())
    const count: number = groupView.groupCount()
    for (let j: number = 0; j < count; ++j) {
      const instance: MsgView | null = groupView.getGroupInstance(j)
      groupArray[j] = instance?.toObject() ?? null
    }
    return groupArray
  }

  private asLoose (def: IContainedSet): ILooseObject {
    // eslint-disable-next-line
    return this.reducer.reduce(def, {
      group: (a: ILooseObject, field: ContainedGroupField) => { this.asLooseGroup(a, field) },
      simple: (a: ILooseObject, field: ContainedSimpleField) => { this.asLooseSimple(a, field) },
      component: (a: ILooseObject, field: ContainedComponentField) => { this.asLooseComponent(a, field) }
    } as ITypeDispatcher<ILooseObject>, def.localAttribute.reduce<ILooseObject>((a: ILooseObject, sf: ContainedSimpleField) => {
      const def = sf.definition
      const position: number = this.getPosition(def.tag)
      if (position >= 0) {
        a[def.name] = this.toTyped(def)
      }
      return a
    }, {}))
  }

  private missingRequired (def: IContainedSet, tags: number []): number[] {
    const reducer = new SetReduce<number[]>()
    const dispatcher: ITypeDispatcher<number[]> = {
      group: (a: number[], field: ContainedGroupField) => { this.missingGroup(def, field, a) },
      simple: (a: number[], field: ContainedSimpleField) => { this.missingSimple(field, a) },
      component: (a: number[], field: ContainedComponentField) => { this.missingComponent(field, a) }
    }
    return reducer.reduce(def, dispatcher, tags)
  }

  private missingSimple (sf: ContainedSimpleField, a: number[]): void {
    if (sf.required && this.getPosition(sf.definition.tag) < 0) {
      a.push(sf.definition.tag)
    }
  }

  private missingComponent (cf: ContainedComponentField, a: number[]): void {
    const view: MsgView | null = this.getView(cf.name)
    if (view) {
      view.missingRequired(cf.definition, a)
    }
  }

  private missingGroup (def: IContainedSet, gf: ContainedGroupField, tags: number []): void {
    const name = gf.definition.noOfField ? gf.definition.noOfField.name : def.name
    const groupView: MsgView | null = this.getView(name) ?? this.getView(gf.definition.name)
    if (groupView == null) {
      return
    }
    const count: number = groupView.groupCount()
    for (let j: number = 0; j < count; ++j) {
      const instance: MsgView | null = groupView.getGroupInstance(j)
      instance?.missingRequired(gf.definition, tags)
    }
  }

  private asLooseComponent (a: ILooseObject, cf: ContainedComponentField): void {
    const view: MsgView | null = this.getView(cf.name)
    if (view) {
      const component = view.toObject()
      if (component) {
        a[cf.definition.name] = component
      }
    }
  }

  private asLooseSimple (a: ILooseObject, sf: ContainedSimpleField): void {
    const def = sf.definition
    const position: number = this.getPosition(def.tag)
    if (position >= 0) {
      const asSimple: boolean | string | number | Date | Buffer | null = this.toTyped(def)
      if (asSimple != null) { // beware, may be false value
        a[sf.name] = asSimple
      }
    }
  }

  private asLooseGroup (a: ILooseObject, gf: ContainedGroupField): void {
    const def = gf.definition
    const name = def.noOfField ? def.noOfField.name : def.name
    const instances: ILooseObject | null = this.asInstances(name) ?? this.asInstances(def.name)
    if (instances) {
      a[def.name] = instances
    }
  }

  private binarySearch (tag: number): number {
    if (this.structure == null) return -1
    let forwards = this.sortedTagPosForwards
    if (!forwards) {
      const segment = this.segment
      forwards = this.sortedTagPosForwards = this.structure.tags.tagPos.slice(segment.startPosition, segment.endPosition + 1)
      forwards.sort(TagPos.compare)
      this.sortedTagPosBackwards = forwards.slice().reverse()
    }
    return TagPos.binarySearch(forwards, tag)
  }

  private stringify (getToken: (field: SimpleFieldDefinition, val: string, i: number, count: number, tp: TagPos) => string): string {
    const structure = this.structure
    const buffer: ElasticBuffer = new ElasticBuffer()
    const segment: SegmentDescription = this.segment
    if (structure == null) return ''
    const tags: Tags = structure.tags
    const count: number = segment.endPosition - segment.startPosition
    const simple: Map<string, SimpleFieldDefinition> = this.definitions.simple

    for (let i: number = segment.startPosition; i <= segment.endPosition; ++i) {
      const tagPos: TagPos = tags.tagPos[i]
      const field: SimpleFieldDefinition | undefined = simple.get(tagPos.tag.toString())
      const val: string | null = this.stringAtPosition(i) ?? ''
      // [0] 8 (BeginString) = FIX4.4
      const token = field ? getToken(field, val, i - segment.startPosition, count, tagPos) : `[${i}] ${tagPos.tag} (unknown) = ${val}, `
      buffer.writeString(token)
    }

    return buffer.toString()
  }
}
