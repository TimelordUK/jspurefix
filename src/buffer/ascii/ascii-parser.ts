import { AsciiChars } from './ascii-chars'
import { AsciiView } from './ascii-view'
import { AsciiSegmentParser } from './ascii-segment-parser'
import { AsciiParserState } from './ascii-parser-state'
import { Structure } from '../structure'
import { Tags } from '../tag/tags'
import { MsgParser } from '../msg-parser'
import { MsgView } from '../msg-view'
import { Readable } from 'stream'
import { ElasticBuffer } from '../elastic-buffer'
import { SegmentDescription } from '../segment/segment-description'
import { ParseState } from './parse-state'
import { IJsFixConfig } from '../../config/js-fix-config'
import { inject, injectable } from 'tsyringe'
import { DITokens } from '../../runtime/di-tokens'
import { SegmentType } from '../segment/segment-type'
import { AsciiParserError } from './ascii-segment-parser-error'

@injectable()
export class AsciiParser extends MsgParser {
  private static nextId: number = 0
  public readonly id: number
  public readonly state: AsciiParserState
  private readonly segmentParser: AsciiSegmentParser
  public readonly delimiter: number
  public readonly writeDelimiter: number

  // allocate enough in receive buffer so buffer does not constant resize back after large messages
  // want to keep one slice of memory and constantly reuse it

  constructor (@inject(DITokens.IJsFixConfig) public readonly config: IJsFixConfig,
    @inject(DITokens.readStream) public readonly readStream: Readable | null,
    @inject(DITokens.ParseBuffer) protected readonly receivingBuffer: ElasticBuffer) {
    super()

    this.delimiter = config.delimiter ?? AsciiChars.Soh
    this.writeDelimiter = config.logDelimiter ?? AsciiChars.Pipe
    this.id = AsciiParser.nextId++
    this.segmentParser = config.sessionContainer.resolve<AsciiSegmentParser>(AsciiSegmentParser)
    this.state = config.sessionContainer.resolve<AsciiParserState>(AsciiParserState)
    this.state.locations = new Tags(this.receivingBuffer.size / 10)
    this.state.definitions = this.config.definitions
    this.state.beginMessage()
    if (readStream !== null) {
      this.subscribe()
    }
  }

  private subscribe (): void {
    const inst: AsciiParser = this
    const Writable = require('stream').Writable
    const stream = this.readStream

    const receiver = new Writable({
      write: (data: Buffer, _: any, done: Function) => {
        try {
          inst.parse(data, data.length)
          done()
        } catch (e) {
          done(e)
        }
      }
    })
    receiver.on('error', (e: Error) => {
      this.emit('error', e)
    })

    // receive from say a socket or file and pipe to parser which discovers messages
    stream?.pipe(receiver).on('finish', () => {
      this.emit('done')
    })
    stream?.on('error', (e) => {
      this.emit('error', e)
    })
    stream?.on('end', () => {
      this.emit('end')
    })
  }

  private msg (ptr: number): void {
    const receivingBuffer: ElasticBuffer = this.receivingBuffer
    const state = this.state
    if (this.listeners('decoded')) {
      this.emit('decoded', state.msgType, receivingBuffer, ptr)
    }
    this.emit('msg', state.msgType, this.getView(ptr))
    state.beginMessage()
  }

  /**
   * useful helper for testing where characters are parsed as if from the transport
   * @param text to be parsed
   */
  public parseText (text: string): void {
    const buff = Buffer.from(text)
    this.parse(buff, buff.length)
  }

  private parse (readBuffer: Buffer, end: number): void {
    const state = this.state
    const eq: number = AsciiChars.Eq
    const zero: number = AsciiChars.Zero
    const nine: number = AsciiChars.Nine
    const delimiter: number = this.delimiter
    const writeDelimiter: number = this.writeDelimiter
    const receivingBuffer: ElasticBuffer = this.receivingBuffer
    const switchDelimiter = writeDelimiter !== delimiter
    let readPtr: number = 0

    while (readPtr < end) {
      const charAtPos: number = readBuffer[readPtr]

      const writePtr = receivingBuffer.saveChar(charAtPos) - 1
      switch (state.parseState) {
        case ParseState.MsgComplete: {
          this.msg(writePtr)
          continue
        }

        case ParseState.BeginField: {
          const atDigit: boolean = charAtPos >= zero && charAtPos <= nine
          if (atDigit) {
            state.beginTag(writePtr)
          }
          break
        }

        case ParseState.ParsingTag: {
          const isEquals: boolean = charAtPos === eq
          if (isEquals) {
            state.endTag(writePtr)
          }
          break
        }

        case ParseState.ParsingRawData: {
          // keep skipping until length read, regardless of delimiter or not
          if (state.incRaw()) {
            // having consumed the raw field expecting delimiter
            if (charAtPos === delimiter) {
              if (switchDelimiter) {
                receivingBuffer.switchChar(writeDelimiter)
              }
              state.store()
            } else {
              throw new Error(`delimiter (${delimiter}) expected at position ${readPtr} when value is ${charAtPos}`)
            }
          }
          break
        }

        case ParseState.ParsingRawDataLength:
        case ParseState.ParsingValue: {
          if (charAtPos === delimiter) {
            if (switchDelimiter) {
              receivingBuffer.switchChar(writeDelimiter)
            }
            state.store()
          }
          break
        }

        default: {
          const st = state.parseState
          throw new Error(`fix parser in unknown state ${st}`)
        }
      }
      readPtr++
    }

    switch (state.parseState) {
      case ParseState.MsgComplete: {
        this.msg(receivingBuffer.getPos())
        break
      }
    }
  }

  private getView (ptr: number): MsgView | null {
    const state = this.state
    const locations = state.locations
    const source = this.receivingBuffer
    const delimiter = this.delimiter
    const definitions = this.config.definitions
    const replace = this.writeDelimiter
    const msgType = state.msgType ?? null
    if (!msgType) return null
    if (state.message) {
      try {
        const structure: Structure | null = this.segmentParser.parse(msgType, locations,
          locations.nextTagPos - 1)
        if (!structure) return null
        return new AsciiView(definitions, structure.msg(),
          source,
          structure,
          ptr,
          delimiter,
          replace)
      } catch (error) {
        if (error instanceof AsciiParserError) {
          error.summary.buffer = source.toString()
          this.emit('error', error)
        }
        throw error
      }
    }

    const structure = new Structure(locations, [])
    const segment = new SegmentDescription('unknown', locations.tagPos[0].tag, null, 0, 1, SegmentType.Unknown)
    segment.endPosition = locations.nextTagPos - 1
    return new AsciiView(this.config.definitions, segment, source, structure, ptr, delimiter, replace)
  }
}
