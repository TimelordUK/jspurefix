import { Tags } from '../tag/tags'
import { FixDefinitions, MessageDefinition } from '../../dictionary/definition'
import { ElasticBuffer } from '../elastic-buffer'
import { ParseState } from './parse-state'
import { inject, injectable } from 'tsyringe'
import { DITokens } from '../../runtime/di-tokens'

@injectable()
export class AsciiParserState {
  public message: MessageDefinition | undefined
  public locations: Tags
  public parseState: ParseState
  public bodyLen: number
  public checksumExpectedPos: number
  public tagStartPos: number
  public equalPos: number
  public valueEndPos: number
  public count: number
  public currentTag: number
  public rawDataLen: number
  public rawDataRead: number
  public definitions: FixDefinitions
  public msgType: string | null

  constructor (@inject(DITokens.ParseBuffer) public readonly elasticBuffer: ElasticBuffer) {
  }

  public beginTag (pos: number): void {
    this.parseState = ParseState.ParsingTag
    this.tagStartPos = pos
    this.equalPos = this.valueEndPos = -1
    this.currentTag = 0
  }

  public endTag (pos: number): void {
    this.equalPos = pos
    const state = this.parseState
    switch (state) {
      case ParseState.ParsingTag: {
        this.currentTag = this.elasticBuffer.getWholeNumber(this.tagStartPos, pos - 1)
        break
      }

      default:
        throw new Error(`EndTag: unexpected state ${state}`)
    }
    // if a raw tag, then need length to skip that many bytes
    this.checkRawTag()
  }

  public incRaw (): boolean {
    ++this.rawDataRead
    return this.rawDataRead === this.rawDataLen + 1
  }

  public checkRawTag (): void {
    const msg = this.message
    if (!msg?.containsRaw) {
      // optimisation as will never hit raw data
      this.parseState = ParseState.ParsingValue
      return
    }
    // if this is a raw data tag then need to keep track of the length
    // on this field to skip that many bytes.
    const isDataLength: boolean = msg.containedLength[this.currentTag]
    if (isDataLength) {
      this.parseState = ParseState.ParsingRawDataLength
    } else {
      this.rawDataRead = 0
      const isData: boolean = this.rawDataLen > 0
      if (isData) {
        this.parseState = ParseState.ParsingRawData
      } else {
        this.parseState = ParseState.ParsingValue
      }
    }
  }

  public store (): void {
    const valueEndPos: number = this.elasticBuffer.getPos() - 1
    this.valueEndPos = valueEndPos
    const equalPos: number = this.equalPos
    const tag: number = this.currentTag
    const locations: Tags = this.locations
    const buffer = this.elasticBuffer
    const terminates = this.checksumExpectedPos

    switch (this.parseState) {
      case ParseState.ParsingValue:
      case ParseState.ParsingRawData: {
        this.rawDataLen = 0
        locations.store(equalPos + 1, valueEndPos - equalPos - 1, tag)
        break
      }

      case ParseState.ParsingRawDataLength: {
        this.rawDataLen = buffer.getWholeNumber(equalPos + 1, valueEndPos - 1)
        locations.store(equalPos + 1, valueEndPos - equalPos - 1, tag)
        break
      }
    }

    this.parseState = ParseState.BeginField
    this.count++
    const nextTagPos = locations.nextTagPos

    switch (tag) {
      case Tags.BeginString: {
        if (nextTagPos !== 1) {
          throw new Error(`BeginString: not expected at position [${nextTagPos}]`)
        }
        break
      }

      case Tags.BodyLengthTag: {
        if (nextTagPos !== 2) {
          throw new Error(`BodyLengthTag: not expected at position [${nextTagPos}]`)
        }
        this.bodyLen = buffer.getWholeNumber(equalPos + 1, valueEndPos - 1)
        this.checksumExpectedPos = this.bodyLen + valueEndPos
        this.elasticBuffer.checkGrowBuffer(this.bodyLen)
        break
      }

      case Tags.MsgTag: {
        if (nextTagPos !== 3) {
          throw new Error(`MsgTag: not expected at position [${nextTagPos}]`)
        }
        this.msgType = buffer.getString(equalPos + 1, valueEndPos)
        this.message = this.definitions.message.get(this.msgType)
        break
      }

      case Tags.CheckSumTag: {
        if (valueEndPos < this.bodyLen) {
          throw new Error(`CheckSumTag: [${valueEndPos}] expected after ${this.bodyLen}`)
        }
        this.parseState = ParseState.MsgComplete
        break
      }

      default: {
        if (terminates && valueEndPos > terminates) {
          throw new Error(`Tag: [${tag}] cant be after ${terminates}`)
        }
        break
      }
    }

    switch (nextTagPos) {
      case 1: {
        if (tag !== Tags.BeginString) {
          throw new Error(`position 1 [${tag}] must be BeginString: 8=`)
        }
        break
      }
      case 2: {
        if (tag !== Tags.BodyLengthTag) {
          throw new Error(`position 2 [${tag}] must be BodyLengthTag: 9=`)
        }
        break
      }
      case 3: {
        if (tag !== Tags.MsgTag) {
          throw new Error(`position 3 [${tag}] must be MsgTag: 35=`)
        }
        break
      }
    }
  }

  public beginMessage (): void {
    this.elasticBuffer.reset()
    this.locations.reset()
    this.checksumExpectedPos = 0
    this.parseState = ParseState.BeginField
    this.count = 0
    this.currentTag = 0
    this.tagStartPos = 0
    this.valueEndPos = 0
    this.equalPos = 0
    this.rawDataRead = 0
    this.rawDataLen = 0
    this.bodyLen = 0
    this.msgType = null
  }
}
