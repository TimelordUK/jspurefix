import { IContainedSet } from '../../dictionary/contained'
import { TagPos } from '../tag/tag-pos'

export class SegmentView {
  public endTag: number = 0
  public endPosition: number = Number.MIN_SAFE_INTEGER
  public startPosition: number = Number.MAX_SAFE_INTEGER
  public startTag: number = 0
  public readonly tags: TagPos[] = []

  constructor (
    public readonly name: string,
    public readonly set: IContainedSet) {
  }

  public add (tag: TagPos): void {
    if (tag.position < this.startPosition) {
      this.startPosition = tag.position
      this.startTag = tag.tag
    }
    if (tag.position > this.endPosition) {
      this.endPosition = tag.position
      this.endTag = tag.tag
    }
    // clone the TagPos to avoid mutation when Tags array is reused
    this.tags.push(tag.clone())
  }
}
