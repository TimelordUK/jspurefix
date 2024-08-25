import { MsgParser } from '../msg-parser'
import { Tags } from '../tag/tags'
import { SAXStream } from '../../dictionary'
import { FixDefinitions, MessageDefinition } from '../../dictionary/definition'
import {
  ContainedField, ContainedComponentField,
  ContainedFieldType, ContainedGroupField,
  ContainedSimpleField, IContainedSet
} from '../../dictionary/contained'
import { SegmentDescription } from '../segment/segment-description'
import { IJsFixConfig, IJsFixLogger } from '../../config'
import { MsgView } from '../msg-view'
import { Structure } from '../structure'
import { FixmlView } from './fixml-view'
import { Readable } from 'stream'
import { inject, injectable } from 'tsyringe'
import { DITokens } from '../../runtime/di-tokens'
import { ISaxNode } from '../../dictionary/sax-node'
import { SegmentType } from '../segment/segment-type'

@injectable()
export class FiXmlParser extends MsgParser {
  private readonly locations: Tags
  private values: string[] = []
  private readonly saxStream: SAXStream
  private readonly definitions: FixDefinitions
  private readonly segments: SegmentDescription[] = []
  private readonly segmentStack: SegmentDescription[] = []
  private readonly logger: IJsFixLogger
  private last: SegmentDescription | null
  private raw: string | null

  constructor (@inject(DITokens.IJsFixConfig) public readonly config: IJsFixConfig,
    @inject(DITokens.readStream) public readonly readStream: Readable,
    @inject(DITokens.maxMessageLocations) public readonly maxMessageLocations: number = 10 * 1024) {
    super()
    this.definitions = this.config.definitions
    const description = config.description
    const me = description?.application?.name
    this.logger = config.logFactory.logger(`${me}:FiXmlParser`)
    this.saxStream = require('sax').createStream(true, {})
    this.locations = new Tags(maxMessageLocations)
    this.logger.info('subscribe to stream')
    this.subscribe()
  }

  private reset (): void {
    const segments = this.segments
    while (segments.length > 0) {
      segments.pop()
    }
    const stack = this.segmentStack
    this.last = null
    this.raw = null
    this.values = []
    this.locations.reset()
    while (stack.length) {
      stack.pop()
    }
  }

  private subscribe (): void {
    const writeStream = this.saxStream
    const readStream = this.readStream
    const instance = this
    readStream.pipe(writeStream).on('ready', () => {
      this.logger.info('stream close event')
      this.emit('close')
    })
    readStream.on('error', (e) => {
      this.logger.error(e)
      this.emit('error', e)
    })
    readStream.on('end', () => {
      this.logger.info('stream end event')
      this.emit('end')
    })
    writeStream.on('data', (i: Buffer) => {
      if (instance.last) {
        instance.emit('decoded', instance.last.name, i.toString())
      } else {
        this.raw = i.toString()
      }
    })

    writeStream.on('opentag', (node) => {
      const stack = this.segmentStack
      const saxNode: ISaxNode = node as ISaxNode
      switch (saxNode.name) {
        case 'FIXML':
          this.reset()
          break

        case 'Batch': {
          const locations = this.locations
          const ptr = locations.nextTagPos - 1
          const segment: SegmentDescription = new SegmentDescription(saxNode.name,
            -1,
            null,
            ptr,
            stack.length,
            SegmentType.Batch)
          segment.startPosition = 0
          stack.push(segment)
          break
        }

        case 'Hdr': {
          this.hdr(saxNode)
          break
        }

        default: {
          const stack = this.segmentStack
          const isBatch: boolean = stack.length === 1 && stack[0].type === SegmentType.Batch
          const isMsg: boolean = stack.length === 0
          if (isMsg) {
            // one single message
            this.msg(saxNode)
          } else if (isBatch) {
            // one message within a batch or it
            this.msgInBatch(saxNode)
          } else {
            // or it is a structure within a message
            this.element(saxNode)
          }
        }
      }
    })
    writeStream.on('closetag', (name: string) => {
      this.pop(name)
    })
    writeStream.on('error', (e: Error) => {
      this.emit('error', e)
    })
  }

  private hdr (saxNode: ISaxNode): void {
    const stack = this.segmentStack
    if (stack.length === 0) {
      throw new Error(`Hdr not expected before batch or message ${saxNode.name}`)
    }
    const peek: SegmentDescription = stack[stack.length - 1]
    switch (peek.type) {
      case SegmentType.Batch: {
        // manually handle this component
        const hdr = this.definitions.component.get('StandardHeader')
        if (hdr) {
          const segment: SegmentDescription | null = this.parseAttributes(saxNode.name, hdr, saxNode, SegmentType.Component)
          if (segment) {
            this.segmentStack.push(segment)
          }
        }
        break
      }

      case SegmentType.Msg: {
        this.element(saxNode)
        break
      }

      default:
        throw new Error(`Hdr not expected before batch or message ${saxNode.name}`)
    }
  }

  private msgInBatch (saxNode: ISaxNode): void {
    this.logger.info(` ${saxNode.name}: start batch`)
    const locations = this.locations
    const batch = this.segmentStack[0]
    const ptr = locations.nextTagPos
    if (!batch.delimiterPositions) {
      batch.startGroup(-1)
    }
    batch.addDelimiterPosition(ptr)
    this.logger.debug(` ${saxNode.name}: begin parse msg ${batch.delimiterPositions.length} in batch`)
    this.msg(saxNode, true)
  }

  private getView (): MsgView {
    const structure: Structure = new Structure(this.locations, this.segments)
    const last = structure.segments[structure.segments.length - 1]
    return new FixmlView(this.definitions, last, this.values, structure)
  }

  private pop (name: string): SegmentDescription | null {
    const locations = this.locations
    const stack = this.segmentStack
    const segments = this.segments
    while (stack.length > 0) {
      const pop = stack.pop()
      const ptr = locations.nextTagPos - 1
      pop?.end(segments.length, ptr, locations.tagPos[ptr].tag)
      if (pop) {
        segments[segments.length] = pop
        switch (pop.type) {
          case SegmentType.Msg: {
            // raise msg event
            const last = segments[segments.length - 1]
            this.last = last
            this.emit('msg', last.name, this.getView())
            if (this.raw) {
              this.emit('decoded', this.last.name, this.raw)
              this.raw = null
            }
            break
          }
          case SegmentType.Batch: {
            const last = segments[segments.length - 1]
            this.logger.debug(`emit batch with ${pop.delimiterPositions.length} elements`)
            this.emit('batch', last?.set?.abbreviation, this.getView())
            break
          }
        }
        if (pop.name === name) {
          return pop
        }
      }
    }
    return null
  }

  private startGroup (saxNode: ISaxNode, gf: ContainedGroupField): void {
    const locations = this.locations
    const stack: SegmentDescription[] = this.segmentStack
    const ptr = locations.nextTagPos
    const def = gf.definition
    const segment: SegmentDescription | null = this.parseAttributes(saxNode.name, def, saxNode, SegmentType.Component)
    if (segment) {
      const group: SegmentDescription = new SegmentDescription(def.name,
        locations.tagPos[ptr].tag,
        def,
        ptr,
        stack.length,
        SegmentType.Group)
      group.startGroup(locations.tagPos[ptr].tag)
      group.addDelimiterPosition(ptr)
      stack.push(group)
      stack.push(segment)
    }
  }

  private getNextField (saxNode: ISaxNode): ContainedField | null {
    const stack: SegmentDescription[] = this.segmentStack
    while (stack.length > 0) {
      const peek: SegmentDescription = stack[stack.length - 1]
      const field = peek?.set?.localNameToField.get(saxNode.name)
      if (field) {
        return field
      }
      // if this is a group of the same type as already on stack
      // take the field from the next level up
      if (peek.type === SegmentType.Group && stack.length > 1) {
        const contained = stack[stack.length - 2]?.set?.localNameToField.get(saxNode.name)
        if (contained instanceof ContainedGroupField) {
          if (contained.definition.name === peek.name) {
            // this is the same type for next instance in the same group.
            return contained
          }
        }
      }
      // then have ended previous group. Pop and return to see if this field lives on the parent
      const locations = this.locations
      const ptr = locations.nextTagPos - 1
      const pop = stack.pop()
      const segments = this.segments
      if (pop) {
        pop.end(segments.length, ptr, locations.tagPos[ptr].tag)
        segments[segments.length] = pop
      }
    }
    return null
  }

  private dispatch (saxNode: ISaxNode, field: ContainedField): void {
    switch (field.type) {
      case ContainedFieldType.Component: {
        const cf: ContainedComponentField = field as ContainedComponentField
        const segment: SegmentDescription | null = this.parseAttributes(saxNode.name, cf.definition, saxNode, SegmentType.Component)
        if (segment) {
          this.segmentStack.push(segment)
        }
        break
      }

      case ContainedFieldType.Group: {
        this.dispatchGroup(saxNode, field as ContainedGroupField)
        break
      }
    }
  }

  private dispatchGroup (saxNode: ISaxNode, gf: ContainedGroupField): void {
    const stack: SegmentDescription[] = this.segmentStack
    const peek: SegmentDescription = stack[stack.length - 1]
    switch (peek.type) {
      case SegmentType.Msg:
      case SegmentType.Component: {
        this.startGroup(saxNode, gf)
        break
      }

      case SegmentType.Group: {
        if (gf.name === saxNode.name) {
          const ptr = this.locations.nextTagPos
          peek.addDelimiterPosition(ptr)
          const a = this.parseAttributes(saxNode.name, gf.definition, saxNode, SegmentType.Component)
          if (a) {
            stack.push(a)
          }
        } else {
          throw new Error(`expected another group instance of ${gf.name} but got ${saxNode.name}`)
        }
        break
      }

      default:
        throw new Error(`dispatchGroup has field ${gf.name} peek type ${peek.type}`)
    }
  }

  private element (saxNode: ISaxNode): void {
    // may terminate a group and move fields
    const field = this.getNextField(saxNode)
    if (!field) {
      const stack: SegmentDescription[] = this.segmentStack
      const peek: SegmentDescription = stack[stack.length - 1]
      throw new Error(`field ${saxNode.name} not known in set ${peek?.set?.name}`)
    }
    this.dispatch(saxNode, field)
  }

  private msg (saxNode: ISaxNode, inBatch: boolean = false): void {
    this.logger.debug(`${saxNode.name}: begin parse msg`)
    const type: string = saxNode.name
    const def: MessageDefinition | undefined = this.definitions.message.get(type)
    if (!def) {
      throw new Error(`unknown message type ${type}`)
    }
    if (inBatch) {
      const batch = this.segmentStack[0]
      batch.set = def
    }
    const segment: SegmentDescription | null = this.parseAttributes(type, def, saxNode, SegmentType.Msg)
    if (segment) {
      this.segmentStack.push(segment)
    }
  }

  private parseAttributes (name: string, set: IContainedSet, saxNode: ISaxNode, type: SegmentType): SegmentDescription | null {
    const locations = this.locations
    const attributes = saxNode.attributes
    const values = this.values
    let ptr: number
    if (attributes) {
      const keys: string[] = Object.keys(attributes)
      ptr = keys.length > 0 ? locations.nextTagPos : locations.nextTagPos - 1
      for (let j: number = 0; j < keys.length; ++j) {
        const k: string = keys[j]
        const v: string = attributes[k]
        const field: ContainedSimpleField = set.localNameToField.get(k) as ContainedSimpleField
        if (!field) {
          this.logger.warning(`no field ${k} in set ${set.name}`)
          locations.store(j, 1, -1)
        } else {
          locations.store(j, 1, field.definition.tag)
        }
        values[values.length] = v
      }
      return new SegmentDescription(name, locations.tagPos[ptr].tag, set, ptr, this.segmentStack.length, type)
    }
    return null
  }
}
