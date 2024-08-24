import { INumericKeyed } from '../../collections/collection'
import { ContainedField, IContainedSet } from '../../dictionary/contained'
import { GroupFieldDefinition } from '../../dictionary/definition'
import { SegmentType } from './segment-type'
import { ElasticBuffer } from '../elastic-buffer'

export class SegmentDescription {
  public index: number
  public endTag: number = 0
  public endPosition: number = 0
  public delimiterTag: number = 0
  public delimiterPositions: number[]
  public currentField: ContainedField | null
  public containedDelimiterPositions: INumericKeyed<boolean>

  constructor (
    public name: string,
    public startTag: number,
    public set: IContainedSet | null,
    public startPosition: number,
    public readonly depth: number,
    public readonly type: SegmentType) {
  }

  public toString (): String {
    const buffer = new ElasticBuffer()
    buffer.writeString(`name = ${this.name}, `)
    buffer.writeString(`startTag = ${this.startTag}, `)
    buffer.writeString(`startPosition = ${this.startPosition}, `)
    buffer.writeString(`type = ${this.type}, `)
    buffer.writeString(`depth = ${this.depth}, `)
    buffer.writeString(`index = ${this.index}, `)
    buffer.writeString(`endTag = ${this.endTag}, `)
    buffer.writeString(`endPosition = ${this.endPosition}, `)
    buffer.writeString(`delimiterTag = ${this.delimiterTag}, `)
    buffer.writeString(`delimiterPositions = ${this.delimiterPositions}, `)
    buffer.writeString(`currentField = ${this.currentField}, `)
    buffer.writeString(`set = ${this.set?.keys()}`)
    return buffer.toString()
  }

  public contains (segment: SegmentDescription): boolean {
    return segment.startPosition >= this.startPosition && segment.endPosition <= this.endPosition
  }

  public getInstance (instance: number): SegmentDescription | null {
    const delimiters: number[] = this.delimiterPositions
    if (!delimiters) {
      return null
    }
    if (instance < 0 || instance >= delimiters.length) {
      return null
    }
    const start: number = delimiters[instance]
    const end: number = instance < delimiters.length - 1
      ? delimiters[instance + 1] - 1
      : this.endPosition
    const name: string = this.type === SegmentType.Batch ? this.set?.abbreviation ?? this.name : this.name ?? this.name ?? 'na'
    const d: SegmentDescription = new SegmentDescription(name, this.startTag, this.set, start, this.depth, this.type)
    d.endPosition = end
    d.endTag = this.endTag
    return d
  }

  public startGroup (tag: number): void {
    this.delimiterTag = tag
    this.delimiterPositions = []
    this.containedDelimiterPositions = {}
  }

  public addDelimiterPosition (position: number): boolean {
    if (this.containedDelimiterPositions[position]) {
      return false
    }
    this.delimiterPositions[this.delimiterPositions.length] = position
    this.containedDelimiterPositions[position] = true
    return true
  }

  public setCurrentField (tag: number): void {
    this.currentField = this.set?.localTag[tag] ?? this.set?.tagToField[tag] ?? null
  }

  public groupAddDelimiter (tag: number, position: number): boolean {
    let delimiter: boolean = false
    if (this.set instanceof GroupFieldDefinition) {
      if (this.delimiterTag && tag === this.delimiterTag) {
        delimiter = this.addDelimiterPosition(position)
      }
    }
    return delimiter
  }

  public end (i: number, pos: number, endTag: number): void {
    this.index = i
    this.currentField = null
    this.endPosition = pos
    this.endTag = endTag
  }
}
