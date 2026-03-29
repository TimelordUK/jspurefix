import { IContainedSet } from '../../dictionary/contained'
import { SegmentView } from '../segment/segment-view'
import { TagPos } from '../tag/tag-pos'
import { Tags } from '../tag/tags'

export interface TagSpan {
  start: number
  end: number
}

export class TagIndex {
  private readonly sortedTagPos: TagPos[]
  private readonly tagSpans: Map<number, TagSpan> = new Map()
  private readonly componentGroupWrappers: Set<string> = new Set()
  private readonly cache: Map<string, SegmentView | null> = new Map()

  constructor (
    public readonly set: IContainedSet,
    tags: Tags,
    count: number) {
    this.sortedTagPos = new Array(count)
    for (let i = 0; i < count; i++) {
      this.sortedTagPos[i] = tags.tagPos[i]
    }
    this.sortedTagPos.sort(TagPos.compare)
    this.populateTagSpans()
    this.calcGroups(tags, count)
  }

  private populateTagSpans (): void {
    for (let i = 0; i < this.sortedTagPos.length; i++) {
      const t = this.sortedTagPos[i]
      const existing = this.tagSpans.get(t.tag)
      if (existing) {
        existing.end = i
      } else {
        this.tagSpans.set(t.tag, { start: i, end: i })
      }
    }
  }

  private calcGroups (tags: Tags, count: number): void {
    for (let i = 0; i < count; i++) {
      const tag = tags.tagPos[i]
      const field = this.set.tagToField[tag.tag]
      if (!field) continue
      // detect component group wrappers (single-field components containing a group)
      const component = this.findParentComponent(tag.tag)
      if (component) {
        const componentSet = this.set.components.get(component)
        if (componentSet && componentSet.fields.length === 1) {
          this.componentGroupWrappers.add(component)
        }
      }
    }
  }

  private findParentComponent (tag: number): string | null {
    for (const [name, componentSet] of this.set.components) {
      if (componentSet.containedTag[tag]) {
        return name
      }
    }
    return null
  }

  public getInstance (name: string): SegmentView | null {
    const cached = this.cache.get(name)
    if (cached !== undefined) {
      return cached
    }

    const componentSet = this.set.components.get(name)
    if (!componentSet) {
      this.cache.set(name, null)
      return null
    }

    const view = new SegmentView(name, componentSet)
    const flatTags = componentSet.flattenedTag
    for (let x = 0; x < flatTags.length; x++) {
      const t = flatTags[x]
      const span = this.tagSpans.get(t)
      if (!span) continue
      if (span.start === span.end) {
        view.add(this.sortedTagPos[span.start])
      } else {
        for (let j = span.start; j <= span.end; j++) {
          view.add(this.sortedTagPos[j])
        }
      }
    }

    this.cache.set(name, view)
    return view
  }

  public isComponentGroupWrapper (name: string): boolean {
    return this.componentGroupWrappers.has(name)
  }
}
