import { TagPos } from './tag-pos'
import { SimpleFieldDefinition, GroupFieldDefinition } from '../dictionary/definition'
import { SegmentDescription } from './segment-description'
import { Structure } from './structure'
import { Dictionary } from '../collections'
import { Tags } from './tags'
import { ContainedGroupField, ContainedComponentField, ContainedField, ContainedFieldSet, ContainedSimpleField } from '../dictionary'
import { ILooseObject } from '../collections/collection'
import { ElasticBuffer } from './elastic-buffer'
import { ITypeDispatcher, reduceSet } from '../dictionary/set-reduce'
import { ContainedSetType } from '../dictionary/dict-primitive'

export abstract class MsgView {
  protected sortedTagPosForwards: TagPos[]
  protected sortedTagPosBackwards: TagPos[]

  protected constructor (public readonly segment: SegmentDescription, public readonly structure: Structure) {
  }

  protected static asVerbose (field: SimpleFieldDefinition, val: string, i: number, count: number, tp: TagPos): string {
    const newLine = require('os').EOL
    let desc: string
    let name: string
    if (field) {
      name = field.name || 'unknown'
      if (field.isEnum()) {
        desc = `${val}[${field.resolveEnum(val)}]${newLine}\t${field.description || ''}${newLine}${newLine}`
      } else {
        desc = `${val}${newLine}t${field.description || ''}${newLine}${newLine}`
      }
    } else {
      name = 'unknown'
    }
    return `[${i}] ${tp.tag} (${name}) = ${desc}`
  }

  protected static asToken (field: SimpleFieldDefinition, val: string, i: number, count: number, tp: TagPos): string {
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
    const tags = this.structure.tags
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
    return this.missingRequired(this.segment.set, [])
  }

  public contains (tagOrName: number | string): boolean {
    const tag: number = this.resolveTag(tagOrName)
    const position: number = this.getPosition(tag)
    return position >= 0
  }

  public getGroupInstance (i: number): MsgView {
    const instance: SegmentDescription = this.segment.getInstance(i)
    if (!instance) {
      return null
    }
    return this.create(instance)
  }

  public getUndefined (): SegmentDescription | SegmentDescription[] {
    return this.structure.layout['.undefined']
  }

  public undefinedForMsg (): string {
    let msg: string = null
    const undefinedTags = this.getUndefined()
    if (undefinedTags) {
      if (Array.isArray(undefinedTags)) {
        msg = `undefined tags = ` + undefinedTags.map((e: SegmentDescription) => e.startTag.toString()).join(', ')
      } else {
        msg = `undefined tag = ${undefinedTags.startTag}`
      }
    }
    return msg
  }

  public groupCount (): number {
    const positions = this.segment.delimiterPositions
    return positions ? positions.length : 0
  }

  public getString (tagOrName: number | string): string {
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

  public getStrings (tagOrName: number | string = -1): string[] {
    if (tagOrName < 0) {
      return this.allStrings()
    }
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

  public getTyped (tagOrName: number | string): any {
    const tag: number = this.resolveTag(tagOrName)
    if (tag == null) {
      return null
    }
    const field: SimpleFieldDefinition = this.structure.tags.definitions.tagToSimple[tag]
    if (field == null) {
      return null
    }
    return this.toTyped(field)
  }

  public getTypedTags (tagOrName: any[]): any[] {
    return tagOrName.map((s) => this.getTyped(s))
  }

  public toObject (): any {
    const segment: SegmentDescription = this.segment
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
            batch[hdrView.segment.set.name] = hdrView.toObject()
          }
          batch[segment.name] = this.asInstances(segment.name)
          return batch
        }
      }
    }
    return this.asLoose(segment.set)
  }

  public toString (): string {
    return this.stringify(MsgView.asToken)
  }

  public toVerbose (): string {
    return this.stringify(MsgView.asVerbose)
  }

  public toJson (): string {
    return JSON.stringify(this.toObject(), null, 4)
  }

  public getView (name: string): MsgView {
    const parts: string[] = name.split('.')
    return parts.reduce((a: MsgView, current: string) => {
      if (!a) {
        return a
      }
      const structure = a.structure
      const singleton: SegmentDescription = structure.firstContainedWithin(current, a.segment)
      if (singleton) {
        return a.create(singleton)
      }
      // is this a full name where abbreviation exists
      const component: ContainedField = a.segment.set.localNameToField.get(current)
      if (component) {
        const abbreviated: SegmentDescription = structure.firstContainedWithin(component.name, a.segment)
        if (abbreviated) {
          return a.create(abbreviated)
        }
      }
      return null
    }, this as MsgView)
  }

  public abstract checksum (): number

  public abstract clone (): MsgView

  protected abstract create (singleton: SegmentDescription): MsgView

  protected abstract stringAtPosition (position: number): string

  protected abstract toTyped (field: SimpleFieldDefinition): any

  protected resolveTag (tagOrName: number | string): number {
    let tag: number
    if (typeof(tagOrName) === 'string') {
      let cf = this.segment.set.simple.get(tagOrName)
      const f: SimpleFieldDefinition = cf ? cf.definition : this.structure.tags.definitions.simple.get(tagOrName)
      if (f == null) {
        return null
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
      return null
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

  private allStrings (): string[] {
    const segment: SegmentDescription = this.segment
    const range: number[] = []
    for (let i: number = segment.startPosition; i <= segment.endPosition; ++i) {
      range[range.length] = i
    }
    return range.map((i: number) => this.stringAtPosition(i))
  }

  private asInstances (name: string): ILooseObject[] {
    const groupView: MsgView = this.getView(name)
    if (groupView == null) {
      return
    }
    const groupArray: ILooseObject[] = new Array(groupView.groupCount())
    const count: number = groupView.groupCount()
    for (let j: number = 0; j < count; ++j) {
      const instance: MsgView = groupView.getGroupInstance(j)
      groupArray[j] = instance.toObject()
    }
    return groupArray
  }

  private asLoose (def: ContainedFieldSet): ILooseObject {
    return reduceSet<ILooseObject>(def, {
      group: (a: ILooseObject, field: ContainedGroupField) => this.asLooseGroup(a, field),
      simple: (a: ILooseObject, field: ContainedSimpleField) => this.asLooseSimple(a, field),
      component: (a: ILooseObject, field: ContainedComponentField) => this.asLooseComponent(a, field)
    } as ITypeDispatcher<ILooseObject>, def.localAttribute.reduce((a: ILooseObject, sf: ContainedSimpleField) => {
      const def = sf.definition
      const position: number = this.getPosition(def.tag)
      if (position >= 0) {
        a[def.name] = this.toTyped(def)
      }
      return a
    }, {} as ILooseObject))
  }

  private missingRequired (def: ContainedFieldSet, tags: number []): number[] {
    return reduceSet<number[]>(def, {
      group: (a: number[], field: ContainedGroupField) => this.missingGroup(def, field, a),
      simple: (a: number[], field: ContainedSimpleField) => this.missingSimple(field, a),
      component: (a: number[], field: ContainedComponentField) => this.missingComponent(field, a)
    } as ITypeDispatcher<number[]>, tags)
  }

  private missingSimple (sf: ContainedSimpleField, a: number[]) {
    if (sf.required && this.getPosition(sf.definition.tag) < 0) {
      a.push(sf.definition.tag)
    }
  }

  private missingComponent (cf: ContainedComponentField, a: number[]) {
    const view: MsgView = this.getView(cf.name)
    if (view) {
      view.missingRequired(cf.definition, a)
    }
  }

  private missingGroup (def: ContainedFieldSet, gf: ContainedGroupField, tags: number []) {
    const name = gf.definition.noOfField ? gf.definition.noOfField.name : def.name
    const groupView: MsgView = this.getView(name) || this.getView(gf.definition.name)
    if (groupView == null) {
      return
    }
    const count: number = groupView.groupCount()
    for (let j: number = 0; j < count; ++j) {
      const instance: MsgView = groupView.getGroupInstance(j)
      instance.missingRequired(gf.definition, tags)
    }
  }

  private asLooseComponent (a: ILooseObject, cf: ContainedComponentField) {
    const view: MsgView = this.getView(cf.name)
    if (view) {
      const component = view.toObject()
      if (component) {
        a[cf.definition.name] = component
      }
    }
  }

  private asLooseSimple (a: ILooseObject, sf: ContainedSimpleField) {
    const def = sf.definition
    const position: number = this.getPosition(def.tag)
    if (position >= 0) {
      const asSimple: any = this.toTyped(def)
      if (asSimple != null) { // beware, may be false value
        a[sf.name] = asSimple
      }
    }
  }

  private asLooseGroup (a: ILooseObject, gf: ContainedGroupField) {
    const def = gf.definition
    const name = def.noOfField ? def.noOfField.name : def.name
    const instances: ILooseObject = this.asInstances(name) || this.asInstances(def.name)
    if (instances) {
      a[def.name] = instances
    }
  }

  private binarySearch (tag: number): number {
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
    const tags: Tags = structure.tags
    const count: number = segment.endPosition - segment.startPosition
    const simple: Dictionary<SimpleFieldDefinition> = tags.definitions.simple

    for (let i: number = segment.startPosition; i <= segment.endPosition; ++i) {
      const tagPos: TagPos = tags.tagPos[i]
      const field: SimpleFieldDefinition = simple.get(tagPos.tag.toString())
      const val: string = this.getString(tagPos.tag)
      const token = getToken(field, val, i, count, tagPos)
      buffer.writeString(token)
    }

    return buffer.toString()
  }
}
