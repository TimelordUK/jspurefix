import { ILooseObject } from '../collections/collection'
import { SegmentDescription } from './segment/segment-description'
import { SegmentSummary } from './segment/segment-summary'
import { Tags } from './tag/tags'

export class Structure {
  public readonly layout: ILooseObject

  constructor (public readonly tags: Tags,
    public readonly segments: SegmentDescription[]) {
    this.layout = this.boundLayout()
  }

  public msg (): SegmentDescription {
    // trailer = -1, msg = -2
    return this.segments[this.segments.length - 2]
  }

  public summary (): SegmentSummary[] {
    return this.segments.map((s: SegmentDescription) => SegmentSummary.fromDescription(s))
  }

  public firstContainedWithin (name: string, segment: SegmentDescription): SegmentDescription | null {
    const all: SegmentDescription | SegmentDescription[] = this.layout[name]
    if (!all) {
      return null
    }
    let ret: SegmentDescription | null = null
    if (!Array.isArray(all)) {
      const instance: SegmentDescription = all
      ret = segment.contains(instance) ? instance : null
    } else {
      for (const instance of all) {
        ret = segment.contains(instance) ? instance : null
        if (ret) {
          break
        }
      }
    }
    return ret
  }

  public boundLayout (segment?: SegmentDescription): ILooseObject {
    return this.segments.reduce((a: ILooseObject, current: SegmentDescription) => {
      if (segment && !segment.contains(current)) {
        return a
      }
      const name: string = current.name
      const member: SegmentDescription | SegmentDescription[] = a[name]
      if (!member) {
        a[name] = current
      } else {
        if (!Array.isArray(member)) {
          a[name] = [member, current]
        } else {
          member[member.length] = current
        }
      }
      return a
    }, {})
  }
}
