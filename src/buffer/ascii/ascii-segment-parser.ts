import { SegmentDescription } from '../segment/segment-description'
import { Structure } from '../structure'
import { Tags } from '../tag/tags'
import {
  FixDefinitions,
  MessageDefinition
} from '../../dictionary/definition'
import {
  ContainedComponentField,
  ContainedGroupField,
  ContainedSimpleField,
  ContainedFieldType
} from '../../dictionary/contained'
import { inject, injectable } from 'tsyringe'
import { DITokens } from '../../runtime/di-tokens'
import { SegmentType } from '../segment/segment-type'
import { AsciiParserError } from './ascii-segment-parser-error'
import { AsciiSegmentParserSummary } from './ascii-segment-parser-summary'
import { TagIndex } from './tag-index'

// this takes linear time i.e. it constantly makes forward progress
// one tag at a time

@injectable()
export class AsciiSegmentParser {
  constructor (@inject(DITokens.Definitions) public readonly definitions: FixDefinitions) {
  }

  public parse (msgType: string, tags: Tags, last: number): Structure | null {
    // completed segments in that they are fully parsed
    const segments: SegmentDescription[] = []
    const msgDefinition: MessageDefinition | undefined = this.definitions.message.get(msgType)
    if (!msgDefinition) {
      return null
    }
    // in process of being discovered and may have any amount of depth
    // i.e. a component containing a repeated group of components
    // with sub-groups of components
    const structureStack: SegmentDescription[] = []
    let currentTagPosition: number = 0
    let peek: SegmentDescription

    // track depth-1 components that have been exited for fragmentation detection
    const exitedDepth1Components: Set<string> = new Set()
    const fragmentedComponents: Set<string> = new Set()

    // having finished one segments keep unwinding until tag matches further up stack
    function unwind (tag: number): void {
      while (structureStack.length > 1) {
        const done = structureStack.pop()
        if (!done) continue
        done.end(segments.length, currentTagPosition - 1, tags.tagPos[currentTagPosition - 1].tag)
        segments.push(done)

        // track when we exit depth-1 components for fragmentation detection
        if (done.depth === 1 && done.name) {
          exitedDepth1Components.add(done.name)
        }

        peek = structureStack[structureStack.length - 1]
        if (peek.set?.containedTag[tag]) {
          // unwound to point this tag lives in this set.
          break
        }
        if (peek.type === SegmentType.Msg) {
          // this is unknown tag and it is not part of trailer so raise unknown
          break
        }
      }
    }

    function summarise (): AsciiSegmentParserSummary {
      return <AsciiSegmentParserSummary>{
        msgType,
        tags: tags.clone().tagPos,
        last,
        msgDefinition: msgDefinition?.toString(),
        currentTagPosition,
        peek: peek.toString(),
        segments: segments.map(s => s.toString()),
        structureStack: structureStack.map(s => s.toString())
      }
    }

    function examine (tag: number): SegmentDescription | null {
      let structure: SegmentDescription | null = null
      const currentField = peek.currentField
      if (!currentField) return null
      switch (currentField.type) {
        case ContainedFieldType.Simple: {
          const sf: ContainedSimpleField = currentField as ContainedSimpleField
          if (sf.definition.tag === tag) {
            currentTagPosition = currentTagPosition + 1
          }
          break
        }
        // moving deeper into structure, start a new context
        case ContainedFieldType.Component: {
          const cf: ContainedComponentField = currentField as ContainedComponentField
          // detect fragmentation: re-entering a depth-1 component we already exited
          if (structureStack.length === 1 && exitedDepth1Components.has(cf.name)) {
            fragmentedComponents.add(cf.name)
          }
          structure = new SegmentDescription(cf.name, tag, cf.definition,
            currentTagPosition, structureStack.length, SegmentType.Component)
          break
        }
        // for a group also need to know where all delimiters are positioned
        case ContainedFieldType.Group: {
          const gf: ContainedComponentField = currentField as ContainedGroupField
          structure = new SegmentDescription(gf.name, tag, gf.definition,
            currentTagPosition, structureStack.length, SegmentType.Group)
          currentTagPosition = currentTagPosition + 1
          structure.startGroup(tags.tagPos[currentTagPosition].tag)
          break
        }

        default: {
          const c = summarise()
          throw new AsciiParserError(`examine unknown type for tag = ${tag}`, c)
        }
      }
      return structure
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
      segments.push(gap)
      currentTagPosition++
    }

    function discover (): void {
      while (currentTagPosition <= last) {
        const tag: number = tags.tagPos[currentTagPosition].tag
        peek = structureStack[structureStack.length - 1]
        peek.setCurrentField(tag)
        if (!peek.set?.containedTag[tag] || groupDelimiter(tag)) {
          // unravelled all way back to root hence this is not recognised
          const unknown = peek.type === SegmentType.Msg
          if (unknown) {
            gap(tag)
          } else if (structureStack.length > 1) {
            // move back up the segments and save the finished group / component
            unwind(tag)
          }
          continue
        }
        if (!peek.currentField || !peek.set) {
          throw new AsciiParserError(`discover no currentField or set for tag = ${tag}`, summarise())
        }
        const structure = examine(tag)
        if (structure) {
          structureStack.push(structure)
        }
      }
    }

    function clean (): void {
      // any remainder components can be closed.
      while (structureStack.length > 0) {
        const done = structureStack.pop()
        if (!done) continue
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

    function fragments (): void {
      // only build SegmentViews for components detected as fragmented during discover
      // non-fragmented components use their position ranges directly (zero overhead)
      if (fragmentedComponents.size === 0) return
      const ti = new TagIndex(msgDefinition!, tags, last + 1)
      const seen: Set<string> = new Set()
      for (let i = 1; i < segments.length - 1; i++) {
        const seg = segments[i]
        if (seg.depth !== 1) continue
        if (!seg.name) continue
        if (seg.segmentView) continue
        if (seen.has(seg.name)) continue
        if (!fragmentedComponents.has(seg.name)) continue
        if (ti.isComponentGroupWrapper(seg.name)) continue
        const v = ti.getInstance(seg.name)
        if (!v) continue
        seen.add(seg.name)
        seg.addSegmentView(v)
      }
    }

    const msgStructure = new SegmentDescription(msgDefinition.name, tags.tagPos[0].tag, msgDefinition,
      currentTagPosition, structureStack.length, SegmentType.Msg)
    structureStack.push(msgStructure)
    discover()
    clean()
    fragments()

    // now know where all components and groups are positioned within message
    return new Structure(tags, segments)
  }
}
