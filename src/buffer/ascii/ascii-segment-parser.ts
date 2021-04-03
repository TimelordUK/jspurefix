import {
  ContainedComponentField,
  ContainedFieldType,
  ContainedGroupField,
  ContainedSimpleField,
  FixDefinitions,
  MessageDefinition
} from '../..'
import { SegmentDescription, SegmentType } from '../segment-description'
import { Structure } from '../structure'
import { Tags } from '../tags'
import { MsgTag } from '../../types'

export class AsciiSegmentParser {

  constructor (public readonly definitions: FixDefinitions) {
  }

  public parse (msgType: string, tags: Tags, last: number): Structure {
    const segments: SegmentDescription[] = []
    const msgDefinition: MessageDefinition = this.definitions.message.get(msgType)
    if (!msgDefinition) {
      return null
    }
    const structureStack: SegmentDescription[] = []
    let currentTagPosition: number = 0
    let peek: SegmentDescription

    // having finished one segments keep unwinding until tag matches further up stack
    function unwind (tag: number): void {
      while (structureStack.length > 1) {
        const done: SegmentDescription = structureStack.pop()
        done.end(segments.length, currentTagPosition - 1, tags.tagPos[currentTagPosition - 1].tag)
        segments[segments.length] = done
        peek = structureStack[structureStack.length - 1]
        if (peek.set.containedTag[tag]) {
          // unwound to point this tag lives in this set.
          break
        }
        if (peek.type === SegmentType.Msg) {
          // this is unknown tag and it is not part of trailer so raise unknown
          break
        }
      }
    }

    function examine (tag: number): void {
      switch (peek.currentField.type) {

        case ContainedFieldType.Simple: {
          const sf: ContainedSimpleField = peek.currentField as ContainedSimpleField
          if (sf.definition.tag === tag) {
            currentTagPosition = currentTagPosition + 1
          }
          break
        }
        // moving deeper into structure, start a new context
        case ContainedFieldType.Component: {
          const cf: ContainedComponentField = peek.currentField as ContainedComponentField
          structureStack[structureStack.length] = new SegmentDescription(cf.name, tag, cf.definition,
                        currentTagPosition, structureStack.length, SegmentType.Component)
          break
        }

        case ContainedFieldType.Group: {
          const gf: ContainedComponentField = peek.currentField as ContainedGroupField
          const structure: SegmentDescription = new SegmentDescription(gf.name, tag, gf.definition,
                        currentTagPosition, structureStack.length, SegmentType.Group)
          structureStack[structureStack.length] = structure
          currentTagPosition = currentTagPosition + 1
          structure.startGroup(tags.tagPos[currentTagPosition].tag)
          break
        }

        default:
          throw new Error(`unknown tag type ${tag}`)
      }
    }

    function groupDelimiter (tag: number): boolean {
      let delimiter: boolean = false
      if (tag === peek.delimiterTag) {
        peek.addDelimiterPosition(currentTagPosition)
      } else if (structureStack.length > 1) {
                // if a group is represented by a repeated component, then the tag representing delimiter
                // needs to be added further up stack to group itself.
        delimiter = structureStack[structureStack.length - 2].groupAddDelimiter(tag, currentTagPosition)
      }
      return delimiter
    }

    function gap (tag: number): void {
      const gap = new SegmentDescription('.undefined', tag, peek.set,
        currentTagPosition, structureStack.length, SegmentType.Gap)
      gap.end(segments.length, currentTagPosition, tag)
      segments[segments.length] = gap
      currentTagPosition++
    }

    function discover (): void {
      while (currentTagPosition <= last) {
        const tag: number = tags.tagPos[currentTagPosition].tag
        peek = structureStack[structureStack.length - 1]
        peek.setCurrentField(tag)
        if (!peek.set.containedTag[tag] || groupDelimiter(tag)) {
          const unknown = peek.type === SegmentType.Msg && tag !== MsgTag.CheckSum
          if (unknown) {
            gap(tag)
          } else if (structureStack.length > 1) {
            // move back up the segments and save the finished group / component
            unwind(tag)
          }
          continue
        }
        examine(tag)
      }
    }

    function clean (): void {
      // any remainder components can be closed.
      while (structureStack.length > 0) {
        const done: SegmentDescription = structureStack.pop()
        done.end(segments.length, currentTagPosition - 1, tags.tagPos[currentTagPosition - 1].tag)
        segments[segments.length] = done
      }
      // logically reverse the trailer and message so trailer is last in list.
      const m1 = segments.length - 1
      const m2 = segments.length - 2
      const tmp = segments[m1]
      segments[m1] = segments[m2]
      segments[m2] = tmp
    }

    structureStack[structureStack.length] = new SegmentDescription(msgDefinition.name, tags.tagPos[0].tag, msgDefinition,
      currentTagPosition, structureStack.length, SegmentType.Msg)
    discover()
    clean()

    return new Structure(tags, segments)
  }
}
